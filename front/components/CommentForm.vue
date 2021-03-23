<template>
<div>
	<v-form ref="form" v-model="valid" @submit.prevent="onSubmitComment">
		<v-card>
			<v-card-title>
				Comments
				<v-btn
					   fab
					   text
					   :style="{ position:'absolute', right:'20px' }"
					   @click="onCommentsToggle"
					   >
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-actions>
				<v-container>
					<v-textarea
								v-model="content"
								auto-grow
								label="Comments"
								filled
								clearable
								>
					</v-textarea>
				</v-container>
				<v-btn
					   color="blue"
					   dark
					   type="submit"
					   >
					Post
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-form>
	<v-card flat>
		<v-card v-for="p in post.comments" :key="post.id" max-width="600" flat>
			<v-container>
				<v-divider></v-divider>
				<v-card-title>
					<v-avatar color="blue" size="36" :style="{ marginRight:'10px' }">
					</v-avatar>
					{{p.author}}
				</v-card-title>
				<v-card-text>
					{{p.comment}}
				</v-card-text>
			</v-container>
		</v-card>
	</v-card>
</div>
</template>

<script>
export default {
	props:{
		post: {
			type: Object,
			required: true
		},
	},
	data() {
		return {
			valid:false,
			content:'',
			
		}
	},
	computed:{
		me() {
			return this.$store.state.users.me;
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
		},
		onCommentsToggle() {
			this.$emit('onCommentsToggle');
		}
	}
}
</script>

<style>

</style>