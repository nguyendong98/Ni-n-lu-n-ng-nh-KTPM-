var express = require('express')
var router = express.Router()
const userController = require('../controllers/user.controller')


router.get('/', userController.index )
router.post('/add', userController.add)

module.exports = router