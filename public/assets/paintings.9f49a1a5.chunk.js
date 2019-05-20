(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{621:function(e,n,t){var i=t(622),a=t(379),r="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return r},n._getCss=function(){return""+i},n._insertCss=function(e){return a(r,e)}},622:function(e,n,t){(n=e.exports=t(378)(!1)).push([e.i,":root{--font-family-base:Montserrat,Ubuntu,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width-lg:28%;--aside-width:20%;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}._3J8XN{display:none}",""]),n.locals={title:"_3J8XN"}},623:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getItemsByYear"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"year"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getItemsByYear"},arguments:[{kind:"Argument",name:{kind:"Name",value:"year"},value:{kind:"Variable",name:{kind:"Name",value:"year"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"technique"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:184}};t.loc.source={body:"query getItemsByYear($year: Int!, $type: String!) {\n  getItemsByYear(year: $year, type: $type) {\n    title\n    date\n    technique\n    description\n    height\n    width\n    length\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),i[e.name.value]=n}}),e.exports=t,e.exports.getItemsByYear=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,o=new Set,l=new Set;for(r.forEach(function(e){l.add(e)});l.size>0;){var u=l;l=new Set,u.forEach(function(e){o.has(e)||(o.add(e),(i[e]||new Set).forEach(function(e){l.add(e)}))})}return o.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(t,"getItemsByYear")},624:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getItemsByYear"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"year"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"half"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getItemsByHalfYear"},arguments:[{kind:"Argument",name:{kind:"Name",value:"year"},value:{kind:"Variable",name:{kind:"Name",value:"year"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"half"},value:{kind:"Variable",name:{kind:"Name",value:"half"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"technique"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:214}};t.loc.source={body:"query getItemsByYear($year: Int!, $type: String!, $half: Int!) {\n  getItemsByHalfYear(year: $year, type: $type, half: $half) {\n    title\n    date\n    technique\n    description\n    height\n    width\n    length\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),i[e.name.value]=n}}),e.exports=t,e.exports.getItemsByYear=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,o=new Set,l=new Set;for(r.forEach(function(e){l.add(e)});l.size>0;){var u=l;l=new Set,u.forEach(function(e){o.has(e)||(o.add(e),(i[e]||new Set).forEach(function(e){l.add(e)}))})}return o.forEach(function(n){var i=a(e,n);i&&t.definitions.push(i)}),t}(t,"getItemsByYear")},632:function(e,n,t){var i=t(633),a=t(379),r="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return r},n._getCss=function(){return""+i},n._insertCss=function(e){return a(r,e)}},633:function(e,n,t){(n=e.exports=t(378)(!1)).push([e.i,":root{--font-family-base:Montserrat,Ubuntu,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width-lg:28%;--aside-width:20%;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}._3dcqs{height:available}.hOa0n{display:none}._3tgdZ{font-family:Montserrat,Ubuntu,sans-serif!important;font-family:var(--font-family-base)!important;font-variant:small-caps;font-size:14px;font-size:var(--font-size-current-plus-plus);color:#ab8b8b;color:var(--link-color);padding:2px 5px;display:inline;margin:0;background:none;border:none;width:inherit;line-height:inherit;cursor:pointer;-webkit-transition:color .4s;-o-transition:color .4s;transition:color .4s}._3tgdZ:focus,._3tgdZ:hover{color:#754b49;color:var(--link-color-xdark)}",""]),n.locals={loading:"_3dcqs",titleTab:"hOa0n",buttonLink:"_3tgdZ"}},684:function(e,n,t){"use strict";t.r(n);var i,a=t(5),r=t.n(a),o=t(380),l=t.n(o),u=(t(3),t(559)),d=t(621),s=t.n(d),c=t(117),f=t(381),m=t(623),p=t.n(m),v=t(624),y=t.n(v),h=t(412),k=t(632),b=t.n(k),g=t(384);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,n,t,a){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===o)n.children=a;else if(o>1){for(var u=new Array(o),d=0;d<o;d++)u[d]=arguments[d+3];n.children=u}return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function S(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,n){return(I=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E,_=w(g.a,{message:"Erreur au chargement des items",isError:!0}),P=w(g.a,{message:"Erreur au chargement des items",isError:!0}),O=function(e){function n(){var e,t,i,a,r,o,l;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var u=arguments.length,d=new Array(u),s=0;s<u;s++)d[s]=arguments[s];return i=this,t=!(a=(e=x(n)).call.apply(e,[this].concat(d)))||"object"!==N(a)&&"function"!=typeof a?T(i):a,r=T(t),l=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},(o="scrollTop")in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,t}var t,i,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&I(e,n)}(n,r.a.Component),t=n,(i=[{key:"render",value:function(){var e=this,n=this.props,t=n.year,i=n.half,r=n.type;return 0===i?w(c.c,{query:p.a,variables:{year:t,type:r},ssr:!0},void 0,function(n){var i=n.loading,r=n.error,o=n.data;return i?w("div",{className:b.a.loading},void 0,"Chargement..."):w(a.Fragment,{},void 0,w("h2",{className:b.a.titleTab},void 0,t),o.getItemsByYear.map(function(e){return w(h.a,{item:e,type:f.a.TYPE.PAINTING},e.title)}),r&&_,w("button",{type:"button",className:b.a.buttonLink,onClick:e.scrollTop},void 0,"Haut de page"))}):w(c.c,{query:y.a,variables:{year:t,type:r,half:i},ssr:!0},void 0,function(n){var i=n.loading,r=n.error,o=n.data;return i?w("div",{className:b.a.loading},void 0,"Chargement..."):w(a.Fragment,{},void 0,w("h2",{className:b.a.titleTab},void 0,t),o.getItemsByHalfYear.map(function(e){return w(h.a,{item:e,type:f.a.TYPE.PAINTING},e.title)}),r&&P,w("button",{type:"button",className:b.a.buttonLink,onClick:e.scrollTop},void 0,"Haut de page"))})}}])&&S(t.prototype,i),o&&S(t,o),n}(),z=l()(b.a)(O);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,n,t,i){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),n&&a)for(var o in a)void 0===n[o]&&(n[o]=a[o]);else n||(n=a||{});if(1===r)n.children=i;else if(r>1){for(var l=new Array(r),u=0;u<r;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:E,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function A(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function D(e,n){return!n||"object"!==F(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,n){return($=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var j,C=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),D(this,V(n).apply(this,arguments))}var t,i,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&$(e,n)}(n,r.a.Component),t=n,(i=[{key:"render",value:function(){return Y(a.Fragment,{},void 0,Y("h1",{className:s.a.title},void 0,this.props.title),Y(u.d,{},void 0,Y(u.b,{},void 0,Y(u.a,{},void 0,2017..toString()),Y(u.a,{},void 0,2018..toString(),"-a"),Y(u.a,{},void 0,2018..toString(),"-b"),Y(u.a,{},void 0,2019..toString())),Y(u.c,{},void 0,Y(z,{year:2017,half:0,type:f.a.TYPE.PAINTING})),Y(u.c,{},void 0,Y(z,{year:2018,half:1,type:f.a.TYPE.PAINTING})),Y(u.c,{},void 0,Y(z,{year:2018,half:2,type:f.a.TYPE.PAINTING})),Y(u.c,{},void 0,Y(z,{year:2019,half:0,type:f.a.TYPE.PAINTING}))))}}])&&A(t.prototype,i),o&&A(t,o),n}(),q=l()(s.a)(C),B=t(385),G=t(118);function L(e,n,t,i){j||(j="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),n&&a)for(var o in a)void 0===n[o]&&(n[o]=a[o]);else n||(n=a||{});if(1===r)n.children=i;else if(r>1){for(var l=new Array(r),u=0;u<r;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:j,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function H(e,n,t,i,a,r,o){try{var l=e[r](o),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(i,a)}function R(){var e;return e=regeneratorRuntime.mark(function e(){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.a.TITLE.PAINTING,t=G.a.META_DESCRIPTION.PAINTING,e.abrupt("return",{title:n,description:t,chunks:["paintings"],component:L(B.a,{},void 0,L(q,{title:n}))});case 3:case"end":return e.stop()}},e)}),(R=function(){var n=this,t=arguments;return new Promise(function(i,a){var r=e.apply(n,t);function o(e){H(r,i,a,o,l,"next",e)}function l(e){H(r,i,a,o,l,"throw",e)}o(void 0)})}).apply(this,arguments)}n.default=function(){return R.apply(this,arguments)}}}]);
//# sourceMappingURL=paintings.9f49a1a5.chunk.js.map