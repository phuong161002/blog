const express = require('express')
const router = express.Router()
const AccountController = require('../app/controllers/AccountController')

router.get('/myaccounts', AccountController.show)
router.get('/add', AccountController.create)
router.post('/add', AccountController.add)

module.exports = router;