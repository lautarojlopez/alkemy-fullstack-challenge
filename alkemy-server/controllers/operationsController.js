const Operation = require('../models/Operation')
const {validationResult} = require('express-validator')

//Create new operation
exports.createOperation = async (req, res) => {

	//Check for errors
	const errors = validationResult(req)
	if(!errors.isEmpty()){
	  return res.status(400).json({errors: errors.array()})
	}

	try {
		//Create operation instance
		const operation = await Operation.build(req.body)
		//Set userId
		operation.userId = req.user.id
		//Save
		await operation.save()
		//Return success message
		return res.json({
			msg: "Operacion creada correctamente"
		})
	} catch (e) {
		console.log(e)
		//Return error message
		return res.status(500).json({
			msg: "Ha ocurrido un error"
		})
	}
}
