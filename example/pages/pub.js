
import Mam from 'mam.client.js'
import IOTA from 'iota.lib.js'
import io from 'socket.io-client'
import config from './../../config'
import Head from '../components/head'
import Loader from 'react-loader-spinner'
import React from 'react'

const animation = {
  anim1: 'Circles',
  anim2: 'Ball-Triangle'
}
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

 class Pub extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       loading: false,
       channelReady: false,
       payload: '',
       root: ''
     }
     this.handlePublish = this.handlePublish.bind(this)
     this.handleInputChange = this.handleInputChange.bind(this)
   }
   handleInputChange(e) {
     this.setState({ payload: e.target.value.toUpperCase() })
   }
   async handlePublish(e) {
     this.setState({ loading: true })

     // Create MAM Payload - STRING OF TRYTES
     const message = Mam.create(mamState, this.state.payload)
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
     this.setState({
       loading: false,
       channelReady: true,
       root: message.root
      })

   }
   render() {
     return (
       <div>
         <Head />
         <section className="section">
           <div className="container">
             <h1 className="title">Demo MAM publisher</h1>
           </div>
         </section>
         <section className="section">
           <div className="container">

              <div className="loader__container">
                  <section className="loader__animation">
                    { this.state.loading ? (<Loader
                       type={animation.anim2}
                       color="#23d160"
                       height="100"
                       width="100"
                    />) : null}
                    { this.state.channelReady ? (<Loader
                       type={animation.anim1}
                       color="#23d160"
                       height="100"
                       width="100"
                    />): null }
                  </section>

                  <section className="loader__feedback">
                   { this.state.channelReady ?
                      (<span>Payload published to the tangle, <strong>Root: </strong> {this.state.root}</span>) :
                      this.state.loading && (<span>Publishing to the tangle...</span>)
                    }
                  </section>
              </div>

             <div className="field">
               <div className="control">
                 <input value={this.state.payload} onChange={this.handleInputChange} className="input is-large payload" type="text" placeholder="Enter Tryte-encoded String here [A-Z9]" />
               </div>
             </div>

             <div className="field">
               <div className="control">
                 <a onClick={this.handlePublish} className={`button is-success is-large ${this.state.loading ? 'is-loading is-warning' : ''}`}>Publish</a>
               </div>
             </div>

           </div>
         </section>
         <style jsx>{`
           .loader__container {
             display: flex;
             align-items: center;
             justify-content: center;
           }
           .loader__animation {
             margin-bottom: 20px;
           }
           .loader__feedback {
             margin: 25px;
           }
         `}</style>
       </div>
     )
   }
 }
export default Pub
