(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{383:function(e,n,t){"use strict";n.a={TYPE:"content",TITLE:{HOME:"Bienvenue",PRESENTATION:"Présentation",CONTACT:"Contact"},KEY:{HOME1:"Home 1",HOME2:"Home 2",HOME3:"Home 3",PRESENTATION:"Présentation",CONTACT_ADDRESS:"Adresse",CONTACT_PHONE:"Téléphone",CONTACT_EMAIL:"Email"},CONTENT_IMAGE_PATH:"/images/miscellaneous",PRESENTATION_IMAGE_TITLE:"portrait",PRESENTATION_IMAGE_ALT:"Portrait de Marion Casters",HOME_IMAGE_PORTRAIT:"home-portrait",HOME_IMAGE_LANDSCAPE:"home-landscape",HOME_IMAGE_ALT:"Oeuvre de Marion Casters"}},389:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"keyContent"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"keyContent"},value:{kind:"Variable",name:{kind:"Name",value:"keyContent"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};t.loc.source={body:"query getContent($keyContent: String!) {\n  getContent(keyContent: $keyContent) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,n){for(var t=0;t<e.definitions.length;t++){var o=e.definitions[t];if(o.name&&o.name.value==n)return o}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var o=n.type;"NamedType"===o.kind&&t.add(o.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),o[e.name.value]=n}}),e.exports=t,e.exports.getContent=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var i=o[n]||new Set,a=new Set,c=new Set;for(i.forEach(function(e){c.add(e)});c.size>0;){var l=c;c=new Set,l.forEach(function(e){a.has(e)||(a.add(e),(o[e]||new Set).forEach(function(e){c.add(e)}))})}return a.forEach(function(n){var o=r(e,n);o&&t.definitions.push(o)}),t}(t,"getContent")},393:function(e,n,t){"use strict";var o,r=t(5),i=t.n(r),a=t(117),c=(t(3),t(381)),l=t.n(c),f=t(389),u=t.n(f),s=t(394),d=t.n(s);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n,t,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=new Array(a),f=0;f<a;f++)l[f]=arguments[f+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function y(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var k=m("p",{},void 0,"Chargement..."),g=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),v(this,b(n).apply(this,arguments))}var t,o,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,i.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props.keyContent;return m(a.c,{query:u.a,variables:{keyContent:e},ssr:!0},void 0,function(e){var n=e.loading,t=e.data;return n?k:m(r.Fragment,{},void 0,t.getContent&&m("p",{className:d.a.content},void 0,t.getContent.text))})}}])&&y(t.prototype,o),c&&y(t,c),n}();n.a=l()(d.a)(g)},394:function(e,n,t){var o=t(395),r=t(380),i="string"==typeof o?[[e.i,o,""]]:o;(n=e.exports=o.locals||{})._getContent=function(){return i},n._getCss=function(){return""+o},n._insertCss=function(e){return r(i,e)}},395:function(e,n,t){(n=e.exports=t(379)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}},682:function(e,n,t){var o=t(683),r=t(380),i="string"==typeof o?[[e.i,o,""]]:o;(n=e.exports=o.locals||{})._getContent=function(){return i},n._getCss=function(){return""+o},n._insertCss=function(e){return r(i,e)}},683:function(e,n,t){(n=e.exports=t(379)(!1)).push([e.i,"._35_9r{display:none}.Xkb5Q{font-size:var(--font-size-current-plus-plus)}.Xkb5Q:first-of-type{margin-top:4em;margin-bottom:6em}.Xkb5Q:last-of-type{margin-top:6em;margin-bottom:6em}",""]),n.locals={title:"_35_9r",contactContent:"Xkb5Q"}},733:function(e,n,t){"use strict";t.r(n);var o,r=t(5),i=t.n(r),a=t(387),c=t(383),l=t(118),f=(t(3),t(381)),u=t.n(f),s=t(682),d=t.n(s),p=t(393);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n,t,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=new Array(a),f=0;f<a;f++)l[f]=arguments[f+3];n.children=l}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function v(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g,C=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),b(this,h(n).apply(this,arguments))}var t,o,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(n,i.a.Component),t=n,(o=[{key:"render",value:function(){var e=c.a,n=this.props.title;return y("article",{},void 0,y("h1",{className:d.a.title},void 0,n),y("div",{className:d.a.contactContent},void 0,y(p.a,{keyContent:e.KEY.CONTACT_ADDRESS})),y("div",{className:d.a.contactContent},void 0,y(p.a,{keyContent:e.KEY.CONTACT_PHONE})),y("div",{className:d.a.contactContent},void 0,y(p.a,{keyContent:e.KEY.CONTACT_EMAIL})))}}])&&v(t.prototype,o),r&&v(t,r),n}(),E=u()(d.a)(C);function T(e,n,t,o){g||(g="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&r)for(var a in r)void 0===n[a]&&(n[a]=r[a]);else n||(n=r||{});if(1===i)n.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:g,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}n.default=function(){var e=c.a.TITLE.CONTACT;return{title:e,description:l.a.META_DESCRIPTION.CONTACT,chunks:["contact"],component:T(a.a,{},void 0,T(E,{title:e}))}}}}]);
//# sourceMappingURL=contact.75c65e36.chunk.js.map