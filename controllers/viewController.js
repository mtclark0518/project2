// GET ----  Rendering Various View Routes 


function launch(req, res) {
    res.render('landing');
}

function registerSucess(req, res) {
	res.render('profile');
}



module.exports = {
    launch: launch,
    registerSucess: registerSucess,
};