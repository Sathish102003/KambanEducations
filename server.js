// modules =================================================
var express        = require('express');
var app            = express();

// configuration ===========================================
var port = process.env.PORT || 8080; // set our port

// get all data/stuff of the body (POST) parameters
app.use(express.static(__dirname + '/src/main/webapp')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./src/main/webapp/app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
exports = module.exports = app; 						// expose app