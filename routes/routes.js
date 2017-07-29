var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller');
var bodyParser = require('body-parser'); //parses information from POST



//USER ROUTES
router.route("/")
//GET
    .get(user_controller.launch);

router.route("/search")
//GET
    .get(user_controller.getAll);


module.exports = router;