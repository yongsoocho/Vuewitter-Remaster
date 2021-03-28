const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./models');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const morgan = require('morgan');
const passportConfig = require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie-parser');

const app = express();

db();
passportConfig();

app.use(cors({
	origin:"https://vuewitter-remaster-ftixr.run.goorm.io",
	credentials: true,
})); // cors() == all requests are allowed , input front-server
app.use(express.json()); // express.json let server read json file
app.use(express.urlencoded({ extended: false })); // like body-parser
app.use(morgan('combined'));
app.use(cookie('yong'));
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: 'cookiesecret',
	cookie: {
		httpOnly: true,
		secure: false,
	},
}));
app.use(express.static('uploads'));
app.use(passport.initialize());	// req.login and req.logout is added
app.use(passport.session());

//routes
app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(8000, () => {
	console.log(`PORT is listening on 8000`);
});