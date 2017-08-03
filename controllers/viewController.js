// GET ----  Rendering Various View Routes 


function launch(req, res) {
    res.render('landing');
}

function login(req, res) {
    res.render('profile');
}

function champion_search(req, res) {
    res.render('layout');
}

function register(req, res) {
    res.render('newUserForm');	
}


module.exports = {
    launch: launch,
    login: login,
    champion_search: champion_search,
    register: register
};