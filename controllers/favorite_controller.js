var db = require('../models');


//GET ALL USERS LISTS
function getAllUserLists(req, res) {

	res.json(lists);
}

//GET A SIGNLE USERS LIST
function getOneUserList(req, res) {
	
	res.json(list);
}


//CREATE A NEW USER LIST
function createUserList(req, res) {
	res.json(list);
}



//POST A NEW FAVORITE TO LIST
function addAFavorite(req, res) {

}

//EDIT NOTES ABOUT A FAVORITE
function editAFavorite(req, res) {

}

//DELETE A FAVORITE FROM THE LIST
function deleteAFavorite(req, res) {

}


module.exports = {
	getAllUserLists : getAllUserLists,
	getOneUserList : getOneUserList,
	createUserList : createUserList,
	addAFavorite : addAFavorite,
	editAFavorite : editAFavorite,
	deleteAFavorite : deleteAFavorite
};