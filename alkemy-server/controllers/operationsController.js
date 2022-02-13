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

//Get authenticated user's operations
exports.getOperations = async (req, res) => {

	const userId = req.user.id
	try {
		//Find operations
		const results = await Operation.findAll({where: {userId: userId}})
		//Return operations
		return res.json(results)
	} catch (e) {
		console.log(e)
		//Return error message
		return res.status(500).json({
			msg: "Ha ocurrido un error"
		})
	}
}

//Delete operation
exports.deleteOperation = async (req, res) => {
	const operationId = req.params.id
	try {
		//Find operation
		const operation = await Operation.findOne({where: {id: operationId}})
		//Check if user trying to delete is the same who created the operation
		if(req.user.id === operation.userId){
			//If so, delete the operation
			await operation.destroy()
			return res.json({
				msg: "Operacion eliminada con éxito"
			})
		}
		else{
			return res.status(401).json({
				msg: "No tienes permiso para realizar esta acción"
			})
		}


	} catch (e) {
		console.log(e)
		return res.status(500).json({
			msg: "Ha ocurrido un error"
		})
	}
}


//Edit operation
exports.editOperation = async (req, res) => {

	//Check for errors
	const errors = validationResult(req)
	if(!errors.isEmpty()){
	  return res.status(400).json({errors: errors.array()})
	}

	//Get operation id
	const operationId = req.params.id
	//Get new data
	const {concept, amount, date, category} = req.body

	try {
		//Find operation
		const operation = await Operation.findOne({where: {id: operationId}})
		//Check if user trying to delete is the same who created the operation
		if(req.user.id === operation.userId){
			//If so, edit the operation
			operation.concept = concept
			operation.amount = amount
			operation.date = date
			operation.category = category
			//Save changes
			await operation.save()
			return res.json({
				msg: "Operacion editada con éxito"
			})
		}
		else{
			return res.status(401).json({
				msg: "No tienes permiso para realizar esta acción"
			})
		}


	} catch (e) {
		console.log(e)
		return res.status(500).json({
			msg: "Ha ocurrido un error"
		})
	}

}
