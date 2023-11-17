(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),u=new URL(n(490),n.b),l=i()(o()),d=s()(u);l.push([e.id,`html, body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-image: url(${d});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.content-holder {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.zip-search-holder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.display-holder {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.weather-display {\n  display: flex;\n}\n\n.day-article {\n  margin: 10px;\n  text-align: center;\n}\n\narticle{\n  width:150px;\n  border-radius: 15px;\n  box-shadow: 5px 5px 5px black;\n  background-color: white;\n}\n\ninput{\n  width: 60px;\n  border-radius: 5px;\n}\n\nh1{\n  color:silver;\n  text-shadow: 2px 2px 5px black;\n}\n\ninput, button{\n  margin: 5px;\n  border-radius: 5px;\n  border-color: silver;\n  border-style: solid;\n  box-shadow: 2px 2px 2px black;\n  background-color: rgba(255,255,255,.3);\n  padding: 5px;\n}`,""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},490:(e,t,n)=>{e.exports=n.p+"63bb067a3e52968a1fad.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),l=n.n(u),d=n(589),p=n.n(d),f=n(426),m={};function h(e){return(9*(e-273.15)/5+32).toFixed(1)}function v(e){if(e.threeHourForecasts.length>0){let t=e.threeHourForecasts[0].main.temp_min,n=e.threeHourForecasts[0].main.temp_max;return e.threeHourForecasts.forEach((e=>{e.main.temp_min<t&&(t=e.main.temp_min),e.main.temp_max>n&&(n=e.main.temp_max)})),t=h(t),n=h(n),[t,n]}console.log("Invalid data given to find lows and highs")}function y(e){let t=0;return e.threeHourForecasts.forEach((e=>{t+=e.main.humidity})),Math.round(t/8)+"%"}async function g(e,t){const n=await async function(e,t){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=dd1cb6a20247063da00bd5225c5296d3`,{mode:"cors"}),r=await n.json();return console.log(r),r}catch(e){console.error("Error fetching data:",e)}}(e,t);n&&(document.querySelector(".city-name").textContent=n.city.name,function(e){let t=function(e){const t=function(e){const t={};return e.forEach((e=>{const n=e.dt_txt.split(" ")[0];n in t||(t[n]={threeHourForecasts:[]}),t[n].threeHourForecasts.push(e)})),t}(e),n=[];for(const e in t){let r={},[o,a]=v(t[e]);r.date=e,r.tempLow=o,r.tempHigh=a,r.humidity=y(t[e]),n.push(r)}return n}(e);t.forEach((e=>{!function(e){const t=document.querySelector(".weather-display"),n=document.createElement("article"),r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p");n.classList.add("day-article"),i.textContent=e.date.split("-").slice(1).join("-"),r.textContent=e.tempHigh,o.textContent=e.tempLow,a.textContent=e.humidity,n.appendChild(i),n.appendChild(r),n.appendChild(o),n.appendChild(a),t.appendChild(n)}(e)}))}(n.list))}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,function(){g(32.77,-96.8);const e=document.querySelector(".lat"),t=document.querySelector(".lon");e.value=32.77,t.value=-96.8,document.querySelector(".submit-button").addEventListener("click",(()=>{g(e.value||0,t.value||0),document.querySelector(".weather-display").innerHTML=""}))}()})()})();