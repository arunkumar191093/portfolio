!function(e){var n={};function i(t){if(n[t])return n[t].exports;var A=n[t]={i:t,l:!1,exports:{}};return e[t].call(A.exports,A,A.exports,i),A.l=!0,A.exports}i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var A in e)i.d(t,A,function(n){return e[n]}.bind(null,A));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,i){i(1),e.exports=i(2)},function(e,n){const i=document.querySelectorAll(".nav-options a"),t=document.querySelectorAll("section");let A=!1;document.querySelector(".nav-options").addEventListener("click",e=>{const n=e.target;A=!0,a(n),setTimeout(()=>{A=!1},1e3)});const a=e=>{i.forEach(e=>{e.classList.remove("active")}),e.classList.add("active")};document.onscroll=()=>{A||(t.forEach(e=>{window.scrollY>=e.offsetTop&&a(document.querySelector(`a[href='#${e.id}']`))}),window.innerHeight+window.scrollY+50>=document.body.offsetHeight&&a(document.querySelector(`a[href='#${t[t.length-1].id}']`)))},(()=>{const e=document.location.hash;e&&a(document.querySelector(`a[href='${e}']`))})(),window.addEventListener("load",(function(){const e=document.querySelector("#loader");setTimeout(()=>{e.classList.add("hide")},800),console.log("loaded")}))},function(e,n,i){var t=i(3),A=i(4);"string"==typeof(A=A.__esModule?A.default:A)&&(A=[[e.i,A,""]]);var a={insert:"head",singleton:!1};t(A,a);e.exports=A.locals||{}},function(e,n,i){"use strict";var t,A=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[n]=i}return e[n]}}(),o=[];function r(e){for(var n=-1,i=0;i<o.length;i++)if(o[i].identifier===e){n=i;break}return n}function c(e,n){for(var i={},t=[],A=0;A<e.length;A++){var a=e[A],c=n.base?a[0]+n.base:a[0],d=i[c]||0,s="".concat(c," ").concat(d);i[c]=d+1;var p=r(s),C={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(o[p].references++,o[p].updater(C)):o.push({identifier:s,updater:m(C,n),references:1}),t.push(s)}return t}function d(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var A=i.nc;A&&(t.nonce=A)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,p=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function C(e,n,i,t){var A=i?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=p(n,A);else{var a=document.createTextNode(A),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function l(e,n,i){var t=i.css,A=i.media,a=i.sourceMap;if(A?e.setAttribute("media",A):e.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var x=null,f=0;function m(e,n){var i,t,A;if(n.singleton){var a=f++;i=x||(x=d(n)),t=C.bind(null,i,a,!1),A=C.bind(null,i,a,!0)}else i=d(n),t=l.bind(null,i,n),A=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else A()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=A());var i=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<i.length;t++){var A=r(i[t]);o[A].references--}for(var a=c(e,n),d=0;d<i.length;d++){var s=r(i[d]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}i=a}}}},function(e,n,i){(n=i(5)(!0)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]),n.push([e.i,'@keyframes pulse-animation{0%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,144,255,0.7)}70%{transform:scale(1.05);box-shadow:0 0 0 24px rgba(0,144,255,0)}100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,144,255,0)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes fade-in-page{from{opacity:0}to{opacity:1}}@keyframes fade-in-page{from{opacity:0}to{opacity:1}}body{font-family:"Lato", sans-serif;margin:0;padding:0}html{scroll-behavior:smooth}.loader{position:fixed;top:0;left:0;width:100%;height:100%;min-height:100%;overflow:hidden;z-index:999;opacity:1;background-color:#fff}.loader .loader-icon{border:2px solid #f3f3f3;border-radius:50%;border-top:2px solid #5645d7;width:50px;height:50px;position:relative;top:45%;margin:0 auto;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.loader .loader-text{position:relative;top:45%;display:flex;justify-content:center}.loader.hide{display:none}.page-container{animation:fade-in-page 2s}.sidebar{display:flex;flex-direction:column;justify-content:space-between;height:100%;width:70px;position:fixed;z-index:1;top:0;left:0;overflow-x:hidden;background-image:linear-gradient(#1a23b3, #5645d7, #0090ff)}.sidebar .nav-head{padding:0px 0 8px;background:transparent;height:60px;display:none}.sidebar .nav-head .heading{color:#fff;text-align:center;padding:2px;transform:rotate(-25deg);padding-right:10px;font-size:50px}.sidebar .nav-head .heading .head-icon i{font-size:40px}.sidebar .nav-head .heading .head-name{font-style:italic;font-family:serif;padding-top:8px}.sidebar .nav-options{padding-top:20px}.sidebar .nav-options a{padding:8px;text-decoration:none;font-size:20px;color:#fff;display:flex;justify-content:center;height:50px}.sidebar .nav-options a.active,.sidebar .nav-options a:hover:not(#menu-nav){color:#fff;font-size:12px}.sidebar .nav-options a.active i,.sidebar .nav-options a:hover:not(#menu-nav) i{display:none}.sidebar .nav-options a.active#home-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#home-nav::after{content:"Home"}.sidebar .nav-options a.active#skills-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#skills-nav::after{content:"Skills"}.sidebar .nav-options a.active#about-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#about-nav::after{content:"Experience"}.sidebar .nav-options a.active#work-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#work-nav::after{content:"Projects"}.sidebar .nav-options a.active#contact-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#contact-nav::after{content:"Contact"}.sidebar .side-nav-social-links a{padding:8px;text-decoration:none;font-size:16px;color:#fff;display:flex;justify-content:center;height:30px}.main{padding:0px 10px;margin:0 auto;margin-left:80px;width:90%;height:700px}.section-heading{font-size:40px;padding:12px 0px}.home-container{display:flex;align-items:center}.home-container .home-content{flex:1}.home-container .home-content .greet{font-size:32px;margin:16px 0px;color:#636363}.home-container .home-content .name{font-size:50px;font-weight:bold;margin:16px 0px;background:linear-gradient(to right, #1a23b3 0%, #5645d7 20%, #0090ff 40%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.home-container .home-content .greet-description{font-size:22px;margin:16px 0px;color:#636363}.home-container .home-content .greet-description .resume-msg{padding-top:16px}.home-container .home-banner{flex:1}.home-container .home-banner img{max-width:100%;height:auto}.home-container .typography-img-container{position:relative;width:50%;height:70vh;background:#000}.home-container .typography-img-container img{position:absolute;top:0;left:0;width:100%;height:70vh;object-fit:cover}.home-container .typography-img-container img:nth-child(2){mix-blend-mode:multiply}.skills-container{display:flex;align-items:center;margin-top:3%}.skills-container .skills-banner{flex:1;background:#fff}.skills-container .skills-banner img{max-width:100%;height:auto}.skills-container .skills-content{flex:1}.skills-container .skills-content .skill-heading{font-size:36px;margin:16px 0px}.skills-container .skills-content .skills-list li{font-size:24px;color:#636363}.skills-container .skills-content .skill-icons{display:flex;flex-direction:row;flex-wrap:wrap;padding:2%}.skills-container .skills-content .skill-icons div{margin:0 8px}.skills-container .skills-content .skill-icons div i{padding:8px;text-decoration:none;font-size:50px;color:#636363}.skills-container .skills-content .skill-icons div span{display:flex;justify-content:center;font-size:12px}.experience-container .cards-container{display:flex;justify-content:space-around}.experience-container .cards-container .card-wrapper{display:flex;flex-direction:column;border:1px solid #ececec;border-radius:12px;width:33%;margin:0 12px;overflow:hidden;-webkit-box-shadow:0px 2px 12px 0px #d0d0d0;-moz-box-shadow:0px 2px 12px 0px #d0d0d0;box-shadow:0px 2px 12px 0px #d0d0d0}.experience-container .cards-container .card-wrapper .card-header{width:100%;height:7em;position:relative;text-align:center}.experience-container .cards-container .card-wrapper .card-header .company-name{color:#fff}.experience-container .cards-container .card-wrapper .card-header img{width:60px;position:absolute;border:1px solid #e8e8e8;border-radius:20%;left:0;right:0;top:65px;margin-left:auto;margin-right:auto;background-color:white;padding:8px}.experience-container .cards-container .card-wrapper .card-header img.apttus-logo{width:120px;top:90px;border-radius:10px}.experience-container .cards-container .card-wrapper .card-header img.infosys-logo{width:90px;top:90px;border-radius:10px}.experience-container .cards-container .card-wrapper .card-body{padding:16px;margin-top:16px}.experience-container .cards-container .card-wrapper .card-body .head-text{text-align:center}.experience-container .cards-container .card-wrapper .card-body .head-text h2,.experience-container .cards-container .card-wrapper .card-body .head-text p{margin:0;padding:4px}.experience-container .cards-container .card-wrapper .card-body .head-text p{color:#636363}.experience-container .cards-container .card-wrapper .card-body .head-text p:last-child{font-style:italic}.experience-container .cards-container .card-wrapper .card-body .subtext{padding-top:16px}.experience-container .cards-container .card-wrapper .card-body .subtext .heading{font-weight:bolder;font-size:18px}.experience-container .cards-container .card-wrapper .card-body .subtext .responsibilities{margin:0;padding:0;padding-left:30px}.experience-container .cards-container .card-wrapper .card-body .subtext .responsibilities li{font-size:14px;color:#636363;padding:4px 0px}.projects-container .cards-container{display:flex;flex-wrap:wrap}.projects-container .cards-container .card-item{padding:20px 30px;background-color:white;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-box-shadow:0px 1px 4px 0px #a9a9a9;-moz-box-shadow:0px 1px 4px 0px #a9a9a9;box-shadow:0px 1px 4px 0px #a9a9a9;margin:12px;max-width:26%;border-radius:8px}.projects-container .cards-container .card-item:hover{-webkit-box-shadow:0px 0px 20px 0px #a9a9a9;-moz-box-shadow:0px 0px 20px 0px #a9a9a9;box-shadow:0px 0px 20px 0px #a9a9a9}.projects-container .cards-container .card-item .card-heading{font-size:20px;font-weight:bold}.projects-container .cards-container .card-item .card-content{color:#636363}.contact-container{height:auto;padding-bottom:20px}.contact-container .my-info{display:flex;flex-direction:row}.contact-container .my-info i{font-size:20px;margin-right:3%}.contact-container .my-info .info-item{display:flex;flex-direction:row;padding:8px;width:30%}.contact-container .my-info .address{max-width:70%}.contact-container .my-info .mobile{padding-left:12px}.contact-container .contact-social-links{display:none;flex-direction:row;justify-content:center}.contact-container .contact-social-links a{padding:8px;text-decoration:none;font-size:20px;color:#292cbb}.resume-floating-btn{position:fixed;bottom:60px;right:60px}.resume-floating-btn a{padding:24px;border-radius:50%;background-image:linear-gradient(#1a23b3, #5645d7, #0090ff);transform:scale(1);animation:pulse-animation 2s infinite}.resume-floating-btn a i{color:#fff;font-size:20px}@media only screen and (min-width: 250px) and (max-width: 600px){body{margin:0}.sidebar{height:60px;flex-direction:row;width:100%;overflow-y:hidden;overflow-x:auto;background-image:linear-gradient(to right, #1a23b3, #5645d7, #0090ff);justify-content:flex-start;z-index:10}.sidebar .nav-head{width:20%}.sidebar .nav-head .heading{font-size:40px}.sidebar .nav-head .heading .head-icon i{font-size:30px}.sidebar .nav-options{display:flex;justify-content:space-evenly;width:100%;padding:0}.sidebar .nav-options a{flex-direction:row;align-items:center}.sidebar .side-nav-social-links{display:none}.main{padding-left:15px;margin:0;height:auto;padding-top:60px}.section-heading{font-size:30px}.home-container{flex-direction:column;margin-top:70px}.home-container .home-content{order:2}.home-container .home-content .greet{font-size:24px;margin:8px 0px}.home-container .home-content .name{font-size:40px;margin:8px 0px}.home-container .home-content .greet-description{font-size:20px;margin:8px 0px}.skills-container .skills-content .skills-list li{font-size:18px !important}.skills-container .skills-content .skill-icons div i{font-size:30px}.experience-container .cards-container{flex-direction:column;width:95%;margin:0}.projects-container .cards-container .card-item{max-width:100% !important}.contact-container .contact-social-links{display:flex}.contact-container .my-info .mobile{width:50%}.resume-floating-btn{bottom:40px;right:40px}.resume-floating-btn a{padding:20px}.resume-floating-btn a i{font-size:16px}}@media only screen and (max-width: 768px){.skills-container{flex-direction:column;margin-top:0}.skills-container .skills-banner{order:2;width:60%}.skills-container .skills-content .skills-list li{font-size:24px}.skills-container .skills-content .skills-list li .skill-icons div i{font-size:40px}.experience-container{height:auto}.experience-container .cards-container{flex-direction:column;width:95%;margin:0}.experience-container .cards-container .card-wrapper{width:100%;margin:12px}.projects-container .cards-container .card-item{max-width:35%}.contact-container .my-info{flex-direction:column}.contact-container .my-info .info-item{width:80%}}@media only screen and (min-width: 768px) and (max-width: 992px){.experience-container .container{width:40.2%}.experience-container .container .content-details{width:64%}}@media only screen and (min-width: 992px) and (max-width: 1200px){.experience-container .container{width:42.2%}.contact-container .my-info .mobile{width:50%}}\n',"",{version:3,sources:["index.scss"],names:[],mappings:"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",file:"index.scss",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");@keyframes pulse-animation{0%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,144,255,0.7)}70%{transform:scale(1.05);box-shadow:0 0 0 24px rgba(0,144,255,0)}100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(0,144,255,0)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes fade-in-page{from{opacity:0}to{opacity:1}}@keyframes fade-in-page{from{opacity:0}to{opacity:1}}body{font-family:"Lato", sans-serif;margin:0;padding:0}html{scroll-behavior:smooth}.loader{position:fixed;top:0;left:0;width:100%;height:100%;min-height:100%;overflow:hidden;z-index:999;opacity:1;background-color:#fff}.loader .loader-icon{border:2px solid #f3f3f3;border-radius:50%;border-top:2px solid #5645d7;width:50px;height:50px;position:relative;top:45%;margin:0 auto;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.loader .loader-text{position:relative;top:45%;display:flex;justify-content:center}.loader.hide{display:none}.page-container{animation:fade-in-page 2s}.sidebar{display:flex;flex-direction:column;justify-content:space-between;height:100%;width:70px;position:fixed;z-index:1;top:0;left:0;overflow-x:hidden;background-image:linear-gradient(#1a23b3, #5645d7, #0090ff)}.sidebar .nav-head{padding:0px 0 8px;background:transparent;height:60px;display:none}.sidebar .nav-head .heading{color:#fff;text-align:center;padding:2px;transform:rotate(-25deg);padding-right:10px;font-size:50px}.sidebar .nav-head .heading .head-icon i{font-size:40px}.sidebar .nav-head .heading .head-name{font-style:italic;font-family:serif;padding-top:8px}.sidebar .nav-options{padding-top:20px}.sidebar .nav-options a{padding:8px;text-decoration:none;font-size:20px;color:#fff;display:flex;justify-content:center;height:50px}.sidebar .nav-options a.active,.sidebar .nav-options a:hover:not(#menu-nav){color:#fff;font-size:12px}.sidebar .nav-options a.active i,.sidebar .nav-options a:hover:not(#menu-nav) i{display:none}.sidebar .nav-options a.active#home-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#home-nav::after{content:"Home"}.sidebar .nav-options a.active#skills-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#skills-nav::after{content:"Skills"}.sidebar .nav-options a.active#about-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#about-nav::after{content:"Experience"}.sidebar .nav-options a.active#work-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#work-nav::after{content:"Projects"}.sidebar .nav-options a.active#contact-nav::after,.sidebar .nav-options a:hover:not(#menu-nav)#contact-nav::after{content:"Contact"}.sidebar .side-nav-social-links a{padding:8px;text-decoration:none;font-size:16px;color:#fff;display:flex;justify-content:center;height:30px}.main{padding:0px 10px;margin:0 auto;margin-left:80px;width:90%;height:700px}.section-heading{font-size:40px;padding:12px 0px}.home-container{display:flex;align-items:center}.home-container .home-content{flex:1}.home-container .home-content .greet{font-size:32px;margin:16px 0px;color:#636363}.home-container .home-content .name{font-size:50px;font-weight:bold;margin:16px 0px;background:linear-gradient(to right, #1a23b3 0%, #5645d7 20%, #0090ff 40%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.home-container .home-content .greet-description{font-size:22px;margin:16px 0px;color:#636363}.home-container .home-content .greet-description .resume-msg{padding-top:16px}.home-container .home-banner{flex:1}.home-container .home-banner img{max-width:100%;height:auto}.home-container .typography-img-container{position:relative;width:50%;height:70vh;background:#000}.home-container .typography-img-container img{position:absolute;top:0;left:0;width:100%;height:70vh;object-fit:cover}.home-container .typography-img-container img:nth-child(2){mix-blend-mode:multiply}.skills-container{display:flex;align-items:center;margin-top:3%}.skills-container .skills-banner{flex:1;background:#fff}.skills-container .skills-banner img{max-width:100%;height:auto}.skills-container .skills-content{flex:1}.skills-container .skills-content .skill-heading{font-size:36px;margin:16px 0px}.skills-container .skills-content .skills-list li{font-size:24px;color:#636363}.skills-container .skills-content .skill-icons{display:flex;flex-direction:row;flex-wrap:wrap;padding:2%}.skills-container .skills-content .skill-icons div{margin:0 8px}.skills-container .skills-content .skill-icons div i{padding:8px;text-decoration:none;font-size:50px;color:#636363}.skills-container .skills-content .skill-icons div span{display:flex;justify-content:center;font-size:12px}.experience-container .cards-container{display:flex;justify-content:space-around}.experience-container .cards-container .card-wrapper{display:flex;flex-direction:column;border:1px solid #ececec;border-radius:12px;width:33%;margin:0 12px;overflow:hidden;-webkit-box-shadow:0px 2px 12px 0px #d0d0d0;-moz-box-shadow:0px 2px 12px 0px #d0d0d0;box-shadow:0px 2px 12px 0px #d0d0d0}.experience-container .cards-container .card-wrapper .card-header{width:100%;height:7em;position:relative;text-align:center}.experience-container .cards-container .card-wrapper .card-header .company-name{color:#fff}.experience-container .cards-container .card-wrapper .card-header img{width:60px;position:absolute;border:1px solid #e8e8e8;border-radius:20%;left:0;right:0;top:65px;margin-left:auto;margin-right:auto;background-color:white;padding:8px}.experience-container .cards-container .card-wrapper .card-header img.apttus-logo{width:120px;top:90px;border-radius:10px}.experience-container .cards-container .card-wrapper .card-header img.infosys-logo{width:90px;top:90px;border-radius:10px}.experience-container .cards-container .card-wrapper .card-body{padding:16px;margin-top:16px}.experience-container .cards-container .card-wrapper .card-body .head-text{text-align:center}.experience-container .cards-container .card-wrapper .card-body .head-text h2,.experience-container .cards-container .card-wrapper .card-body .head-text p{margin:0;padding:4px}.experience-container .cards-container .card-wrapper .card-body .head-text p{color:#636363}.experience-container .cards-container .card-wrapper .card-body .head-text p:last-child{font-style:italic}.experience-container .cards-container .card-wrapper .card-body .subtext{padding-top:16px}.experience-container .cards-container .card-wrapper .card-body .subtext .heading{font-weight:bolder;font-size:18px}.experience-container .cards-container .card-wrapper .card-body .subtext .responsibilities{margin:0;padding:0;padding-left:30px}.experience-container .cards-container .card-wrapper .card-body .subtext .responsibilities li{font-size:14px;color:#636363;padding:4px 0px}.projects-container .cards-container{display:flex;flex-wrap:wrap}.projects-container .cards-container .card-item{padding:20px 30px;background-color:white;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-box-shadow:0px 1px 4px 0px #a9a9a9;-moz-box-shadow:0px 1px 4px 0px #a9a9a9;box-shadow:0px 1px 4px 0px #a9a9a9;margin:12px;max-width:26%;border-radius:8px}.projects-container .cards-container .card-item:hover{-webkit-box-shadow:0px 0px 20px 0px #a9a9a9;-moz-box-shadow:0px 0px 20px 0px #a9a9a9;box-shadow:0px 0px 20px 0px #a9a9a9}.projects-container .cards-container .card-item .card-heading{font-size:20px;font-weight:bold}.projects-container .cards-container .card-item .card-content{color:#636363}.contact-container{height:auto;padding-bottom:20px}.contact-container .my-info{display:flex;flex-direction:row}.contact-container .my-info i{font-size:20px;margin-right:3%}.contact-container .my-info .info-item{display:flex;flex-direction:row;padding:8px;width:30%}.contact-container .my-info .address{max-width:70%}.contact-container .my-info .mobile{padding-left:12px}.contact-container .contact-social-links{display:none;flex-direction:row;justify-content:center}.contact-container .contact-social-links a{padding:8px;text-decoration:none;font-size:20px;color:#292cbb}.resume-floating-btn{position:fixed;bottom:60px;right:60px}.resume-floating-btn a{padding:24px;border-radius:50%;background-image:linear-gradient(#1a23b3, #5645d7, #0090ff);transform:scale(1);animation:pulse-animation 2s infinite}.resume-floating-btn a i{color:#fff;font-size:20px}@media only screen and (min-width: 250px) and (max-width: 600px){body{margin:0}.sidebar{height:60px;flex-direction:row;width:100%;overflow-y:hidden;overflow-x:auto;background-image:linear-gradient(to right, #1a23b3, #5645d7, #0090ff);justify-content:flex-start;z-index:10}.sidebar .nav-head{width:20%}.sidebar .nav-head .heading{font-size:40px}.sidebar .nav-head .heading .head-icon i{font-size:30px}.sidebar .nav-options{display:flex;justify-content:space-evenly;width:100%;padding:0}.sidebar .nav-options a{flex-direction:row;align-items:center}.sidebar .side-nav-social-links{display:none}.main{padding-left:15px;margin:0;height:auto;padding-top:60px}.section-heading{font-size:30px}.home-container{flex-direction:column;margin-top:70px}.home-container .home-content{order:2}.home-container .home-content .greet{font-size:24px;margin:8px 0px}.home-container .home-content .name{font-size:40px;margin:8px 0px}.home-container .home-content .greet-description{font-size:20px;margin:8px 0px}.skills-container .skills-content .skills-list li{font-size:18px !important}.skills-container .skills-content .skill-icons div i{font-size:30px}.experience-container .cards-container{flex-direction:column;width:95%;margin:0}.projects-container .cards-container .card-item{max-width:100% !important}.contact-container .contact-social-links{display:flex}.contact-container .my-info .mobile{width:50%}.resume-floating-btn{bottom:40px;right:40px}.resume-floating-btn a{padding:20px}.resume-floating-btn a i{font-size:16px}}@media only screen and (max-width: 768px){.skills-container{flex-direction:column;margin-top:0}.skills-container .skills-banner{order:2;width:60%}.skills-container .skills-content .skills-list li{font-size:24px}.skills-container .skills-content .skills-list li .skill-icons div i{font-size:40px}.experience-container{height:auto}.experience-container .cards-container{flex-direction:column;width:95%;margin:0}.experience-container .cards-container .card-wrapper{width:100%;margin:12px}.projects-container .cards-container .card-item{max-width:35%}.contact-container .my-info{flex-direction:column}.contact-container .my-info .info-item{width:80%}}@media only screen and (min-width: 768px) and (max-width: 992px){.experience-container .container{width:40.2%}.experience-container .container .content-details{width:64%}}@media only screen and (min-width: 992px) and (max-width: 1200px){.experience-container .container{width:42.2%}.contact-container .my-info .mobile{width:50%}}\n']}]),e.exports=n},function(e,n,i){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var i=function(e,n){var i=e[1]||"",t=e[3];if(!t)return i;if(n&&"function"==typeof btoa){var A=(o=t,r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[i].concat(a).concat([A]).join("\n")}var o,r,c;return[i].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(i,"}"):i})).join("")},n.i=function(e,i,t){"string"==typeof e&&(e=[[null,e,""]]);var A={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(A[o]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);t&&A[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),n.push(c))}},n}}]);