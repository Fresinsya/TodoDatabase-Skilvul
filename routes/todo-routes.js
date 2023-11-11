const express = require('express');
const { createTodo, readTodos } = require('../controllers/Todo-controller');
const { verifyToken } = require('../middleware/auth');
const route = express.Router();

route.post('/', verifyToken, createTodo)
route.get('/', verifyToken, readTodos)

module.exports = route;