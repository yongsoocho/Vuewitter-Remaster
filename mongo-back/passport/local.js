const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // checking email and password in LocalStrategy
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = () => {
	passport.use(new LocalStrategy({
		usernameField: 'email',	//req.body.email
		passwordField: 'password'	//req.body.password
	}, async (email, password, done) => {
		try{
			const exUser = await User.findOne({
				email:email
			});
			if(!exUser){
				return done(null, false, { message:'Not exist user' });	//done(error, success, message)
			}
			const result = await bcrypt.compare(password, exUser.password);
			if(result){
				console.log(result); // true or false
				return done(null, exUser);
			}else{
				return done(null, false, { message:'Wrong password' });
			}
		}catch(err){
			console.log(err);
			return done(err);
		}
	}));
};