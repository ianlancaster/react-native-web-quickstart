webpackJsonp([3],{64:function(e,t,r){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.asyncToggleColor=void 0;var n=r(271),a=o(n),i=r(66);t.asyncToggleColor=function(){return function(e){return e({type:"START_REQUEST"}),(0,a.default)("http://localhost:3001/api/v1/helloWorldAsync").then(function(e){return e.json()}).then(function(t){return e({type:"ASYNC_TOGGLE_COLOR"})}).catch(function(e){return console.log("Error: ",e)})}};(0,i.handleAction)("START_REQUEST",function(e,t){return{loading:!0}}),(0,i.handleAction)("ASYNC_TOGGLE_COLOR",function(e,t){return{color:"red"===e.color?"blue":"red",loading:!1}});var s={color:"red",loading:!1};t.default=(0,i.createReducer)(s)},113:function(e,t,r){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(25),a=r(64),i=r(198),s=o(i),l={asyncToggleColor:a.asyncToggleColor},u=function(e,t){var r=e.helloWorldAsync,o=r.color,n=r.loading;return{color:o,loading:n}};t.default=(0,n.connect)(u,l)(s.default)},191:function(e,t,r){function o(e){return e&&e.__esModule?e:{default:e}}var n=r(4),a=o(n),i=r(249),s=o(i),l=function(){return a.default.createElement("div",{className:s.default.wrap},a.default.createElement("div",{className:s.default.loader}),a.default.createElement("div",{className:s.default.loaderbefore}),a.default.createElement("div",{className:s.default.circular}),a.default.createElement("div",{className:s.default.circular+" "+s.default.another}),a.default.createElement("div",{className:s.default.text},"Loading"))};e.exports=l},192:function(e,t,r){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(191),a=o(n);t.default=a.default},198:function(e,t,r){function o(e){return e&&e.__esModule?e:{default:e}}var n=r(26),a=o(n),i=r(27),s=o(i),l=r(28),u=o(l),f=r(30),d=o(f),c=r(29),h=o(c),y=r(4),p=o(y),_=r(252),b=o(_),m=r(192),v=o(m),w=function(e){function t(){(0,s.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this));return e.state={},e}return(0,h.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.asyncToggleColor,r=e.color,o=e.loading;return p.default.createElement("div",{className:b.default.container},o?p.default.createElement(v.default,null):p.default.createElement("h2",{title:"helloWorldAsync",onClick:t,className:b.default.text,style:{color:r}},"Hello World!"))}}]),t}(y.Component);w.propTypes={color:y.PropTypes.string.isRequired,asyncToggleColor:y.PropTypes.func.isRequired,loading:y.PropTypes.bool},e.exports=w},249:function(e,t){e.exports={wrap:"Loader-styles__wrap___1_FRm",loader:"Loader-styles__loader___2d1cy",loadEr:"Loader-styles__loadEr___3ElhC",loaderbefore:"Loader-styles__loaderbefore___2oTLQ",circular:"Loader-styles__circular___Ax4Fi",poof:"Loader-styles__poof___15Jj_",another:"Loader-styles__another___2n4JO",poofity:"Loader-styles__poofity___1q9TH",text:"Loader-styles__text___3d2Q-",opaa:"Loader-styles__opaa___QuhkM"}},252:function(e,t){e.exports={container:"HelloWorldAsync-styles__container___VV5Hy",text:"HelloWorldAsync-styles__text___3_aWo"}},271:function(e,t,r){r(388),e.exports=self.fetch.bind(self)},388:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function o(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return b.iterable&&(t[Symbol.iterator]=function(){return t}),t}function n(e){this.map={},e instanceof n?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function a(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function i(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=i(t);return t.readAsArrayBuffer(e),r}function l(e){var t=new FileReader,r=i(t);return t.readAsText(e),r}function u(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(b.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(b.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(b.arrayBuffer&&b.blob&&v(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!w(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return l(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(e){var t=e.toUpperCase();return T.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var r=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new n(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new n(t.headers)),this.method=c(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}}),t}function p(e){var t=new n;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}}),t}function _(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new n(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var b={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(b.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(e){return e&&DataView.prototype.isPrototypeOf(e)},w=ArrayBuffer.isView||function(e){return e&&m.indexOf(Object.prototype.toString.call(e))>-1};n.prototype.append=function(e,o){e=t(e),o=r(o);var n=this.map[e];this.map[e]=n?n+","+o:o},n.prototype.delete=function(e){delete this.map[t(e)]},n.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},n.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},n.prototype.set=function(e,o){this.map[t(e)]=r(o)},n.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},n.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),o(e)},n.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),o(e)},n.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),o(e)},b.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},d.call(h.prototype),d.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];_.redirect=function(e,t){if(E.indexOf(t)===-1)throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})},e.Headers=n,e.Request=h,e.Response=_,e.fetch=function(e,t){return new Promise(function(r,o){var n=new h(e,t),a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:p(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;r(new _(t,e))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(n.method,n.url,!0),"include"===n.credentials&&(a.withCredentials=!0),"responseType"in a&&b.blob&&(a.responseType="blob"),n.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send("undefined"==typeof n._bodyInit?null:n._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});