//DATABASE CONFIGURATION
const { Sequelize } = require('sequelize')

//Read enviroment variables
require('dotenv').config()

//Create connection config
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

module.exports = db
