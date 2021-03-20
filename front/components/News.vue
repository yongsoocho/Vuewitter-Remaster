<template>
<v-card>
	<v-card-title
				  :style="{ fontSize:'30px' }"
				  >
		News
	</v-card-title>
	
	<div
		 v-for="news in News" :key="news.id"
		 :style="{ position:'relative' }"
		 >
		<v-container>
			<v-divider></v-divider>
		</v-container>

		<v-container>
			<v-avatar
					  color="warning lighten-2"
					  rounded
					  size="52"
					  >
				<v-img
					   src="https://ventsmagazine.com/wp-content/uploads/2021/02/naews.jpg"
					   >
				</v-img>
			</v-avatar>
			<span
				 :style="{ fontSize:'20px', marginLeft:'10px', verticalAlign:'sub' }" 
				  >
				{{news.topic}}
			</span>
			
			<v-btn
				   depressed
				   rounded
				   color="blue"
				   outlined
				   :style="{ position:'absolute', right:'20px', marginTop:'10px' }"
					>
				See More
			</v-btn>
		</v-container>
	</div>
</v-card>
</template>

<script>
export default {
	data(){
		return{
			News:[
				{
					topic:`Let's get it`,
					id:1
				},
				{
					topic:`I got a feeling`,
					id:2
				},
				{
					topic:`Rollin Rollin ~`,
					id:3
				},
			]
		}
	},
}
</script>

<style>

</style>