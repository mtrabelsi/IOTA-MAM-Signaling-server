// note, io(<port>) will create a http server for you
var io = require('socket.io')(8080);

io.on('connection', function (socket) {
  socket.on('mam.channel.info', function (info) {
    console.log('I received a private message by ', info);
  });

  socket.on('mam.channel.ready', function () {
    console.log('MAM channel is ready for fetching');
  });

  socket.on('disconnect', function () {
    io.emit('node disconnected');
  });
});
