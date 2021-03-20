<template>
<div>
	<PostTweet></PostTweet>
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
	}
}
</script>

<style>

</style>