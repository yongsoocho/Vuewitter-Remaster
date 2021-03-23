export const state = () => ({
	mainPosts: [
		{
			id: 24,
			content: 'Test dummy Data~! haha',
			author: {
				name:'ygr'
			},
			image:{},
			createAt: new Date(),
			updateAt: new Date(),
			comments:[
				{
					author:'ygr',
					comment:'123',
					createAt: new Date(),
				},
				{
					author:'ppp',
					comment:'bye',
					createAt: new Date(),
				}
			]
		},
	]
});

export const mutations = {
	ADDMAINPOSTS(state, payload) {
		state.mainPosts.unshift(payload);
	},
	REMOVEMAINPOSTS(state, payload) {
		const index = state.mainPosts.findIndex( v => v.id === payload.id);
		state.mainPosts.splice(index, 1);
		console.log(payload);
	},
	ADDCOMMENT(state, payload) {
		const index = state.mainPosts.findIndex( v => v.id === payload.postId);
		state.mainPosts[index].comments.unshift({
			author:payload.author,
			comment:payload.content
		});
	}
};

export const actions = {
	addMainPosts({ commit }, payload) {
		commit('ADDMAINPOSTS', payload);
	},
	removeMainPosts({ commit }, payload) {
		commit('REMOVEMAINPOSTS', payload);
	},
	addComment({ commit }, payload) {
		commit('ADDCOMMENT', payload);
	}
};