// note, io(<port>) will create a http server for you
var io = require('socket.io')(8080);
// will be filled by the Publisher info
let channel = {}

io.on('connection', function (socket) {
  socket.on('mam.channel.info', function (info) {
    channel = info
    console.log('Channel info updated ', info);
  });

  socket.on('mam.channel.ready', function () {
    console.log('MAM channel is ready for fetching')
    // sending to all Subscribers
    io.emit('mam.channel.ready', channel);
  });

  socket.on('disconnect', function () {
    io.emit('node disconnected');
  });
});
