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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = __webpack_require__(3);

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default("sqlite:database.sqlite", {
  define: { freezeTableName: true }
});

exports.default = sequelize;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = __webpack_require__(3);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = __webpack_require__(4);

var _sequelize4 = _interopRequireDefault(_sequelize3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _sequelize4.default.define("User", {
  id: {
    type: _sequelize2.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: { type: _sequelize2.default.TEXT, validate: { isEmail: true } },
  password: { type: _sequelize2.default.TEXT },
  displayName: { type: _sequelize2.default.TEXT }
});

exports.default = User;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray2 = __webpack_require__(12);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _expressGraphql = __webpack_require__(13);

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = __webpack_require__(14);

var _schema2 = _interopRequireDefault(_schema);

var _models = __webpack_require__(18);

var _models2 = _interopRequireDefault(_models);

__webpack_require__(23);

var _path = __webpack_require__(24);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(25);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(26);

var _server2 = _interopRequireDefault(_server);

var _Router = __webpack_require__(27);

var _Router2 = _interopRequireDefault(_Router);

var _Html = __webpack_require__(41);

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
var port = process.env.PORT || 3000;

server.use(_express2.default.static(_path2.default.join(__dirname, "public")));

//authentication mock
server.use(function (req, res, next) {
  if (typeof req.query.admin !== "undefined") {
    req.user = { name: "Tarkus " };
  } else {
    req.user = null;
  }
  next();
});

server.use("/graphql", (0, _expressGraphql2.default)({
  schema: _schema2.default,
  rootValue: { user: 1 },
  graphql: true,
  pretty: process.env.NODE_ENV !== "produection"
}));

_models2.default.sync({ force: process.env.NODE_ENV !== "production" }).catch(function (err) {
  return console.error(err.stack);
}).then(function () {
  server.listen(port, function () {
    return console.log("Node.js server is listening at http://localhost:" + port + "/");
  });
});

server.get("*", function (req, res) {
  var state = { user: req.user };

  var _Router$match = _Router2.default.match(req, state),
      _Router$match2 = (0, _slicedToArray3.default)(_Router$match, 2),
      component = _Router$match2[0],
      page = _Router$match2[1];

  var body = _server2.default.renderToString(component);
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, {
    title: page.title,
    description: page.description,
    body: body,
    state: state
  }));
  res.send("<!doctype html>\n" + html);
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(2);

var _viewer = __webpack_require__(15);

var _viewer2 = _interopRequireDefault(_viewer);

var _greeting = __webpack_require__(17);

var _greeting2 = _interopRequireDefault(_greeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: "Query",
    fields: {
      viewer: _viewer2.default,
      greeting: _greeting2.default
    }
  })
});

exports.default = schema;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = __webpack_require__(5);

var _User2 = _interopRequireDefault(_User);

var _UserType = __webpack_require__(16);

var _UserType2 = _interopRequireDefault(_UserType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewer = {
  type: _UserType2.default,
  resolve: function resolve(_ref) {
    var user = _ref.user;

    return _User2.default.findById(user && user.id);
  }
};

exports.default = viewer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(2);

var UserType = new _graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    email: { type: _graphql.GraphQLString },
    displayName: { type: _graphql.GraphQLString }
  }
});

exports.default = UserType;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(2);

var greeting = {
  type: _graphql.GraphQLString,
  args: {
    name: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(_, _ref) {
    var name = _ref.name;

    return "Welcome, " + (name || "Guest") + "!";
  }
};

exports.default = greeting;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Offer = exports.User = exports.default = undefined;

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(20);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var sync = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options) {
    var i, firstName, lastName;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _sequelize2.default.sync(options);

          case 2:
            if (!options.force) {
              _context.next = 12;
              break;
            }

            i = 0;

          case 4:
            if (!(i < 50)) {
              _context.next = 12;
              break;
            }

            firstName = _faker2.default.name.firstName();
            lastName = _faker2.default.name.lastName();
            _context.next = 9;
            return _User2.default.create({
              email: _faker2.default.internet.email(firstName, lastName),
              password: _faker2.default.internet.password(),
              displayName: _faker2.default.name.findName(firstName, lastName)
            });

          case 9:
            i++;
            _context.next = 4;
            break;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sync(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _faker = __webpack_require__(21);

var _faker2 = _interopRequireDefault(_faker);

var _sequelize = __webpack_require__(4);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _User = __webpack_require__(5);

var _User2 = _interopRequireDefault(_User);

var _Offer = __webpack_require__(22);

var _Offer2 = _interopRequireDefault(_Offer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Offer2.default.belongsTo(_User2.default, { as: "author" });
_User2.default.hasMany(_Offer2.default, { as: "offers", foreignKey: "authorId" });

exports.default = sync;
exports.User = _User2.default;
exports.Offer = _Offer2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = __webpack_require__(3);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = __webpack_require__(4);

var _sequelize4 = _interopRequireDefault(_sequelize3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = _sequelize4.default.define("Offer", {
  id: {
    type: _sequelize2.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  slug: { type: _sequelize2.default.TEXT },
  name: { type: _sequelize2.default.TEXT },
  priceHourly: { type: _sequelize2.default.REAL },
  priceDaily: { type: _sequelize2.default.REAL },
  priceWeekly: { type: _sequelize2.default.REAL }
});

exports.default = Offer;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Context = __webpack_require__(29);

var _Context2 = _interopRequireDefault(_Context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//경로를 이곳에 등록
var routes = [__webpack_require__(30).default, __webpack_require__(39).default, __webpack_require__(40).default];

var router = {
  match: function match(location, state) {
    var component = void 0;
    var page = {
      title: "My Application",
      description: "Isomorphic web application sample",
      status: 200
    };
    var route = routes.find(function (x) {
      return x.path === location.path;
    });

    if (route) {
      try {
        component = route.action(location, state);
      } catch (err) {
        component = routes.find(function (x) {
          return x.path === "/500";
        }).action();
        page.status = 500;
      }
    } else {
      component = routes.find(function (x) {
        return x.path === "/404";
      }).action();
      page.status = 404;
    }

    return [_react2.default.createElement(
      _Context2.default,
      (0, _extends3.default)({}, state, { page: page }),
      component
    ), page];
  }
};

exports.default = router;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = function (_Component) {
  (0, _inherits3.default)(Context, _Component);

  function Context() {
    (0, _classCallCheck3.default)(this, Context);
    return (0, _possibleConstructorReturn3.default)(this, (Context.__proto__ || (0, _getPrototypeOf2.default)(Context)).apply(this, arguments));
  }

  (0, _createClass3.default)(Context, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        page: this.props.page,
        user: this.props.user
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);
  return Context;
}(_react.Component);

Context.childContextTypes = {
  page: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    description: _propTypes2.default.string,
    status: _propTypes2.default.number
  }),
  user: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  })
};
exports.default = Context;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(31);

var _Layout2 = _interopRequireDefault(_Layout);

var _Hero = __webpack_require__(38);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(32);

var _Header2 = _interopRequireDefault(_Header);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = __webpack_require__(33);

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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM

// load the styles
var content = __webpack_require__(34);
if (typeof content === 'string') content = [[module.i, content, '']];
// collect the styles
__webpack_require__(36).add(content, {});
if (content.locals) module.exports = content.locals;
delete __webpack_require__.c[module.i];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, "/* //// Shadows ///////////////////////////////////////////////////////////// */\n/* //// Animations ////////////////////////////////////////////////////////// */\n.Layout_root_110 {\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n}\n", ""]);

// exports
exports.locals = {
	"root": "Layout_root_110"
};

/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var styleStack = __webpack_require__(37);
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(42);

var _stringify2 = _interopRequireDefault(_stringify);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Html(_ref) {
  var title = _ref.title,
      description = _ref.description,
      body = _ref.body,
      state = _ref.state;

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
        title
      ),
      _react2.default.createElement("meta", { name: "description", content: description }),
      _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      _react2.default.createElement("script", { async: true, src: "client.js" })
    ),
    _react2.default.createElement(
      "body",
      null,
      _react2.default.createElement("div", { id: "app", dangerouslySetInnerHTML: { __html: body } }),
      _react2.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "window.AppState=" + (0, _stringify2.default)(state)
        }
      })
    )
  );
}

Html.propType = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.string.isRequired,
  state: _propTypes2.default.object.isRequired
};

exports.default = Html;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ })
/******/ ]);