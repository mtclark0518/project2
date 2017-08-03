var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var viewController = require('../controllers/viewController.js');
var user_controller = require('../controllers/user_controller.js');

//HTTP RESPONSE


router.route("/")
//GET----------
    .get(viewController.launch);


//JSON RESPONSE

//----------------------------------------------------------------//

// router.route("/champions")
// //GET----------
//     .get(controller.champion_search);

//----------------------------------------------------------------//


// router.route("/profile/")
//     .get(controller.login);

// router.route("/register")
//     .get(controller.register);

module.exports = router;

