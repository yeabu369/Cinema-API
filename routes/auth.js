var express = require('express');
var router = express.Router();

var controller = require('../controllers/auth');

/* GET users listing. */
router.get('/', controller.getAuth);
router.post('/signin', controller.signIn);
router.post('/signup', controller.signUp);

module.exports = router;