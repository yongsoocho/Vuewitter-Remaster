export const state = () => ({
	me: null,
	FollowersList:[
		{name:'a', id:1}, 
		{name:'b', id:2},
		{name:'c', id:3},
		{name:'d', id:4},
		{name:'e', id:5}
	],
	FollowingList:[
		{name:'z', id:6}, 
		{name:'y', id:7}, 
		{name:'x', id:8},
		{name:'w', id:9},
		{name:'q', id:10},
	]
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