<template>
<div>
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
						>
			</v-textarea>
		</v-container>
		<v-card-actions>
			<v-btn
				   color="blue"
				   rounded
				   outlined
				   :style="{ marginBottom:'10px' }"
				   >
				Tweet
			</v-btn>
		</v-card-actions>
	</v-card>
</div>
</template>

<script>
export default {

}
</script>

<style>
</style>