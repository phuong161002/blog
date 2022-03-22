const Account = require('../models/Account')
const { mongooseToObject } = require('../../util/mongoose')
const { multipleMongooseToObject } = require('../../util/mongoose')


class AccountController {

    //[Post] account/add
    add(req, res, next) {
        const account = new Account(req.body)
        console.log(account)
        account.save()
        .then(() => res.redirect('/account/myaccounts'))
        .catch(next)
    }

    //[Get] account/add
    create(req, res, next) {
        res.render('accounts/create')
    }

    //[Get] account/myaccounts
    show(req, res, next) {
        Account.find({})
        .then(accounts => {
            res.render('accounts/show', {accounts: multipleMongooseToObject(accounts)})
        })
    }
}

module.exports = new AccountController
