const express = require('express');
const { createTodo, readTodos, readTodoDetail, updateTodo, deleteTodo, deleteAllTodo } = require('../controllers/Todo-controller');
const { verifyToken } = require('../middleware/auth');
const route = express.Router();

route.post('/', verifyToken, createTodo)
route.get('/', verifyToken, readTodos)
route.get('/:id', verifyToken, readTodoDetail)
route.put('/:id', verifyToken, updateTodo)
route.delete('/:id', verifyToken, deleteTodo)

module.exports = route;