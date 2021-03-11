const express = require('express')
const cors = require('cors')

const errorController = require('./controllers/errorController')
const testRouter = require('./routes/testRoutes')

const AppError = require('./utils/appError')

const app = express()

app.use(cors())

app.use('/api', testRouter)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(errorController)

module.exports = app
