var d=this;function f(a,b){var c=a.split("."),e=d;c[0]in e||!e.execScript||e.execScript("var "+c[0]);for(var k;c.length&&(k=c.shift());)c.length||void 0===b?e=e[k]?e[k]:e[k]={}:e[k]=b};function g(){this.F=window.ce.api.CloudExplorer.get("ce-js")}f("FileService",g);g.prototype.open=function(){var a=this;return new Promise(function(b,c){a.F.pick(function(a){console.log("my Blob: "+JSON.stringify(a));b(a)},function(a){console.log("error "+JSON.stringify(a));c(a)})})};g.prototype.open=g.prototype.open;function h(a){this.element=a;this.a=a.getElementsByTagName("iframe")[0];this.height=this.width=1;window.addEventListener("resize",this.d.bind(this))}f("Stage",h);h.prototype.B=function(a,b){this.width=a;this.height=b;this.d()};h.prototype.setSize=h.prototype.B;
h.prototype.d=function(){this.a.style.width=this.width+"px";this.a.style.height=this.height+"px";var a=this.element.offsetWidth,b=this.element.offsetHeight,c=Math.min(1,a/this.width,b/this.height);this.a.style.transform="scale("+c+")";this.a.style.transformOrigin="0 0";b=(b-this.height*c)/2;this.a.style.left=(a-this.width*c)/2+"px";this.a.style.top=b+"px"};h.prototype.redraw=h.prototype.d;
h.prototype.C=function(a){var b=this;return new Promise(function(c,e){b.a.onload=function(){return c(b.a.contentDocument)};b.a.onerror=function(a){return e(a)};b.a.src=a})};h.prototype.setUrl=h.prototype.C;h.prototype.M=function(a){var b=this;return new Promise(function(c,e){b.a.onload=function(){b.a.onload=c(b.a.contentDocument);b.a.src="";b.a.contentDocument.write(a)};b.a.onerror=function(a){return e(a)};b.a.src="about:blank"})};h.prototype.setHtml=h.prototype.M;f("Device",{Q:0,R:1,S:2,T:3,P:4});var l=[{name:"mobile",width:320,height:480},{name:"mobile-h",width:476,height:320},{name:"tablet",width:768,height:1024},{name:"tablet-h",width:1024,height:768},{name:"desktop",width:1280,height:800}];f("DeviceData",l);
function m(a){var b=this;this.element=a;this.element.querySelector(".open");this.L=this.element.querySelector(".save");this.selection=[];this.n=this.v=this.m=null;this.element.addEventListener("click",function(a){var e=a.target;e.classList.contains("open")&&b.m&&b.m();e.classList.contains("save")?(b.L.classList.toggle("off"),b.v&&b.v()):e.classList.contains("mobile")?b.e(0):e.classList.contains("mobile-h")?b.e(1):e.classList.contains("tablet")?b.e(2):e.classList.contains("desktop")&&b.e(4);a.preventDefault();
return!1})}f("Toolbar",m);m.prototype.e=function(a){for(var b=this.element.querySelectorAll(".selected"),c=0;c<b.length;c++)b.item(c).classList.remove("selected");this.element.querySelector("."+l[a].name).classList.add("selected");this.n&&this.n(l[a].width,l[a].height)};m.prototype.setDevice=m.prototype.e;m.prototype.o=function(a){this.selection=a;this.d()};m.prototype.setSelection=m.prototype.o;m.prototype.d=function(){};m.prototype.redraw=m.prototype.d;function n(){this.j=this.i=this.k=!1;this.f=this.c=this.b=null;this.r=this.J.bind(this);this.t=this.u.bind(this);this.s=this.K.bind(this);this.w=this.u.bind(this)}f("Wysiwyg",n);n.prototype.O=function(a){return this.c=a};n.prototype.setOnSelect=n.prototype.O;n.prototype.I=function(){return this.c};n.prototype.getOnSelect=n.prototype.I;n.prototype.N=function(a){return this.f=a};n.prototype.setOnBeforeSelect=n.prototype.N;n.prototype.H=function(){return this.f};n.prototype.getOnBeforeSelect=n.prototype.H;
n.prototype.A=function(a){if(this.b){this.b.removeEventListener("mousedown",this.r);this.b.removeEventListener("mouseup",this.t);this.b.removeEventListener("mousemove",this.s);for(var b=a.ownerDocument.getElementsByTagName("a"),c=0;c<b.length;c++)b[c].removeEventListener("click",this.w)}this.b=a;this.p(this.k);this.b.addEventListener("mouseup",this.t,!0);this.b.addEventListener("mousedown",this.r);this.b.addEventListener("mousemove",this.s);a=a.ownerDocument.getElementsByTagName("a");for(b=0;b<a.length;b++)a[b].addEventListener("click",
this.w);this.i=!1;a=document.createElement("style");a.innerHTML="      .rsz-select-mode * {        min-width: 20px !important;        min-height: 20px !important;        opacity: 1 !important;        box-shadow: 0px 0px 2px rgba(51, 51, 51, 0.2);        cursor: pointer;      }      .rsz-dragging {        position: absolute !important;      }      .rsz-selected {        box-shadow: 0 0 4px #333333;      }      .rsz-select-candidate {      }    ";this.b.appendChild(a)};n.prototype.setContainer=n.prototype.A;
n.prototype.p=function(a){this.k=a;this.b&&(a?this.b.classList.add("rsz-select-mode"):this.b.classList.remove("rsz-select-mode"))};n.prototype.setSelectionMode=n.prototype.p;n.prototype.h=function(a){for(var b=a;b&&this.f&&!this.f(b);)b=b.parentNode;return b||a};n.prototype.getBestElement=n.prototype.h;n.prototype.u=function(a){p(this,this.h(a.target));a.preventDefault();return!1};n.prototype.J=function(a){this.h(a.target);this.i=!0;a.preventDefault();return!1};
n.prototype.K=function(a){var b=this.h(a.target);if(this.k)if(this.i)this.j||(this.j=!0);else{for(var c=this.b.querySelectorAll(".rsz-select-candidate"),e=0;e<c.length;e++)c[e].classList.remove("rsz-select-candidate");b.classList.add("rsz-select-candidate")}a.preventDefault();return!1};function p(a,b){a.i=!1;a.k&&(a.j?a.j=!1:(a.l().forEach(function(c){c!=b&&(c.classList.remove("rsz-selected"),a.c&&a.c())}),a.select(b)))}
n.prototype.l=function(){for(var a=[],b=this.b.querySelectorAll(".rsz-selected"),c=0;c<b.length;c++)a.push(b[c]);return a};n.prototype.getSelected=n.prototype.l;n.prototype.select=function(a){a.classList.add("rsz-selected");this.c&&this.c()};function q(a){var b=this;this.toolbar=new m(a.querySelector("#toolbar"));this.D=new h(a.querySelector("#stage"));this.g=new n;this.G=new g;this.toolbar.n=function(a,e){return b.D.B(a,e)};this.toolbar.m=function(){return b.G.open().then(function(a){return r(b,a)})};this.g.f=function(a){return b.q(a)};this.g.c=function(){return b.toolbar.o(b.g.l())};this.g.p(!0);this.toolbar.e(4)}
q.prototype.q=function(a){var b=0,c;for(c in a.parentNode.childNodes)1===a.parentNode.childNodes[c].nodeType&&b++;return 1<b};f("App.prototype.hasSiblings",q.prototype.q);function r(a,b){a.D.C(b.url).then(function(b){a.g.A(b.body);a.toolbar.o([])})};window.initResponsizeApp=function(){for(var a=new q(document.getElementById("rsz-app")),b=document.location.search,b=b.split("+").join(" "),c={},e,k=/[?&]?([^=]+)=([^&]*)/g;e=k.exec(b);)c[decodeURIComponent(e[1])]=decodeURIComponent(e[2]);c.url&&r(a,{url:c.url})};
/*
//@ sourceMappingURL=responsize.js.map
*/