const {DataTypes} = require('sequelize')
const db = require('../config/db')

const Operation = db.define('operations', {

	id:{
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	concept:{
		type: DataTypes.STRING(),
		allowNull: false
	},
	amount:{
		type: DataTypes.DOUBLE(),
		allowNull: false,
	},
	date:{
		type: DataTypes.DATE(),
		allowNull: false
	},
	category:{
		type: DataTypes.STRING(30),
		allowNull: false
	},
	type:{
		type: DataTypes.STRING(10)
	}
})

module.exports = Operation
