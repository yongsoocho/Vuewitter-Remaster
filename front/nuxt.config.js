export default {
	server:{
		port:3000,
		host:'0.0.0.0'
	},
	head:{
		title:'Vuewitter-Remaster'
	},
	buildModules: [
		'@nuxtjs/vuetify'
	],
	modules: [
		'@nuxtjs/axios'
	],
	css: [
		'~/assets/main.css'
	],
	layoutTransition: {
		name: 'my-layouts',
		mode: 'out-in'
	},
	axios: {
		baseURL: 'https://vuewitter-remaster-123.run.goorm.io:8000'
	}
}