var db = require("../models");


function getChamps(req, res){
	db.Champion.find({}, function(err, champions) {
		res.json(champions);
	});
}



function postChamps(req, res){

}


module.exports = {
	getChamps : getChamps,
	postChamps : postChamps
};