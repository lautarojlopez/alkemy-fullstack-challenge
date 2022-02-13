const express = require('express')
const app = express()

//Read enviroment variables
require('dotenv').config()
const port = process.env.PORT

//CONNECT TO DATABASE
//Import models
require('./models/User')
require('./models/Operation')
//Sync
const db = require('./config/db')
db.sync()
		.then(() => {
			console.log("Connected to database")
		})
		.catch((e) => {
			console.log(e)
		})

//Enable CORS
const cors = require('cors')
app.use(cors())

//Allow to read req.body
app.use(express.json())

//Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/operations', require('./routes/operations'))

//Run server in port
app.listen(port, '0.0.0.0')
