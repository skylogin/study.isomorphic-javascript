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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _Router = __webpack_require__(7);

var _Router2 = _interopRequireDefault(_Router);

var _Html = __webpack_require__(25);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
var port = process.env.PORT || 3000;

server.use(_express2.default.static(_path2.default.join(__dirname, "public")));

server.get("*", function (req, res) {
  var component = _Router2.default.match(req);
  var body = _server2.default.renderToString(component);
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, {
    title: "My App",
    description: "Isomorphic web application sample",
    body: body
  }));
  res.send("<!doctype html>\n" + html);
});

server.listen(port, function () {
  console.log("Node.js is listening at http://localhost:" + port);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//경로를 이곳에 등록
var routes = [__webpack_require__(8).default, __webpack_require__(23).default, __webpack_require__(24).default];

var router = {
  match: function match(location) {
    var route = routes.find(function (x) {
      return x.path === location.path;
    });

    if (route) {
      try {
        return route.action();
      } catch (err) {
        return routes.find(function (x) {
          return x.path === "/500";
        }).action();
      }
    } else {
      return routes.find(function (x) {
        return x.path === "/404";
      }).action();
    }
  }
};

exports.default = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

var _Hero = __webpack_require__(22);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = "/";
var action = function action() {
  return _react2.default.createElement(
    _Layout2.default,
    { hero: _react2.default.createElement(_Hero2.default, null) },
    _react2.default.createElement(Home, null)
  );
};

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      window.location = event.currentTarget.pathname;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h2",
          null,
          "Popular things to rent"
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "a",
            { href: "/s/Tools", onClick: this.handleClick },
            _react2.default.createElement(
              "span",
              null,
              "Tools"
            )
          ),
          _react2.default.createElement(
            "a",
            { href: "/s/Books", onClick: this.handleClick },
            _react2.default.createElement(
              "span",
              null,
              "Books"
            )
          ),
          "..."
        )
      );
    }
  }]);
  return Home;
}(_react.Component);

exports.default = { path: path, action: action };

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = __webpack_require__(16);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(_ref) {
  var hero = _ref.hero,
      children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: _Layout2.default.root },
    _react2.default.createElement(
      _Header2.default,
      null,
      hero
    ),
    _react2.default.createElement(
      "main",
      null,
      children
    ),
    _react2.default.createElement(
      "footer",
      null,
      _react2.default.createElement(
        "span",
        null,
        "Company Name"
      )
    )
  );
}

Layout.propTypes = {
  hero: _propTypes2.default.element,
  children: _propTypes2.default.element.isRequired
};

exports.default = Layout;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    "header",
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "span",
        null,
        "My App"
      ),
      !children && _react2.default.createElement(
        "form",
        null,
        _react2.default.createElement("input", { type: "search" })
      ),
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "span",
          null,
          "Username"
        ),
        _react2.default.createElement("img", { src: "#" })
      )
    ),
    children
  );
}

Header.propTypes = {
  children: _propTypes2.default.element
};

exports.default = Header;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(17);
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(20).add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(undefined);
// imports


// module
exports.push([module.i, "/* //// Shadows ///////////////////////////////////////////////////////////// */\n/* //// Animations ////////////////////////////////////////////////////////// */\n.Layout_root_110 {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n}\n", ""]);

// exports
exports.locals = {
	"root": "Layout_root_110"
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var styleStack = __webpack_require__(21);
// it's necessary setting initialStyleStack as it may not be required as the same module between webpack and the user
// due to path differences in certain scenarios
global.initialStyleStack = (global.initialStyleStack !== undefined) ? global.initialStyleStack : new styleStack();

// initial style collection
exports.add = add.bind(null, initialStyleStack);

exports.collectInitial = function collectInitial() {
  var styleTag = initialStyleStack.getStyleTag();
  exports.add = inactiveAdd;
  // commented-out so it doesn't have to be stored by the user and to test hot-reload
  //initialStyleStack = undefined;
  return styleTag;
}

exports.collectContext = function collectContext(fn) {

  var contextStyleStack = new styleStack();

  // include path differences may make this fail, TODO: test
  exports.add = add.bind(null, contextStyleStack);
  var result = fn();
  exports.add = inactiveAdd;

  return [
    contextStyleStack.getStyleTag(),
    result
  ]
}

function add(stack, list, options) {
  var styles = styleStack.listToStyles(list);
  stack.addStylesToStack(styles, options);
}

function inactiveAdd() {}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var styleStack = module.exports = function styleStack() {
  this.stylesInStack = {}; // this is stylesInDom in style-loader
  this.stackStyleElement = { // this is roughly equivalent to singletonElement in style-loader
    cssText: ""
  };
  this.singletonCounter = 0;
}

styleStack.prototype.addStylesToStack = function addStylesToStack(styles, options) {
  for(var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var stackStyle = this.stylesInStack[item.id];
    if(stackStyle) {
      stackStyle.refs++;
      for(var j = 0; j < stackStyle.parts.length; j++) {
        stackStyle.parts[j](item.parts[j]); // calls updateStyle function
      }
      for(; j < item.parts.length; j++) {
        stackStyle.parts.push(this.addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];
      for(var j = 0; j < item.parts.length; j++) {
        parts.push(this.addStyle(item.parts[j], options));
      }
      this.stylesInStack[item.id] = {id: item.id, refs: 1, parts: parts};
    }
  }
}

styleStack.prototype.addStyle = function addStyle(obj) {
  var styleIndex = this.singletonCounter++;
  var update = applyToSingletonTag.bind(null, this.stackStyleElement, styleIndex);

  update(obj); // call update once for first insertion

  return function updateStyle(newObj) {
    if(newObj) {
      if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
        return;
      update(obj = newObj); // this case is not properly handled and would only be reached
                            // if re-including a style while specifying a different sourceMap or media option
    }
  };
}

styleStack.prototype.getStyleTag = function getStyleTag() {
  return '<style class="server-style-loader-element">'+this.stackStyleElement.cssText+'</style>';
}

function applyToSingletonTag(styleElement, index, obj) {
  styleElement.cssText = replaceText(index, obj.css);
}

module.exports.listToStyles = function listToStyles(list) {
  var styles = [];
  var newStyles = {};
  for(var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {css: css, media: media, sourceMap: sourceMap};
    if(!newStyles[id])
      styles.push(newStyles[id] = {id: id, parts: [part]});
    else
      newStyles[id].parts.push(part);
  }
  return styles;
}


var replaceText = (function () {
  var textStore = [];

  return function (index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
})();


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hero() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h2",
      null,
      "Rent Anything You Want"
    ),
    _react2.default.createElement(
      "p",
      null,
      "From people around you"
    ),
    _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement("input", { type: "search", placeholder: "I want to rent..." }),
      _react2.default.createElement(
        "button",
        null,
        "Search"
      )
    )
  );
}

exports.default = Hero;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = "/404";
var action = function action() {
  return _react2.default.createElement(NotFound, null);
};

function NotFound() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Page Not Found"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Sorry, but the page you were trying to view does not exist."
    )
  );
}

exports.default = { path: path, action: action };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = "/500";
var action = function action() {
  return _react2.default.createElement(InternalError, null);
};

function NotFound() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Server Internal Error"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Sorry, We can fix it."
    )
  );
}

exports.default = { path: path, action: action };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(props) {
  return _react2.default.createElement(
    "html",
    null,
    _react2.default.createElement(
      "head",
      null,
      _react2.default.createElement("meta", { charSet: "utf-8" }),
      _react2.default.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
      _react2.default.createElement(
        "title",
        null,
        props.title || ""
      ),
      _react2.default.createElement("meta", { name: "description", content: props.description || "" }),
      _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      _react2.default.createElement("script", { src: "client.js" })
    ),
    _react2.default.createElement(
      "body",
      null,
      _react2.default.createElement("div", { id: "app", dangerouslySetInnerHTML: { __html: props.children } })
    )
  );
};

exports.default = Html;

/***/ })
/******/ ]);