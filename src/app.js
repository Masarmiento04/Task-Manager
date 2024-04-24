const express = require("express");
const config = require('../config/config.js')
const userRouter = require('./routes/users.routes.js')
const loginRouter = require('./routes/login.routes.js')
const taskRouter = require('./routes/tasks.routes.js')
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'));

app.set('port', config.port);

//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/v1', userRouter)
app.use('/api/v1', loginRouter)
app.use('/api/v1', taskRouter)

module.exports = app;