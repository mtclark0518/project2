var db = require("../models");


function getChamps(req, res){
	db.Champion.find({}, function(err, champions) {
		res.json(champions);
	});
}

function showChamps(req, res){
	var user = db.User.findOne( { 'local.email' : req.body.email  } );
	res.redirect("/profile/" + user.email + "/champions");
}



module.exports = {
	getChamps : getChamps,
	showChamps : showChamps,
};