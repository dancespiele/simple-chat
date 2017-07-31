var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log('user disconnect');
  });

  socket.on('add-message', (user, message) => {
    io.emit('message', {user: user, message});
  });

});

http.listen(4000, () => {
  console.log('started on port 4000');
})
