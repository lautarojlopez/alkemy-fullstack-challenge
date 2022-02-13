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

//Get authenticated user's operations
router.get('/', auth, operationsController.getOperations)

//Delete operation
router.delete('/:id', auth, operationsController.deleteOperation)

//Edit operation
router.patch('/:id', [
	//Validation
	check('concept', 'Escribe una descripción').not().isEmpty(),
	check('amount', 'Agrega un monto').not().isEmpty(),
	check('date', 'Añade una fecha').not().isEmpty().isDate().withMessage('Añada una fecha válida'),
	check('category', 'Añade una categoria').not().isEmpty(),
], auth, operationsController.editOperation)

module.exports = router
