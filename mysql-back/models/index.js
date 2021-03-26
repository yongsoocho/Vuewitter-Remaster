'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize('vuewitter', 'root', '0302', {
	host:'127.0.0.1',
	dialect:'mysql',
	port:'3306'
});

sequelize.authenticate()
	.then(() => {
	console.log('Connection has been established successfully.');
})
	.catch((err) => {
	console.log(err);
});

db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
