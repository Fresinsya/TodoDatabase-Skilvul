const express = require('express');
const { register, Login } = require('../controllers/Auth-controller');
const route = express.Router();

route.post('/login', Login)
route.post('/register' ,register);

module.exports = route;