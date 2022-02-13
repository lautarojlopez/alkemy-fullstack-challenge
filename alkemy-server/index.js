const express = require('express')
const app = express()

//Read enviroment variables
require('dotenv').config()
const port = process.env.PORT

//CONNECT TO DATABASE
//Import models
require('./models/User')
//Sync
const db = require('./config/db')
db.sync()
		.then(() => {
			console.log("Connected to database")
		})
		.catch((e) => {
			console.log(e)
		})

//Allow to read req.body
app.use(express.json())

//Test
app.use('/', (req, res) => {
	res.send("Hello world")
})

//Run server in port
app.listen(port, '0.0.0.0')
