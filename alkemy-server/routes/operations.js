const express = require('express')
const router = express.Router()
const operationsController = require('../controllers/operationsController')
const {check} = require('express-validator')
const auth = require('../middleware/auth')

//Create new operation
router.post('/', [
	//Validation
	check('concept', 'Escribe una descripción').not().isEmpty(),
	check('amount', 'Agrega un monto').not().isEmpty(),
	check('date', 'Añade una fecha').not().isEmpty().isDate().withMessage('Añada una fecha válida'),
	check('category', 'Añade una categoria').not().isEmpty(),
	check('type', 'Indica el tipo de operacion').not().isEmpty()
], auth,operationsController.createOperation)

module.exports = router
