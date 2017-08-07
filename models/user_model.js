var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// var Favorite = require('./favorite.js');
var Champion = require('./champion.js');




var FavoriteSchema =  new mongoose.Schema({
    champion : [String]
});



var User = new mongoose.Schema({
    
    summoner: {
        name        : String,
        level       : Number,
        accountId   : Number 
    },
    
    summoner_name: String,
    summonerLevel: Number,
    accountId: String,
    favorites: [ FavoriteSchema ],
    // favorites: [ { champion : String } ],
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


var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = mongoose.model('User', User);
