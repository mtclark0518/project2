//CONFIGURATION
//////////////////////

//EXPRESS
var express = require('express');
var	app = express();



//BODY-PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//EJS
var ejs = require('ejs');
app.set('views', __dirname);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// serve static files in public
app.use(express.static('public'));


var db = require('./models');


//ROUTES
///////////////////////
var apiKey = require("./apikey.js");
// var routes = require("./routes/routes");
// app.use(routes);

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


//Champ form
app.get('/league/newChamp', function(req, res) { //look at that controller
	res.sendFile(__dirname+'/views/newChamp.html'); 
});
app.get('/league/search', function(req,res){
	res.sendFile(__dirname+'/views/partials/summoner_search.html');
});

//Add new champ
app.post('/league', function(req, res) { 
	db.Champion.create({type: req.body.type, id: req.body.id, name: req.body.name, title: req.body.title}, function(error, nerd) {
		res.render('champ_show', {champion: champion});
	});
});




///////////////////////////
///////START SERVER////////
///////////////////////////
app.listen(process.env.PORT || 3000, function() {
	console.log("listening at http://localhost:3000");
});