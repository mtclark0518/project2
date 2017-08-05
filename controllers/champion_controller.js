var db = require("../models");


function getChamps(req, res){
	db.Champion.find({}, function(err, champions) {
		res.json(champions);
	});
}

function showChamps(req, res){
	res.render('layout');
}

function showOneChamp(req, res){
	res.render();
}

function postChamps(req, res){

}


module.exports = {
	getChamps : getChamps,
	showChamps : showChamps,
	showOneChamp : showOneChamp,
	postChamps : postChamps
};