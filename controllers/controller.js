// GET ----  Rendering Various View Routes 


function launch(request, response) {
    response.render('index');
}

function login(request, response) {
    response.render('profile');
}

function champion_search(request, response) {
    response.render('layout');
}


module.exports = {
    launch: launch,
    login: login,
    champion_search: champion_search
};