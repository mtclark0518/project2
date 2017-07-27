var mongoose = require('mongoose');
var Schema = mongoose.Schema;
UserSchema = new Schema({
	
});

var User = mongoose.model('User', UserSchema);

module.exports = User;