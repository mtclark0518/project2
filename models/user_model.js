var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

var User = new mongoose.Schema({
    email : String,
    password : String,
    summoner_name: String,
});

User.




module.exports = mongoose.model('User', User);