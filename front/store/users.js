export const state = () => ({
	me: null
});

export const mutations = {
	SETME(state, payload) {
		state.me = payload;
		console.log(state.me);
	}
};

export const actions = {
	signUp({ commit }, payload) {			// signUp(context, payload) context : { commit, dispatch, getters, rootGetters, rootState, state }
		commit('SETME', payload);
	},
	logIn({ commit }, payload) {
		commit('SETME', payload);
	},
	logOut({ commit }, payload) {
		commit('SETME', null);
	},
}