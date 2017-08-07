var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var bcrypt = require('bcrypt-nodejs');
var FavoriteList = require('./favoriteList.js');
var Champion = require('./champion.js');
var Schema = mongoose.Schema;

var User = new Schema({
    local: {
        email       : String,
        password    : String,
    },

    favorites: [ {type: Schema.Types.ObjectId, ref: 'Champion'} ],

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

User.plugin(findOrCreate);

module.exports = mongoose.model('User', User);
