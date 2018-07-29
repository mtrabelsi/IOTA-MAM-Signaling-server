
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

 function Feedback(state) {
   let feedback = null;
   if(!state.root) {
     feedback = (<div className="has-text-danger">
        <i className="fas fa-unlink" style={{marginRight: '10px'}}></i>
          Not yet connected to Signaling server
      </div>)
   }
   return feedback
 }

 class Pub extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       beforeLoadingState: true,
       loading: false,
       channelReady: false,
       payload: '',
       root: ''
     }
   }

   componentDidMount() {
     socket.on('mam.channel.info', (info) => {
       console.log(`Fetching Data from ${info.root}...`)
       this.setState({
          root: info.root,
          beforeLoadingState: false,
          loading: true
        })
     })
     socket.on('mam.channel.ready', async (channel) => {
       console.log('client channel ready', channel)
       // This will be communicated by the signaling server
       let root = channel.root
       // this should be private and not sent through the signaling server
       let sideKey = config.sideKey
       // Initialise MAM State
       let mamState = Mam.init(iota)
       // Fetch the messages syncronously
       const resp = await Mam.fetch(root, config.mode, sideKey, (data) => {
         console.log(`Received Data: ${data}`)
         this.setState({ loading: false, payload: data })
       })

     });
   }
   render() {
     return (
       <div>
         <Head />
         <section className="section">
           <div className="container">
             <h1 className="title">Demo MAM Subscriber</h1>
           </div>
         </section>
         <section className="section">
           <div className="container">

              <div className="loader__container">
                  <section className="loader__animation">
                    { this.state.beforeLoadingState ?  <Feedback {...this.state} /> : null }
                    { this.state.loading ? (<Loader
                       type={animation.anim2}
                       color="#23d160"
                       height="100"
                       width="100"
                    />) : null}
                    { !this.state.loading && this.state.payload ? (<span><strong>Data retreived</strong>: {this.state.payload}</span>): null }
                  </section>

                  <section className="loader__feedback">
                   { !this.state.channelReady && this.state.loading ?
                      (<span>Fetching from the tangle...</span>) :
                       null
                    }
                  </section>
              </div>

           </div>
         </section>
         <style jsx>{`
           .loader__container {
             display: flex;
             align-items: center;
             justify-content: center;
             flex-wrap: nowrap;
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
