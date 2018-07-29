module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../config.js":
/***/ (function(module, exports) {

module.exports = {
  sideKey: 'IREALLYENJOYPOTATORELATEDPRODUCTS',
  mode: 'restricted',
  provider: 'https://testnet140.tangle.works',
  signalingServer: 'http://localhost:8080'
}


/***/ }),

/***/ "./components/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/home/marwen/Documents/IOTA-MAM-Signaling-server/example/components/head.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-3062420940"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3062420940"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3062420940"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3062420940"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    defer: true,
    src: "https://use.fontawesome.com/releases/v5.1.0/js/all.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3062420940"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3062420940",
    css: "body{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFHb0IsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFyd2VuL0RvY3VtZW50cy9JT1RBLU1BTS1TaWduYWxpbmctc2VydmVyL2V4YW1wbGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC43LjEvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMS4wL2pzL2FsbC5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/head.js */"
  }));
});

/***/ }),

/***/ "./pages/pub.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mam_client_js__ = __webpack_require__("mam.client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mam_client_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mam_client_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iota_lib_js__ = __webpack_require__("iota.lib.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iota_lib_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iota_lib_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("socket.io-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("../config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_head__ = __webpack_require__("./components/head.js");

var _jsxFileName = "/home/marwen/Documents/IOTA-MAM-Signaling-server/example/pages/pub.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var iota = new __WEBPACK_IMPORTED_MODULE_4_iota_lib_js___default.a({
  provider: __WEBPACK_IMPORTED_MODULE_6__config___default.a.provider
});
var socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default()(__WEBPACK_IMPORTED_MODULE_6__config___default.a.signalingServer); // Initialise MAM State

var mamState = __WEBPACK_IMPORTED_MODULE_3_mam_client_js___default.a.init(iota); // Set channel mode

mamState = __WEBPACK_IMPORTED_MODULE_3_mam_client_js___default.a.changeMode(mamState, __WEBPACK_IMPORTED_MODULE_6__config___default.a.mode, __WEBPACK_IMPORTED_MODULE_6__config___default.a.sideKey); // Publish to tangle

var publish =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(packet) {
    var message;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Create MAM Payload - STRING OF TRYTES
            message = __WEBPACK_IMPORTED_MODULE_3_mam_client_js___default.a.create(mamState, packet); // Save new mamState

            mamState = message.state;
            console.log('Root: ', message.root);
            console.log('Address: ', message.address); //$(".loading").html(`<b>Root: </b>${message.root}</br><b>Address: </b>${message.address}`);
            // sending to the subs my root address

            socket.emit('mam.channel.info', {
              root: message.root,
              address: message.address
            }); // Attach the payload.

            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_3_mam_client_js___default.a.attach(message.payload, message.address);

          case 7:
            // notifying the subs that the message has been published
            socket.emit('mam.channel.ready', {});

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function publish(_x) {
    return _ref.apply(this, arguments);
  };
}();
/*
$("a.button").click(function() {
  const payload = $('.payload').val();
  publish(payload)
});
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    className: "jsx-798384299"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_head__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    className: "jsx-798384299" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: "jsx-798384299" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: "jsx-798384299" + " " + "title"
  }, "Demo MAM publisher"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    className: "jsx-798384299" + " " + "section"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: "jsx-798384299" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: "jsx-798384299" + " " + "notification is-warning"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: "jsx-798384299" + " " + "delete"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    className: "jsx-798384299" + " " + "loading"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    className: "jsx-798384299" + " " + "button is-info is-loading"
  }, "Loading"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-798384299" + " " + "field"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: "jsx-798384299" + " " + "control"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
    type: "text",
    placeholder: "Enter Tryte-encoded String here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-798384299" + " " + "input is-large payload"
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    className: "jsx-798384299" + " " + "field"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    className: "jsx-798384299" + " " + "control"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    className: "jsx-798384299" + " " + "button is-success is-large"
  }, "Publish"))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "798384299",
    css: "@media (max-width:600px){div.jsx-798384299{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3B1Yi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RWdCLEFBSTJCLGdCQUNsQiIsImZpbGUiOiJwYWdlcy9wdWIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWFyd2VuL0RvY3VtZW50cy9JT1RBLU1BTS1TaWduYWxpbmctc2VydmVyL2V4YW1wbGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBNYW0gZnJvbSAnbWFtLmNsaWVudC5qcydcbmltcG9ydCBJT1RBIGZyb20gJ2lvdGEubGliLmpzJ1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJ1xuXG5jb25zdCBpb3RhID0gbmV3IElPVEEoeyBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyIH0pXG5cbmNvbnN0IHNvY2tldCA9IGlvKGNvbmZpZy5zaWduYWxpbmdTZXJ2ZXIpO1xuXG4vLyBJbml0aWFsaXNlIE1BTSBTdGF0ZVxubGV0IG1hbVN0YXRlID0gTWFtLmluaXQoaW90YSlcblxuLy8gU2V0IGNoYW5uZWwgbW9kZVxubWFtU3RhdGUgPSBNYW0uY2hhbmdlTW9kZShcbiAgICAgbWFtU3RhdGUsXG4gICAgIGNvbmZpZy5tb2RlLFxuICAgICBjb25maWcuc2lkZUtleVxuKVxuXG4vLyBQdWJsaXNoIHRvIHRhbmdsZVxuY29uc3QgcHVibGlzaCA9IGFzeW5jIHBhY2tldCA9PiB7XG4gICAgLy8gQ3JlYXRlIE1BTSBQYXlsb2FkIC0gU1RSSU5HIE9GIFRSWVRFU1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBNYW0uY3JlYXRlKG1hbVN0YXRlLCBwYWNrZXQpXG4gICAgLy8gU2F2ZSBuZXcgbWFtU3RhdGVcbiAgICBtYW1TdGF0ZSA9IG1lc3NhZ2Uuc3RhdGVcbiAgICBjb25zb2xlLmxvZygnUm9vdDogJywgbWVzc2FnZS5yb290KVxuICAgIGNvbnNvbGUubG9nKCdBZGRyZXNzOiAnLCBtZXNzYWdlLmFkZHJlc3MpXG5cbiAgICAvLyQoXCIubG9hZGluZ1wiKS5odG1sKGA8Yj5Sb290OiA8L2I+JHttZXNzYWdlLnJvb3R9PC9icj48Yj5BZGRyZXNzOiA8L2I+JHttZXNzYWdlLmFkZHJlc3N9YCk7XG4gICAgLy8gc2VuZGluZyB0byB0aGUgc3VicyBteSByb290IGFkZHJlc3NcbiAgICBzb2NrZXQuZW1pdCgnbWFtLmNoYW5uZWwuaW5mbycsIHtcbiAgICAgICAgcm9vdDogbWVzc2FnZS5yb290LFxuICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3NcbiAgICB9KTtcbiAgICAvLyBBdHRhY2ggdGhlIHBheWxvYWQuXG4gICAgYXdhaXQgTWFtLmF0dGFjaChtZXNzYWdlLnBheWxvYWQsIG1lc3NhZ2UuYWRkcmVzcylcbiAgICAvLyBub3RpZnlpbmcgdGhlIHN1YnMgdGhhdCB0aGUgbWVzc2FnZSBoYXMgYmVlbiBwdWJsaXNoZWRcbiAgICBzb2NrZXQuZW1pdCgnbWFtLmNoYW5uZWwucmVhZHknLCB7fSk7XG59XG4vKlxuJChcImEuYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICBjb25zdCBwYXlsb2FkID0gJCgnLnBheWxvYWQnKS52YWwoKTtcbiAgcHVibGlzaChwYXlsb2FkKVxufSk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgpID0+XG4gIDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5EZW1vIE1BTSBwdWJsaXNoZXI8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uIGlzLXdhcm5pbmdcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZVwiPjwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmdcIj48YSBjbGFzc05hbWU9XCJidXR0b24gaXMtaW5mbyBpcy1sb2FkaW5nXCI+TG9hZGluZzwvYT48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtbGFyZ2UgcGF5bG9hZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBUcnl0ZS1lbmNvZGVkIFN0cmluZyBoZXJlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zdWNjZXNzIGlzLWxhcmdlXCI+UHVibGlzaDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4iXX0= */\n/*@ sourceURL=pages/pub.js */"
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/pub.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "iota.lib.js":
/***/ (function(module, exports) {

module.exports = require("iota.lib.js");

/***/ }),

/***/ "mam.client.js":
/***/ (function(module, exports) {

module.exports = require("mam.client.js");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=pub.js.map