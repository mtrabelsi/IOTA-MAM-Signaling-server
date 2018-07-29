
import Mam from 'mam.client.js'
import IOTA from 'iota.lib.js'
import io from 'socket.io-client'
import config from './../../config'
import Head from '../components/head'

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

    //$(".loading").html(`<b>Root: </b>${message.root}</br><b>Address: </b>${message.address}`);
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
/*
$("a.button").click(function() {
  const payload = $('.payload').val();
  publish(payload)
});
 */
export default () =>
  <div>
    <Head />
    <section className="section">
      <div className="container">
        <h1 className="title">Demo MAM publisher</h1>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="notification is-warning">
          <button className="delete"></button>
          <span className="loading"><a className="button is-info is-loading">Loading</a></span>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-large payload" type="text" placeholder="Enter Tryte-encoded String here" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <a className="button is-success is-large">Publish</a>
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
