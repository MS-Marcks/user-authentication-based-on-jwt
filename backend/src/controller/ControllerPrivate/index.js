const { Router, response } = require('express');
const ControllerPrivate = Router();
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

ControllerPrivate.get('/', (req, res) => {
    try {
        const token = jwt.verify(req.headers['x-access-token'].split(" ")[1], process.env.TOKEN_HASH);
        res.json([{ data: 'informacion privada' }, { data: 'informacion privada' }, { data: 'informacion privada' }, { data: 'informacion privada' }])
    } catch (error) {
        res.status(403).json("Error")
    }

})

exports.ControllerPrivate = ControllerPrivate;