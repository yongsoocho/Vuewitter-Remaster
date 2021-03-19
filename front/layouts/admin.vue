<template>
<div>
	<NuxtLink to="/">Home</NuxtLink>
	<NuxtLink to="/profile">Profile</NuxtLink>
	<NuxtLink to="/signup">SignUp</NuxtLink>
	<NuxtLink to="/admin">Admin</NuxtLink>
	<NuxtLink to="/setting">Setting</NuxtLink>
	<Nuxt />
</div>
</template>

<script>
export default {
	data(){
		return{
			msg:'Hello Nuxt'
		}
	}
}
</script>

<style>

</style>