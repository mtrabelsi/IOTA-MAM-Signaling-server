
const Mam = require('mam.client.js')
const IOTA = require('iota.lib.js')
const io = require('socket.io-client')
const iota = new IOTA({ provider: `https://testnet140.tangle.works` })

const socket = io('http://localhost:8080');

socket.on('connect', function () {
  //socket.send('hi');

  /*socket.on('pm', function (msg) {
    console.log('fromserver', msg)
  }); */
});

// Initialise MAM State
let mamState = Mam.init(iota)

// Set channel mode
mamState = Mam.changeMode(
     mamState,
    'restricted',
    'IREALLYENJOYPOTATORELATEDPRODUCTS'
)

// Publish to tangle
const publish = async packet => {
    // Create MAM Payload - STRING OF TRYTES
    const message = Mam.create(mamState, packet)
    // Save new mamState
    mamState = message.state
    console.log('Root: ', message.root)
    console.log('Address: ', message.address)
    // sending to the subs my root address
    socket.emit('mam.channel.info', {
        root: message.root,
        address: message.address
    });
    // Attach the payload.
    await Mam.attach(message.payload, message.address)
    // notifying the subs that the message has been published
    socket.emit('mam.channel.ready', {});

/*
    // Fetch Stream Async to Test
    const resp = await Mam.fetch(
        message.root,
        'restricted',
        'IREALLYENJOYPOTATORELATEDPRODUCTS',
        console.log
    )
    console.log(resp) */
}

publish('MARWEN999AAA')
