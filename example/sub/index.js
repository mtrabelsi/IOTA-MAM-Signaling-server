const Mam = require('mam.client.js')
const IOTA = require('iota.lib.js')
const config = require('./../../config')
const io = require('socket.io-client')

const iota = new IOTA({ provider: config.provider })

const socket = io(config.signalingServer);

socket.on('connect', function () {
  // on connect handler
});

socket.on('mam.channel.ready', function (channel) {
  console.log('client channel ready', channel)
  // This will be communicated by the signaling server
  let root = channel.root
  // this should be private and not sent through the signaling server
  let sideKey = config.sideKey
  // Initialise MAM State
  let mamState = Mam.init(iota)

  const execute = async () => {
      // Fetch the messages syncronously
      const resp = await Mam.fetch(root, config.mode, sideKey, console.log)
  }

  execute()
});
