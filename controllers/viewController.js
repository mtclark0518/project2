// GET ----  Rendering Various View Routes 


function launch(req, res) {
    res.render('landing');
}


function success(req, res) {
	res.render('profile');
}



module.exports = {
    launch				: launch,
    success				: success
};