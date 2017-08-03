var express = require('express');
var router = express.Router();
var controller = require('../controllers/viewController.js');

//HTTP RESPONSE


router.route("/")
//GET----------
    .get(controller.launch);


//JSON RESPONSE

//----------------------------------------------------------------//

router.route("/champions")
//GET----------
    .get(controller.champion_search);

//----------------------------------------------------------------//


router.route("/profile/")
    .get(controller.login);

router.route("/register")
    .get(controller.register);

module.exports = router;

