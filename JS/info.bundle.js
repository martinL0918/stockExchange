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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./JS/userInfo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./JS/userInfo.jsx":
/*!*************************!*\
  !*** ./JS/userInfo.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n//import { Route } from 'react-router';\n//import { TitleComponent } from './JS/TitleComponent.jsx'\nvar firebaseConfig = {\n  apiKey: config.apiKey,\n  authDomain: config.authDomain,\n  databaseURL: config.databaseURL,\n  projectId: config.projectId,\n  storageBucket: config.storageBucket,\n  messagingSenderId: config.messagingSenderId,\n  appId: config.appId,\n  measurementId: config.measurementId\n};\nvar database = firebase.database();\nvar user_id;\nvar nickName = \"loading\";\nvar logIn;\nfirebase.auth().onAuthStateChanged(function (user) {\n  if (user) {\n    firebase.database().ref(\"players/\" + user.uid).on(\"value\", function (snapshot) {\n      nickName = snapshot.val().name;\n    }, function (error) {\n      console.log(\"Error: \" + error.code);\n    });\n    logIn = \"true\";\n  } else {\n    logIn = \"false\";\n  }\n});\n\nvar UserInfoComponent = /*#__PURE__*/function (_React$Component) {\n  _inherits(UserInfoComponent, _React$Component);\n\n  var _super = _createSuper(UserInfoComponent);\n\n  function UserInfoComponent(props) {\n    var _this;\n\n    _classCallCheck(this, UserInfoComponent);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      name: \"Loading\"\n    };\n    return _this;\n  } // 讀取玩家姓名\n\n\n  _createClass(UserInfoComponent, [{\n    key: \"tick\",\n    value: function tick() {\n      console.log(nickName);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      setInterval(function () {\n        return _this2.tick();\n      }, 2000);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null);\n    }\n  }]);\n\n  return UserInfoComponent;\n}(React.Component);\n\nvar withTitle = function withTitle(_ref) {\n  var Component = _ref.component,\n      title = _ref.title;\n  return /*#__PURE__*/function (_Component) {\n    _inherits(Title, _Component);\n\n    var _super2 = _createSuper(Title);\n\n    function Title() {\n      _classCallCheck(this, Title);\n\n      return _super2.apply(this, arguments);\n    }\n\n    _createClass(Title, [{\n      key: \"render\",\n      value: function render() {\n        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TitleComponent, {\n          title: title\n        }), /*#__PURE__*/React.createElement(Component, this.props));\n      }\n    }]);\n\n    return Title;\n  }(Component);\n};\n/*export default(\r\n  <Route>\r\n    <Route path={\"/\" + nickName} component={userInfoComponent} />\r\n  </Route>\r\n);*/\n\n\nReactDOM.render( /*#__PURE__*/React.createElement(UserInfoComponent, null), document.getElementById('martinTest'));\n\n//# sourceURL=webpack:///./JS/userInfo.jsx?");

/***/ })

/******/ });