var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');



var User = new mongoose.Schema({
    local: {
    	email 		: String,
    	password 	: String,
    }
});

User.methods = {
	hash: function(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
	},
	validate: function(password) {
		return bcrypt.compareSync(password, this.local.password);
	}
};
	


module.exports = mongoose.model('User', User);
