const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    register: async (req, res) => {
        const data = req.body;

        const { name, username, email, password } = data;

        if (!name || !username || !email || !password) {
            res.status(400).json({
                message: "Semua field harus diisi"
            })
            return;
        }

        const cekEmail = await User.findOne({ email: email });
        if (cekEmail) {
            res.status(400).json({
                message: "Email sudah terdaftar"
            })
            return;
        }

        const cekUsername = await User.findOne({ username: username });
        if (cekUsername) {
            res.status(400).json({
                message: "Username sudah terdaftar"
            })
            return;
        }

        try {
            const user = await User.create(data);
            res.status(201).json({
                message: "Register berhasil",
                data: user
            })

        } catch (error) {
            res.status(500).json({
                message: "Register gagal",
                error: error.message
            })

        }
    },


    // LOGIN
    Login: async (req, res) => {
        const data = req.body;

        const { email, password } = data;

        if (!email || !password) {
            res.status(400).json({
                message: "Semua field harus diisi"
            })
            return;
        }

        const cekEmail = await User.findOne({ email: email });
        if (!cekEmail) {
            res.status(400).json({
                message: "Email belum terdaftar"
            })
            return;
        }

        if (cekEmail.password !== password) {
            res.status(400).json({
                message: "Password salah"
            })
            return;
        }

        try {
            const token = jwt.sign({ id: cekEmail._id, email: cekEmail.email }, process.env.SECRET_KEY);
            res.status(200).json({
                token: token,
                message: "Login berhasil",
                data: cekEmail
            })

        } catch (error) {
            res.status(500).json({
                message: "Login gagal",
                error: error.message
            })

        }
    }
}