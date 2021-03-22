<template>
<v-card>
	<v-card-title>
		{{FollowType.title}}
	</v-card-title>
	
	<v-container>
		<v-divider></v-divider>
	</v-container>
	
	<v-card-text>
		<v-list>
			<v-col cols="4" v-for="f in FollowList" :key="f.id" :style="{ display:'inline-block' }">
				<v-list-item>
					<v-list-item-avatar size="36" dark color="blue">
						{{f.name[0]}}
					</v-list-item-avatar>
					<v-list-item-content>
						{{f.name}}
					</v-list-item-content>
				</v-list-item>
			</v-col>
		</v-list>
	</v-card-text>
</v-card>
</template>

<script>
export default {
	props:{
		FollowList: {
			type: Array,
			required: true
		},
		FollowType: {
			type: Object,
			required: true
		}
	}
}
</script>

<style>

</style>