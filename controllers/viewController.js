<<<<<<< HEAD
function landing(req, res) {
    res.render('landing');
}

function profile(req, res) {
	res.render('profile');
}

module.exports = {
    landing	: landing,
    profile	: profile
};
=======
// GET ----  Rendering Various View Routes 
var db = require('../models');





function launch(req, res) {
    res.render('landing');
}

function showUser(req, res) {
	var thisOne = req.body.email;
	db.User.findOne({ 'local.email': thisOne}, function(err, user) {
		if (err) return console.log("error: " + err);
		res.render('profile');
	});
}





module.exports = {
    launch: launch,
    showUser: showUser
};












// function loginSuccess(req, res) {

// 	console.log(paramaters);
// 	res.render('profile');
// }
>>>>>>> c3d735a511072bdda29dd3ac3252c5ecae9b5ef8
