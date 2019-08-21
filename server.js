var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');
var port = 8890;


// state server
server.listen(port () => {
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

	socket.on('disconnect', function() {
	console.log('usuario desconectado');	
    redisClient.quit();
  });

});