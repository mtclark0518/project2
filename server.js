//CONFIGURATION
//////////////////////

var express   		= require('express');
var app 			= express();
var path  		 	= require('path');
var bodyParser 		= require('body-parser');
var mongoose 		= require('mongoose');
var passport     	= require('passport');
var flash        	= require('connect-flash');
var morgan       	= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser   	= require('body-parser');
var ejs 			= require('ejs');
var session      	= require('express-session');
var db 				= require('./models');
var apiKey 			= require('./apikey.js');



app.use(morgan('dev')); 
app.use(cookieParser());


//BODY-PARSER
app.use(bodyParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//EJS VIEW ENGINE
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use('/', routes);

///////START SERVER////////
app.listen(process.env.PORT || 3000, function () {
    console.log("listening at http://localhost:3000");
});