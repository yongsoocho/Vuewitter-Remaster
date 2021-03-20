<template>
<div>
	<v-card
			v-for="tweet in Tweet" :key="tweet.id"
			:style="{ marginBottom:'30px' }"
			>
		<v-card-title>
			<v-avatar
					  color="warning lighten-2"
					  size="48"
					  >
				<v-img
					   src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
					   >
				</v-img>
			</v-avatar>
			<span
				  :style="{ marginLeft:'10px', fontSize:'25px' }"
				  >
				{{tweet.name}}
			</span>
		</v-card-title>
		
		<v-container>
			<v-divider></v-divider>
		</v-container>
		
		<v-card-text>
			{{tweet.content}}
		</v-card-text>
		
		<v-container>
			<v-card-actions>
				<v-bottom-navigation
									 color="blue"
									 grow
									 >
					<v-btn>
						<v-icon
								large
								color="blue"
								>mdi-share-all-outline</v-icon>
					</v-btn>
					<v-btn>
						<v-icon
								large
								color="blue"
								>mdi-heart-outline</v-icon>
					</v-btn>
					<v-btn>
						<v-icon
								large
								color="blue"
								>mdi-comment-multiple-outline</v-icon>
					</v-btn>
					<v-btn>
						<v-icon
								large
								color="blue"
								>mdi-dots-horizontal-circle-outline</v-icon>
					</v-btn>
				</v-bottom-navigation>
			</v-card-actions>
		</v-container>
	</v-card>
</div>
</template>

<script>
export default {
	data(){
		return{
			Tweet: [
				{
					id:1,
					name:'yongsoo',
					content:'asdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasd'
				},
				{
					id:2,
					name:'duboo',
					content:'asdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasd'
				},
				{
					id:3,
					name:'berry',
					content:'asdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasd'
				},
				{
					id:4,
					name:'apple',
					content:'asdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasd'
				},
				{
					id:5,
					name:'bananan',
					content:'asdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasdasdfasdfasdfasdfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfasfasdfasd'
				}
			]
		}
	}
}
</script>

<style>

</style>