# Intro
IOTA MAM make it easy to stream data from two or more peers in a secure way, however there is still connection between peers needs to be established in a first place before steaming data:
the subscribers of the channels needs to know the root address and the sideKey ( if mode = restricted ), these informations needs to be sent to all subscribers BEFORE the connection take place. This is excatly the same issue with Webrtc, the connection needs to be initialized and peers needs to get know each others - except for MAM is only 1 way connection.

# Goal
This repos is just providing a tool (server) and some API that you can use right away to solve this problem, you can use as :

- A tool/Server to get your peers automatically connected without worrying about managing the root addresses and so on - you only care about your APP logic.
- You want to make realtime connection between remote peers ( devices, browsers, etc ) - basically anything that can be connected to internet.

# Quick Install & Demo

- `git clone git@github.com:mtrabelsi/IOTA-MAM-Signaling-server.git`
- `npm i`
- `npm start` *to start the signaling Server*
- `npm run demo` *to build and start serving local files*
- visit http://localhost:8081/sub/ and then http://localhost:8081/pub/

# Requirements

- Node v8.11.3 or later

# Roadmap

- [x] make it work for single channel
- [ ] support for multiple channels
- [ ] Data persistence


# Requirements

- Node v8.11.3 or later

# Roadmap

- [x] make it work for single channel
- [ ] support for multiple channels
- [ ] Data persistence
