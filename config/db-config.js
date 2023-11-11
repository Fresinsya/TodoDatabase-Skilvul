const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbURL = process.env.DB_URL;

const db = mongoose.connect(dbURL);

module.exports = db;