//CONFIGURATION
//////////////////////

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var routes = require('./routes/routes.js');
var db = require('./models');
var apiKey = require("./apikey.js");


//EXPRESS
var app = express();

//BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//EJS VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.use(routes);

///////START SERVER////////
app.listen(process.env.PORT || 3000, function () {
    console.log("listening at http://localhost:3000");
});