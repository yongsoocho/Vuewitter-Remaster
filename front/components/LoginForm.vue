<template>
<v-card>
	<v-form ref="form" v-model="valid" @submit.prevent.once="onLogIn">
		<v-container>
			<v-text-field
						  label="e-mail"
						  type="email"
						  required
						  :rules="emailRules"
						  v-model="email"
						  >
			</v-text-field>
			<v-text-field
						  label="password"
						  type="password"
						  required
						  :rules="passwordRules"
						  v-model="password"
						  >
			</v-text-field>
		</v-container>
		<v-container>
			<v-divider></v-divider>
		</v-container>
		<v-container>
				<v-btn
					   dark
					   color="blue lighten-1"
					   :style="{ width:'100%', margin:'5px 0px' }"
					   type="submit"
					   @click="onLogIn"
					   >Log in</v-btn>

				<v-btn
					   dark
					   color="blue-grey lighten-1"
					   :style="{ width:'100%', margin:'5px 0px' }"
					   Nuxt
					   to="/signup"
					   >Sing up</v-btn>
		</v-container>
	</v-form>
</v-card>
</template>

<script>
export default {
	data(){
		return{
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			passwordRules: [
				v => !!v || 'Password is required'
			],
			valid:false,
			email:'',
			password:'',
		}
	},
	methods: {
		onLogIn() {
			if(this.$refs.form.validate()){
				this.$store.dispatch('users/logIn', {
					email: this.email,
					password: this.password,
				})
				.then(() => {
					this.$router.push({
						path:'/'
					});
				})
				.catch((err) => {
					console.log(err);
				});
			}else{
				this.$refs.form.reset();
			}
		},
	},
	
}
</script>

<style>
	
</style>