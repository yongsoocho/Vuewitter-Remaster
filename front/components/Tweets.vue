<template>
<div>
	<v-card :style="{ marginBottom:'30px' }">
		<v-card-title>
			<v-avatar
					  @click="onRouteAuthor"
					  color="warning lighten-2"
					  size="48"
					  >
				<v-img
					   src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
					   >
				</v-img>
			</v-avatar>
			<span
				  @click="onRouteAuthor"
				  :style="{ marginLeft:'10px', fontSize:'25px' }"
				  >
				{{post.author.name}}
			</span>
		</v-card-title>
		<v-card-subtitle>
			{{post.createAt}}
		</v-card-subtitle>
		
		<v-container>
			<v-divider></v-divider>
		</v-container>
		
		<v-card-text @click="onRouteTweetPage">
			{{post.content}}
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
					<v-menu
							min-width="600"
							max-height="400"
							max-width="600"
							v-model="menu"
							top
							:close-on-click="false"
							:close-on-content-click="false"
							offset-y
							nudge-top="30"
							>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								   v-bind="attrs"
								   v-on="on"
								   >
								<v-icon
										large
										color="blue"
										>mdi-comment-multiple-outline</v-icon>
							</v-btn>
						</template>
						<CommentForm @onCommentsToggle="menu = false" :post="post"></CommentForm>
					</v-menu>
					<v-menu v-if="true">	
						<template v-slot:activator="{ on, attrs }">
							<v-btn>
								<v-icon
										large
										color="blue"
										v-bind="attrs"
            							v-on="on"
										>mdi-dots-horizontal-circle-outline</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item @click="onEditTweet()" :style="{ justifyContent:'center' }">
								<div>					
									<v-btn dark text color="green">Edit</v-btn>
								</div>
							</v-list-item>
							<v-list-item @click="onDeleteTweet()" :style="{ justifyContent:'center' }">
								<div>
									<v-btn dark text color="red">Delete</v-btn>
								</div>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-bottom-navigation>
			</v-card-actions>
		</v-container>
	</v-card>
</div>
</template>

<script>
	import CommentForm from "~/components/CommentForm"
	
export default {
	props: {
		post: {
			type: Object,
			required: true
		},
	},
	data(){
		return{
			menu:false
		}
	},
	computed: {
		mainPosts() {
			return this.$store.state.posts.mainPosts;
		},
	},
	methods: {
		onDeleteTweet() {
			this.$store.dispatch('posts/removeMainPosts', {
				id: this.post.id
			})
			.then(() => {
				return;
			})
			.catch((err) => {
				console.log(err);
			});
		},
		onRouteTweetPage() {
			return this.$router.push({
				path:`/post/${this.post.id}`
			})
		},
		onRouteAuthor() {
			console.log('hi');
			return this.$router.push({
				path:`/user/${this.post.author.id}`
			})
		},
	},
	components:{
		CommentForm,
	}
}
</script>

<style>

</style>