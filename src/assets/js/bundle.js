/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _instantclick = __webpack_require__(1);
	
	var _instantclick2 = _interopRequireDefault(_instantclick);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var greet = __webpack_require__(2);
	
	greet('piotr');
	_instantclick2.default.init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* InstantClick 3.1.0 | (C) 2014 Alexandre Dieulot | http://instantclick.io/license */
	var InstantClick=function(d,e){function w(a){var b=a.indexOf("#");return 0>b?a:a.substr(0,b)}function z(a){for(;a&&"A"!=a.nodeName;)a=a.parentNode;return a}function A(a){var b=e.protocol+"//"+e.host;if(!(b=a.target||a.hasAttribute("download")||0!=a.href.indexOf(b+"/")||-1<a.href.indexOf("#")&&w(a.href)==k)){if(J){a:{do{if(!a.hasAttribute)break;if(a.hasAttribute("data-no-instant"))break;if(a.hasAttribute("data-instant")){a=!0;break a}}while(a=a.parentNode);a=!1}a=!a}else a:{do{if(!a.hasAttribute)break;
	if(a.hasAttribute("data-instant"))break;if(a.hasAttribute("data-no-instant")){a=!0;break a}}while(a=a.parentNode);a=!1}b=a}return b?!1:!0}function t(a,b,c,g){for(var d=!1,e=0;e<B[a].length;e++)if("receive"==a){var f=B[a][e](b,c,g);f&&("body"in f&&(c=f.body),"title"in f&&(g=f.title),d=f)}else B[a][e](b,c,g);return d}function K(a,b,c,g){d.documentElement.replaceChild(b,d.body);if(c){history.pushState(null,null,c);b=c.indexOf("#");b=-1<b&&d.getElementById(c.substr(b+1));g=0;if(b)for(;b.offsetParent;)g+=
	b.offsetTop,b=b.offsetParent;scrollTo(0,g);k=w(c)}else scrollTo(0,g);d.title=S&&d.title==a?a+String.fromCharCode(160):a;L();C.done();t("change",!1);a=d.createEvent("HTMLEvents");a.initEvent("instantclick:newpage",!0,!0);dispatchEvent(a)}function M(a){G>+new Date-500||(a=z(a.target))&&A(a)&&x(a.href)}function N(a){G>+new Date-500||(a=z(a.target))&&A(a)&&(a.addEventListener("mouseout",T),H?(O=a.href,l=setTimeout(x,H)):x(a.href))}function U(a){G=+new Date;(a=z(a.target))&&A(a)&&(D?a.removeEventListener("mousedown",
	M):a.removeEventListener("mouseover",N),x(a.href))}function V(a){var b=z(a.target);!b||!A(b)||1<a.which||a.metaKey||a.ctrlKey||(a.preventDefault(),P(b.href))}function T(){l?(clearTimeout(l),l=!1):v&&!m&&(p.abort(),m=v=!1)}function W(){if(!(4>p.readyState)&&0!=p.status){q.ready=+new Date-q.start;if(p.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var a=d.implementation.createHTMLDocument("");a.documentElement.innerHTML=p.responseText.replace(/<noscript[\s\S]+<\/noscript>/gi,"");y=a.title;
	u=a.body;var b=t("receive",r,u,y);b&&("body"in b&&(u=b.body),"title"in b&&(y=b.title));b=w(r);h[b]={body:u,title:y,scrollY:b in h?h[b].scrollY:0};for(var a=a.head.children,b=0,c,g=a.length-1;0<=g;g--)if(c=a[g],c.hasAttribute("data-instant-track")){c=c.getAttribute("href")||c.getAttribute("src")||c.innerHTML;for(var e=E.length-1;0<=e;e--)E[e]==c&&b++}b!=E.length&&(F=!0)}else F=!0;m&&(m=!1,P(r))}}function L(a){d.body.addEventListener("touchstart",U,!0);D?d.body.addEventListener("mousedown",M,!0):d.body.addEventListener("mouseover",
	N,!0);d.body.addEventListener("click",V,!0);if(!a){a=d.body.getElementsByTagName("script");var b,c,g,e;i=0;for(j=a.length;i<j;i++)b=a[i],b.hasAttribute("data-no-instant")||(c=d.createElement("script"),b.src&&(c.src=b.src),b.innerHTML&&(c.innerHTML=b.innerHTML),g=b.parentNode,e=b.nextSibling,g.removeChild(b),g.insertBefore(c,e))}}function x(a){!D&&"display"in q&&100>+new Date-(q.start+q.display)||(l&&(clearTimeout(l),l=!1),a||(a=O),v&&(a==r||m))||(v=!0,m=!1,r=a,F=u=!1,q={start:+new Date},t("fetch"),
	p.open("GET",a),p.send())}function P(a){"display"in q||(q.display=+new Date-q.start);l||!v?l&&r&&r!=a?e.href=a:(x(a),C.start(0,!0),t("wait"),m=!0):m?e.href=a:F?e.href=r:u?(h[k].scrollY=pageYOffset,m=v=!1,K(y,u,r)):(C.start(0,!0),t("wait"),m=!0)}var I=navigator.userAgent,S=-1<I.indexOf(" CriOS/"),Q="createTouch"in d,k,O,l,G,h={},p,r=!1,y=!1,F=!1,u=!1,q={},v=!1,m=!1,E=[],J,D,H,B={fetch:[],receive:[],wait:[],change:[]},C=function(){function a(a,e){n=a;d.getElementById(f.id)&&d.body.removeChild(f);f.style.opacity=
	"1";d.getElementById(f.id)&&d.body.removeChild(f);g();e&&setTimeout(b,0);clearTimeout(l);l=setTimeout(c,500)}function b(){n=10;g()}function c(){n+=1+2*Math.random();98<=n?n=98:l=setTimeout(c,500);g()}function g(){h.style[k]="translate("+n+"%)";d.getElementById(f.id)||d.body.appendChild(f)}function e(){d.getElementById(f.id)?(clearTimeout(l),n=100,g(),f.style.opacity="0"):(a(100==n?0:n),setTimeout(e,0))}function m(){f.style.left=pageXOffset+"px";f.style.width=innerWidth+"px";f.style.top=pageYOffset+
	"px";var a="orientation"in window&&90==Math.abs(orientation);f.style[k]="scaleY("+innerWidth/screen[a?"height":"width"]*2+")"}var f,h,k,n,l;return{init:function(){f=d.createElement("div");f.id="instantclick";h=d.createElement("div");h.id="instantclick-bar";h.className="instantclick-bar";f.appendChild(h);var a=["Webkit","Moz","O"];k="transform";if(!(k in h.style))for(var b=0;3>b;b++)a[b]+"Transform"in h.style&&(k=a[b]+"Transform");var c="transition";if(!(c in h.style))for(b=0;3>b;b++)a[b]+"Transition"in
	h.style&&(c="-"+a[b].toLowerCase()+"-"+c);a=d.createElement("style");a.innerHTML="#instantclick{position:"+(Q?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+c+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+c+":all .25s}";d.head.appendChild(a);Q&&(m(),addEventListener("resize",m),addEventListener("scroll",m))},start:a,done:e}}(),R="pushState"in history&&(!I.match("Android")||I.match("Chrome/"))&&"file:"!=e.protocol;
	return{supported:R,init:function(){if(!k)if(R){for(var a=arguments.length-1;0<=a;a--){var b=arguments[a];!0===b?J=!0:"mousedown"==b?D=!0:"number"==typeof b&&(H=b)}k=w(e.href);h[k]={body:d.body,title:d.title,scrollY:pageYOffset};for(var b=d.head.children,c,a=b.length-1;0<=a;a--)c=b[a],c.hasAttribute("data-instant-track")&&(c=c.getAttribute("href")||c.getAttribute("src")||c.innerHTML,E.push(c));p=new XMLHttpRequest;p.addEventListener("readystatechange",W);L(!0);C.init();t("change",!0);addEventListener("popstate",
	function(){var a=w(e.href);a!=k&&(a in h?(h[k].scrollY=pageYOffset,k=a,K(h[a].title,h[a].body,!1,h[a].scrollY)):e.href=e.href)})}else t("change",!0)},on:function(a,b){B[a].push(b)}}}(document,location);
	
	module.exports = InstantClick


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	// function testConsole() = {
	//   console.log('testconsole')
	// }
	//
	// module.exports = testConsole;
	
	
	function greet(who) {
	    console.log('Hello ' + who + '!');
	};
	
	module.exports = greet;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map