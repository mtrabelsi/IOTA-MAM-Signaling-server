const Mam = require('mam.client.js')
const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: `https://testnet140.tangle.works` })

// Init State
let root = 'NSYZMGHHOLQFOWTTQIAGVCOCIAU99MQTUENKMQKUJDNDDEIXMSHJKBJDKOQPSJXFEHCAHCNSZQQLKUEME'
let sideKey = 'IREALLYENJOYPOTATORELATEDPRODUCTS'
// Initialise MAM State
let mamState = Mam.init(iota)
/*
// Publish to tangle
const publish = async packet => {
    const message = Mam.create(mamState, packet)
    mamState = message.state
    await Mam.attach(message.payload, message.address)
    return message.root
} */

const execute = async () => {
    // Publish and save root.
  //  root = await publish('POTATOONE')
    // Publish but not save root
    //await publish('POTATOTWO')

    ///////////////////////////////////
    // Fetch the messages syncronously
    const resp = await Mam.fetch(root, 'restricted', sideKey, console.log)
    console.log('resp')
}

execute()
