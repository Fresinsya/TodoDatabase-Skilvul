const mongoose = require('mongoose');

// buat struktur tabel
const todos = new mongoose.Schema({
    value: String,
    status: boolean,
    UserId: {
        type: mongoose.ObjectId,
        ref: 'User'
    } 
});

const Todos = mongoose.model('Todos', todos);

module.exports = Todos