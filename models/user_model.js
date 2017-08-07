var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var FavoriteList = require('./favoriteList.js');
var Schema = mongoose.Schema;






var User = new Schema({
    local: {
        email       : String,
        password    : String,
    },

    favorites: [ {type: Schema.Types.String, ref: 'FavoriteList'} ],

    summoner: {
        name        : String,
        level       : Number,
        accountId   : Number 
    },
});

User.methods.hash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
	
User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', User);
