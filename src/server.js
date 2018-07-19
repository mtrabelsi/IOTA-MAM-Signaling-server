// note, io(<port>) will create a http server for you
var io = require('socket.io')(8080);

io.on('connection', function (socket) {
  io.emit('pm', { will: 'be received by everyone'});

  socket.on('pmc', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});
