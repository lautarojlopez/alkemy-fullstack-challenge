const User = require('../models/User') //Import model
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Authenticate user
exports.authenticateUser = async (req, res) => {

	//Check for errors
	const errors = validationResult(req)
	if(!errors.isEmpty()){
	  return res.status(400).json({errors: errors.array()})
	}

	//Read req.body values
	const {email, password} = req.body

	try {
		//Check if user exists
		const user = await User.findOne({
			where:{
				email: email
			}
		})
		if(user){
			//If exists, check password
			const validPassword = await bcrypt.compare(password, user.password)
			if(validPassword){
				//If password is valid, create and sign json web token
				const token = jwt.sign({
					id: user.id,
					name: user.name,
					email: user.email
				},
				process.env.SECRET_KEY,
				{
					expiresIn: '24h'
				})

				//Return token
				return res.json({token})
			}
			else{
				//If password is incorrect, return error message
				return res.status(400).json({
					msg: "Contraseña incorrecta"
				})
			}
		}
		else{
			//If user do not exists, return error message
			return res.status(400).json({
				msg: "El usuario no existe"
			})
		}

	} catch (e) {
		console.log(e)
		res.status(500).json({
			msg: "Ha ocurrido un error"
		})
	}
}

//Get authenticated user
exports.getAuthenticatedUser = (req, res) => {
	res.json({user: req.user})
}
