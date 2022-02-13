const User = require('../models/User') //Import model
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')

//Create user
exports.createUser = async (req, res) => {

	//Check for errors
	const errors = validationResult(req)
	if(!errors.isEmpty()){
	  return res.status(400).json({errors: errors.array()})
	}


	try {
		//Destructuring data from req.body
		const {email, password, validate_password} = req.body

		//Check if email isn't already registered
		const user = await User.findOne({ where: {email: email}})

		//If email is already registered, return error message
		if(user){
			return res.status(400).json({
				msg: "Ya existe un usuario con ese e-mail"
			})
		}
		else{
			//Check if password and validate_password match
			//If not, return error message
			if(password !== validate_password){
				return res.status(400).json({
					msg: "Las contraseñas no coinciden"
				})
			}
			//If match, create user and encrypt password
			else{
				//Create new user instance
				const new_user = await User.build(req.body)
				const salt = await bcrypt.genSalt(10)
				const hashedPassword = await bcrypt.hash(password, salt)
				new_user.password = hashedPassword
				new_user.save()
				//Return success message
				return res.json({
					msg: "Tu cuenta ha sido creada correctamente"
				})
			}
		}
	} catch (e) {
		console.log(e)
		return res.status(500).json({
			msg: "Ha ocurrido un error"
		})
	}
}
