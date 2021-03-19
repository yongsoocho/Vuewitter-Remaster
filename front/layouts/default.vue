<template>
<v-app>
	<div>
		<v-toolbar dense dark color="blue">
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>
				<NuxtLink id="link" to="/">Vuewitter Remaster</NuxtLink>
			</v-toolbar-title>
			
			<v-spacer></v-spacer>
			
			<v-toolbar-items>
				<v-text-field></v-text-field>
			</v-toolbar-items>
		</v-toolbar>
	</div>
	<Nuxt />
</v-app>
</template>

<script>
export default {
	data(){
		return{
			msg:'Hello Nuxt'
		}
	},
}
</script>

<style scoped>
	#link {
		text-decoration:none;
	}
</style>