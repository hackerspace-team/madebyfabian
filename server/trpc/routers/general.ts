import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { graphQLClient, gql } from '@/server/utils/graphQLClient'

export const generalRouter = router({
	allSettings: publicProcedure.query(async () => {
		const query = gql(/* GraphQL */ `
			query AllSettings {
				allSettings {
					generalSettingsTitle
					generalSettingsDescription
				}
			}
		`)

		return graphQLClient.request(query)
	}),

	singleMenu: publicProcedure.input(z.object({ menuId: z.string() })).query(async ({ input }) => {
		const query = gql(/* GraphQL */ `
			query SingleMenu($id: ID!) {
				menu(id: $id, idType: ID) {
					id
					name
					menuItems {
						edges {
							node {
								id
								label
								order
								uri
								target
							}
						}
					}
				}
			}
		`)

		return graphQLClient.request(query, { id: input.menuId })
	}),

	listPosts: publicProcedure.query(async () => {
		const query = gql(/* GraphQL */ `
			query ListPosts {
				posts {
					nodes {
						id
						title
						dateGmt
						slug
						excerpt(format: RAW)
						featuredImage {
							node {
								id
								sourceUrl
								altText
							}
						}
						tags {
							edges {
								node {
									id
									name
								}
							}
						}
						author {
							node {
								name
							}
						}
					}
				}
			}
		`)

		return graphQLClient.request(query)
	}),
})