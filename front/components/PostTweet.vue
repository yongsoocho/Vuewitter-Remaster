<template>
<div>
	<v-form ref="form" v-model="valid" @submit.prevent="onPostTweet">
		<v-card
				:style="{ marginBottom:'30px' }"
				>
			<v-card-title>
				<span
					  :style="{ fontSize:'30px' }"
					  >
					Add a post
				</span>
				<v-btn
					   color="blue"
					   fab
					   outlined
					   :style="{ margin:'0px 20px' }"
					   >
					<v-icon>mdi-image-multiple-outline</v-icon>
				</v-btn>
			</v-card-title>

			<v-container>
				<v-textarea
							clearable
							outlined
							counter
							placeholder="What's happening?"
							height="100"
							:rules="tweetRules"
							v-model='content'
							>
				</v-textarea>
			</v-container>
			<v-card-actions>
				<v-btn
					   color="blue"
					   rounded
					   outlined
					   :style="{ marginBottom:'10px' }"
					   type="submit"
					   >
					Tweet
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-form>
</div>
</template>

<script>
export default {
	data() {
		return {
			tweetRules: [
				v => !!v || 'Text is required'
			],
			valid:false,
			content:''
		}
	},
	methods: {
		onPostTweet() {
			if(this.$refs.form.validate()){
				this.$store.dispatch('posts/addMainPosts', {
					id: Math.round(Math.random()*10000),
					content: this.content,
					author: this.me,
					image:{},
					createAt: new Date(),
					updateAt: new Date(),
				})
				.then(() => {
					this.$refs.form.reset();
				})
				.catch((err) => {
					console.log(err);
				})
			}else{
				this.$refs.form.reset();
			}
		}
	},
	computed: {
		me() {
			return this.$store.state.users.me;
		},
	}
}
</script>

<style>
</style>