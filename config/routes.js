var express = require('express');
var router = express.Router();

// Parse info from POST
var bodyParser = require('body-parser');

//Use to manipulate POST methods
var methodOverride = require('method-override');

var passport = require('passport');
var viewController = require('../controllers/viewController.js');
var userController = require('../controllers/user_controller.js');
var championController = require('../controllers/champion_controller.js');
var favoriteController = require('../controllers/favorite_controller.js');

//HTTP RESPONSE
router.route("/")
    .get(viewController.launch);

router.route("/signup")
	.get(userController.getSignup)
	.post(userController.postSignup);

router.route("/login")
	.get(userController.getLogin)
	.post(userController.postLogin);

router.route("/logout")
	.get(userController.getLogout);

router.route("/profile/:user")
	.get(viewController.showUser);

router.route("/champions")
	.get(championController.showChamps);



//JSON RESPONSE
router.route("/api/champions")
	.get(championController.getChamps);

router.route("/api/champions/:_id")
	.get(championController.showOneChamp);

router.route("/api/favorites")
	.get(favoriteController.getAllUserLists);

router.route("/api/favorites/:_id")
	.get(favoriteController.showOneUserList)
	.put(favoriteController.addAFavorite);


module.exports = router;

