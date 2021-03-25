module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		email:{
			type: DataTypes.STRING(40),
			allowNull: false
		},
		name:{
			type: DataTypes.STRING(12),
			allowNull: false
		},
		password:{
			type: DataTypes.STRING(20),
			allowNull: false
		},
	}, {
		timestamps: true,
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
	
	User.associate = (db) => {
		
	};
	
	return User;
};