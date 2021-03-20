<template>
<v-card>
	<v-card-title>
			<v-avatar
					  color="warning lighten-2"
					  size="48"
					  >
				<v-img
					   src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
					   >
				</v-img>
			</v-avatar>
			
			<span
				  :style="{ marginLeft:'10px', fontSize:'25px' }"
				  >Hi! User
			</span>
	</v-card-title>
	<v-card-subtitle>
		<v-container>
			<span
				  :style="{ fontSize:'18px', marginTop:'10px' }"
				  >Hey! What's up!</span>
		</v-container>
	</v-card-subtitle>
	
	<v-container>
		<v-divider></v-divider>
	</v-container>
	
	<v-card-text>
		<v-btn-toggle
					  color="blue"
					  borderless="true"
					  dense
					  >
			<v-btn
				   text
				   >
				<span
					  class="blue--text"
					  >Tweets</span>
				<span>100</span>
			</v-btn>
			<v-btn
				   text
				   >
				<span
					  class="blue--text"
					  >Following</span>
				<span>923</span>
			</v-btn>
			<v-btn
				   text
				   >
				<span
					  class="blue--text"
					  >Followers</span>
				<span>120</span>
			</v-btn>
		</v-btn-toggle>
	</v-card-text>
	
	<v-container>
		<v-divider></v-divider>
	</v-container>
</v-card>
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

<style>
	h1{
	}
</style>