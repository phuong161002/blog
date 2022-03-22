const express = require('express')
const router = express.Router()
const AuthController = require('../app/controllers/AuthController')

router.get('/login', AuthController.login)
router.post('/login', AuthController.doLogin)
router.get('/register', AuthController.register)
router.post('/register', AuthController.doRegister)

module.exports = router;