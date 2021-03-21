<template>
<div>
	<FollowForm :Following="FollowerList" :style="{ marginBottom:'10px' }"></FollowForm>
	<FollowForm :Followers="FollowersList" :style="{ marginBottom:'10px' }"></FollowForm>
</div>
</template>

<script>
	import FollowForm from "~/components/FollowForm"
	
export default {
	data(){
		return{
			FollowerList:[
				{
					id:1,
					name:'ab'
				},
				{
					id:2,
					name:'asdf'
				},
				{
					id:3,
					name:'fd'
				},
				{
					id:4,
					name:'xcv'
				},
				{
					id:5,
					name:'as'
				}
			],
			FollowersList:[
				{
					id:1,
					name:'qwer'
				},
				{
					id:2,
					name:'ewr'
				},
				{
					id:3,
					name:'qwer'
				},
				{
					id:4,
					name:'ter'
				},
				{
					id:5,
					name:'yrty'
				}
			]
		}
	},
	components:{
		FollowForm,
	}
}
</script>

<style>

</style>