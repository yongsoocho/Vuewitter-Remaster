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
			return res.status(201).json({
				message:'signUp success!'
			});
		}
		res.status(201).json(newUser);
	}catch(err){
		console.log(err);
		next(err);
	}
});

userRouter.post('/login', async (req, res, next) => {
	try{
		passport.authenticate('local', {
			failureRedirect: '/',
			successRedirect: '/'
		});
		return res.status(200).json();
	}catch(err){
		console.log(err);
		return next(err);
	}
});

module.exports = userRouter;