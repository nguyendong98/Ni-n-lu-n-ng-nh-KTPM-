var express = require('express');
var route = express.Router();
const exerciseController = require('../controllers/exercise.controller');


route.get('/', exerciseController.index)


module.exports = route;