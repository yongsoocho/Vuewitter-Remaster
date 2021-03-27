const passport = require('passport');
const User = require('../models/User');
const local = require('./local');

// module.exports = () => {
// 	passport.use(User.createStrategy());

// 	passport.serializeUser(User.serializeUser());
// 	passport.deserializeUser(User.deserializeUser());
// };

module.exports = () => {	// when called req.login is called to respond to session
	passport.serializeUser((user, done) => {
		return done(null, user.email);
	});
	
	passport.deserializeUser(async (email, done) => {
		try{
			const user = await User.findOne({	// caching is required
				email:email
			});
			return done(null, user);	// req.user, req.isAuthenticated() === true
		}catch(err){
			console.log(err);
			return done(err);
		}
	});
	
	local();
};