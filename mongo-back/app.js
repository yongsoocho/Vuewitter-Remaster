const express = require('express');
const cors = require('cors');
const db = require('./models');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');
const passportConfig = require('./passport');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie-parser');

const app = express();

db();
passportConfig();

app.use(cors(`https://vuewitter-remaster-ftixr.run.goorm.io:3000`)); // cors() == all requests are allowed , input front-server
app.use(express.json()); // express.json let server read json file
app.use(express.urlencoded({ extended: false })); // like body-parser
app.use(morgan('combined'));
app.use(session({
	secret: 'yong', 
	resave: false, 
	saveUninitialized: false
}));
app.use(cookie('yong'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);

app.listen(8000, () => {
	console.log(`PORT is listening on 8000`);
});