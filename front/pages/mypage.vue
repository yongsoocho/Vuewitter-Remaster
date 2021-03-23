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
	
	<FollowForm :FollowList="FollowingList" :FollowType="FollowingType" :style="{ marginBottom:'10px' }"></FollowForm>
	<FollowForm :FollowList="FollowersList" :FollowType="FollowersType" :style="{ marginBottom:'10px' }"></FollowForm>
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
		}
	},
	methods: {
		onEditProfileImg() {
			return console.log('hi');
		},
		onEditProfileName() {
			return console.log('bye');
		}
	},
	middleware: ['authenticated']
}
</script>

<style scoped>

</style>