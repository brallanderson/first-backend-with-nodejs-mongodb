var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var cors = require('cors');
var db = require('./db');

app.disable('x-powered-by');

//app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var api = {};
api.clients = require('./routes');

app.use('/login', api.clients);

/* Hello API */
app.get("/", function(req, resp) {
	resp.send("<h1>Hello Word!</h1>");
});

module.exports = app;
