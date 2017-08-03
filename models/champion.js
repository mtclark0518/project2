var mongoose = require('mongoose');

var Champion = new mongoose.Schema({
	name : String,
	tags : String,
	title : String,
	key : String,
	id : Number,
	info : {
		difficulty : Number,
		attack : Number,
		defense : Number,
		magic : Number
	},
	stats : {
		armorperlevel: Number,
		attackdamage: Number,
		mpperlevel: Number,
		attackspeedoffset: Number,
		mp: Number,
		armor: Number,
		hp: Number,
		hpregenperlevel: Number,
		attackspeedperlevel: Number,
		attackrange: Number,
		movespeed: Number,
		attackdamageperlevel: Number,
		mpregenperlevel: Number,
		critperlevel: Number,
		spellblockperlevel: Number,
		crit: Number,
		mpregen: Number,
		spellblock: Number,
		hpregen: Number,
		hpperlevel: Number
	}
});

module.exports = mongoose.model('Champion', Champion);

// "data": {
//         "1": {
//             
//             "stats": {
//                 "armorperlevel": 4,
//                 "attackdamage": 50.41,
//                 "mpperlevel": 50,
//                 "attackspeedoffset": 0.08,
//                 "mp": 334,
//                 "armor": 19.22,
//                 "hp": 511.68,
//                 "hpregenperlevel": 0.55,
//                 "attackspeedperlevel": 1.36,
//                 "attackrange": 575,
//                 "movespeed": 335,
//                 "attackdamageperlevel": 2.625,
//                 "mpregenperlevel": 0.8,
//                 "critperlevel": 0,
//                 "spellblockperlevel": 0.5,
//                 "crit": 0,
//                 "mpregen": 6,
//                 "spellblock": 30,
//                 "hpregen": 5.424,
//                 "hpperlevel": 76
//             },
//             "name": "Annie",
//             "tags": [
//                 "Mage"
//             ],
//             "title": "the Dark Child",
//             "key": "Annie",
//             "id": 1
//         },