var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	User = require('./user_model'),
	Champion = require('./champion');



var Favorite = new mongoose.Schema({
	champion : String
	// champion: {type: Schema.Types.ObjectId, ref: 'Champion'}
});




module.exports = mongoose.model('Favorite', Favorite);