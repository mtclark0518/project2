var passport = require('passport');

//GET 
function getSignup (request, response, next){
	response.render('signup', { message: request.flash('signupMessage') });
}

//POST
function postSignup (request, response, next){
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect : '/',
		failureRedirect : '/signup',
		failureFlash : true
	});
	return signupStrategy(request, response, next);
}

//GET 
function getLogin (){

}
//POST
 function postLogin (){

}
//GET 
function getLogout (){

}

module.exports = {
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