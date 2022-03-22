const Account = require('../models/Account')
const { mongooseToObject } = require('../../util/mongoose')
const { multipleMongooseToObject } = require('../../util/mongoose')


class AuthController {

    //[Get] account/login
    login(req, res, next) {
        res.render('authen/login')
    }

    //[Post] account/login
    doLogin(req, res, next) {
        Account.findOne({username: req.body.username, password: req.body.password}) 
        .then(account => {
            if(!account) {
                res.render('authen/login', {message: `<div class="alert alert-danger" role="alert">
                Account not found!
              </div>`})
                return
            }
            res.json(account)
        })
        .catch(next)
    }

    //[Get] account/register
    register(req, res, next) {
        res.render('authen/register')
    }

    //[Post] account/register
    doRegister(req, res, next) {
        Account.findOne({username: req.body.username}) 
        .then(account => {
            if(account) {
                res.render('authen/register', {message: `<div class="alert alert-danger" role="alert">
                Account existed!
              </div>`})
                return
            }
            res.json(req.body)
        })
        .catch(next)
    }
}

module.exports = new AuthController
