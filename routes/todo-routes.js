const express = require('express');
const { createTodo } = require('../controllers/Todo-controller');
const { verifyToken } = require('../middleware/auth');
const route = express.Router();

route.post('/', verifyToken, createTodo)

module.exports = route;