//Gets authorization header, read and verify the json web token and store the information in req.user
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	//Get authorization header
	const authHeader = req.get('Authorization')

	if(authHeader){
		try {
			//Separates 'Bearer' string from token
			const token = authHeader.split(' ')[1]
			//Read and verify token
			const user = jwt.verify(token, process.env.SECRET_KEY)
			//Save the information in req.user
			req.user = user
		} catch (e) {
		  console.log(e)
		  console.log('Invalid JWT')
		}
	}
	else{
		return next()
	}
	return next()
	}
