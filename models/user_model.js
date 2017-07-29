var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email : String,
    password : String,
    summoner_name: String,
    accountId: Number,
});

var User = mongoose.model('User', UserSchema);

module.exports = User;