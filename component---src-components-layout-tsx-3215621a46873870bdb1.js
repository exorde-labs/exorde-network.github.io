(self.webpackChunkexorde_landingpage=self.webpackChunkexorde_landingpage||[]).push([[4],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),a=r(7067);function o(t,r,i){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},3023:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Pe}});var n,a,o,i,c=r(7294),l=r(6725),u=r(3201),s=r(5830),f="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMTcgMTM1Ljk4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2YzhkOTt9LmNscy0ye2ZpbGw6IzczODZiMzt9LmNscy0ze2ZpbGw6IzM1MzY3Mzt9LmNscy00e2ZpbGw6IzJkMjY1OTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTI8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDEwNy44MiA1NC41OSA5NC41MyA1NC41OSAwIDAgMTA3LjgyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjU0LjU5IDAgNTQuNTkgOTQuNTMgMTA5LjE3IDEwNy44MiA1NC41OSAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjAgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAwIDExMS4zOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIxMDkuMTcgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAxMDkuMTcgMTExLjM5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTAuNzQsNjMuNDNzLTExLjIsNi40MS03LDEwLjI1YzMuODksMy41NiwyMC4wNiw2Ljc1LDQ1LjY5LDAsMzcuMDgtOS42OSw0OS44LTIyLDUzLTI2Ljk0cy0xOC41NC0yLjkxLTE4LjU0LTIuOTFsLS4xOS40czE4LjM3LTEsMTYuNzMsMS40M2MtNS44Miw4Ljc2LTM1LjU0LDE5Ljc0LTQ5LjcxLDI0LjJzLTMyLjI4LDYtNDAuMDYsNC41MUMzLjA4LDczLDYuMDksNjksNy43LDY3LjI2bDMuMTktMy40NVoiLz48L2c+PC9nPjwvc3ZnPg==",p={terms:{en:{label:"Terms of use",link:"https://docs.exorde.network/legal/terms"},fr:{label:"Mentions légales",link:"https://docs.exorde.network/v/fr/legal/mentions-legales"}},privacyPolicy:{en:{label:"Privacy policy",link:"https://docs.exorde.network/legal/privacy-policy"},fr:{label:"Politique de confidentialité",link:"https://docs.exorde.network/legal/privacy-policy"}}},d=function(e){var t=e.brand;return c.createElement(t,{className:"text-6xl"})},m=function(e){var t=e.locale;return c.createElement("div",{className:"bg-black-dark text-white p-8"},c.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left"},c.createElement("div",{className:"flex flex-col items-center "},c.createElement("img",{src:f,className:"max-h-24",alt:"Exorde logo"}),c.createElement("h3",{className:"font-brand pt-2 text-white-off"},"EXORDE")),c.createElement("div",null,c.createElement("h3",null,"Contact"),c.createElement("ul",{className:"pt-5 text-xs"},c.createElement("li",null,c.createElement("a",{href:"mailto:exordedao@gmail.com","aria-label":"Exorde email"},"contact@exorde.foundation")))),c.createElement("div",null,c.createElement("h3",null,"Legal"),c.createElement("ul",{className:"pt-5 text-xs"},c.createElement("li",null,c.createElement("a",{href:p.terms[t].link,target:"_blank",rel:"noreferrer","aria-label":"Legal mentions"},p.terms[t].label)),c.createElement("li",null,c.createElement("a",{href:p.privacyPolicy[t].link,target:"_blank",rel:"noreferrer","aria-label":"Legal mentions"},p.privacyPolicy[t].label)))),c.createElement("div",null,c.createElement("h3",null,"Socials"),c.createElement("ul",{className:"pt-5 flex flex-wrap justify-center md:justify-start md:w-32"},c.createElement("li",null,c.createElement("a",{href:s.KT.twitter[t],target:"_blank",rel:"noreferrer","aria-label":"Twitter"},c.createElement(d,{brand:u.N1v}))),c.createElement("li",null,c.createElement("a",{href:s.KT.facebook,target:"_blank",rel:"noreferrer","aria-label":"Facebook"},c.createElement(d,{brand:u.R9i}))),c.createElement("li",null,c.createElement("a",{href:s.KT.linkedin,target:"_blank",rel:"noreferrer","aria-label":"Linkedin"},c.createElement(d,{brand:u.ltd}))),c.createElement("li",null,c.createElement("a",{href:s.KT.reddit,target:"_blank",rel:"noreferrer","aria-label":"Reddit"},c.createElement(d,{brand:u.KVL})))))),c.createElement("p",{className:"pt-10 text-center text-xs"},"© Exorde Labs - ",(new Date).getFullYear()))},y=r(5444),g=[{id:"home",label:"Home",url:""},{id:"economics",label:"Economics",url:""}],b=function(e){var t=e.open;return c.createElement("div",{id:"sidebar",className:(t?"visible":"invisible")+" bg-white absolute h-screen w-full top-0 pt-20 z-40"},c.createElement("ul",{className:"text-center text-blue-dark font-semibold text-4xl pt-20"},g.map((function(e){return c.createElement("li",{className:"p-4"},e.label)}))))},h=function(){var e=(0,c.useState)(!1),t=e[0],r=(e[1],(0,c.useState)(0)),n=r[0],a=r[1],o=function(){return a(window.pageYOffset)};return(0,c.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}})),c.createElement(c.Fragment,null,c.createElement("nav",{className:"fixed pr-6 pl-6 pt-2 pb-2 h-20 w-full flex items-center z-50  "+(n>0?"shadow bg-white":"bg-transparent")},c.createElement(y.Link,{to:"/",className:"h-full min-w-max mr-auto flex items-end"},c.createElement("img",{src:f,alt:"exorde logo",className:"h-full"}),c.createElement("h3",{className:"font-brand text-blue ml-2 pb-1"},"EXORDE"))),c.createElement(b,{open:t}))},v=r(5697),E=r.n(v),x=r(4839),w=r.n(x),T=r(2993),O=r.n(T),M=r(6494),L=r.n(M),A="bodyAttributes",S="htmlAttributes",j="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},I=(Object.keys(C).map((function(e){return C[e]})),"charset"),k="cssText",N="href",P="http-equiv",D="innerHTML",_="itemprop",R="name",Y="property",z="rel",H="src",U="target",F={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",Z="defer",G="encodeSpecialCharacters",q="onChangeClientState",K="titleTemplate",W=Object.keys(F).reduce((function(e,t){return e[F[t]]=t,e}),{}),X=[C.NOSCRIPT,C.SCRIPT,C.STYLE],V="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},re=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ne=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ae=function(e){var t=ue(e,C.TITLE),r=ue(e,K);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ue(e,B);return t||n||void 0},oe=function(e){return ue(e,q)||function(){}},ie=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ee({},e,t)}),{})},ce=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},le=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&me("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===z&&"canonical"===e[r].toLowerCase()||l===z&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==D&&c!==k&&c!==_||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=L()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},ue=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},se=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){se(e)}),0)}),fe=function(e){return clearTimeout(e)},pe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||se:r.g.requestAnimationFrame||se,de="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||fe:r.g.cancelAnimationFrame||fe,me=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ye=null,ge=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ve(C.BODY,n),ve(C.HTML,a),he(f,p);var d={baseTag:Ee(C.BASE,r),linkTags:Ee(C.LINK,o),metaTags:Ee(C.META,i),noscriptTags:Ee(C.NOSCRIPT,c),scriptTags:Ee(C.SCRIPT,u),styleTags:Ee(C.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,m,y)},be=function(e){return Array.isArray(e)?e.join(""):e},he=function(e,t){void 0!==e&&document.title!==e&&(document.title=be(e)),ve(C.TITLE,t)},ve=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(V),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(V):r.getAttribute(V)!==i.join(",")&&r.setAttribute(V,i.join(","))}},Ee=function(e,t){var r=document.head||document.querySelector(C.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===D)r.innerHTML=t.innerHTML;else if(n===k)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(V,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},xe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)},Te=function(e,t,r){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[V]=!0,a=we(r,n),[c.createElement(C.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=xe(r),o=be(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+ne(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ne(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case A:case S:return{toComponent:function(){return we(t)},toString:function(){return xe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[V]=!0,n);return Object.keys(t).forEach((function(e){var r=F[e]||e;if(r===D||r===k){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===D||e===k)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+ne(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===X.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},Oe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:Te(C.BASE,t,n),bodyAttributes:Te(A,r,n),htmlAttributes:Te(S,a,n),link:Te(C.LINK,o,n),meta:Te(C.META,i,n),noscript:Te(C.NOSCRIPT,c,n),script:Te(C.SCRIPT,l,n),style:Te(C.STYLE,u,n),title:Te(C.TITLE,{title:f,titleAttributes:p},n)}},Me=w()((function(e){return{baseTag:ce([N,U],e),bodyAttributes:ie(A,e),defer:ue(e,Z),encode:ue(e,G),htmlAttributes:ie(S,e),linkTags:le(C.LINK,[z,N],e),metaTags:le(C.META,[R,I,P,Y,_],e),noscriptTags:le(C.NOSCRIPT,[D],e),onChangeClientState:oe(e),scriptTags:le(C.SCRIPT,[H,D],e),styleTags:le(C.STYLE,[k],e),title:ae(e),titleAttributes:ie(j,e)}}),(function(e){ye&&de(ye),e.defer?ye=pe((function(){ge(e,(function(){ye=null}))})):(ge(e),ye=null)}),Oe)((function(){return null})),Le=(a=Me,i=o=function(e){function t(){return J(this,t),re(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!O()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return ee({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ee({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case C.TITLE:return ee({},a,((t={})[n.type]=i,t.titleAttributes=ee({},o),t));case C.BODY:return ee({},a,{bodyAttributes:ee({},o)});case C.HTML:return ee({},a,{htmlAttributes:ee({},o)})}return ee({},a,((r={})[n.type]=ee({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ee({},t);return Object.keys(e).forEach((function(t){var n;r=ee({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)}(te(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=te(e,["children"]),n=ee({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},$(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:E().object,bodyAttributes:E().object,children:E().oneOfType([E().arrayOf(E().node),E().node]),defaultTitle:E().string,defer:E().bool,encodeSpecialCharacters:E().bool,htmlAttributes:E().object,link:E().arrayOf(E().object),meta:E().arrayOf(E().object),noscript:E().arrayOf(E().object),onChangeClientState:E().func,script:E().arrayOf(E().object),style:E().arrayOf(E().object),title:E().string,titleAttributes:E().object,titleTemplate:E().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=Oe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Le.renderStatic=Le.rewind;var Ae=r(9499),Se=r(5226),je=r.n(Se),Ce=function(e){var t=e.title,r=e.description,n=e.image,a=e.locale,o=e.canonical,i=e.alternatePages,l=je().find((function(e){return e.id===a})),u=(0,Ae.useLocation)().pathname,f=(0,y.useStaticQuery)(Ie).site.siteMetadata,p=f.defaultTitle,d=f.titleTemplate,m=f.defaultDescription,g=f.siteUrl,b=f.defaultImage,h=f.twitterUsername,v={title:t||p,description:r||m,image:n?""+g+n.publicURL:b,url:""+g+("/"===u?"":u)};return c.createElement(Le,{title:v.title,titleTemplate:d},c.createElement("html",{lang:a}),c.createElement("meta",{name:"description",content:v.description}),c.createElement("meta",{name:"image",content:v.image}),o&&v.url&&c.createElement("link",{rel:"canonical",href:v.url}),i&&i.length>0&&i.map((function(e){var t=e.slug,r=e.locale;return c.createElement("link",{rel:"alternate",href:""+g+("/"===t?"":t),hrefLang:r})})),c.createElement("meta",{name:"og:site_name",content:"Exorde"}),v.url&&c.createElement("meta",{property:"og:url",content:v.url}),c.createElement("meta",{name:"og:type",content:"website"}),v.title&&c.createElement("meta",{property:"og:title",content:v.title}),v.description&&c.createElement("meta",{property:"og:description",content:v.description}),v.image&&c.createElement("meta",{property:"og:image",content:v.image}),v.image&&c.createElement("meta",{property:"og:image:secure_url",content:v.image}),l.ogLanguage&&c.createElement("meta",{name:"og:locale",content:l.ogLanguage}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:creator",content:a&&s.KT.twitter[a]?s.KT.twitter[a]:h}),c.createElement("meta",{property:"twitter:domain",content:"exorde.network"}),v.url&&c.createElement("meta",{property:"twitter:url",content:v.url}),v.title&&c.createElement("meta",{name:"twitter:title",content:v.title}),v.description&&c.createElement("meta",{name:"twitter:description",content:v.description}),v.image&&c.createElement("meta",{name:"twitter:image",content:v.image}))},Ie="3897982121",ke=r(5876),Ne=function(){return(0,c.useEffect)((function(){var e=window.location.pathname,t=(0,ke.y)(window.location.pathname);t!==e&&(0,y.navigate)(t,{replace:!0})}),[]),null},Pe=function(e){var t,r,n,a,o=e.data,i=e.pageContext,u=i.locale,s=i.alternatePages;return c.createElement(c.Fragment,null,!o.mdx.frontmatter.noindex&&c.createElement(Ce,{title:null===(t=o.mdx.frontmatter)||void 0===t?void 0:t.metadata.title,description:null===(r=o.mdx.frontmatter)||void 0===r?void 0:r.metadata.description,image:null===(n=o.mdx.frontmatter)||void 0===n?void 0:n.metadata.image,locale:u,canonical:null===(a=o.mdx.frontmatter)||void 0===a?void 0:a.metadata.canonical,alternatePages:s}),c.createElement("div",{className:"relative overflow-hidden"},c.createElement(Ne,null),c.createElement(h,null),c.createElement(l.MDXRenderer,{frontmatter:o.mdx.frontmatter,locale:u},o.mdx.body),c.createElement(m,{locale:u})))}},5876:function(e,t,r){"use strict";r.d(t,{o:function(){return o},y:function(){return i}});var n=r(5226),a=r.n(n),o=function(){var e=a().find((function(e){return e.default})).siteLanguage;if("undefined"==typeof navigator)return e;var t=navigator&&navigator.language&&navigator.language.split("-")[0];return a().some((function(e){return e.siteLanguage===t}))?t:e},i=function(e){if("undefined"==typeof navigator)return e;var t=navigator&&navigator.language&&navigator.language.split("-")[0],r=a().find((function(e){return e.id===t}));if(!r)return e;var n=e.includes("/"+r.id+"/")||e.substring(e.length-(r.id.length+1))=="/"+r.id;return r.default||n?e:"/"+r.id+("/"!==e?e:"")}},5226:function(e){e.exports=[{id:"en",default:!0,path:"en",locale:"en-US",dateFormat:"DD/MM/YYYY",siteLanguage:"en",ogLanguage:"en_US"},{id:"fr",path:"fr",locale:"fr-FR",dateFormat:"DD/MM/YYYY",siteLanguage:"fr",ogLanguage:"fr_FR"}]},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),a=r(319),o=r(9713),i=r(7316);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),s=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=i(e,["scope","children"]),c=f(t),p=u.useMemo((function(){if(!r)return null;var e=l({React:u,mdx:s},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return u.createElement(p,l({},o))}}}]);
//# sourceMappingURL=component---src-components-layout-tsx-3215621a46873870bdb1.js.map