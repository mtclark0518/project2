var passport = require('passport');
var db = require('../models');

//GET 
function getSignup(request, response, next){
	response.render('signup.ejs', { message: request.flash('signupMessage') });
}

//POST
function postSignup(request, response, next) {
	var signupStrategy = passport.authenticate('local-signup', {
<<<<<<< HEAD
		successRedirect 	: '/profile',
		failureRedirect 	: '/signup',
		failureFlash 		: true
=======
		successRedirect : '/profile/' + request.body.email,
		failureRedirect : '/signup',
		failureFlash : true
>>>>>>> c3d735a511072bdda29dd3ac3252c5ecae9b5ef8
	});
	return signupStrategy(request, response, next);
}

<<<<<<< HEAD
//GET 
function getLogin (request, response, next){
	response.render('login.ejs', {message: request.flash('loginMessage') });
}

//POST
function postLogin (request, response, next) {
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect 	: '/profile',
		failureRedirect 	: '/login',
		failureFlash 		: true
	});
	return loginStrategy(request, response, next);
}
//GET 
function getLogout (request, response, next){
	request.logout();
	response.redirect('/');
=======

//GET 
function getLogin (request, response, next){
	response.render('login', { message: request.flash('loginMessage')});
}
//POST
 function postLogin (request, response, next){
 	var loginStrategy = passport.authenticate('local-login', {
 		successRedirect : '/profile/'+ request.body.email,
 		failureRedirect : '/login',
 		failureFlash : true
 	});
 	return loginStrategy(request, response, next);
}

//GET 
function getLogout (request, response, next){
	request.logout();
	response.redirect('./');
>>>>>>> c3d735a511072bdda29dd3ac3252c5ecae9b5ef8
}


module.exports = {
<<<<<<< HEAD
	getLogin 	: getLogin,
	postLogin	: postLogin,
	getSignup	: getSignup,
	postSignup	: postSignup,
	getLogout 	: getLogout
};
=======
	// postNewaccount: postNewaccount,
	getLogout: getLogout,
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup
};






// function login(req, res) {
//     res.render('profile');
// }

// function champion_search(req, res) {
//     res.render('layout');
// }

// function register(req, res) {
//     res.render('newUserForm');	
// }
//     login: login,
//     champion_search: champion_search,
//     register: register
// function postNewaccount (request, response) {
// 	var summonerId = request.body.summoner_name;
// 	db.User.findOne({'req.body.email' : email }, function(err, user) {
// 		if (err) return callback(err);

// 		user.summoner_name = summonerId;
// 		user.save(function(err) {
// 			if (err) throw err;
// 		});
// 		response.redirect('/profile');
// 	});
// }



>>>>>>> c3d735a511072bdda29dd3ac3252c5ecae9b5ef8
