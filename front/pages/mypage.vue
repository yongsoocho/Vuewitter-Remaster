<template>
<div>
	<v-card :style="{ marginBottom:'30px' }">
		<v-card-title>
			<v-avatar
					  color="teal"
					  size="144"
					  :style="{ position:'relative' }"
					  >
				<v-img
					   src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
					   >
				</v-img>
			</v-avatar>
			<v-btn
				   rounded
				   color="white"
				   :style="{ position:'absolute', left:'110px', top:'10px' }"
				   >
				<v-icon>mdi-cog</v-icon>
			</v-btn>
			<v-form
					:style="{ display:'flex', alignItems:'center', marginLeft:'30px', }"
					>
				<v-text-field
							  clearable
							  placeholder="me name"
							  prefix="Edit name"
							  color="blue"
							  :style="{ display:'block' }"
							 >
				</v-text-field>
				<v-btn 
					   text 
					   fab
					   color="blue"
					   :style="{ display:'block' }"
					   @click="onEditProfileName"
					   >
					<v-icon>mdi-pencil</v-icon>
				</v-btn>
			</v-form>
		</v-card-title>
		
		<v-container>
			<v-divider></v-divider>
		</v-container>
	</v-card>
	
	<v-card :style="{ marginBottom:'10px' }">
		<FollowForm
					:FollowList="FollowingList"
					:FollowType="FollowingType"
					>
		</FollowForm>
		<v-card-actions>
			<v-btn v-if="hasMoreFollowing" dark color="blue" :style="{ width:'100%' }" @click.stop="onLoadFollowing">More</v-btn>
		</v-card-actions>
	</v-card>
	<v-card :style="{ marginBottom:'10px' }">
		<FollowForm
					:FollowList="FollowersList"
					:FollowType="FollowersType"
					>
		</FollowForm>
		<v-card-actions>
			<v-btn v-if="hasMoreFollowers" dark color="blue" :style="{ width:'100%' }" @click.stop="onLoadFollowers">More</v-btn>
		</v-card-actions>
	</v-card>
</div>
</template>

<script>
	import FollowForm from "~/components/FollowForm"
	
export default {
	data(){
		return{
			FollowingType: {
				title:'Following'
			},
			FollowersType: {
				title:'Followers'
			}
		}
	},
	components: {
		FollowForm,
	},
	computed: {
		me() {
			return this.$store.state.users.me;
		},
		FollowersList() {
			return this.$store.state.users.FollowersList;
		},
		FollowingList() {
			return this.$store.state.users.FollowingList;
		},
		hasMoreFollowers() {
			return this.$store.state.users.hasMoreFollowers;
		},
		hasMoreFollowing() {
			return this.$store.state.users.hasMoreFollowing;
		}
	},
	fetch({ store }){
		store.dispatch('users/loadFollowers');
		return store.dispatch('users/loadFollowing');
	},
	methods: {
		onEditProfileImg() {
			return console.log('hi');
		},
		onEditProfileName() {
			return console.log('bye');
		},
		onLoadFollowing() {
			return this.$store.dispatch('users/loadFollowing');
		},
		onLoadFollowers() {
			return this.$store.dispatch('users/loadFollowers');
		},
	},
	middleware: ['authenticated']
}
</script>

<style scoped>

</style>