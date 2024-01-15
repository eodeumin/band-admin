function xDeprecate(a){var b="DEPRECATED : "+a+"() is deprecated function.";"object"==typeof console&&"function"==typeof console.log&&console.log(b)}function xAddEventListener(e,eT,eL,cap){if(xDeprecate("xAddEventListener"),e=xGetElementById(e)){if(eT=eT.toLowerCase(),!xIE4Up&&!xOp7Up&&e==window){if("resize"==eT)return window.xPCW=xClientWidth(),window.xPCH=xClientHeight(),window.xREL=eL,void xResizeEvent();if("scroll"==eT)return window.xPSL=xScrollLeft(),window.xPST=xScrollTop(),window.xSEL=eL,void xScrollEvent()}var eh="e.on"+eT+"=eL";e.addEventListener?e.addEventListener(eT,eL,cap):e.attachEvent?e.attachEvent("on"+eT,eL):eval(eh)}}function xResizeEvent(){xDeprecate("xResizeEvent"),window.xREL&&setTimeout("xResizeEvent()",250);var a=xClientWidth(),b=xClientHeight();window.xPCW==a&&window.xPCH==b||(window.xPCW=a,window.xPCH=b,window.xREL&&window.xREL())}function xScrollEvent(){xDeprecate("xScrollEvent"),window.xSEL&&setTimeout("xScrollEvent()",250);var a=xScrollLeft(),b=xScrollTop();window.xPSL==a&&window.xPST==b||(window.xPSL=a,window.xPST=b,window.xSEL&&window.xSEL())}function xAppendChild(a,b){return xDeprecate("xAppendChild"),a.appendChild?a.appendChild(b):null}function xClientHeight(){xDeprecate("xClientHeight");var a=0;return xOp6Dn?a=window.innerHeight:"CSS1Compat"==document.compatMode&&!window.opera&&document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&document.body.clientHeight?a=document.body.clientHeight:xDef(window.innerWidth,window.innerHeight,document.width)&&(a=window.innerHeight,document.width>window.innerWidth&&(a-=16)),a}function xClientWidth(){xDeprecate("xClientWidth");var a=0;return xOp6Dn?a=window.innerWidth:"CSS1Compat"==document.compatMode&&!window.opera&&document.documentElement&&document.documentElement.clientWidth?a=document.documentElement.clientWidth:document.body&&document.body.clientWidth?a=document.body.clientWidth:xDef(window.innerWidth,window.innerHeight,document.height)&&(a=window.innerWidth,document.height>window.innerHeight&&(a-=16)),a}function xCreateElement(a){return xDeprecate("xCreateElement"),document.createElement?document.createElement(a):null}function xDef(){xDeprecate("xDef");for(var a=0;a<arguments.length;++a)if(void 0===arguments[a])return!1;return!0}function xDeleteCookie(a,b){xDeprecate("xDeleteCookie"),xGetCookie(a)&&(document.cookie=a+"=; path="+(b||"/")+"; expires="+new Date(0).toGMTString())}function xDisplay(a,b){return xDeprecate("xDisplay"),(a=xGetElementById(a))&&a.style&&xDef(a.style.display)?(xStr(b)&&(a.style.display=b),a.style.display):null}function xEvent(a){xDeprecate("xEvent");var b=a||window.event;b&&(b.type&&(this.type=b.type),b.target?this.target=b.target:b.srcElement&&(this.target=b.srcElement),b.relatedTarget?this.relatedTarget=b.relatedTarget:"mouseover"==b.type&&b.fromElement?this.relatedTarget=b.fromElement:"mouseout"==b.type&&(this.relatedTarget=b.toElement),xOp6Dn?(this.pageX=b.clientX,this.pageY=b.clientY):xDef(b.pageX,b.pageY)?(this.pageX=b.pageX,this.pageY=b.pageY):xDef(b.clientX,b.clientY)&&(this.pageX=b.clientX+xScrollLeft(),this.pageY=b.clientY+xScrollTop()),xDef(b.offsetX,b.offsetY)?(this.offsetX=b.offsetX,this.offsetY=b.offsetY):xDef(b.layerX,b.layerY)?(this.offsetX=b.layerX,this.offsetY=b.layerY):(this.offsetX=this.pageX-xPageX(this.target),this.offsetY=this.pageY-xPageY(this.target)),b.keyCode?this.keyCode=b.keyCode:xDef(b.which)&&-1!=b.type.indexOf("key")&&(this.keyCode=b.which),this.shiftKey=b.shiftKey,this.ctrlKey=b.ctrlKey,this.altKey=b.altKey)}function xFirstChild(a,b){xDeprecate("xFirstChild");var c=a?a.firstChild:null;if(b)for(;c&&c.nodeName!=b;)c=c.nextSibling;else for(;c&&1!=c.nodeType;)c=c.nextSibling;return c}function xGetBodyWidth(){xDeprecate("xGetBodyWidth");var a=xClientWidth(),b=window.document.body.scrollWidth;return a>b?a:b}function xGetBodyHeight(){xDeprecate("xGetBodyHeight");var a=xClientHeight(),b=window.document.body.scrollHeight;return a>b?a:b}function xGetComputedStyle(a,b,d){xDeprecate("xGetComputedStyle");var e,f="undefined",g=document.defaultView;if(g&&g.getComputedStyle)(e=g.getComputedStyle(a,""))&&(f=e.getPropertyValue(b));else{if(!a.currentStyle)return null;var h=b.split("-");b=h[0];for(var i=1;i<h.length;++i)c=h[i].charAt(0),b+=h[i].replace(c,c.toUpperCase());f=a.currentStyle[b]}return d?parseInt(f)||0:f}function xGetCookie(a){xDeprecate("xGetCookie");var b=null,c=a+"=";if(document.cookie.length>0){var d=document.cookie.indexOf(c);if(-1!=d){d+=c.length;var e=document.cookie.indexOf(";",d);-1==e&&(e=document.cookie.length),b=unescape(document.cookie.substring(d,e))}}return b}function xGetElementById(a){return xDeprecate("xGetElementById"),"string"!=typeof a?a:a=document.getElementById?document.getElementById(a):document.all?document.all[a]:null}function xGetElementsByAttribute(a,b,c,d){xDeprecate("xGetElementsByAttribute");var e,f,g=new Array,h=new RegExp(c,"i");f=xGetElementsByTagName(a);for(var i=0;i<f.length;++i)e=f[i].getAttribute(b),e||(e=f[i][b]),"string"==typeof e&&-1!=e.search(h)&&(g[g.length]=f[i],d&&d(f[i]));return g}function xGetElementsByClassName(a,b,c,d){xDeprecate("xGetElementsByClassName");for(var e=new Array,f=new RegExp("\\b"+a+"\\b","i"),g=xGetElementsByTagName(c,b),h=0;h<g.length;++h)g[h].className&&-1!=g[h].className.search(f)&&(e[e.length]=g[h],d&&d(g[h]));return e}function xGetElementsByTagName(a,b){xDeprecate("xGetElementsByTagName");var c=null;return a=a||"*",b=b||document,xIE4||xIE5?c="*"==a?b.all:b.all.tags(a):b.getElementsByTagName&&(c=b.getElementsByTagName(a)),c||new Array}function xGetURLArguments(){xDeprecate("xGetURLArguments");var a=location.href.indexOf("?"),b=new Array;if(-1!=a)for(var c=location.href.substring(a+1,location.href.length).split("&"),d=0;d<c.length;d++)nameVal=c[d].split("="),b[d]=nameVal[1],b[nameVal[0]]=nameVal[1];return b}function xHeight(a,b){if(xDeprecate("xHeight"),!(a=xGetElementById(a)))return 0;b=xNum(b)?b<0?0:Math.round(b):-1;var c=xDef(a.style);if(a==document||"html"==a.tagName.toLowerCase()||"body"==a.tagName.toLowerCase())b=xClientHeight();else if(c&&xDef(a.offsetHeight)&&xStr(a.style.height)){if(b>=0){var d=0,e=0,f=0,g=0;if("CSS1Compat"==document.compatMode){var h=xGetComputedStyle;d=h(a,"padding-top",1),null!==d?(e=h(a,"padding-bottom",1),f=h(a,"border-top-width",1),g=h(a,"border-bottom-width",1)):xDef(a.offsetHeight,a.style.height)&&(a.style.height=b+"px",d=a.offsetHeight-b)}if(b-=d+e+f+g,isNaN(b)||b<0)return null;a.style.height=b+"px"}b=a.offsetHeight}else c&&xDef(a.style.pixelHeight)&&(b>=0&&(a.style.pixelHeight=b),b=a.style.pixelHeight);return b}function xHex(a,b,c){xDeprecate("xHex");var d="",e=Math.ceil(a);c&&(d=c),e=e.toString(16);for(var f=0;f<b-e.length;++f)d+="0";return d+e}function xHide(a){return xDeprecate("xHide"),xVisibility(a,0)}function xInnerHtml(a,b){if(xDeprecate("xInnerHtml"),!(a=xGetElementById(a))||!xStr(a.innerHTML))return null;var c=a.innerHTML;return xStr(b)&&(a.innerHTML=b),c}function xLeft(a,b){if(xDeprecate("xLeft"),!(a=xGetElementById(a)))return 0;var c=xDef(a.style);return c&&xStr(a.style.left)?xNum(b)?a.style.left=b+"px":(b=parseInt(a.style.left),isNaN(b)&&(b=0)):c&&xDef(a.style.pixelLeft)&&(xNum(b)?a.style.pixelLeft=b:b=a.style.pixelLeft),b}function xMoveTo(a,b,c){xDeprecate("xMoveTo"),xLeft(a,b),xTop(a,c)}function xName(a){return xDeprecate("xName"),a?a.id&&""!=a.id?a.id:a.name&&""!=a.name?a.name:a.nodeName&&""!=a.nodeName?a.nodeName:a.tagName&&""!=a.tagName?a.tagName:a:a}function xNextSib(a,b){xDeprecate("xNextSib");var c=a?a.nextSibling:null;if(b)for(;c&&c.nodeName!=b;)c=c.nextSibling;else for(;c&&1!=c.nodeType;)c=c.nextSibling;return c}function xNum(){xDeprecate("xNum");for(var a=0;a<arguments.length;++a)if(isNaN(arguments[a])||"number"!=typeof arguments[a])return!1;return!0}function xOffsetLeft(a){return xDeprecate("xOffsetLeft"),(a=xGetElementById(a))&&xDef(a.offsetLeft)?a.offsetLeft:0}function xOffsetTop(a){return xDeprecate("xOffsetTop"),(a=xGetElementById(a))&&xDef(a.offsetTop)?a.offsetTop:0}function xPad(a,b,c,d){if(xDeprecate("xPad"),"string"!=typeof a&&(a+=""),d)for(var e=a.length;e<b;++e)a=c+a;else for(e=a.length;e<b;++e)a+=c;return a}function xPageX(a){if(xDeprecate("xPageX"),!(a=xGetElementById(a)))return 0;for(var b=0;a;)xDef(a.offsetLeft)&&(b+=a.offsetLeft),a=xDef(a.offsetParent)?a.offsetParent:null;return b}function xPageY(a){if(xDeprecate("xPageY"),!(a=xGetElementById(a)))return 0;for(var b=0;a;)xDef(a.offsetTop)&&(b+=a.offsetTop),a=xDef(a.offsetParent)?a.offsetParent:null;return b}function xParent(a,b){if(xDeprecate("xParent"),!(a=xGetElementById(a)))return null;var c=null;return!b&&xDef(a.offsetParent)?c=a.offsetParent:xDef(a.parentNode)?c=a.parentNode:xDef(a.parentElement)&&(c=a.parentElement),c}function xPreventDefault(a){xDeprecate("xPreventDefault"),a&&a.preventDefault?a.preventDefault():window.event&&(window.event.returnValue=!1)}function xPrevSib(a,b){xDeprecate("xPrevSib");var c=a?a.previousSibling:null;if(b)for(;c&&c.nodeName!=b;)c=c.previousSibling;else for(;c&&1!=c.nodeType;)c=c.previousSibling;return c}function xRemoveEventListener(e,eT,eL,cap){if(xDeprecate("xRemoveEventListener"),e=xGetElementById(e)){if(eT=eT.toLowerCase(),!xIE4Up&&!xOp7Up&&e==window){if("resize"==eT)return void(window.xREL=null);if("scroll"==eT)return void(window.xSEL=null)}var eh="e.on"+eT+"=null";e.removeEventListener?e.removeEventListener(eT,eL,cap):e.detachEvent?e.detachEvent("on"+eT,eL):eval(eh)}}function xResizeTo(a,b,c){xDeprecate("xResizeTo"),xWidth(a,b),xHeight(a,c)}function xScrollLeft(a,b){xDeprecate("xScrollLeft");var c=0;if(!xDef(a)||b||a==document||"html"==a.tagName.toLowerCase()||"body"==a.tagName.toLowerCase()){var d=window;b&&a&&(d=a),d.document.documentElement&&d.document.documentElement.scrollLeft?c=d.document.documentElement.scrollLeft:d.document.body&&xDef(d.document.body.scrollLeft)&&(c=d.document.body.scrollLeft)}else(a=xGetElementById(a))&&xNum(a.scrollLeft)&&(c=a.scrollLeft);return c}function xScrollTop(a,b){xDeprecate("xScrollTop");var c=0;if(!xDef(a)||b||a==document||"html"==a.tagName.toLowerCase()||"body"==a.tagName.toLowerCase()){var d=window;b&&a&&(d=a),d.document.documentElement&&d.document.documentElement.scrollTop?c=d.document.documentElement.scrollTop:d.document.body&&xDef(d.document.body.scrollTop)&&(c=d.document.body.scrollTop)}else(a=xGetElementById(a))&&xNum(a.scrollTop)&&(c=a.scrollTop);return c}function xSetCookie(a,b,c,d){xDeprecate("xSetCookie"),document.cookie=a+"="+escape(b)+(c?"; expires="+c.toGMTString():"")+"; path="+(d||"/")}function xShow(a){return xDeprecate("xShow"),xVisibility(a,1)}function xStr(a){xDeprecate("xStr");for(var b=0;b<arguments.length;++b)if("string"!=typeof arguments[b])return!1;return!0}function xTop(a,b){if(xDeprecate("xTop"),!(a=xGetElementById(a)))return 0;var c=xDef(a.style);return c&&xStr(a.style.top)?xNum(b)?a.style.top=b+"px":(b=parseInt(a.style.top),isNaN(b)&&(b=0)):c&&xDef(a.style.pixelTop)&&(xNum(b)?a.style.pixelTop=b:b=a.style.pixelTop),b}function xVisibility(a,b){return xDeprecate("xVisibility"),(a=xGetElementById(a))&&a.style&&xDef(a.style.visibility)?(xDef(b)&&(a.style.visibility=b?"visible":"hidden"),a.style.visibility):null}function xWidth(a,b){if(xDeprecate("xWidth"),!(a=xGetElementById(a)))return 0;b=xNum(b)?b<0?0:Math.round(b):-1;var c=xDef(a.style);if(a==document||"html"==a.tagName.toLowerCase()||"body"==a.tagName.toLowerCase())b=xClientWidth();else if(c&&xDef(a.offsetWidth)&&xStr(a.style.width)){if(b>=0){var d=0,e=0,f=0,g=0;if("CSS1Compat"==document.compatMode){var h=xGetComputedStyle;d=h(a,"padding-left",1),null!==d?(e=h(a,"padding-right",1),f=h(a,"border-left-width",1),g=h(a,"border-right-width",1)):xDef(a.offsetWidth,a.style.width)&&(a.style.width=b+"px",d=a.offsetWidth-b)}if(b-=d+e+f+g,isNaN(b)||b<0)return null;a.style.width=b+"px"}b=a.offsetWidth}else c&&xDef(a.style.pixelWidth)&&(b>=0&&(a.style.pixelWidth=b),b=a.style.pixelWidth);return b}function xZIndex(a,b){return xDeprecate("xZIndex"),(a=xGetElementById(a))?(a.style&&xDef(a.style.zIndex)&&(xNum(b)&&(a.style.zIndex=b),b=parseInt(a.style.zIndex)),b):0}function xStopPropagation(a){xDeprecate("xStopPropagation"),a&&a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0)}var xOp7Up,xOp6Dn,xIE4Up,xIE4,xIE5,xIE6,xNN4,xUA=navigator.userAgent.toLowerCase();if(window.opera){var i=xUA.indexOf("opera");if(-1!=i){var v=parseInt(xUA.charAt(i+6));xOp7Up=v>=7,xOp6Dn=v<7}}else"KDE"!=navigator.vendor&&document.all&&-1!=xUA.indexOf("msie")?(xIE4Up=parseFloat(navigator.appVersion)>=4,xIE4=-1!=xUA.indexOf("msie 4"),xIE5=-1!=xUA.indexOf("msie 5"),xIE6=-1!=xUA.indexOf("msie 6")):document.layers&&(xNN4=!0);var xMac=-1!=xUA.indexOf("mac"),xFF=-1!=xUA.indexOf("firefox");