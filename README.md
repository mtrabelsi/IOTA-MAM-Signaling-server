![demo mam](https://github.com/mtrabelsi/IOTA-MAM-Signaling-server/blob/master/demo.gif)



# Intro
IOTA MAM make it easy to stream data from two or more peers in a secure way, however there is still connection between peers needs to be established in a first place before steaming data:
the subscribers of the channels needs to know the root address and the sideKey ( if mode = restricted ), these informations needs to be sent to all subscribers BEFORE the connection take place. This is excatly the same issue with Webrtc, the connection needs to be initialized and peers needs to get know each others - except for MAM is only 1 way connection.

# Goal

- Automatically connects peers together
- Gives auto peers discovery
- Support multi-channel ( in the Roadmap )

# Quick Install & Demo

- `git clone git@github.com:mtrabelsi/IOTA-MAM-Signaling-server.git`
- `npm i` && `cd example && npm i`
- `$/ npm run start:server` *to start the signaling Server*
- `$/example/ npm run dev` *to build and start the demo apps*
- visit http://localhost:8081/pub/ and then http://localhost:8081/sub/
- Try to publish some Data and the subcribers will automatically fetch it as soon as it is available.

# Requirements

- Node v8.11.3 or later

# Roadmap

- [x] make it work for single channel
- [ ] support for multiple app and channels
- [ ] Data persistence


