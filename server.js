var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');


// state server
server.listen(8890)

//websockets

io.on('connection', (socket) => {
	console.log('nueva conexion');
	// var redisClient = redis.createClient();
	// console.log(redisClient);
	// redisClient.subscribe('message');
	// redisClient.on('message', function(channel, message){
	// 	console.log('nuevo mensaje en: ',channel, message);
	// });

});