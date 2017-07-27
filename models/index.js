//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/league-app" );

module.exports.Champion = require('./champion.js');
module.exports.Item = require('./items.js');