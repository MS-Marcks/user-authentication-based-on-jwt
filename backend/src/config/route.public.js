const { Router } = require('express');

const ControllerPublic = require('../controller/ControllerPublic')
const ControllerLogin = require('../controller/ControllerLogin')

const route = Router();

route.use("/", ControllerPublic.ControllerPublic)
route.use("/login", ControllerLogin.ControllerLogin)

exports.RoutePublic = route;