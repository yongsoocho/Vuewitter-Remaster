<template>
	<v-form ref="form" v-model="valid" @submit.prevent="onSubmitComment">
		<v-card>
			<v-card-title>
				Comments
			</v-card-title>
			<v-card-actions>
				<v-textarea
							v-model="content"
							auto-grow
							label="Comments"
							filled
							>
				</v-textarea>
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
</template>

<script>
export default {
	props:{
		
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
					content:this.content
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