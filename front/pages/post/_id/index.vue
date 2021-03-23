<template>
<div>
	<v-card v-if="post">
		<v-card-title>
			<v-avatar color="blue" size="100" :style="{ marginRight:'10px' }"></v-avatar>
			<span>{{post.author.name}}</span>
		</v-card-title>
		<v-card-subtitle>
			<span :style="{ marginTop:'5px' }">{{post.createAt}}</span>
		</v-card-subtitle>
		<v-divider></v-divider>
		<v-card-text>
			{{post.content}}
		</v-card-text>
		<v-card flat>
			<v-form ref="form" v-model="valid" @submit.prevent="onSubmitComment">
				<v-container>
					<v-divider></v-divider>
					<v-textarea
								 v-model="content"
								 auto-grow
								 label="Comments"
								 filled
								 clearable
								 :rules="commentRules"
								 ></v-textarea>
					<v-btn
						   color="blue"
						   dark
						   type="submit"
						   >
						Post
					</v-btn>
				</v-container>
			</v-form>
		</v-card>
		<v-card flat>
			<v-card v-for="p in post.comments" :key="post.id" max-width="600" flat>
				<v-container>
					<v-divider></v-divider>
					<v-card-title>
						<v-avatar color="blue" size="36" :style="{ marginRight:'10px' }">
						</v-avatar>
						<span>{{p.author}}</span> 
					</v-card-title>
					<v-card-subtitle>
						<span :style="{ marginTop:'5px' }">{{p.createAt}}</span>
					</v-card-subtitle>
					<v-card-text>
						{{p.comment}}
					</v-card-text>
				</v-container>
			</v-card>
		</v-card>
	</v-card>
	
	<v-card v-else>
		<v-card-text>
			404 NOT FOUND
		</v-card-text>
	</v-card>
</div>
</template>

<script>
export default {
	data() {
		return {
			valid:false,
			commentRules:[
				v => !!v || 'Comment is required'
			],
			content:''
		}
	},
	computed:{
		post() {
			return this.$store.state.posts.mainPosts.find(v => v.id === parseInt(this.$route.params.id));
		}
	},
	methods:{
		onSubmitComment() {
			if(this.$refs.form.validate()) {
				this.$store.dispatch('posts/addComment', {
					content:this.content,
					author: 'Test',
					postId: this.post.id,
				})
				.then(() => {
					this.$refs.form.reset()
				})
				.catch((err) => {
					console.log(err);
				})
			}
		}
	}
}
</script>

<style>

</style>