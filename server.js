//////////////////////
/////DEPENDENCIES/////
//////////////////////

//EXPRESS
var express = require('express'),
	app = express();

var db = require('./models');


// serve static files in public
app.use(express.static('public'));

//BODY-PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//EJS
var ejs = require('ejs');
app.set('views', __dirname);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

///////////////////////
///////ROUTES//////////
///////////////////////
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/league', function(req, res) {
	db.Champion.find(function(err, champions) {
		if (err) {returnconsole.log("index error: " + err);}
		res.json(champions);
	});
});
//Champ form
app.get('/league/newChamp', function(req, res) { //look at that controller
	res.sendFile(__dirname+'/views/newChamp.html'); 
});

//Add new champ
app.post('/league', function(req, res) { 
	db.Champion.create({tyep: req.body.type, id: req.body.id, name: req.body.name, title: req.body.title}, function(error, nerd) {
		res.render('champ_show', {champion: champion});
	});
});




///////////////////////////
///////START SERVER////////
///////////////////////////
app.listen(3000, function() {
	console.log("listening at http://localhost:3000");
});