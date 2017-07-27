var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ItemSchema = new Schema({
	
});

var Item = mongoose.model('Item', ItemSchema);
module.exports = Item;