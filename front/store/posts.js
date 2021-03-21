export const state = () => ({
	mainPosts: []
});

export const mutations = {
	ADDMAINPOSTS(state, payload) {
		state.mainPosts.unshift(payload);
	}
};

export const actions = {
	addMainPosts({ commit }, payload) {
		commit('ADDMAINPOSTS', payload);
	}
};