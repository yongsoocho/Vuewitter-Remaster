const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');

userRouter.post('/', async (req, res, next) => {
	try{
		const hash = await bcrypt.hash(req.body.password, 12);
		const exUser = await User.findOne({
			email:req.body.email
		})
		if(exUser) {
			return res.status(403).json({
				errorCode:1,
				message:'Already signUp!'
			});
		}else{
			const newUser = await User.create({
				email: req.body.email,
				name: req.body.name,
				password: hash,
			});
			passport.authenticate('local', (err, user, info) => {	// done(err, success == user, { msg == info })
				if(err){
					console.log(err);
					return next(err);
				}
				if(info){
					return res.status(401).send(info.message);
				}
				return req.login(user, async (err) => {	// login(user, session)
					try{
						if(err){
							console.log(err);
							return next(err);
						}
						return res.json(user);
					}catch(err){
						console.log(err);
						return next(err);
					}
				});
			})(req, res, next);
		}
	}catch(err){
		console.log(err);
		next(err);
	}
});

userRouter.post('/login', async (req, res, next) => {	// passport.authenticate('Strategy', {}) 
	try{
		passport.authenticate('local', (err, user, info) => {	// done(err, success == user, { msg == info })
			if(err){
				console.log(err);
				return next(err);
			}
			if(info){
				return res.status(401).send(info.message);
			}
			return req.login(user, async (err) => {	// login(user, session)
				try{
					if(err){
						console.log(err);
						return next(err);
					}
					return res.json(user);
				}catch(err){
					console.log(err);
					return next(err);
				}
			});
		})(req, res, next);
	}catch(err){
		console.log(err);
		return next(err);
	}
});

userRouter.post('/logout', async (req, res, next) => {
	if(req.isAuthenticated()){
		req.logout();
		req.session.destroy();
		return res.status(200).send('logout success');
	}
});

module.exports = userRouter;