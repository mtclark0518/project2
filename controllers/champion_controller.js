var db = require("../models");


function getChamps(req, res){
	db.Champion.find({}, function(err, champions) {
		res.json(champions);
	});
}

function showChamps(req, res){
	res.render('layout');
}


 
function postChampToList(req, res){
	console.log('i will eventually post a champ to favorites');
}


module.exports = {
	getChamps : getChamps,
	showChamps : showChamps,
	postChampToList : postChampToList
};