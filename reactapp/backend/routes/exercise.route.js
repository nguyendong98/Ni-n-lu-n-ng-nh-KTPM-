var express = require('express');
var route = express.Router();
const exerciseController = require('../controllers/exercise.controller');


route.get('/', exerciseController.index)
route.post('/add', exerciseController.add)
route.get('/:id', exerciseController.search)
route.delete('/:id', exerciseController.delete)
route.post('/update/:id', exerciseController.update)

module.exports = route;