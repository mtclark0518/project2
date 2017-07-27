//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/league-app');

module.exports.Champion = require('./champion.js');
module.exports.Item = require('./items.js');