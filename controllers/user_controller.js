var User = require('../models/user_model');

// GET
function launch(request, response) {
    response.render('index');
}





function getAll(request, response) {
    User.find(function(error, users) {
        if (error) {response.json({message: 'Could not find any users'}); }
        console.log("Rendering users");
        response.render('layout');
    });
}


module.exports = {
    launch: launch,
    getAll: getAll
};