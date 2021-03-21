<template>
<div>
	<PostTweet v-if="me"></PostTweet>
	<Tweets v-for="post in mainPosts" :key="post.id" :post="post" :me="me"></Tweets>
</div>
</template>

<script>
	import Tweets from "~/components/Tweets"
	import PostTweet from "~/components/PostTweet"
	
export default {
	data(){
		return{
			msg:'Hello Nuxt'
		}
	},
	components:{
		Tweets,
		PostTweet,
	},
	computed:{
		me() {
			return this.$store.state.users.me;
		},
		mainPosts() {
			return this.$store.state.posts.mainPosts;
		}
	}
}
</script>

<style>

</style>