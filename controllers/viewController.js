// GET ----  Rendering Various View Routes 
var db = require('../models');


function launch(req, res) {
    res.render('landing');
}

function showUser(req, res) {
    var thisOne = req.body.email;

    db.User.findOne({ 'local.email': thisOne }, function(err, user) {
        if (err) return console.log("error: " + err);
        console.log('sanity check');
        res.render('profile');
    });

}

function getUserStats(req, res) {
    console.log(res.body.accountId);
    res.send(json);
}


module.exports = {
    launch: launch,
    showUser: showUser,
    getUserStats: getUserStats
};