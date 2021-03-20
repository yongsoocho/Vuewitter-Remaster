<template>
<v-card>
	<v-container>
		<v-text-field
					  label="e-mail"
					  type="email"
					  required
					  >
		</v-text-field>
		<v-text-field
					  label="password"
					  type="password"
					  required
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
				   >Log in</v-btn>
		
			<v-btn
				   dark
				   color="blue-grey lighten-1"
				   :style="{ width:'100%', margin:'5px 0px' }"
				   >Sing up</v-btn>
	</v-container>
</v-card>
</template>

<script>
export default {
	data(){
		return{
			msg:'Hello Nuxt',
		}
	},
}
</script>

<style>
	
</style>