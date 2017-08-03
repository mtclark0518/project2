var LocalStrategy = 	require('passport-local').Strategy;
var User = 				require('../models/user_model');

module.exports = function(passport) {
	passport.serializeUser(function(user, callback) {
		callback(null, user.id);
	});
	passport.deserializeUser(function(id, callback) {
		User.findById(id, function(err, user) {
			callback(err, user); 
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true

	}, function(req, email, password, callback) {
		User.findOne({'local.email' : email }, function(err, user) {
			if (err) return callback("error: " + err);

			//Email already exists
			if (user) {
				return callback(null, false, req.flash('signupMessage', 'This email is already assosciated with an account\'chey'));
			} else {
			//No user wit dis email
				//make new user
				var newUser 			= new User();
				newUser.local.email 		= email;
				newUser.local.password 	= newUser.encrypt(password);

				newUser.save(function(err) {
					if (err) throw err;
					return callback(null, newUser);
				});
			}

		});
	}));


};