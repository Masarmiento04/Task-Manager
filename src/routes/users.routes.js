//import { Router } from "express";
const express = require('express');
const Router = express.Router;
const sequelize = require('../../config/database')
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

const router = Router();

router.get('/users', getAllUsers);

router.get('/user/:id', getUserById);

router.post('/createUser', createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

module.exports = router;