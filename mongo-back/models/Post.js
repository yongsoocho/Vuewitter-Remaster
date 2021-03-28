const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	content:{
		type: String,
		required: true
	},
	comments:{
		type: Array,
		default: [
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
	author:{
		type:Object,
	},
}, {
	timestamps: true
});

const model = mongoose.model('Post', PostSchema);

module.exports = model;