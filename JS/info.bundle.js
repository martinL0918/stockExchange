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
/******/ 	return __webpack_require__(__webpack_require__.s = "./JS/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./JS/login.js":
/*!*********************!*\
  !*** ./JS/login.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Your web app's Firebase configuration\r\nvar firebaseConfig = {\r\n  apiKey: config.apiKey,\r\n  authDomain:  config.authDomain,\r\n  databaseURL:  config.databaseURL,\r\n  projectId:  config.projectId,\r\n  storageBucket:  config.storageBucket,\r\n  messagingSenderId:  config.messagingSenderId,\r\n  appId: config.appId,\r\n  measurementId:  config.measurementId,\r\n};\r\n  // Initialize Firebase\r\n  firebase.initializeApp(firebaseConfig);\r\n  const database = firebase.database();\r\n  \r\ndocument.getElementById(\"login-btn\").addEventListener('click', () => {\r\n    let user = {\r\n        email: email.value,\r\n        pwd: pwd.value,\r\n    }\r\n    firebase.auth().signInWithEmailAndPassword(user.email, user.pwd).then(function success(userData) {\r\n        console.log(\"Successfully Login\")\r\n        //document.getElementById(\"welcome\").innerHTML = \"Successfully Login\"\r\n      }).catch (function failure(error){\r\n         // Handle Errors here.\r\n        var errorCode = error.code;\r\n        var errorMessage = error.message;\r\n        console.log (errorCode + \" \" + errorMessage)\r\n      })\r\n    })\r\nfunction redirect(){\r\n      // For testing\r\n      location.replace(\"gameMode.html\");\r\n}\r\n\r\nfirebase.auth().onAuthStateChanged(function(user) {\r\n      if (user) {\r\n        // User is signed in.\r\n        var email = user.email;\r\n        var emailVerified = user.emailVerified;\r\n        var photoURL = user.photoURL;\r\n        var isAnonymous = user.isAnonymous;\r\n        var uid = user.uid;\r\n        var providerData = user.providerData;\r\n        alert(\"Welcome! \"+ user.displayName)\r\n        redirect()\r\n        // ...\r\n      } else {\r\n        console.log(\"Good Bye\")\r\n      }\r\n    });\r\n/*document.getElementById(\"logout\").addEventListener('click', () => {\r\n  firebase.auth().signOut().then(function() {\r\n    alert(\"你登出了\")\r\n  })\r\n})*/\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./JS/login.js?");

/***/ })

/******/ });