var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ChampionSchema = new Schema({
	type : String,
	id : Number,
	name : String,
	title : String
});
var Champion = mongoose.model('Champion', ChampionSchema);

module.exports = Champion;