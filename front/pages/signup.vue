<template>
<v-card>
	<v-container>
		<v-card-title>Sign Up Form</v-card-title>
		
		<v-divider></v-divider>
		
		<v-container>
			<v-text-field
						  clearable
						  label="e-mail"
						  ></v-text-field>
			<v-text-field
						  clearable
						  label="name"
						  ></v-text-field>
			<v-text-field
						  clearable
						  label="password"
						  ></v-text-field>
			<v-text-field
						  clearable
						  label="password check"
						  ></v-text-field>
			<v-checkbox
						label="I agree"
						></v-checkbox>
		</v-container>
		<v-btn
			   dark
			   color="blue"
			   >SIGN UP!</v-btn>
	</v-container>	
</v-card>
</template>

<script>
export default {
	data(){
		return{
			msg:'Signup Nuxt'
		}
	}
}
</script>

<style>

</style>