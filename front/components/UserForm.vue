<template>
<v-card>
	<v-card-title>
		<v-badge
				 avatar
				 bordered
				 overlap
				 color="green accent-3"
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
			  >Hi! {{me.name}}
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
	
	<v-container>
		<v-row>
			<v-col cols="4" lg="12" xl="4">
				<div class="Link" @click="onClickMyPage">
					<span class="blue--text" :style="{ display:'block', fontSize:'25px', fontWeigth:'700' }">Tweets</span>
					<span class="black--text" :style="{ display:'block', fontSize:'20px', fontWeigth:'400' }">123</span>
				</div>
			</v-col>
			<v-col cols="4" lg="12" xl="4">
				<div class="Link" @click="onClickMyPage">
					<span class="blue--text" :style="{ display:'block', fontSize:'25px', fontWeigth:'700' }">Followers</span>
					<span class="black--text" :style="{ display:'block', fontSize:'20px', fontWeigth:'400' }">789</span>
				</div>
			</v-col>
			<v-col cols="4" lg="12" xl="4">
				<div class="Link" @click="onClickMyPage">
					<span class="blue--text" :style="{ display:'block', fontSize:'25px', fontWeigth:'700' }">Following</span>
					<span class="black--text" :style="{ display:'block', fontSize:'20px', fontWeigth:'400' }">456</span>
				</div>
			</v-col>
		</v-row>
	</v-container>
	
	<v-container>
		<v-divider></v-divider>
	</v-container>
	
	<v-card-actions>
		<v-btn
			   dark
			   color="blue lighten-1"
			   :style="{ width:'100%', margin:'5px 0px' }"
			   @click="onLogOut"
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
	methods: {
		onLogOut() {
			this.$store.dispatch('users/logOut', {});
		},
		onClickMyPage() {
			return this.$router.push({
				path:'/mypage'
			})
		},
	},
	computed: {
		me() {
			return this.$store.state.users.me;
		}
	}
}
</script>

<style scoped>
	.Link {
		display:flex;
		align-items:center;
		flex-direction:column;
		border-radius:10px;
	}
	.Link:hover {
		background-color:rgba(0, 0, 150, 0.1);
		cursor:pointer;
	}
</style>