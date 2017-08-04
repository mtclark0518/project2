// GET ----  Rendering Various View Routes 
var db = require('../models');

function launch(req, res) {
    res.render('landing');
}

function loginSuccess(req, res) {

	console.log(paramaters);
	res.render('profile');
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
    loginSuccess: loginSuccess,
    showUser: showUser
};