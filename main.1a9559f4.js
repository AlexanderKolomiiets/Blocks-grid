parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
"use strict";var t=document.querySelector(".container"),e=document.querySelector("#initial"),n=document.querySelector("#new"),r={rows:16,columns:16},o=r.rows*r.columns,c=function(){return"#"+Math.random().toString(16).slice(-6)},a=function(t){return 1162261467%(t+1)==0&&0!==t},u=function(t){for(var e=c();e===t;)e=c();return e},l=function(t){var e=parseInt(t.slice(1,3),16),n=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16);return"rgb(".concat(e,", ").concat(n,", ").concat(r,")")},i=function(t,e){return a(t)?e:u(e)};function s(t,e,n){for(var r=0;r<t;r++)d(r,e);e.style.setProperty("grid-template-columns","repeat(".concat(n,", 1fr)"))}function d(t,n){var r=document.createElement("div");return r.textContent="".concat(t+1),r.classList.add("cell"),r.style.backgroundColor=i(t,e.value),n.appendChild(r)}s(o,t,r.columns);var f=document.querySelectorAll(".cell");function g(t,e,n,r){a(e)?t.target.style.backgroundColor===l(n)?t.target.style.backgroundColor=r:t.target.style.backgroundColor=n:t.target.style.backgroundColor=u(n)}f.forEach(function(t,r){t.addEventListener("click",function(t){g(t,r,e.value,n.value)})}),e.addEventListener("change",function(t){f.forEach(function(e,n){a(n)&&(e.style.backgroundColor=t.target.value)})});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.1a9559f4.js.map