const express = require('express');
const Router = express.Router;
const sequelize = require('../../config/database');
const {getSesion} = require('../controllers/login.controller')

const router = Router();

router.get('/login', getSesion);

module.exports = router;