var express = require('express');
var router = express.Router();

// Parse info from POST
var bodyParser = require('body-parser');

//Use to manipulate POST methods
var methodOverride = require('method-override');

var passport = require('passport');
var viewController = require('../controllers/viewController.js');
var userController = require('../controllers/user_controller.js');

//HTTP RESPONSE


router.route("/")
    .get(viewController.landing);

router.route("/signup")
	.get(userController.getSignup)
	.post(userController.postSignup);

router.route("/login")
	.get(userController.getLogin)
	.post(userController.postLogin);

router.route("/logout")
	.get(userController.getLogout);

router.route("/profile")
	.get(viewController.profile);

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

