<template>
<v-card>
	<v-card-title>
		<v-badge
				 avatar
				 bordered
				 overlap
				 color="green accent-2"
				 >
			<v-avatar
					  color="warning lighten-2"
					  size="48"
					  >
				<v-img
					   src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
					   >
				</v-img>
			</v-avatar>
		</v-badge>
		
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
		<v-container>
			<v-btn-toggle
						  color="blue"
						  :borderless=true
						  >
				<v-btn
					   text
					   >
					<div>
						<span
							  class="blue--text"
							  :style="{ display:'block', fontSize:'16px' }"
						  >Tweets</span>
						<span
							  :style="{ display:'block', marginTop:'5px', fontSize:'20px' }"
							  >100</span>
					</div>
				</v-btn>
				<v-btn
					   text
					   >
					<div>
						<span
							  class="blue--text"
							  :style="{ display:'block', fontSize:'16px' }"
							  >Following</span>
						<span
							  :style="{ display:'block', marginTop:'5px', fontSize:'20px' }"
							  >923</span>
					</div>
				</v-btn>
				<v-btn
					   text
					   >
					<div>		
						<span
							  class="blue--text"
							  :style="{ display:'block', fontSize:'16px' }"
							  >Followers</span>
						<span
							  :style="{ display:'block', marginTop:'5px', fontSize:'20px' }"
							  >120</span>
					</div>
				</v-btn>
			</v-btn-toggle>
		</v-container>
	</v-card-text>
	
	<v-container>
		<v-divider></v-divider>
	</v-container>
	
	<v-card-actions>
		<v-btn
				   dark
				   color="blue lighten-1"
				   :style="{ width:'100%', margin:'5px 0px' }"
				   >
			Log out
		</v-btn>
	</v-card-actions>
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