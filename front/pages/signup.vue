<template>
<v-card>
	<v-container>
		<v-card-title>Sign Up Form</v-card-title>
		
		<v-divider></v-divider>
		
		<v-container>
			<v-form ref="form" v-model="valid" @submit.prevent="onSubmitSingUp">
				<v-text-field
							  v-model="email"
							  clearable
							  label="e-mail"
							  :rules="emailRules"
							  ></v-text-field>
				<v-text-field
							  v-model="name"
							  clearable
							  label="name"
							  :rules="nameRules"
							  ></v-text-field>
				<v-text-field
							  v-model="password"
							  clearable
							  label="password"
							  :rules="passwordRules"
							  ></v-text-field>
				<v-text-field
							  v-model="passwordCheck"
							  clearable
							  label="password check"
							  :rules="passwordCheckRules"
							  ></v-text-field>
				<v-checkbox
							v-model="agree"
							label="I agree"
							:rules="checkboxRules"
							></v-checkbox>
				
				<v-btn
					   dark
					   color="blue"
					   type="submit"
					   >SIGN UP!</v-btn>
			</v-form>
		</v-container>
	</v-container>	
</v-card>
</template>

<script>
export default {
	data() {
		return{
			valid: false,
			email:'',
			name:'',
			password:'',
			passwordCheck:'',
			agree:false,
			
			nameRules:[
				v => !!v || 'Name is required',
				v => (v && v.length <= 10) || 'Name must be less than 10 characters',
			],
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			checkboxRules: [
				v => !!v || 'You must agree to continue!'
			],
			passwordRules: [
				v => !!v || 'Password is required'
			],
			passwordCheckRules: [
				v => !!v || 'Password check is required',
				v => v === this.password || 'Password Check is wrong'
			]
		}
	},
	methods: {
		onSubmitSingUp() {
			if(this.$refs.form.validate()){
				this.$store.dispatch('users/signUp', {
					email: this.email,
					name: this.name,
					password: this.password
				})
				.then(() => {
					this.$router.push({
						path:'/'
					});
					this.$refs.form.reset();
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