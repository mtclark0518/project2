var db = require("../models");


function getChamps(req, res){
	db.Champion.find({}, function(err, champions) {
		res.json(champions);
	});
}

function showChamps(req, res){
	res.render("layout");
}
function showOneChamp(req, res){
	var thisOne = req.params._id;
	db.Champion.findOne({_id : thisOne}, function(err, champion) {
		if (err) return console.log('error: ' + err);
		res.json(champion);
	});
}


module.exports = {
	getChamps : getChamps,
	showChamps : showChamps,
};