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
    var userId = req.user._id;
    db.FavoriteList.findOne({ _creator: userId }, function(err, favoritelist) {
        if (err) return console.log("error: " + err);
        res.json(favoritelist);
        console.log(favoritelist);

    });
}


//ADD A NEW FAVORITE TO LIST
function addAFavorite(req, res) {
    console.log(req.body);
    db.FavoriteList.findOne({ _creator: req.user._id }, function(err, favoritelist) {
        if (err) return console.log("error: " + err);
        favoritelist.champion.push(req.body.champion);
        favoritelist.save(function(err) {
            if (err) return console.log(err);

            db.User.findOne({ _id: favoritelist._creator }, function(err, user) {
                if (err) return console.log("error: " + err);
                var userFavorites = favoritelist.champion;
                user.favorites = userFavorites;
                console.log(userFavorites);
                user.save(function(err) {
                    if (err) return console.log('error: ' + err);
                });
            });
            res.send(favoritelist);
        });
    });
}

//EDIT NOTES ABOUT A FAVORITE
function editAFavorite(req, res) {

}

//DELETE A FAVORITE FROM THE LIST
function deleteAFavorite(req, res) {
    console.log(req.params);
    db.FavoriteList.findOne({ _creator: req.user._id }, function(err, favoritelist) {
        if (err) return console.log(err);
        var theseChamps = favoritelist.champion;
        theseChamps.forEach(function(champ, index) {
            if (champ !== null) {
                if (champ._id === req.params._champ) {
                    theseChamps.splice(index, 1);
                    console.log(champ.name + " has been deleted");
                    favoritelist.save(function(err) {
                        if (err) return console.log(err);
                        console.log("favorite list has been saved")
                    });
                    res.json(favoritelist);
                }
            }
        });
    });
}


module.exports = {
    getAllUserLists: getAllUserLists,
    showOneUserList: showOneUserList,
    addAFavorite: addAFavorite,
    editAFavorite: editAFavorite,
    deleteAFavorite: deleteAFavorite
};



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