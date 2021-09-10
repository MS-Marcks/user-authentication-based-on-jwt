const { Router } = require('express');
const ControllerLogin = Router();
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

ControllerLogin.post('/', (req, res) => {
    const body = req.body;
    const token = jwt.sign(body, process.env.TOKEN_HASH);
    res.json({ code: 200, message: { token } });
})

exports.ControllerLogin = ControllerLogin;