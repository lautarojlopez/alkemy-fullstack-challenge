const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const {check} = require('express-validator')

//Authenticate user
router.post('/', [
	check('email', 'Escribe tu e-mail').not().isEmpty(),
	check('password', 'Escribe tu contraseña').not().isEmpty(),
],authController.authenticateUser)

module.exports = router
