export const state = () => ({
	me: {
		email: '',
		password: '',
		name: ''
	},
	FollowersList:[],
	FollowingList:[],
	hasMoreFollowers: true,
	hasMoreFollowing: true,
});

const totalFollowers = 14;
const totalFollowing = 15;
const limit = 3;

export const mutations = {
	SETME(state, payload) {
		state.me = payload;
		console.log(state.me);
	},
	LOADFOLLOWERS(state, payload) {
		const diff = totalFollowers - state.FollowersList.length;
		const fakeFollow = Array(diff > limit ? limit : diff).fill().map(v => ({
			id: Math.round(Math.random()*10000),
			name: String(Math.floor(Math.random()*10000))
		}));
		state.FollowersList = state.FollowersList.concat(fakeFollow);
		state.hasMoreFollowers = fakeFollow.length === limit;
	},
	LOADFOLLOWING(state, payload) {
		const diff = totalFollowing - state.FollowingList.length;
		const fakeFollow = Array(diff > limit ? limit : diff).fill().map(v => ({
			id: Math.round(Math.random()*10000),
			name: String(Math.floor(Math.random()*10000))
		}));
		state.FollowingList = state.FollowingList.concat(fakeFollow);
		state.hasMoreFollowing = fakeFollow.length === limit;
	},
};
// signUp(context, payload) context : { commit, dispatch, getters, rootGetters, rootState, state }
export const actions = {
	signUp({ commit }, payload) {
		this.$axios.post('/user', {
			email: payload.email,
			password: payload.password,
			name: payload.name,
		}).then(() => {
			console.log('signUp axios succes');
		}).catch((err) => {
			console.log(err);
		});
		commit('SETME', payload);
	},
	logIn({ commit }, payload) {
		this.$axios.post('/user/login', {
			email: payload.email,
			password: payload.password,
		});
		commit('SETME', payload);
	},
	logOut({ commit }, payload) {
		commit('SETME', null);
	},
	loadFollowers({ commit, state }, payload) {
		if(state.hasMoreFollowers) {
			commit('LOADFOLLOWERS');	
		}
	},
	loadFollowing({ commit, state }, payload) {
		if(state.hasMoreFollowing) {
			commit('LOADFOLLOWING');
		}
	},
}