const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const {check} = require('express-validator')
const auth = require('../middleware/auth')

//Authenticate user
router.post('/', [
	check('email', 'Escribe tu e-mail').not().isEmpty(),
	check('password', 'Escribe tu contraseña').not().isEmpty(),
],authController.authenticateUser)

//Get authenticated user
router.get('/', auth, authController.getAuthenticatedUser)

module.exports = router
