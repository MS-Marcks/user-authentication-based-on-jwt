const { Router } = require('express');
const ControllerPublic = Router();

ControllerPublic.get('/', (req, res) => {
    res.json([{ data: 'informacion publica' }, { data: 'informacion publica' }, { data: 'informacion publica' }, { data: 'informacion publica' }])
})

exports.ControllerPublic = ControllerPublic;