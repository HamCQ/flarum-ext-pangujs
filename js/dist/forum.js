/*! For license information please see forum.js.LICENSE.txt */
(()=>{var e={781:e=>{var t;window,t=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var a,o;a=function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}var c=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=o(this,r(t).call(this))).blockTags=/^(div|p|h1|h2|h3|h4|h5|h6)$/i,e.ignoredTags=/^(script|code|pre|textarea)$/i,e.presentationalTags=/^(b|code|del|em|i|s|strong)$/i,e.spaceLikeTags=/^(br|hr|i|img|pangu)$/i,e.spaceSensitiveTags=/^(a|del|pre|s|strike|u)$/i,e.isAutoSpacingPageExecuted=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,e),n=t,c=[{key:"isContentEditable",value:function(e){return e.isContentEditable||e.getAttribute&&"true"===e.getAttribute("g_editable")}},{key:"isSpecificTag",value:function(e,t){return e&&e.nodeName&&e.nodeName.search(t)>=0}},{key:"isInsideSpecificTag",value:function(e,t){var n=e;if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&this.isSpecificTag(n,t))return!0;for(;n.parentNode;)if(n=n.parentNode,this.isSpecificTag(n,t))return!0;return!1}},{key:"canIgnoreNode",value:function(e){var t=e;if(t&&(this.isSpecificTag(t,this.ignoredTags)||this.isContentEditable(t)))return!0;for(;t.parentNode;)if((t=t.parentNode)&&(this.isSpecificTag(t,this.ignoredTags)||this.isContentEditable(t)))return!0;return!1}},{key:"isFirstTextChild",value:function(e,t){for(var n=e.childNodes,a=0;a<n.length;a++){var o=n[a];if(o.nodeType!==Node.COMMENT_NODE&&o.textContent)return o===t}return!1}},{key:"isLastTextChild",value:function(e,t){for(var n=e.childNodes,a=n.length-1;a>-1;a--){var o=n[a];if(o.nodeType!==Node.COMMENT_NODE&&o.textContent)return o===t}return!1}},{key:"spacingNodeByXPath",value:function(e,t){if(t instanceof Node&&!(t instanceof DocumentFragment))for(var n,a,o=document.evaluate(e,t,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),r=o.snapshotLength-1;r>-1;--r){if(n=o.snapshotItem(r),this.isSpecificTag(n.parentNode,this.presentationalTags)&&!this.isInsideSpecificTag(n.parentNode,this.ignoredTags)){var i=n.parentNode;if(i.previousSibling){var c=i.previousSibling;if(c.nodeType===Node.TEXT_NODE){var s=c.data.substr(-1)+n.data.toString().charAt(0);s!==this.spacing(s)&&(c.data="".concat(c.data," "))}}if(i.nextSibling){var u=i.nextSibling;if(u.nodeType===Node.TEXT_NODE){var p=n.data.substr(-1)+u.data.toString().charAt(0);p!==this.spacing(p)&&(u.data=" ".concat(u.data))}}}if(this.canIgnoreNode(n))a=n;else{var l=this.spacing(n.data);if(n.data!==l&&(n.data=l),a){if(n.nextSibling&&n.nextSibling.nodeName.search(this.spaceLikeTags)>=0){a=n;continue}var g=n.data.toString().substr(-1)+a.data.toString().substr(0,1);if(this.spacing(g)!==g){for(var f=a;f.parentNode&&-1===f.nodeName.search(this.spaceSensitiveTags)&&this.isFirstTextChild(f.parentNode,f);)f=f.parentNode;for(var d=n;d.parentNode&&-1===d.nodeName.search(this.spaceSensitiveTags)&&this.isLastTextChild(d.parentNode,d);)d=d.parentNode;if(d.nextSibling&&d.nextSibling.nodeName.search(this.spaceLikeTags)>=0){a=n;continue}if(-1===d.nodeName.search(this.blockTags))if(-1===f.nodeName.search(this.spaceSensitiveTags))-1===f.nodeName.search(this.ignoredTags)&&-1===f.nodeName.search(this.blockTags)&&(a.previousSibling?-1===a.previousSibling.nodeName.search(this.spaceLikeTags)&&(a.data=" ".concat(a.data)):this.canIgnoreNode(a)||(a.data=" ".concat(a.data)));else if(-1===d.nodeName.search(this.spaceSensitiveTags))n.data="".concat(n.data," ");else{var h=document.createElement("pangu");h.innerHTML=" ",f.previousSibling?-1===f.previousSibling.nodeName.search(this.spaceLikeTags)&&f.parentNode.insertBefore(h,f):f.parentNode.insertBefore(h,f),h.previousElementSibling||h.parentNode&&h.parentNode.removeChild(h)}}}a=n}}}},{key:"spacingNode",value:function(e){var t=".//*/text()[normalize-space(.)]";e.children&&0===e.children.length&&(t=".//text()[normalize-space(.)]"),this.spacingNodeByXPath(t,e)}},{key:"spacingElementById",value:function(e){var t='id("'.concat(e,'")//text()');this.spacingNodeByXPath(t,document)}},{key:"spacingElementByClassName",value:function(e){var t='//*[contains(concat(" ", normalize-space(@class), " "), "'.concat(e,'")]//text()');this.spacingNodeByXPath(t,document)}},{key:"spacingElementByTagName",value:function(e){var t="//".concat(e,"//text()");this.spacingNodeByXPath(t,document)}},{key:"spacingPageTitle",value:function(){this.spacingNodeByXPath("/html/head/title/text()",document)}},{key:"spacingPageBody",value:function(){var e="/html/body//*/text()[normalize-space(.)]";["script","style","textarea"].forEach((function(t){e="".concat(e,'[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="').concat(t,'"]')})),this.spacingNodeByXPath(e,document)}},{key:"spacingPage",value:function(){this.spacingPageTitle(),this.spacingPageBody()}},{key:"autoSpacingPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;if(document.body instanceof Node&&!this.isAutoSpacingPageExecuted){this.isAutoSpacingPageExecuted=!0;var a=this,o=function(e){var t=this,n=arguments,a=!1;return function(){if(!a){var o=t;a=!0,e.apply(o,n)}}}((function(){a.spacingPage()})),r=document.getElementsByTagName("video");if(0===r.length)setTimeout((function(){o()}),e);else for(var i=0;i<r.length;i++){var c=r[i];if(4===c.readyState){setTimeout((function(){o()}),3e3);break}c.addEventListener("loadeddata",(function(){setTimeout((function(){o()}),4e3)}))}var s=[],u=function(e,t,n){var a=this,o=arguments,r=null,i=null;return function(){var c=a,s=o,u=+new Date;clearTimeout(r),i||(i=u),u-i>=n?(e.apply(c,s),i=u):r=setTimeout((function(){e.apply(c,s)}),t)}}((function(){for(;s.length;){var e=s.shift();e&&a.spacingNode(e)}}),t,{maxWait:n});new MutationObserver((function(e,t){e.forEach((function(e){switch(e.type){case"childList":e.addedNodes.forEach((function(e){e.nodeType===Node.ELEMENT_NODE?s.push(e):e.nodeType===Node.TEXT_NODE&&s.push(e.parentNode)}));break;case"characterData":var t=e.target;t.nodeType===Node.TEXT_NODE&&s.push(t.parentNode)}})),u()})).observe(document.body,{characterData:!0,childList:!0,subtree:!0})}}}],c&&a(n.prototype,c),s&&a(n,s),t;var n,c,s}(n(1).Pangu),s=new c;e.exports=s,e.exports.default=s,e.exports.Pangu=c},void 0===(o=a.apply(t,[]))||(e.exports=o)},function(e,t,n){var a,o;a=function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a="⺀-⻿⼀-⿟぀-ゟ゠-ヺー-ヿ㄀-ㄯ㈀-㋿㐀-䶿一-鿿豈-﫿",o=new RegExp("[".concat(a,"]")),r=new RegExp("([".concat(a,"])[ ]*([\\:]+|\\.)[ ]*([").concat(a,"])"),"g"),i=new RegExp("([".concat(a,"])[ ]*([~\\!;,\\?]+)[ ]*"),"g"),c=new RegExp("([\\.]{2,}|…)([".concat(a,"])"),"g"),s=new RegExp("([".concat(a,"])\\:([A-Z0-9\\(\\)])"),"g"),u=new RegExp("([".concat(a,'])([`"״])'),"g"),p=new RegExp('([`"״])(['.concat(a,"])"),"g"),l=/([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g,g=new RegExp("([".concat(a,"])('[^s])"),"g"),f=new RegExp("(')([".concat(a,"])"),"g"),d=new RegExp("([A-Za-z0-9".concat(a,"])( )('s)"),"g"),h=new RegExp("([".concat(a,"])(#)([").concat(a,"]+)(#)([").concat(a,"])"),"g"),m=new RegExp("([".concat(a,"])(#([^ ]))"),"g"),v=new RegExp("(([^ ])#)([".concat(a,"])"),"g"),y=new RegExp("([".concat(a,"])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])"),"g"),b=new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([".concat(a,"])"),"g"),T=/([/]) ([a-z\-_\./]+)/g,x=/([/\.])([A-Za-z\-_\./]+) ([/])/g,N=new RegExp("([".concat(a,"])([\\(\\[\\{<>“])"),"g"),E=new RegExp("([\\)\\]\\}<>”])([".concat(a,"])"),"g"),$=/([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/,S=new RegExp("([A-Za-z0-9".concat(a,"])[ ]*([“])([A-Za-z0-9").concat(a,"\\-_ ]+)([”])"),"g"),w=new RegExp("([“])([A-Za-z0-9".concat(a,"\\-_ ]+)([”])[ ]*([A-Za-z0-9").concat(a,"])"),"g"),P=/([A-Za-z0-9])([\(\[\{])/g,O=/([\)\]\}])([A-Za-z0-9])/g,k=new RegExp("([".concat(a,"])([A-Za-zͰ-Ͽ0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/¡-ÿ⅐-↏✀—➿])"),"g"),_=new RegExp("([A-Za-zͰ-Ͽ0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?¡-ÿ⅐-↏✀—➿])([".concat(a,"])"),"g"),R=/(%)([A-Za-z])/g,A=/([ ]*)([\u00b7\u2022\u2027])([ ]*)/g,j=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.version="4.0.7"}return a=e,j=[{key:"convertToFullwidth",value:function(e){return e.replace(/~/g,"～").replace(/!/g,"！").replace(/;/g,"；").replace(/:/g,"：").replace(/,/g,"，").replace(/\./g,"。").replace(/\?/g,"？")}},{key:"spacing",value:function(e){if("string"!=typeof e)return console.warn("spacing(text) only accepts string but got ".concat(t(e))),e;if(e.length<=1||!o.test(e))return e;var n=this,a=e;return(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace(r,(function(e,t,a,o){var r=n.convertToFullwidth(a);return"".concat(t).concat(r).concat(o)}))).replace(i,(function(e,t,a){var o=n.convertToFullwidth(a);return"".concat(t).concat(o)}))).replace(c,"$1 $2")).replace(s,"$1：$2")).replace(u,"$1 $2")).replace(p,"$1 $2")).replace(l,"$1$2$3")).replace(g,"$1 $2")).replace(f,"$1 $2")).replace(d,"$1's")).replace(h,"$1 $2$3$4 $5")).replace(m,"$1 $2")).replace(v,"$1 $3")).replace(y,"$1 $2 $3")).replace(b,"$1 $2 $3")).replace(T,"$1$2")).replace(x,"$1$2$3")).replace(N,"$1 $2")).replace(E,"$1 $2")).replace($,"$1$2$3")).replace(S,"$1 $2$3$4")).replace(w,"$1$2$3 $4")).replace(P,"$1 $2")).replace(O,"$1 $2")).replace(k,"$1 $2")).replace(_,"$1 $2")).replace(R,"$1 $2")).replace(A,"・")}},{key:"spacingText",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};try{t=this.spacing(e)}catch(e){return void n(e)}n(null,t)}},{key:"spacingTextSync",value:function(e){return this.spacing(e)}}],j&&n(a.prototype,j),z&&n(a,z),e;var a,j,z}(),z=new j;e.exports=z,e.exports.default=z,e.exports.Pangu=j},void 0===(o=a.apply(t,[]))||(e.exports=o)}])},e.exports=t()}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";n.r(a),flarum.core.compat["common/app"];const e=flarum.core.compat["forum/app"];var t=n.n(e);const o=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/components/DiscussionPage"];var i=n.n(r);const c=flarum.core.compat["common/components/SettingsPage"];var s=n.n(c);const u=flarum.core.compat["common/components/DiscussionList"];var p=n.n(u);const l=flarum.core.compat["common/components/FieldSet"];var g=n.n(l);const f=flarum.core.compat["common/utils/ItemList"];var d=n.n(f);const h=flarum.core.compat["common/components/Switch"];var v=n.n(h),y=n(781),b=n.n(y);t().initializers.add("hamcq/pangujs",(function(){(0,o.extend)(i().prototype,"view",(function(){(t().forum.data.attributes.contentPanguJs||t().session.user&&t().session.user.preferences().panguJsEnable)&&b().spacingPage()})),(0,o.extend)(p().prototype,"view",(function(){t().forum.data.attributes.contentPanguJs?b().spacingPage():t().session.user&&t().session.user.preferences().panguJsEnable&&b().spacingElementByClassName("DiscussionListItem-main")})),(0,o.extend)(s().prototype,"settingsItems",(function(e){t().forum.data.attributes.contentPanguJs||e.add("panguSetting",g().component({label:"优化阅读体验",className:""},this.panguItems().toArray()))})),s().prototype.panguItems=function(){var e=this,t=new(d());return t.add("pangu-enable",v().component({state:this.user.preferences().panguJsEnable,onchange:function(t){e.panguJsEnableLoading=!0,e.user.savePreferences({panguJsEnable:t}).then((function(){e.panguJsEnableLoading=!1,m.redraw()}))},loading:this.panguJsEnableLoading},"根据中文文案排版指北，使用 pangu.js，优化排版，提升阅读体验")),t}}))})(),module.exports=a})();
//# sourceMappingURL=forum.js.map