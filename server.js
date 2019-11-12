var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');

var host = '172.31.31.204';
var port = 5002;



// state server
server.listen(port, host, () => {
  console.log('Server running');
});

//websockets

io.on('connection', function(socket) {
	
	console.log('nueva conexion');

	var redisClient = redis.createClient();
	
	redisClient.subscribe('message');
	redisClient.on('message', function(channel, message){
		socket.emit(channel, message);
	});

	redisClient.subscribe('asunto');
	redisClient.on('asuntoo', function(channel, asunto){
		socket.emit(channel, asunto);
	});

	socket.on('disconnect', function() {
	console.log('usuario desconectado');	
    redisClient.quit();
  });

});