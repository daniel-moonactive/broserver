'use strict';

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

io.on('connection', function(socket){
  socket.emit('request', /* */); // emit an event to the socket
  io.emit('broadcast', /* */); // emit an event to all connected sockets
  socket.on('reply', function(){ /* */ }); // listen to the event
});

var server = app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});

const io = require("socket.io")(server);

io.on('connection',(socket) => {
	console.log('New Connection');
})