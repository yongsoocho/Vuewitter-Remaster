const express = require('express');
const app = express();

const isLoggedIn = async (req, res, next) => {
	try{
		if(req.isAuthenticated()){
			return next();
		}else{
			return res.status(400).send({ err: 3, message: 'Log in please' })
		}
	}catch(err){
		console.log(err);
		return next(err);
	}
};

const isLoggedOut = async (req, res, next) => {
	try{
		if(!req.isAuthenticated()){
			return next();
		}else{
			return res.status(400).send({ err: 3, message: 'Log out please' })
		}
	}catch(err){
		console.log(err);
		return next(err);
	}
};

module.exports = { isLoggedIn, isLoggedOut };