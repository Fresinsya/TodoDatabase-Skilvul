const mongoose = require('mongoose');

// buat struktur tabel
const userSchema = new mongoose.Schema({
    name: String,
    username : String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User