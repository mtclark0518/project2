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

	passport.use('local-signup', new LocalStrategy({
		usernameField: "email",
		passwordField: "password",
		passReqToCallback: true
	}, function(req, email, password, callback) {
		db.User.findOne({'local.email' : email }, function(err, user) {
			if (err) return callback(err);

			//Email already exists
			if (user) {
				return callback(null, false, req.flash('signupMessage', "This email is already assosciated with an account'chey"));
			} else {
			//No user wit dis email
				//make new user
				var newUser 				= new db.User();
				newUser.local.email 		= email;
				newUser.local.password 		= newUser.hash(password);
				newUser.summoner_name = req.body.summoner_name;

				newUser.save(function(err) {
					if (err) throw err;
					return callback(null, newUser);
				});
			}

		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: "email",
		passwordField: "password",
		passReqToCallback: true
	}, function(req, email, password, callback) {
		db.User.findOne({'local.email' : email }, function(err, user) {
			if (err) return callback(err);

<<<<<<< HEAD
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
=======
			if (!user) {
				return callback(null, false, req.flash('loginMessage', "no account for this email"));
			}
			if (!user.validPassword(password)) {
				return callback(null, false, req.flash('loginMessage', "incorrect password"));
			} else {
				return callback(null, user);
			}
>>>>>>> c3d735a511072bdda29dd3ac3252c5ecae9b5ef8
		});
	}));
};