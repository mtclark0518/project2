var request = require('request'),
	db = require('./models');

var champion_list = [];

//EXPRESS
var express = require('express');
var	app = express();

//BODY-PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var apiKey = require('./apikey.js');
var champPath = "https://na1.api.riotgames.com/lol/static-data/v3/champions?";
var champQuery = "locale=en_US&tags=image&tags=info&tags=stats&tags=tags&dataById=true";


request(champPath + champQuery + apiKey, function (error, response, body) {
	console.log('error:', error); // Print the error if one occurred 
	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	body = JSON.parse(body);
	body = body.data;
	champion_list.push(body);
	console.log(champion_list);
	// response.send(champion_list);
	

	// db.Champion.find(function(err, champions) {
	// 	if (err) {
	// 		return console.log("index error: " + err);
	// 	}
	// });
});

module.exports = champion_list;
