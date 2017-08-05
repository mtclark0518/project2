var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	User = require('./user_model'),
	Champion = require('./champion');



var List = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	champion: {type: Schema.Types.ObjectId, ref: 'Champion'}
});




module.exports = mongoose.model('List', List);