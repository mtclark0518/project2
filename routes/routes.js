var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var bodyParser = require('body-parser'); //parses information from POST



router.route("/")
//GET----------
    .get(controller.launch);



//----------------------------------------------------------------//

router.route("/champions")
//GET----------
    .get(controller.champion_search);

//----------------------------------------------------------------//


router.route("/profile/")
    .get(controller.login);



module.exports = router;

