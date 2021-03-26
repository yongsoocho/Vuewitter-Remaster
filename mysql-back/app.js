const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

db.sequelize.sync({ force: true });

app.use(cors(`https://vuewitter-remaster-ftixr.run.goorm.io:3000`)); // cors() == all requests are allowed , input front-server
app.use(express.json()); // express.json let server read json file
app.use(express.urlencoded({ extended: false })); // like body-parser


app.get('/', (req, res) => {
	res.send('Hi!')
});


app.listen(8000, () => {
	console.log(`PORT is listening on 8000`);
});