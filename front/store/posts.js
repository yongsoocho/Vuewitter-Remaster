export const state = () => ({
	mainPosts: [
		{
			id: 24,
			content: 'Test dummy Data~! haha',
			author: {
				id: 12345,
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
	],
	hasMorePost: true,
	imagePaths: []
});

const totalPosts = 41;
const limit = 10;

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
	},
	LOADPOSTS(state, payload) {
		const diff = totalPosts - state.mainPosts.length;
		const fakeArray = Array(diff > limit ? limit : diff).fill().map(v => ({
			id: Math.round(Math.random() * 10000),
			content: String(Math.round(Math.random() * 10000)), // Knowledge about How create empty array
			author: {
				id: Math.round(Math.random() * 10000),
				name:Math.round(Math.random() * 10000)
			},
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
		}));
		state.mainPosts = state.mainPosts.concat(fakeArray);
		state.hasMorePost = fakeArray.length === limit;
	},
	CONCATIMGPATHS(state, payload) {
		state.imagePaths = state.imagePaths.concat(payload);
	},
	REMOVEIMGPATHS(state, payload) {
		state.imagePaths.splice(payload, 1);
	}
};

export const actions = {
	addMainPosts({ commit, state }, payload) {
		this.$axios.post('/post', {
			content: payload.content,
			imagePaths: state.imagePaths,
			// author: state.me
			author: payload.author,
		}, {
			withCredentials: true
		})
		.then((res) => {
			console.log(res.data);
			commit('ADDMAINPOSTS', res.data);
		})
		.catch((err) => {
			console.log(err);
		});
	},
	removeMainPosts({ commit }, payload) {
		commit('REMOVEMAINPOSTS', payload);
	},
	addComment({ commit }, payload) {
		commit('ADDCOMMENT', payload);
	},
	loadPosts({ commit, state }, payload) {
		if(state.hasMorePost) {
			commit('LOADPOSTS', payload);
		}
	},
	uploadImages({ commit }, payload) {
		this.$axios.post('/post/images', payload, {
			withCredentials: true
		})
		.then((res) => {
			commit('CONCATIMGPATHS', res.data);
		})
		.catch((err) => {
			console.log(err);
		})
	}
};