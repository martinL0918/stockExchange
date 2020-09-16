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

eval("//import { Route } from 'react-router';\n//import { TitleComponent } from './JS/TitleComponent.jsx'\nvar firebaseConfig = {\n  apiKey: config.apiKey,\n  authDomain: config.authDomain,\n  databaseURL: config.databaseURL,\n  projectId: config.projectId,\n  storageBucket: config.storageBucket,\n  messagingSenderId: config.messagingSenderId,\n  appId: config.appId,\n  measurementId: config.measurementId\n};\nconst database = firebase.database();\nvar user_id;\nvar nickName = \"loading\";\nvar logIn;\nfirebase.auth().onAuthStateChanged(function (user) {\n  if (user) {\n    firebase.database().ref(\"players/\" + user.uid).on(\"value\", function (snapshot) {\n      nickName = snapshot.val().name;\n    }, function (error) {\n      console.log(\"Error: \" + error.code);\n    });\n    logIn = \"true\";\n  } else {\n    logIn = \"false\";\n  }\n});\n\nclass UserInfoComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      name: \"Loading\"\n    };\n  } // 讀取玩家姓名\n\n\n  tick() {\n    console.log(nickName);\n  }\n\n  componentDidMount() {\n    setInterval(() => this.tick(), 2000);\n  }\n\n  render() {\n    return /*#__PURE__*/React.createElement(\"div\", null);\n  }\n\n}\n\nconst withTitle = ({\n  component: Component,\n  title\n}) => {\n  return class Title extends Component {\n    render() {\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TitleComponent, {\n        title: title\n      }), /*#__PURE__*/React.createElement(Component, this.props));\n    }\n\n  };\n};\n/*export default(\r\n  <Route>\r\n    <Route path={\"/\" + nickName} component={userInfoComponent} />\r\n  </Route>\r\n);*/\n\n\nReactDOM.render( /*#__PURE__*/React.createElement(UserInfoComponent, null), document.getElementById('martinTest'));\n\n//# sourceURL=webpack:///./JS/userInfo.jsx?");

/***/ })

/******/ });