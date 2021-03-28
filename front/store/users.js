export const state = () => ({
	me:null,
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
		}, {
			withCredentials: true,
		})
		.then((res) => {
			console.log('signUp axios succes');
			console.log(res);
			commit('SETME', res.data);
		})
		.catch((err) => {
			console.log(err);
		});
	},
	logIn({ commit }, payload) {
		this.$axios.post('/user/login', {
			email: payload.email,
			password: payload.password,
		}, {
			withCredentials: true,
		})
		.then((res) => {
			console.log('logIn axios success');
			console.log(res);
			commit('SETME', res.data);
		})
		.catch((err) => {
			console.log(err);
		});
	},
	logOut({ commit }, payload) {
		this.$axios.post('/user/logout', {}, {
			withCredentials: true
		})
		.then(() => {
			commit('SETME', null);
		})
		.catch((err) => {
			console.log(err);
		});
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