function landing(req, res) {
    res.render('landing');
}

function profile(req, res) {
	res.render('profile');
}

module.exports = {
    landing	: landing,
    profile	: profile
};