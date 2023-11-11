const Todos = require("../models/Todos");

module.exports = {
    createTodo: async (req, res) => {
        const data = req.body

        const {id} = req.user;

        const { value, userID, status } = data;

        // cek apakah value sudah diisi
        if (!value) {
            res.status(400).json({
                message: "Value harus diisi"
            })
            return;
        }

        try {
            const todo = await Todos.create({
                value: value,
                status: false,
                UserId: id
            });

            res.status(201).json({
                message: "Todo berhasil dibuat",
                data: todo
            })

        } catch (error) {
            res.status(500).json({
                message: "Todo gagal dibuat",
                error: error.message
            })

        }
        
    },

    // read all todos
    readTodos: async (req,res) => {
        const {id} = req.user;

        try {
            const todos = await Todos.find({UserId: id})
            res.status(200).json({
                message: "Berhasil mendapatkan data",
                data: todos
            })
        } catch (error) {
            res.status(500).json({
                message: "Gagal mendapatkan data",
                error: error.message
            })
        }
    },

    // read todo by id
    readTodoDetail: async (req, res) => {
        const idTodo = req.params.id;
        const userID = req.user.id;

        try {
            const todo = await Todos.findOne({_id: idTodo, UserId: userID})
            if(!todo){
                res.status(404).json({
                    message: "Todo tidak ditemukan"
                })
                return;
            }
            res.status(200).json({
                message: "Berhasil mendapatkan data",
                data: todo
            })

        } catch (error) {
            res.status(500).json({
                message: "Gagal mendapatkan data",
                error: error.message
            })
        }

    },

    // update todo by id
    updateTodo: async (req, res) => {
        const idTodo = req.params.id;
        const userID = req.user.id;

        const data = req.body;
        const { value, status } = data;

        try {
            const todo = await Todos.findOne({_id: idTodo, UserId: userID})
            if(!todo){
                res.status(404).json({
                    message: "Todo tidak ditemukan"
                })
                return;
            }

            todo.value = value || todo.value;
            todo.status = status || todo.status;

            await todo.save();

            res.status(200).json({
                message: "Berhasil update data",
                data: todo
            })

        } catch (error) {
            res.status(500).json({
                message: "Gagal update data",
                error: error.message
            })
        }
    },

    // delete todo by id
    deleteTodo: async (req, res) => {
        const idTodo = req.params.id;
        const userID = req.user.id;

        try {
            const todo = await Todos.findOne({_id: idTodo, UserId: userID})
            if(!todo){
                res.status(404).json({
                    message: "Todo tidak ditemukan"
                })
                return;
            }

            await todo.deleteOne();

            res.status(200).json({
                message: "Berhasil delete data",
                data: todo
            })

        } catch (error) {
            res.status(500).json({
                message: "Gagal delete data",
                error: error.message
            })
        }
    },

    
}