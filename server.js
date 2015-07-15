var http = require('http');
var ExpressServer = require('./app/expressServer');

var app = new ExpressServer();

var server = http.createServer(app.expressServer);
server.listen('3000', function(){
	console.log('Server Running on http://localhost:3000');
});