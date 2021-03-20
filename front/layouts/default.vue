<template>
<v-app>
	<div>
		<v-toolbar dense dark color="blue">
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>
				<NuxtLink id="link" to="/" :style="{ display: 'flex', alignItems: 'center', margin:'0px 5px' }" class="white--text">
					<v-icon :style="{ marginRight:'10px' }">mdi-twitter</v-icon>
					Vuewitter Remaster
				</NuxtLink>
			</v-toolbar-title>
			
			<v-spacer></v-spacer>
			
			<v-toolbar-items>
				<v-text-field 
							  prepend-inner-icon="mdi-magnify" 
							  :style="{ width:'250px', marginTop:'5px' }"
							  clearable
							  label="Search Vuewitter"
							  single-line
							  >
				</v-text-field>
				<v-btn 
					   text
					   nuxt
					   to="/"
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{home}}</v-icon> home
					</v-btn>
				<v-btn 
					   text
					   nuxt
					   to="/mypage"
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{profile}}</v-icon> my page
					</v-btn>
				<v-btn 
					   text
					   nuxt
					   to="/messages"
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{messages}}</v-icon> messages
					</v-btn>
				<v-btn text
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   nuxt
					   to="/signup"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{signup}}</v-icon> sign up
					</v-btn>
				<v-btn text
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{login}}</v-icon> Log in
					</v-btn>
				<v-btn text
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{logout}}</v-icon> Log out
					</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
	
	<v-row>
		<v-col cols="12" xl="3">
			<v-container v-if="user">
				<LoginForm></LoginForm>
			</v-container>
			<v-container v-if="user">
				<UserForm></UserForm>
			</v-container>
				<v-container v-if="user">
				<WhoToFollow></WhoToFollow>
			</v-container>
		</v-col>
		<v-col cols="12" xl="6">
			<v-container>
				<Nuxt />
			</v-container>
		</v-col>
		<v-col cols="12" xl="3">
			<v-container>
				<News></News>
			</v-container>
		</v-col>
	</v-row>
</v-app>
</template>

<script>
	import LoginForm from "~/components/LoginForm"
	import UserForm from "~/components/UserForm"
	import WhoToFollow from "~/components/WhoToFollow"
	import News from "~/components/News"
	
export default {
	data(){
		return{
			profile:'mdi-account-circle-outline',
			messages:'mdi-message-outline',
			signup:'mdi-account-plus-outline',
			login:'mdi-login',
			logout:'mdi-logout',
			home:'mdi-home-outline',
			user:true,
		}
	},
	components:{
		LoginForm,
		UserForm,
		WhoToFollow,
		News
	}
}
</script>

<style scoped>
	#link {
		text-decoration:none;
	}
</style>