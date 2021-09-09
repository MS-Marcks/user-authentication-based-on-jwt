const { Router } = require('express');
const ControllerLogin = Router();
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

ControllerLogin.get('/', (req, res) => {
    const token = jwt.sign({ foo: 'bar' }, process.env.TOKEN_HASH);
    res.json(token);
})

exports.ControllerLogin = ControllerLogin;