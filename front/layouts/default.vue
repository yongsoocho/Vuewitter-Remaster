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
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{profile}}</v-icon> my page
					</v-btn>
				<v-btn 
					   text
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						{{message}}</v-icon> messages
					</v-btn>
				<v-btn text
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
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
		<v-col cols="12" md="3">
			<v-container v-if="user">
				<LoginForm></LoginForm>
			</v-container>
			<v-container v-if="user">
				<LogoutForm></LogoutForm>
			</v-container>
		</v-col>
		<v-col cols="12" md="6">
			<v-container>
				<Nuxt />
			</v-container>
		</v-col>
		<v-col cols="12" md="3">
			<v-container>
				<v-card>
					친구 추천 광고
				</v-card>
			</v-container>
		</v-col>
	</v-row>
</v-app>
</template>

<script>
	import LoginForm from "~/components/LoginForm"
	import LogoutForm from "~/components/LogoutForm"
	
export default {
	data(){
		return{
			profile:'mdi-account-circle-outline',
			message:'mdi-message-outline',
			signup:'mdi-account-plus-outline',
			login:'mdi-login',
			logout:'mdi-logout',
			user:true,
		}
	},
	components:{
		LoginForm,
		LogoutForm
	}
}
</script>

<style scoped>
	#link {
		text-decoration:none;
	}
</style>