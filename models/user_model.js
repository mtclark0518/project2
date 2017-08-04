var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var User = new mongoose.Schema({
    summoner_name: String,
    local: {
    	email 			: String,
    	password 		: String,
    }
});

User.methods.hash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
