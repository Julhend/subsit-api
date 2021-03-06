const express = require('express')
const ExpensesController = require('../../../controllers/expensesController')
const app = express.Router()
const passport = require('../../../middleware/authorizationMiddleware')
const mysqlErrorHandler = require('../../../middleware/errorMiddleware')

app.post('/expense', passport.authenticate('bearer', { session: true }), ExpensesController.addExpense)
app.use(mysqlErrorHandler)

module.exports = app