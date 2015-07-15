var express = require('express');
var path = require('path');
var jade = require('jade');
var middlewares = require('./middlewares/admin');

var ExpressServer = function(config){
	config = config || {};

	this.expressServer = express();

	/*Load Middlewares */
	for(middleware in middlewares){
		this.expressServer.use(middlewares[middleware]);
	}
	
	/* Template engine */
	this.expressServer.set('views', path.join(__dirname, 'website/views/templates'));
	this.expressServer.set('view engine', 'jade');

	/* urls */
	this.expressServer.get('/', function(req, res){
		res.send('Bienvenido desde el Home');
	});

	this.expressServer.post('/testPost', function(req, res){
		res.send('Datos del Post: ' + req.body.first_name + ' ' + req.body.last_name);
	});

	this.expressServer.get('/testPost', function(req, res){
		res.render('index');
	});

	this.expressServer.get('/getName', function(req, res){
		res.json({ first_name: 'Ymir', last_name: 'Acosta' });
	});
};

module.exports = ExpressServer;