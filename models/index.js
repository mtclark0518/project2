//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/league-app");


	module.exports.List = require('./lists.js');
	module.exports.Champion = require('./champion.js');
	module.exports.Item = require('./items.js');
	module.exports.User = require('./user_model.js');
