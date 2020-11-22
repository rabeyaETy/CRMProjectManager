//DECLARATION
var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
var home  		= require('./controllers/home');
var post  		= require('./controllers/post');
var notice  	= require('./controllers/notice');
var event  		= require('./controllers/event');
var user  		= require('./controllers/user');
var login  		= require('./controllers/login');
var logout  	= require('./controllers/logout');
//var delete  	= require('./controllers/delete');
var app 		= express();

//CONGIFURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParse.urlencoded({extended:false}));
app.use(exSession({secret:"my top secret value", saveUninitialized:true, resave:false}));
app.use(cookieParser());
app.use('/home', home);
app.use('/user', user);
app.use('/post', post);
app.use('/notice', notice);
app.use('/event', event);
app.use('/login', login);
app.use('/logout', logout);
//app.use('/delete', delete);
//ROUTING
app.get('/', function(req, res){
	res.redirect('/home');
});


//SERVER STARTUP
app.listen(1357, function(){
	console.log('server started at 1357...');
});
