export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client'],
	typescript: {
		shim: false,
	},
	runtimeConfig: {
		public: {
			GQL_HOST: process.env.GQL_HOST,
		},
	},
	'graphql-client': {
		/**
		 * @see https://github.com/Diizzayy/nuxt-graphql-client/issues/298
		 * We had to disable the codegen, so this is a temporary replacement.
		 */
		codegen: false,
	},
})
