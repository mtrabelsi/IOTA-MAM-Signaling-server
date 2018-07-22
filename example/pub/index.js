const Mam = require('mam.client.js')
const IOTA = require('iota.lib.js')
const io = require('socket.io-client')
const config = require('./../../config')
const $ = require('jquery');

const iota = new IOTA({ provider: config.provider })

const socket = io(config.signalingServer);

// Initialise MAM State
let mamState = Mam.init(iota)

// Set channel mode
mamState = Mam.changeMode(
     mamState,
     config.mode,
     config.sideKey
)

// Publish to tangle
const publish = async packet => {
    // Create MAM Payload - STRING OF TRYTES
    const message = Mam.create(mamState, packet)
    // Save new mamState
    mamState = message.state
    console.log('Root: ', message.root)
    console.log('Address: ', message.address)

    $(".loading").html(`<b>Root: </b>${message.root}</br><b>Address: </b>${message.address}`);
    // sending to the subs my root address
    socket.emit('mam.channel.info', {
        root: message.root,
        address: message.address
    });
    // Attach the payload.
    await Mam.attach(message.payload, message.address)
    // notifying the subs that the message has been published
    socket.emit('mam.channel.ready', {});
}

$("a.button").click(function() {
  const payload = $('.payload').val();
  publish(payload)
});
