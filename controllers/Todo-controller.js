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
    }
}