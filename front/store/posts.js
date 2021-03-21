export const state = () => ({
	mainPosts: []
});

export const mutations = {
	ADDMAINPOSTS(state, payload) {
		state.mainPosts.unshift(payload);
	},
	REMOVEMAINPOSTS(state, payload) {
		const index = state.mainPosts.findIndex( v => v.id === payload.id);
		state.mainPosts.splice(index, 1);
		console.log(payload);
	}
};

export const actions = {
	addMainPosts({ commit }, payload) {
		commit('ADDMAINPOSTS', payload);
	},
	removeMainPosts({ commit }, payload) {
		commit('REMOVEMAINPOSTS', payload);
	}
};