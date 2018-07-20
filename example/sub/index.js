const Mam = require('mam.client.js')
const IOTA = require('iota.lib.js')
const config = require('./../../config')
const io = require('socket.io-client')

const iota = new IOTA({ provider: config.provider })
const span = document.querySelector(".loading")

const socket = io(config.signalingServer);
socket.on('mam.channel.info', function(info) {
  span.innerHTML = `Fetching Data from <b>${info.root}</b>...`
})
socket.on('mam.channel.ready', async function (channel) {
  console.log('client channel ready', channel)
  // This will be communicated by the signaling server
  let root = channel.root
  // this should be private and not sent through the signaling server
  let sideKey = config.sideKey
  // Initialise MAM State
  let mamState = Mam.init(iota)
  // Fetch the messages syncronously
  const resp = await Mam.fetch(root, config.mode, sideKey, (data) => {
    span.innerHTML = `<b>Received Data:</b> ${data}`
  })

});
