var passport = 			require('passport');
var LocalStrategy = 	require('passport-local').Strategy;
var db = 				require('../models');

module.exports = function(passport) {

	passport.serializeUser(function(user, callback) {
		callback(null, user.id);
	});
	passport.deserializeUser(function(id, callback) {
		db.User.findById(id, function(err, user) {
			callback(err, user); 
		});
	});

	passport.use('local-signup', new LocalStrategy ({
		usernameField: "email",
		passwordField: "password",
		passReqToCallback: true
	}, function(req, email, password, callback) {
		db.User.findOne({'local.email': email}, function(err, user) {
			if (err) return callback(err);
			if (user) {
				return callback(null, false, req.flash('signupMessage', "email in use"));
			} else {
				var newUser = new db.User({
					local: {
						email: email,
						password: password
					}
				});
				newUser.save(function(err) {
					if (err) throw err;
					return callback(null, newUser);
				});
			} 
		});
	}));


	passport.use('local-login', new LocalStrategy ({
		usernameField: "email",
		passwordField: "password",
		passReqToCallback: true
	}, function(req, email, password, callback) {
		db.User.findOne({ 'local.email' : email}, function(err, user) {
			if (err) return callback(err);
			
			//Username doesn't exist
			if (!user) {
				return callback(null, false, req.flash('loginMessage', "no account found for this email"));
			} 
			
			//Password incorrect
			if(!user.validate(password)) {
				return callback(null, false, req.flash('loginMessage', "password incorrect"));
			}
			return callback(null, user);
		});
	}));
};