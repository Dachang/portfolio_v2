"use strict";var precacheConfig=[["./index.html","2c0c43b2155bba52eed34bfb59ce5aa7"],["./static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["./static/js/0.a3e1427b.chunk.js","67356b098639267e07cb5fb0298c4a1f"],["./static/js/1.7c86361a.chunk.js","cd35d5566e7048cb680344f991d67f82"],["./static/js/2.2d8068a8.chunk.js","b310e73ffc924fb85e8544f86eb42843"],["./static/js/3.0c907249.chunk.js","30742fd3b25922071f7544090b9d7ef5"],["./static/js/4.b9e49aa2.chunk.js","0ddaf152768d35d1867e2dd0483a76d6"],["./static/js/5.9c09a8ff.chunk.js","b46110fa59e296b60242447d36ce2f29"],["./static/js/main.e19899d7.js","5503a13405e13b9108e25885ddf6dfba"],["./static/media/SF-UI-Display-Black.61f8219b.otf","61f8219b2e668d1a7904e089a2cb5e64"],["./static/media/SF-UI-Text-Light.287e8b35.otf","287e8b35ca1ddb5d79a6794fbc571c39"],["./static/media/SF-UI-Text-Regular.af70caa8.otf","af70caa8b33a56d2b61ab19fc6e4ec56"],["./static/media/belo-animation-alter.dde90366.png","dde903663b6984a5e4a802aec068cc58"],["./static/media/belo-animation.aab26008.png","aab26008bf268606ce67d24e783483c5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});