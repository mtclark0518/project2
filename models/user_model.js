var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var User = new mongoose.Schema({
    email : String,
    password : String,
    summoner_name: String,
});

User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};




module.exports = mongoose.model('User', User);