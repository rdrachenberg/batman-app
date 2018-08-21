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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__next_static_style_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__next_static_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__next_static_style_css__);





var linkStyle = {
  marginRight: 15
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Batman App' : _ref$title;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2683872646"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    className: "jsx-2683872646"
  }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2683872646"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2683872646"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
    crossorigin: "anonymous",
    className: "jsx-2683872646"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "_next/static/style.css",
    className: "jsx-2683872646"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    className: "jsx-2683872646"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    className: "jsx-2683872646" + " " + "navbar navbar-expand-sm bg-dark navbar-dark"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
    className: "jsx-2683872646"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "/",
    className: "jsx-2683872646" + " " + "navbar-brand"
  }, "Batman TV App")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-2683872646" + " " + "navbar-toggler"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-2683872646" + " " + "navbar-toggler-icon"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "navbarSupportedContent",
    className: "jsx-2683872646" + " " + "collapse navbar-collapse"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-2683872646" + " " + "navbar-nav mr-auto"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-2683872646" + " " + "nav-item"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "/about",
    className: "jsx-2683872646" + " " + "nav-link"
  }, "About")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-2683872646" + " " + "nav-item"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "/contact",
    className: "jsx-2683872646" + " " + "nav-link"
  }, "Contact")))))), children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2683872646",
    css: [".bg-primary.jsx-2683872646{background-color:#1e2225;}"]
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossorigin: "anonymous",
    className: "jsx-2683872646"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
    crossorigin: "anonymous",
    className: "jsx-2683872646"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    integrity: "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",
    crossorigin: "anonymous",
    className: "jsx-2683872646"
  }));
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(1);


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '15px solid #000000'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: layoutStyle
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], null), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MyLayout__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MyLayout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, " This is a simple React and Next.js website that pulls data from TVmaze.com API "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, " Technologies used "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "tech-images"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "tech-list"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Node.js"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, " React "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Next.js"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Express")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "node-js",
    src: "https://www.valuecoders.com/blog/wp-content/uploads/2018/05/featured.jpg"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "react-js",
    src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/4445319/original/58b332866815381e7c758143f8bc8ece0de96edd/create-reusable-react-js-components.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "next-js",
    src: "https://cdn-images-1.medium.com/max/1600/1*CwR-D3C1x5MwD4bT0yJ4RA.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "express-js",
    src: "https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default"
  })))));
});

/***/ })
/******/ ]);