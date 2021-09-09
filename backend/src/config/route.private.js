const { Router } = require('express');

const ControllerPrivate = require('../controller/ControllerPrivate')


const route = Router();

route.use("/", ControllerPrivate.ControllerPrivate)

exports.RoutePrivate = route;