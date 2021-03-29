module.exports = {
	server:{
		port: process.env.PORT || 3000
	},
	head:{
		title:'Vuewitter-Remaster',
		meta: [{
			name: 'description',
			content: 'yong.s testing twitter',
		}, {
			name: 'og:title',
			content: 'Vuewitter'
		}, {
			name: 'og:image',
			content: 'Url'
		}]
	},
	buildModules: [
		'@nuxtjs/vuetify',
		'@nuxtjs/moment'
	],
	moment: {
		// locales: ['ko'],
	},
	modules: [
		'@nuxtjs/axios'
	],
	build: {
		analyze: true,
		extend(config, { isClient, isServer, isDev }) {
			if(isServer && !isDev) {
				config.devtool = 'hidden-source-map';
			}
			console.log('webpack', config, isServer, isClient);
		}
	},
	css: [
		'~/assets/main.css'
	],
	layoutTransition: {
		name: 'my-layouts',
		mode: 'out-in'
	},
	axios: {
		https: false,
		baseURL:'https://vuewitterexpressmongo.run.goorm.io',
		browserBaseURL:'https://vuewitterexpressmongo.run.goorm.io',
	}
}