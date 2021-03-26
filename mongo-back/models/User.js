const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true,
		unique: true,
	},
	password:{
		type: String,
		required: true
	},
}, {
	timestamps: true,
});

// UserSchema.plugin(passportLocalMongoose, {
// 	usernameUnique:true
// });

const model = mongoose.model('User', UserSchema);

module.exports = model;