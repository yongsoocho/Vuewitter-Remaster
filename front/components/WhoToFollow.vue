<template>
<v-card>
	<v-card-title
				  :style="{ fontSize:'30px' }"
				  >
		<span>Who To Follow</span>
	</v-card-title>
	
	<div
		 v-for="user in User" :key="user.id"
		 :style="{ position:'relative' }"
		 >
		<v-container>
			<v-divider></v-divider>
		</v-container>

		<v-card-text>
			<v-avatar
					  color="warning lighten-2"
					  size="36"
					  >
				<v-img
					   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"
					   >
				</v-img>
			</v-avatar>
			<span
				 :style="{ fontSize:'20px', marginLeft:'10px', verticalAlign:'sub' }" 
				  >
				{{user.name}}
			</span>
			<v-btn
				   depressed
				   rounded
				   color="blue"
				   outlined
				   :style="{ position:'absolute', right:'20px' }"
				   >
				Follow
			</v-btn>
		</v-card-text>
	</div>
</v-card>
</template>

<script>
export default {
	data(){
		return{
			User: [
				{
					id:1,
					name:'yongsoo'
				},
				{
					id:2,
					name:'duboo'
				}
			]
		}
	},
}
</script>

<style>

</style>