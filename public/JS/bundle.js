!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(3)},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(0),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(2);var f=function(e){function t(e){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,r=c(t).call(this,e),n=!r||"object"!==a(r)&&"function"!=typeof r?s(this):r,u(s(n),"toggle",(function(e){n.state.checked?n.off():n.on()})),u(s(n),"off",(function(){n.state.disabled||(n.setState({checked:!1}),n.props.onChange&&n.props.onChange(!1))})),u(s(n),"on",(function(){n.state.disabled||(n.setState({checked:!0}),n.props.onChange&&n.props.onChange(!0))})),u(s(n),"enable",(function(){n.setState({disabled:!1})})),u(s(n),"disable",(function(){n.setState({disabled:!0})})),u(s(n),"render",(function(){var e={};n.state.width&&(e.width=n.state.width+"px"),n.state.height&&(e.height=n.state.height+"px");var t={};return n.state.height&&(t.lineHeight="calc("+n.state.height+"px * 0.8)"),o.a.createElement("div",{className:"switch btn "+(n.state.checked?"on btn-"+n.state.onstyle:"off btn-"+n.state.offstyle)+(n.state.size?" btn-"+n.state.size:"")+(n.state.style?" "+n.state.style:""),style:e,onClick:n.toggle},o.a.createElement("div",{className:"switch-group"},o.a.createElement("span",{className:"switch-on btn btn-"+n.state.onstyle+(n.state.size?" btn-"+n.state.size:""),style:t},n.state.onlabel),o.a.createElement("span",{className:"switch-off btn btn-"+n.state.offstyle+(n.state.size?" btn-"+n.state.size:""),style:t},n.state.offlabel),o.a.createElement("span",{className:"switch-handle btn btn-light"+(n.state.size?"btn-"+n.state.size:"")})))})),n.state={checked:"boolean"==typeof n.props.checked&&n.props.checked,disabled:"boolean"==typeof n.props.disabled&&n.props.disabled,onlabel:n.props.onlabel||"On",offlabel:n.props.offlabel||"Off",onstyle:n.props.onstyle||"primary",offstyle:n.props.offstyle||"light",size:n.props.size||"",style:n.props.style||"",width:n.props.width||null,height:n.props.height||null},n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e,t){var n=this.props.checked;"boolean"==typeof n&&n!==t.checked&&this.setState({checked:n})}}])&&i(n.prototype,r),t}(o.a.Component)},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);n(5)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'/*\\\n|*|  :: Bootstrap Switch Button ::\n|*|\n|*|  Bootstrap Switch Button (React)\n|*|  https://github.com/gitbrent/bootstrap-switch-button-react\n|*|\n|*|  This library is released under the MIT Public License (MIT)\n|*|\n|*|  Bootstrap Switch Button (C) 2019-present Brent Ely (https://github.com/gitbrent)\n|*|\n|*|  Permission is hereby granted, free of charge, to any person obtaining a copy\n|*|  of this software and associated documentation files (the "Software"), to deal\n|*|  in the Software without restriction, including without limitation the rights\n|*|  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n|*|  copies of the Software, and to permit persons to whom the Software is\n|*|  furnished to do so, subject to the following conditions:\n|*|\n|*|  The above copyright notice and this permission notice shall be included in all\n|*|  copies or substantial portions of the Software.\n|*|\n|*|  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n|*|  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n|*|  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n|*|  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n|*|  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n|*|  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n|*|  SOFTWARE.\n\\*/\n\n.btn-group-xs > .btn, .btn-xs {\n\tpadding: .35rem .4rem .25rem .4rem;\n\tfont-size: .875rem;\n\tline-height: .5;\n\tborder-radius: .2rem;\n}\n\n.switch {\n\tposition: relative;\n\toverflow: hidden;\n}\n.switch.btn.btn-light, .switch.btn.btn-outline-light {\n\tborder-color: rgba(0, 0, 0, .15); /* Add a border so switch is delineated */\n}\n.switch input[type="checkbox"] {\n\tdisplay: none;\n}\n.switch-group {\n\tposition: absolute;\n\twidth: 200%;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\ttransition: left 0.35s;\n\t-webkit-transition: left 0.35s;\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n}\n.switch.off .switch-group {\n\tleft: -100%;\n}\n.switch-on {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 50%;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n}\n.switch-off {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 50%;\n\tright: 0;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n\tbox-shadow: none;\n}\n.switch-handle {\n\tposition: relative;\n\tmargin: 0 auto;\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n\theight: 100%;\n\twidth: 0px;\n\tborder-width: 0 1px;\n\tbackground-color: #fff;\n}\n\n.switch.btn-outline-primary .switch-handle {\n\tbackground-color: var(--primary);\n\tborder-color: var(--primary);\n}\n.switch.btn-outline-secondary .switch-handle {\n\tbackground-color: var(--secondary);\n\tborder-color: var(--secondary);\n}\n.switch.btn-outline-success .switch-handle {\n\tbackground-color: var(--success);\n\tborder-color: var(--success);\n}\n.switch.btn-outline-danger .switch-handle {\n\tbackground-color: var(--danger);\n\tborder-color: var(--danger);\n}\n.switch.btn-outline-warning .switch-handle {\n\tbackground-color: var(--warning);\n\tborder-color: var(--warning);\n}\n.switch.btn-outline-info .switch-handle {\n\tbackground-color: var(--info);\n\tborder-color: var(--info);\n}\n.switch.btn-outline-light .switch-handle {\n\tbackground-color: var(--light);\n\tborder-color: var(--light);\n}\n.switch.btn-outline-dark .switch-handle {\n\tbackground-color: var(--dark);\n\tborder-color: var(--dark);\n}\n.switch[class*="btn-outline"]:hover .switch-handle {\n\tbackground-color: var(--light);\n\topacity: 0.5;\n}\n\n/* NOTE: Must come first, so classes below override as needed */\n/* bootstrap-4.x .form-control {height} values used as `min-height` to mirror output sizes */\n\n.switch.btn { min-width: 3.7rem; min-height: calc(1.5em + .75rem + 2px); }\n.switch-on.btn { padding-right: 1.5rem; }\n.switch-off.btn { padding-left: 1.5rem; }\n\n.switch.btn-lg { min-width: 5rem; line-height: 1.5; min-height: calc(1.5em + 1rem + 2px); }\n.switch-on.btn-lg { padding-right: 2rem; }\n.switch-off.btn-lg { padding-left: 2rem; }\n.switch-handle.btn-lg { width: 2.5rem; }\n\n.switch.btn-sm { min-width: 3.25rem; min-height: calc(1.5em + .5rem + 2px); }\n.switch-on.btn-sm { padding-right: 1rem; }\n.switch-off.btn-sm { padding-left: 1rem; }\n\n/* `xs` (bootstrap-3.3 - .btn - h:22px) */\n.switch.btn-xs { min-width: 3.125rem; min-height: 1.375rem; }\n.switch-on.btn-xs { padding-right: .8rem; }\n.switch-off.btn-xs { padding-left: .8rem; }\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e,t){return t?t.querySelector(e):document.querySelector(e)},s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=c.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,f=[],p=n(6);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(v(r.parts[i],t))}else{var c=[];for(i=0;i<r.parts.length;i++)c.push(v(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:c}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function b(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=n.nc;r&&(e.attrs.nonce=r)}return g(t,e.attrs),b(e,t),t}function g(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function v(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=u++;n=l||(l=y(t)),r=O.bind(null,n,i,!1),o=O.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),b(e,t),t}(t),r=S.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=R.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(c=a[i.id]).refs--,r.push(c)}for(e&&d(h(e,t),t),o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete a[c.id]}}}};var w,E=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function O(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function R(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function S(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}])},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=(config.apiKey,config.authDomain,config.databaseURL,config.projectId,config.storageBucket,config.messagingSenderId,config.appId,config.measurementId,"false"),i="載入中";firebase.auth().onAuthStateChanged((function(e){e?(firebase.database().ref("players/"+e.uid).on("value",(function(e){i=e.val().name}),(function(e){console.log("Error: "+e.code)})),a="true",console.log(i),l.tick()):(a="false",l.tick())}));const c=React.createElement("div",null,React.createElement("footer",null,React.createElement("div",{className:"border-line"}),React.createElement("h6",null,"Created by Martin Leung & Donald Tsang (2020)")));class s extends React.Component{constructor(e){super(e),this.state={logged:React.createElement("a",{className:"nav-link",href:"acc.html"},React.createElement("i",{className:"far fa-user-circle"}),"登入/創帳號")}}componentDidMount(){setInterval(()=>this.tick(),2e3)}tick(){"true"==a&&this.setState({logged:React.createElement("a",{className:"nav-link",onClick:this.logOut},React.createElement("i",{className:"far fa-user-circle"}),i)})}logOut(){firebase.auth().signOut().then((function(){alert("你登出了")})),location.reload()}render(){return React.createElement("div",null,React.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},React.createElement("span",{className:"navbar-text nav-title"},"股票交易市埸 | Stock Overflow"),React.createElement("ul",{className:"navbar-nav mr-auto"},React.createElement("li",{className:"nav-item"},React.createElement("a",{className:"nav-link",href:"community.html"},"股市新聞")),React.createElement("li",{className:"nav-item"},React.createElement("a",{className:"nav-link",href:"#"},"社群")),React.createElement("li",{className:"nav-item"},React.createElement("a",{className:"nav-link",href:"gameMode.html"},"股市"))),React.createElement("ul",{className:"navbar-nav ml-auto"},React.createElement(o.a,{checked:!0,onstyle:"outline-light",onlabel:"Dark",offstyle:"outline-light",offlabel:"Light"}),React.createElement("li",{className:"nav-item dropdown"},React.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbardrop","data-toggle":"dropdown"},React.createElement("i",{className:"fas fa-language"}),"語言"),React.createElement("div",{className:"dropdown-menu"},React.createElement("a",{className:"dropdown-item",href:"#"},"中文"),React.createElement("a",{className:"dropdown-item",href:"#"},"English"))),React.createElement("li",{className:"nav-item"},this.state.logged))))}}ReactDOM.render(c,document.getElementById("footer"));var l=ReactDOM.render(React.createElement(s,null),document.getElementById("navb"))},function(e,t,n){"use strict";e.exports=n(4)},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(5),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function E(){}function O(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=w.prototype;var R=O.prototype=new E;R.constructor=O,r(R,w.prototype),R.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:S.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,I=[];function C(e,t,n,r){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function _(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var s=!1;if(null===t)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case a:case i:s=!0}}if(s)return r(o,t,""===n?"."+P(t,0):n),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+P(c=t[l],l);s+=e(c,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=m&&t[m]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(c=t.next()).done;)s+=e(c=c.value,u=n+P(c,l++),r,o);else if("object"===c)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return s}(e,"",t,n)}function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(j(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(T,"$&/")+"/"),_(e,M,t=C(t,a,r,o)),A(t)}var B={current:null};function $(){var e=B.current;if(null===e)throw Error(y(321));return e}var D={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;_(e,L,t=C(null,null,t,n)),A(t)},count:function(e){return _(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!j(e))throw Error(y(143));return e}},t.Component=w,t.Fragment=c,t.Profiler=l,t.PureComponent=O,t.StrictMode=s,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,s=i(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))o.call(n,u)&&(s[u]=n[u]);if(r){c=r(n);for(var f=0;f<c.length;f++)a.call(n,c[f])&&(s[c[f]]=n[c[f]])}}return s}}]);