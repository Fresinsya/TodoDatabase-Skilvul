const express = require('express');
const route = express.Router();
const authRoutes = require('./auth-routes');
const todoRoutes = require('./todo-routes');

route.get('/',(req,res)=>{
    res.json(
        {
            "message":"Hello World!"
        }
    )
})


route.use('/auth', authRoutes);
route.use('/todo', todoRoutes)

module.exports = route;