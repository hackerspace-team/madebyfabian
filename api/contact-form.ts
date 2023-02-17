import { createSSRApp, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { z } from 'zod'
import xss from 'xss'
import { fetch } from 'ofetch'

export const config = {
	runtime: 'edge',
}

// copy from graphQlClient.ts
import { GraphQLClient } from 'graphql-request'
import { graphql as gql } from '../graphql'
const gqlHost = process.env.NUXT_GQL_HOST || ''
const gqlToken = process.env.NUXT_GQL_TOKEN || ''
const graphQLClient = new GraphQLClient(gqlHost, {
	headers: {
		authorization: gqlToken,
	},
})

const renderBody = async ({ name, email, message }: { name: string; email: string; message: string }) => {
	const ssrInput = createSSRApp({
		setup() {
			const getMessage = () => {
				message = message.replace(/\n/g, '<br />')
				message = xss(message)
				return message
			}

			const input = reactive({
				name,
				email,
				message: getMessage(),
			})

			return { input }
		},
		template: `<div class="email" :class="{ 'dynamic': true }">
				<ul>
					<li v-for="(value, key) in input" :key="key">
						<div>{{ key }}: </div>
						<div style="{ font-weight: bold; }" v-html="value"></div>
					</li>
				</ul>
			</div>`,
	})

	return ((await renderToString(ssrInput)) || undefined) as any
}

const verifyTurnstileToken = async (token: string) => {
	const endpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
	const res = await fetch(endpoint, {
		method: 'POST',
		body: `secret=${encodeURIComponent(process.env.NUXT_TURNSTILE_SECRET_KEY || '')}&response=${encodeURIComponent(
			token
		)}`,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
	})
	const json = await res.json()
	return json
}

const getContactFormEmail = async () => {
	const query = gql(/* GraphQL */ `
		query AdminEmail {
			allSettings {
				generalSettingsEmail
			}
		}
	`)
	return graphQLClient.request(query)
}

const sendEmail = async ({
	contactFormEmail,
	input,
	body,
}: {
	contactFormEmail: string
	input: ValidRequestInput
	body: string
}) => {
	const admin = `Admin <${contactFormEmail}>`
	const mutation = gql(/* GraphQL */ `
		mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				sent
				message
			}
		}
	`)

	return graphQLClient.request(mutation, {
		input: {
			to: admin,
			from: admin,
			replyTo: `${input.name} <${input.email}>`,
			subject: 'New contact form request!',
			body: body,
		},
	})
}

const parseInput = ({ input }: { input: any }) => {
	const schema = z.object({
		name: z.string(),
		email: z.string(),
		message: z.string(),
		turnstileToken: z.string(),
	})
	return schema.parse(input)
}

type ValidRequestInput = ReturnType<typeof parseInput>

export default async function handler(request: Request) {
	try {
		const input = parseInput({ input: request.body })

		const validationResponse = await verifyTurnstileToken(input.turnstileToken)
		if (!validationResponse.success)
			return new Response(JSON.stringify({ error: 'Failed to verify the captcha token.' }), {
				status: 401,
				headers: { 'Content-Type': 'application/json' },
			})

		const contactFormEmailRes = await getContactFormEmail()
		const contactFormEmail = contactFormEmailRes.allSettings?.generalSettingsEmail
		if (!contactFormEmail) throw new Error('Failed to get the receivers email adress from wp.')

		const renderedBody = await renderBody({
			name: input.name,
			email: input.email,
			message: input.message,
		})
		if (!renderedBody) throw new Error('Failed to render the email body.')

		const sendEmailRes = await sendEmail({
			contactFormEmail,
			input,
			body: renderedBody,
		})
		if (!sendEmailRes?.sendEmail?.sent) throw new Error('Failed to send the email.')

		return new Response(JSON.stringify({ data: 'Email sent.' }), {
			headers: { 'Content-Type': 'application/json' },
		})
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to verify the captcha token.' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
