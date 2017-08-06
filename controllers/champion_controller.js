var db = require("../models");


function getChamps(req, res){
	db.Champion.find({}, function(err, champions) {
		res.json(champions);
	});
}

function showChamps(req, res){
	res.render("layout");
}



module.exports = {
	getChamps : getChamps,
	showChamps : showChamps,
};