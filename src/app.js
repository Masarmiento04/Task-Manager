const express = require ("express");
const config = require ('../config/config.js')
const router = require ('./routes/users.routes.js')
const morgan = require ('morgan')

const app = express();
app.use(morgan('dev'));

app.set('port', config.port);

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1', router)

module.exports = app;