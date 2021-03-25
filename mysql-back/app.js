const express = require('express');
const db = require('./models');

const app = express();

db.sequelize.sync({ force: false });

app.use(express.json()); // express.json let server read json file
app.use(express.urlencoded({ extended: false })); // like body-parser


app.get('/', (req, res) => {
	res.send('Hi!')
});

app.post('/user', async (req, res, next) => {
	try{
		const newUser = await db.User.create({
			email: req.body.email,
			name: req.body.name,
			password: req.body.password
		});
		res.status(201).json(newUser);
	}catch(err){
		console.log(err);
		next(err);
	}
});

app.listen(8000, () => {
	console.log(`PORT is listening on 8000`);
});