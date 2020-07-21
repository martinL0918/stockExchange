module.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n){t.exports=require("react")},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return d}));var o=e(0),r=e.n(o);e(2);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var d=function(t){function n(t){var e,o,a;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,a=s(n).call(this,t),e=!a||"object"!==i(a)&&"function"!=typeof a?c(o):a,u(c(e),"toggle",(function(t){e.state.checked?e.off():e.on()})),u(c(e),"off",(function(){e.state.disabled||(e.setState({checked:!1}),e.props.onChange&&e.props.onChange(!1))})),u(c(e),"on",(function(){e.state.disabled||(e.setState({checked:!0}),e.props.onChange&&e.props.onChange(!0))})),u(c(e),"enable",(function(){e.setState({disabled:!1})})),u(c(e),"disable",(function(){e.setState({disabled:!0})})),u(c(e),"render",(function(){var t={};e.state.width&&(t.width=e.state.width+"px"),e.state.height&&(t.height=e.state.height+"px");var n={};return e.state.height&&(n.lineHeight="calc("+e.state.height+"px * 0.8)"),r.a.createElement("div",{className:"switch btn "+(e.state.checked?"on btn-"+e.state.onstyle:"off btn-"+e.state.offstyle)+(e.state.size?" btn-"+e.state.size:"")+(e.state.style?" "+e.state.style:""),style:t,onClick:e.toggle},r.a.createElement("div",{className:"switch-group"},r.a.createElement("span",{className:"switch-on btn btn-"+e.state.onstyle+(e.state.size?" btn-"+e.state.size:""),style:n},e.state.onlabel),r.a.createElement("span",{className:"switch-off btn btn-"+e.state.offstyle+(e.state.size?" btn-"+e.state.size:""),style:n},e.state.offlabel),r.a.createElement("span",{className:"switch-handle btn btn-light"+(e.state.size?"btn-"+e.state.size:"")})))})),e.state={checked:"boolean"==typeof e.props.checked&&e.props.checked,disabled:"boolean"==typeof e.props.disabled&&e.props.disabled,onlabel:e.props.onlabel||"On",offlabel:e.props.offlabel||"Off",onstyle:e.props.onstyle||"primary",offstyle:e.props.offstyle||"light",size:e.props.size||"",style:e.props.style||"",width:e.props.width||null,height:e.props.height||null},e}var e,o,d;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(n,t),e=n,(o=[{key:"componentDidUpdate",value:function(t,n){var e=this.props.checked;"boolean"==typeof e&&e!==n.checked&&this.setState({checked:e})}}])&&a(e.prototype,o),d&&a(e,d),n}(r.a.Component)},function(t,n,e){var o=e(3),r=e(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},function(t,n,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function s(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},o=[],r=0;r<t.length;r++){var i=t[r],c=n.base?i[0]+n.base:i[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var d=s(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:m(f,n),references:1}),o.push(u)}return o}function l(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function f(t,n,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function h(t,n,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var p=null,b=0;function m(t,n){var e,o,r;if(n.singleton){var i=b++;e=p||(p=l(n)),o=f.bind(null,e,i,!1),r=f.bind(null,e,i,!0)}else e=l(n),o=h.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var r=s(e[o]);a[r].references--}for(var i=c(t,n),l=0;l<e.length;l++){var u=s(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(t,n,e){(n=e(5)(!1)).push([t.i,'/*\\\n|*|  :: Bootstrap Switch Button ::\n|*|\n|*|  Bootstrap Switch Button (React)\n|*|  https://github.com/gitbrent/bootstrap-switch-button-react\n|*|\n|*|  This library is released under the MIT Public License (MIT)\n|*|\n|*|  Bootstrap Switch Button (C) 2019-present Brent Ely (https://github.com/gitbrent)\n|*|\n|*|  Permission is hereby granted, free of charge, to any person obtaining a copy\n|*|  of this software and associated documentation files (the "Software"), to deal\n|*|  in the Software without restriction, including without limitation the rights\n|*|  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n|*|  copies of the Software, and to permit persons to whom the Software is\n|*|  furnished to do so, subject to the following conditions:\n|*|\n|*|  The above copyright notice and this permission notice shall be included in all\n|*|  copies or substantial portions of the Software.\n|*|\n|*|  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n|*|  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n|*|  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n|*|  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n|*|  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n|*|  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n|*|  SOFTWARE.\n\\*/\n\n.btn-group-xs > .btn, .btn-xs {\n\tpadding: .35rem .4rem .25rem .4rem;\n\tfont-size: .875rem;\n\tline-height: .5;\n\tborder-radius: .2rem;\n}\n\n.switch {\n\tposition: relative;\n\toverflow: hidden;\n}\n.switch.btn.btn-light, .switch.btn.btn-outline-light {\n\tborder-color: rgba(0, 0, 0, .15); /* Add a border so switch is delineated */\n}\n.switch input[type="checkbox"] {\n\tdisplay: none;\n}\n.switch-group {\n\tposition: absolute;\n\twidth: 200%;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\ttransition: left 0.35s;\n\t-webkit-transition: left 0.35s;\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n}\n.switch.off .switch-group {\n\tleft: -100%;\n}\n.switch-on {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 50%;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n}\n.switch-off {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 50%;\n\tright: 0;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n\tbox-shadow: none;\n}\n.switch-handle {\n\tposition: relative;\n\tmargin: 0 auto;\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n\theight: 100%;\n\twidth: 0px;\n\tborder-width: 0 1px;\n\tbackground-color: #fff;\n}\n\n.switch.btn-outline-primary .switch-handle {\n\tbackground-color: var(--primary);\n\tborder-color: var(--primary);\n}\n.switch.btn-outline-secondary .switch-handle {\n\tbackground-color: var(--secondary);\n\tborder-color: var(--secondary);\n}\n.switch.btn-outline-success .switch-handle {\n\tbackground-color: var(--success);\n\tborder-color: var(--success);\n}\n.switch.btn-outline-danger .switch-handle {\n\tbackground-color: var(--danger);\n\tborder-color: var(--danger);\n}\n.switch.btn-outline-warning .switch-handle {\n\tbackground-color: var(--warning);\n\tborder-color: var(--warning);\n}\n.switch.btn-outline-info .switch-handle {\n\tbackground-color: var(--info);\n\tborder-color: var(--info);\n}\n.switch.btn-outline-light .switch-handle {\n\tbackground-color: var(--light);\n\tborder-color: var(--light);\n}\n.switch.btn-outline-dark .switch-handle {\n\tbackground-color: var(--dark);\n\tborder-color: var(--dark);\n}\n.switch[class*="btn-outline"]:hover .switch-handle {\n\tbackground-color: var(--light);\n\topacity: 0.5;\n}\n\n/* NOTE: Must come first, so classes below override as needed */\n/* bootstrap-4.x .form-control {height} values used as `min-height` to mirror output sizes */\n\n.switch.btn { min-width: 3.7rem; min-height: calc(1.5em + .75rem + 2px); }\n.switch-on.btn { padding-right: 1.5rem; }\n.switch-off.btn { padding-left: 1.5rem; }\n\n.switch.btn-lg { min-width: 5rem; line-height: 1.5; min-height: calc(1.5em + 1rem + 2px); }\n.switch-on.btn-lg { padding-right: 2rem; }\n.switch-off.btn-lg { padding-left: 2rem; }\n.switch-handle.btn-lg { width: 2.5rem; }\n\n.switch.btn-sm { min-width: 3.25rem; min-height: calc(1.5em + .5rem + 2px); }\n.switch-on.btn-sm { padding-right: 1rem; }\n.switch-off.btn-sm { padding-left: 1rem; }\n\n/* `xs` (bootstrap-3.3 - .btn - h:22px) */\n.switch.btn-xs { min-width: 3.125rem; min-height: 1.375rem; }\n.switch-on.btn-xs { padding-right: .8rem; }\n.switch-off.btn-xs { padding-left: .8rem; }\n',""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([r]).join("\n")}var a,s,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}}]);