var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Champion = require('./champion.js');
var User = require('./user_model.js');


var FavoriteList =  new Schema({

    _creator : {type: Schema.Types.ObjectId, ref: 'User'}, 
    _champion : [{type: Schema.Types.ObjectId, ref: 'Champion'} ]
});

module.exports = mongoose.model('FavoriteList', FavoriteList);
