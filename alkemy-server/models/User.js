const {DataTypes} = require('sequelize')
const db = require('../config/db')

const User = db.define('users', {
	id:{
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name:{
		type: DataTypes.STRING(50),
		allowNull: false
	},
	email:{
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true
	},
	password:{
		type: DataTypes.STRING(60),
		allowNull: false
	}
})

module.exports = User
