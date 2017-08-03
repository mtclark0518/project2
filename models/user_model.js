var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var User = new mongoose.Schema({
    local: {
    	email 		: String,
    	password 	: String,
    }
    // summoner_name: String,
});

User.methods.hash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validate = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
