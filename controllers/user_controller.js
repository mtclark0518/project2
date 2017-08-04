var passport = require('passport');

//GET 
function getSignup (request, response, next){
	response.render('signup', { message: request.flash('signupMessage') });
}

//POST
function postSignup (request, response, next){
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect : '/newaccount',
		failureRedirect : '/signup',
		failureFlash : true
	});
	return signupStrategy(request, response, next);
}

//GET 
function getLogin (request, response, next){
	response.render('login', { message: request.flash('loginMessage')});
}
//POST
 function postLogin (request, response, next){
 	var loginStrategy = passport.authenticate('local-login', {
 		successRedirect : '/profile',
 		failureRedirect : '/login',
 		failureFlash : true
 	});
 	return loginStrategy(request, response, next);
}
//GET 
function getLogout (request, response, next){
	request.logout();
	response.redirect('./');
}

module.exports = {
	
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