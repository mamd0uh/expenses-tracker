const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('../config/dbConnect');
const { errorHandler, notFound } = require('./middlewares/errorMiddlewares');
const userRoute = require('./routes/users/userRoutes');
const incomeRoute = require('./routes/income/incomeRoute');
const expensesRoute = require('./routes/expenses/expensesRoute');

const app = express();

//env file
dotenv.config()

// dbConnect
dbConnect()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.json({msg: "Welcome to Expenses tracker API"})
})

//routes

//user routes
app.use('/api/users', userRoute)

//income routes
app.use('/api/income', incomeRoute)

//expenses routes
app.use('/api/expenses', expensesRoute)


//Error
app.use(notFound)
app.use(errorHandler)

//income

//expenses

module.exports = app; 