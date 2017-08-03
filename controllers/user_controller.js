var passport = require('passport');

//GET 
function getSignup (request, response){
	response.render('signup', { message: request.flash('signupMessage') });
}

//POST
function postSignup (request, response, next) {
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect 	: '/',
		failureRedirect 	: '/signup',
		failureFlash 		: true
	});
	return signupStrategy(request, response, next);
}

//GET 
function getLogin (request, response){
	response.render('login', {message: request.flash('loginMessage')});
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
}

module.exports = {
	getSignup	: getSignup,
	postSignup	: postSignup,
	getLogin 	: getLogin,
	postLogin	: postLogin,
	getLogout 	: getLogout
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