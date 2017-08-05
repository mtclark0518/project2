var db = require("../models");


function getChamps(req, res){
	db.Champion.find({}, function(err, champions) {
		res.json(champions);
	});
}

function showChamps(req, res){
	res.render('layout');
}



function postChamps(req, res){

}


module.exports = {
	getChamps : getChamps,
	showChamps : showChamps,
	postChamps : postChamps
};