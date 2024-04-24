const express = require('express');
const Router = require('express').Router;
const sequelize = require('../../config/database');
const { getSesion } = require('../controllers/login.controller')

const routerL = Router();

routerL.get('/login', getSesion);

module.exports = routerL;