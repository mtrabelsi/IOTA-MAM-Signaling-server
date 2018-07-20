# Intro
IOTA MAM make it easy to stream data from two or more peers in a secure way, however there is still connection between peers needs to be established in a first place before steaming data:
the subscribers of the channels needs to know the root address and the sideKey ( if mode = restricted ), these informations needs to be sent to all subscribers BEFORE the connection take place. This is excatly the same issue with Webrtc, the connection needs to be initialized and peers needs to get know each others - except for MAM is only 1 way connection.

# Quick Install & Demo

- clone the ropos
- npm i
- npm start #to start the signaling Server
- npm run demo #to build and start serving local files
- visit http://localhost:8081/sub/ and then http://localhost:8081/pub/

# Requirements

- Node v8.11.3 or later

# Roadmap

- [x] make it work for single channel
- [ ] support for multiple channels
- [ ] Data persistence
