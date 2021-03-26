const mongoose = require('mongoose');

module.exports = async function connect() {
	const result = mongoose.connect('mongodb+srv://root:0302@cluster0.inij9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
		useNewUrlParser: true, 
		useUnifiedTopology: true
	});
	
	const db = mongoose.connection;
	
	db.once('open', () => {
		return console.log('DB is connected!');
	})
	
	db.on('error', (error) => {
		console.log(error);
	});
};