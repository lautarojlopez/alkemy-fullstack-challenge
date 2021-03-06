const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const {check} = require('express-validator')

//Create new user
router.post('/', [
	//Validation
	check('name', 'Escribe tu nombre').not().isEmpty(),
	check('email', 'Escribe un e-mail válido').isEmail(),
	check('password').isLength({min: 6}).withMessage('Tu contraseña debe contener al menos 6 caracteres'),
	check('validate_password', 'Reescribe tu contraseña').not().isEmpty()
], usersController.createUser)

module.exports = router
