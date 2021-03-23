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
	data() {
		return{
			msg:'Hello Nuxt'
		}
	},
	components: {
		Tweets,
		PostTweet,
	},
	computed: {
		me() {
			return this.$store.state.users.me;
		},
		mainPosts() {
			return this.$store.state.posts.mainPosts;
		},
		hasMorePost() {
			return this.$store.state.posts.hasMorePost;
		}
	},
	fetch({ store }) {
		store.dispatch('posts/loadPosts');
	},
	mounted() { 
		window.addEventListener('scroll', this.onInfiniteSrolling)
			// window.scrollY = 'height from top of scrollbar'
			// document.documentElement.clientHeight = 'height of scrollbar'
			// document.documentElement.scrollHeight = 'entire page height'
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onInfiniteSrolling)
	},
	methods: {
		onInfiniteSrolling() {
			if(document.documentElement.scrollHeight < document.documentElement.clientHeight + window.scrollY + 500) {
				if(this.hasMorePost) {
					return this.$store.dispatch('posts/loadPosts')
				}
			}
		},
	},
	
}
</script>

<style>

</style>