(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{383:function(e,n,t){"use strict";n.a={TYPE:"content",TITLE:{HOME:"Bienvenue",PRESENTATION:"Présentation",CONTACT:"Contact"},KEY:{HOME1:"Home 1",HOME2:"Home 2",HOME3:"Home 3",PRESENTATION:"Présentation",CONTACT_ADDRESS:"Adresse",CONTACT_PHONE:"Téléphone",CONTACT_EMAIL:"Email"},CONTENT_IMAGE_PATH:"/images/miscellaneous",PRESENTATION_IMAGE_TITLE:"portrait",PRESENTATION_IMAGE_ALT:"Portrait de Marion Casters",HOME_IMAGE_PORTRAIT:"home-portrait",HOME_IMAGE_LANDSCAPE:"home-landscape",HOME_IMAGE_ALT:"Oeuvre de Marion Casters"}},388:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"keyContent"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"keyContent"},value:{kind:"Variable",name:{kind:"Name",value:"keyContent"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};t.loc.source={body:"query getContent($keyContent: String!) {\n  getContent(keyContent: $keyContent) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function i(e,n){for(var t=0;t<e.definitions.length;t++){var o=e.definitions[t];if(o.name&&o.name.value==n)return o}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var o=n.type;"NamedType"===o.kind&&t.add(o.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),o[e.name.value]=n}}),e.exports=t,e.exports.getContent=function(e,n){var t={kind:e.kind,definitions:[i(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,a=new Set,l=new Set;for(r.forEach(function(e){l.add(e)});l.size>0;){var c=l;l=new Set,c.forEach(function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach(function(e){l.add(e)}))})}return a.forEach(function(n){var o=i(e,n);o&&t.definitions.push(o)}),t}(t,"getContent")},391:function(e,n,t){"use strict";var o,i=t(5),r=t.n(i),a=t(117),l=(t(3),t(381)),c=t.n(l),f=t(388),s=t.n(f),u=t(392),d=t.n(u);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n,t,i){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=i;else if(a>1){for(var c=new Array(a),f=0;f<a;f++)c[f]=arguments[f+3];n.children=c}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function y(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=m("p",{},void 0,"Chargement..."),E=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),b(this,h(n).apply(this,arguments))}var t,o,l;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props.keyContent;return m(a.c,{query:s.a,variables:{keyContent:e},ssr:!0},void 0,function(e){var n=e.loading,t=e.data;return n?g:m(i.Fragment,{},void 0,t.getContent&&m("p",{className:d.a.content},void 0,t.getContent.text))})}}])&&y(t.prototype,o),l&&y(t,l),n}();n.a=c()(d.a)(E)},392:function(e,n,t){var o=t(393),i=t(380),r="string"==typeof o?[[e.i,o,""]]:o;(n=e.exports=o.locals||{})._getContent=function(){return r},n._getCss=function(){return""+o},n._insertCss=function(e){return i(r,e)}},393:function(e,n,t){(n=e.exports=t(379)(!1)).push([e.i,":root{--font-family-base:Montserrat,Ubuntu,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}},638:function(e,n,t){var o=t(639),i=t(380),r="string"==typeof o?[[e.i,o,""]]:o;(n=e.exports=o.locals||{})._getContent=function(){return r},n._getCss=function(){return""+o},n._insertCss=function(e){return i(r,e)}},639:function(e,n,t){(n=e.exports=t(379)(!1)).push([e.i,":root{--font-family-base:Montserrat,Ubuntu,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}._3Zwcd{font-variant:none;letter-spacing:.12em}._365VS{display:none}._1M4oC{max-width:100%;max-height:40vh}@media (min-width:765px){._1M4oC{max-width:50vw}}@media (min-width:1200px){._3Zwcd{padding:0 5em}}@media (min-width:1600px){._3Zwcd{padding:0 15em}}",""]),n.locals={presentationContainer:"_3Zwcd",title:"_365VS",image:"_1M4oC"}},686:function(e,n,t){"use strict";t.r(n);var o,i=t(5),r=t.n(i),a=t(386),l=t(383),c=t(118),f=(t(3),t(381)),s=t.n(f),u=t(638),d=t.n(u),p=t(391);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n,t,i){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=i;else if(a>1){for(var c=new Array(a),f=0;f<a;f++)c[f]=arguments[f+3];n.children=c}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function b(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E,k=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),h(this,v(n).apply(this,arguments))}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props.title;return y("div",{className:d.a.presentationContainer},void 0,y("h1",{className:d.a.title},void 0,e),y("img",{className:d.a.image,src:"".concat(l.a.CONTENT_IMAGE_PATH,"/").concat(l.a.PRESENTATION_IMAGE_TITLE,".jpg"),alt:l.a.PRESENTATION_IMAGE_ALT}),y(p.a,{keyContent:l.a.KEY.PRESENTATION}))}}])&&b(t.prototype,o),i&&b(t,i),n}(),w=s()(d.a)(k);function T(e,n,t,o){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===r)n.children=o;else if(r>1){for(var l=new Array(r),c=0;c<r;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:E,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}n.default=function(){var e=l.a.TITLE.PRESENTATION;return{title:e,description:c.a.META_DESCRIPTION.PRESENTATION,chunks:["presentation"],component:T(a.a,{},void 0,T(w,{title:e}))}}}}]);
//# sourceMappingURL=presentation.c3efe1b7.chunk.js.map