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
					   @click="onClickImgUpload"
					   type="button"
					   >
					<v-icon>mdi-image-multiple-outline</v-icon>
					<!-- except submit button, button where is in form should be added type="button" because, auto submit -->
				</v-btn>
				<input ref="imageInput" type="file" multiple hidden @change="onChangeImages"/>
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
					   @click="onClickTweet"
					   >
					Tweet
				</v-btn>
			</v-card-actions>
			<v-container>
				<div v-for="(img, i) in imagePaths" :key="img" :style="{ display:'inline-block' }">
					<v-container>
						<v-img
							   :src="`https://vuewitterexpressmongo.run.goorm.io/${img}`"
							   :alt="img"
							   :style="{ display:'inline-block', width:'200px', position:'relative' }"/>
						<v-btn
							   icon
							   dark
							   color="red"
							   @click="onClickImgRemove(i)"><v-icon>mdi-minus</v-icon></v-btn>
					</v-container>
				</div>
			</v-container>
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
					content: this.content,
					author: this.me,
				})
				.then(() => {
					console.log('post tweet!');
					console.log(this.content);
					console.log(this.me);
					this.$refs.form.reset();
				})
				.catch((err) => {
					console.log(err);
				})
			}else{
				this.$refs.form.reset();
			}
		},
		onClickImgUpload() {
			return this.$refs.imageInput.click();
		},
		onChangeImages(event) {
			console.log(event.target.files);
			const imageFormData = new FormData();
			[].forEach.call(event.target.files, (f) => {
				imageFormData.append('image', f)
			});
			console.log(imageFormData);
			return this.$store.dispatch('posts/uploadImages', imageFormData);
		},
		onClickImgRemove(index) {
			return this.$store.commit('posts/REMOVEIMGPATHS', index);
		},
	},
	computed: {
		me() {
			return this.$store.state.users.me;
		},
		imagePaths() {
			return this.$store.state.posts.imagePaths;
		}
	}
}
</script>

<style>
</style>