const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            res.status(403).json({
                message: 'No token provided!'
            })
            return;
        }

        const bearer = token.split(' ')[1];
        if (!bearer) {
            res.status(403).json({
                message: 'No token provided!'
            })
            return;
        }

        try {
            const decoded = jwt.verify(bearer, process.env.SECRET_KEY);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(500).json({
                message: 'Failed to authenticate token!'
            })
        }

    }
}