// GET ----  Rendering Various View Routes 


function launch(req, res) {
    res.render('landing');
}

function registerSuccess(req, res) {
	res.render('newaccount');
}

function loginSuccess(req, res) {
	res.render('profile');
}



module.exports = {
    launch: launch,
    registerSuccess: registerSuccess,
    loginSuccess: loginSuccess
};