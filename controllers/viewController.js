// GET ----  Rendering Various View Routes 


function launch(req, res) {
    res.render('landing');
}

function loginSuccess(req, res) {
	res.render('profile');
}



module.exports = {
    launch: launch,
    loginSuccess: loginSuccess
};