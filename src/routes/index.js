const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./courses')
const meRouter = require('./me')
const accountRouter = require('./account')
const authRouter = require('./auth')

function route(app) {

    app.use('/news', newsRouter)
    app.use('/courses', courseRouter)
    app.use('/me', meRouter)
    app.use('/account', accountRouter)
    app.use('/auth', authRouter)

    app.use('/', siteRouter)
    
}

module.exports = route;