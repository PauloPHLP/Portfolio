"use strict";var precacheConfig=[["/portfolio/index.html","cd31edef178b2da041c76e2d6beba048"],["/portfolio/static/css/main.1ed70fdc.css","9f08ea5e4f9c053c2ca590bdb4c45c06"],["/portfolio/static/js/main.f26d2b45.js","523c9bf47bb7d891a9685b1f71aa133b"],["/portfolio/static/media/Curriculo.3ae8d2d6.pdf","3ae8d2d69ec0aac3ec58f6fe7bc490b2"],["/portfolio/static/media/Resume.2df58dd5.pdf","2df58dd5f0163aa543330369176ca48b"],["/portfolio/static/media/brazil_flag.ec3dc271.png","ec3dc271053a689c5336649ca523af42"],["/portfolio/static/media/csharp.9c75ca2b.png","9c75ca2b0c277584e827c20c0a9ac4eb"],["/portfolio/static/media/css3.0abf0024.png","0abf0024aa7d86e2b1ad924d9a7603a6"],["/portfolio/static/media/html5.664a8c00.png","664a8c00ef526bf33edf55808601d461"],["/portfolio/static/media/javascript.637ccbf2.png","637ccbf2b702b94a2cf9a3ff6cdd7dc2"],["/portfolio/static/media/nodejs.d42672d4.png","d42672d4d185739d26257ed5c653c740"],["/portfolio/static/media/picture.6af63dd2.jpg","6af63dd25151109a1fab8ba32425d59b"],["/portfolio/static/media/reactjs.7eeeec83.png","7eeeec832f46d5aa89ddc86c9745b2b5"],["/portfolio/static/media/united-states-flag.ff97e132.png","ff97e132da519724034302a4a92750ef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});