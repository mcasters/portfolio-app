require("source-map-support").install(),exports.ids=[5],exports.modules={154:function(e,n,i){"use strict";i.r(n);var t,o=i(6),r=i.n(o),a=(i(35),i(18)),l=i.n(a),d=i(69),s=i.n(d),c=i(56),f=i(9);function m(e,n,i,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=o;else if(a>1){for(var d=new Array(a),s=0;s<a;s++)d[s]=arguments[s+3];n.children=d}return{$$typeof:t,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}var u,p=l()(s.a)(class extends r.a.Component{render(){const{title:e}=this.props;return m("div",{className:s.a.homeContainer},void 0,m("h1",{className:s.a.title},void 0,e),m("div",{className:s.a.homeContent},void 0,m(c.a,{keyContent:f.a.KEY.HOME3})))}}),v=i(53),h=i(19);function g(e,n,i,t){u||(u="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===r)n.children=t;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];n.children=l}return{$$typeof:u,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}function x(e,n,i,t,o,r,a){try{var l=e[r](a),d=l.value}catch(e){return void i(e)}l.done?n(d):Promise.resolve(d).then(t,o)}function k(){var e;return e=function*(){const e=f.a.TITLE.HOME;return{title:e,description:h.a.META_DESCRIPTION.HOME,chunks:["home"],component:g(v.a,{},void 0,g(p,{title:e}))}},(k=function(){var n=this,i=arguments;return new Promise(function(t,o){var r=e.apply(n,i);function a(e){x(r,t,o,a,l,"next",e)}function l(e){x(r,t,o,a,l,"throw",e)}a(void 0)})}).apply(this,arguments)}n.default=function(){return k.apply(this,arguments)}},55:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"keyContent"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"keyContent"},value:{kind:"Variable",name:{kind:"Name",value:"keyContent"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};i.loc.source={body:"query getContent($keyContent: String!) {\n  getContent(keyContent: $keyContent) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),t[e.name.value]=n}}),e.exports=i,e.exports.getContent=function(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var r=t[n]||new Set,a=new Set,l=new Set;for(r.forEach(function(e){l.add(e)});l.size>0;){var d=l;l=new Set,d.forEach(function(e){a.has(e)||(a.add(e),(t[e]||new Set).forEach(function(e){l.add(e)}))})}return a.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(i,"getContent")},56:function(e,n,i){"use strict";var t,o=i(6),r=i.n(o),a=i(8),l=(i(35),i(18)),d=i.n(l),s=i(55),c=i.n(s),f=i(57),m=i.n(f);function u(e,n,i,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=o;else if(a>1){for(var d=new Array(a),s=0;s<a;s++)d[s]=arguments[s+3];n.children=d}return{$$typeof:t,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}var p=u("p",{},void 0,"Chargement...");n.a=d()(m.a)(class extends r.a.Component{render(){const{keyContent:e}=this.props;return u(a.Query,{query:c.a,variables:{keyContent:e},ssr:!0},void 0,({loading:e,data:n})=>e?p:u(o.Fragment,{},void 0,n.getContent&&u("p",{className:m.a.content},void 0,n.getContent.text)))}})},57:function(e,n,i){var t=i(58),o=i(34),r="string"==typeof t?[[e.i,t,""]]:t;(n=e.exports=t.locals||{})._getContent=function(){return r},n._getCss=function(){return""+t},n._insertCss=function(e){return o(r,e)}},58:function(e,n,i){(n=e.exports=i(33)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}},69:function(e,n,i){var t=i(70),o=i(34),r="string"==typeof t?[[e.i,t,""]]:t;(n=e.exports=t.locals||{})._getContent=function(){return r},n._getCss=function(){return""+t},n._insertCss=function(e){return o(r,e)}},70:function(e,n,i){(n=e.exports=i(33)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}._2Z3LT{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end}._2Rav6{display:none}._2bWaB{background-color:rgba(0,0,0,.4);font-variant:none;font-size:12px;font-size:var(--font-size-current);color:#eee;color:var(--color-xlight);padding:0 1em}@media (min-width:992px){._2Z3LT{margin-left:28%;margin-left:var(--aside-width-md)}._2bWaB{color:#aaa;color:var(--color-medium)}}@media (min-width:1200px){._2Z3LT{margin-left:20%;margin-left:var(--aside-width)}}",""]),n.locals={homeContainer:"_2Z3LT",title:"_2Rav6",homeContent:"_2bWaB"}}};
//# sourceMappingURL=home.js.map