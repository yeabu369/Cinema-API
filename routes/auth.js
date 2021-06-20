var express = require('express');
var router = express.Router();

var controller = require('../controllers/auth');

/* GET users listing. */
router.get('/', controller.getAuth);
router.post('/signIn', controller.signIn);
router.post('/signUp', controller.signUp);

module.exports = router;
