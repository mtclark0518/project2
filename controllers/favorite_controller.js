var db = require('../models');


//GET ALL USERS LISTS
function getAllUserLists(req, res) {
	db.FavoriteList.find({}, function(err, favoritelists) {
		if (err) return console.log("error: " + err);
			res.json(favoritelists);
	});
}

//GET A SIGNLE USERS LIST
function showOneUserList(req, res) {
	db.FavoriteList.findOne({ _creator : req.params._id }, function(error, favoritelist) {
		if (error) throw error;
		res.json(favoritelist);
	});
	
}

//ADD A NEW FAVORITE TO LIST
function addAFavorite(req, res) {
	db.FavoriteList.findOne({ _creator : req.body._creator}, function(err, favoritelist) {
		if (err) return console.log("error: " + err);
		console.log(favoritelist);
		res.send("favoritelist._creator = " + favoritelist._creator);
	});
	console.log(req.body._creator);
	console.log(req.body._champion);
	res.send(req.body._champion + " is the request body...or champ_id and " + req.body._creator + " is the request _id or user_id");
}	

	// var newChampion = req.body.champion;
	// console.log(newChampion);
	// // console.log(req.params.user);
	// db.User.findOne({email: 'mtclark0518@gmail.com'}, function(error, favorite) {
	// 	if (error) throw error;
	// 	favorite.champion.push(newChampion);
	// 	favorite.save(function(error) {
	// 		if (error) return console.log("error: " + error);
	// 		console.log('saved');
	// 		res.json(favorite);
		// });

		// db.User.findOne({ 'local.email' : "mtclark0518@gmail.com" }, function(error, user) {
		// 	if (error) throw error;
		// 	user.favorites.remove({}, function(error, favorites) {
		// 		if (error) throw error;
		// 		user.favorites = favorite.champion;
		// 		user.save(function(error) {
		// 			if (error) throw error;
		// 			console.log(user.email + " added to their favorites. there new list includes ");
		// 		});
		// 	});
		// });
	// });
	
	//find the user making the request
	//find that users favorite list and save to a variable 
	//on click send new champion to that favorite list
	//check for a champion with name requested
		//if it exists throw an err

		//create a new champion from request data
		//save it to the db

		//access User documents favorite property
		//remove the contents
			//set contents equal favorite list champions
			//save updated favorites list

		//access champion list in profile.ejs
			//clear contents
		//set contents equal to user favorites	

// }

//EDIT NOTES ABOUT A FAVORITE
function editAFavorite(req, res) {

}

//DELETE A FAVORITE FROM THE LIST
function deleteAFavorite(req, res) {

}


module.exports = {
	getAllUserLists : getAllUserLists,
	showOneUserList : showOneUserList,
	addAFavorite : addAFavorite,
	editAFavorite : editAFavorite,
	deleteAFavorite : deleteAFavorite
};