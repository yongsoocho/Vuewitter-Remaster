const express = require('express');
const multer = require('multer');	// 1. upload to 'uploads' dir 2. make req.files
const path = require('path');
const Post = require('../models/Post');
const { isLoggedIn, isLoggedOut } = require('../middlewares');
const postRouter = express.Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'uploads');
		},
		filename(req, file, done) {
			const ext = path.extname(file.originalname);
			const base = path.basename(file.originalname, ext);
			done(null, base + Date.now() + ext);
		}
	}),
	limits:{ fileSize: 20*1024*1024 },
});

postRouter.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
	try{
		console.log(req.files);
		return res.json(req.files.map(v => v.filename));
	}catch(err){
		console.log(err);
		return res.status(500).send({ code: 2, message: 'Image post error' })
	};
});

postRouter.post('/', isLoggedIn, async (req, res, next) => {
	try{
		const hashTags = req.body.content.match(/#[^\s#]+/g);
		const newPost = await Post.create({
			content: req.body.content,
			hashTags: hashTags,
			author: req.body.author,
		});
		return res.status(201).json(newPost);
	}catch(err){
		console.log(err);
		return next(err);
	};
});

module.exports = postRouter;