var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/register', usersController.register);
router.get('/profile', usersController.profile);

module.exports = router;
