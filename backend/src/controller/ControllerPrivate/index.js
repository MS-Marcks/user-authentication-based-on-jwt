const { Router } = require('express');
const ControllerPrivate = Router();
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

ControllerPrivate.get('/:token', (req, res) => {
    const token = jwt.verify(req.params.token, process.env.TOKEN_HASH);
    res.json(token);
})

exports.ControllerPrivate = ControllerPrivate;