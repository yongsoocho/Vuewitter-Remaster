<template>
<div>
	<PostTweet v-if="me"></PostTweet>
	<Tweet></Tweet>
</div>
</template>

<script>
	import Tweet from "~/components/Tweet"
	import PostTweet from "~/components/PostTweet"
	
export default {
	data(){
		return{
			msg:'Hello Nuxt'
		}
	},
	components:{
		Tweet,
		PostTweet,
	},
	computed:{
		me() {
			return this.$store.state.users.me;
		}
	}
}
</script>

<style>

</style>