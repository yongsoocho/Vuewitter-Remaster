<template>
<v-app>
	<div>
		<v-toolbar dense dark color="blue">
			<v-app-bar-nav-icon
								@click.stop="drawer = !drawer"
								></v-app-bar-nav-icon>
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
						mdi-home-outline</v-icon> home
					</v-btn>
				<v-btn 
					   text
					   nuxt
					   to="/mypage"
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   v-if="me"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						mdi-account-circle-outline</v-icon> my page
					</v-btn>
				<v-btn 
					   text
					   nuxt
					   to="/messages"
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   v-if="me"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						mdi-message-outline</v-icon> messages
					</v-btn>
				<v-btn text
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   nuxt
					   to="/signup"
					   v-if="!me"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						mdi-account-plus-outline</v-icon> sign up
					</v-btn>
				<v-btn text
					   :style="{ margin:'0px 10px', display: 'flex', alignItems: 'center' }"
					   v-if="me"
					   @click="onLogOut"
					   >
					<v-icon
							:style="{ marginRight:'5px' }"
							>
						mdi-logout</v-icon> Log out
					</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		
		<v-navigation-drawer
							 fixed
							 temporary
							 v-model="drawer"
							 width="350"
							 >
			<v-list-item>
				<v-list-item-avatar
									size="48"
									>
					<v-img
						   src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
						   >
					</v-img>
				</v-list-item-avatar>
			</v-list-item>
			<v-list-item>
				<v-list-content>
					<v-list-item-title
									   :style="{ fontSize:'20px' }"
									   >
						Cho yongsoo
					</v-list-item-title>
					<v-list-item-subtitle>
						yongsoocho@naver.com
					</v-list-item-subtitle>
				</v-list-content>
			</v-list-item>
			
			<v-container>
				<v-divider></v-divider>
			</v-container>
			
			<v-list-item-group>
				<v-list-item
							 v-for="option in Option" :key="option.id"
							 color="blue"
							 >
					<v-list-item-icon>
						<v-icon>{{option.icon}}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						{{option.content}}
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-navigation-drawer>
	</div>
	
	<v-row>
		<v-col cols="12" lg="3">
			<v-container v-if="!me">
				<LoginForm></LoginForm>
			</v-container>
			<v-container v-if="me">
				<UserForm></UserForm>
			</v-container>
				<v-container v-if="me">
				<WhoToFollow></WhoToFollow>
			</v-container>
		</v-col>
		<v-col cols="12" lg="6">
			<v-container>
				<Nuxt />
			</v-container>
		</v-col>
		<v-col cols="12" lg="3">
			<v-container>
				<News></News>
			</v-container>
		</v-col>
	</v-row>
	
	<v-row>
		<v-col cols="12">
			<v-footer color="primary lighten-1" padless>
				<v-row>
					<v-col 
						   cols="12"
						   :style="{ display:'flex', justifyContent:'center' }"
						   >
						<div>
							<v-btn-toggle 
										  borderless
										  background-color="primary lighten-1"
										  dark
										  >
								<v-btn text><v-icon>mdi-facebook</v-icon></v-btn>
								<v-btn text><v-icon>mdi-instagram</v-icon></v-btn>
								<v-btn text><v-icon>mdi-snapchat</v-icon></v-btn>
							</v-btn-toggle>
						</div>
					</v-col>
					<v-col cols="12">
						<v-card 
								flat
								tile
								class="primary lighten-1 text-center"
								>
							<v-card-text class="white--text">
								Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							</v-card-text>
						</v-card>
					</v-col>
					
					<v-divider>
					</v-divider>
					
					<v-col cols="12">
						<v-card
								flat
								tile
								class="primary lighten-3 text-center"
								>
							<v-card-text class="white--text">
								{{ Year }} — <strong>Vue Vuetify Nuxt Express Node.js</strong>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-footer>
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
			drawer: false,
			Option:[
				{
					id:1,
					icon:'mdi-facebook',
					content:'Facebook'
				},
				{
					id:2,
					icon:'mdi-instagram',
					content:'Instagram'
				},
				{
					id:3,
					icon:'mdi-snapchat',
					content:'Snapchat'
				},
			],
			Year : new Date().getFullYear(),
			dialog: false,
		}
	},
	components:{
		LoginForm,
		UserForm,
		WhoToFollow,
		News
	},
	computed: {
		me() {
			return this.$store.state.users.me;
		}
    },
	methods: {
		onLogOut() {
			this.$store.dispatch('users/logOut', {})
		}
	}
}
</script>

<style scoped>
	#link {
		text-decoration:none;
	}
</style>