(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{369:function(e,n,i){"use strict";n.a={TYPE:"content",TITLE:{HOME:"Bienvenue",PRESENTATION:"Présentation",CONTACT:"Contact"},KEY:{HOME1:"Home 1",HOME2:"Home 2",HOME3:"Home 3",PRESENTATION:"Présentation",CONTACT_ADDRESS:"Adresse",CONTACT_PHONE:"Téléphone",CONTACT_EMAIL:"Email"},CONTENT_IMAGE_PATH:"/images/miscellaneous",PRESENTATION_IMAGE_TITLE:"portrait",PRESENTATION_IMAGE_FILE:"portrait.jpg",PRESENTATION_IMAGE_ALT:"Portrait de Marion Casters",HOME_IMAGE_PORTRAIT:"home-portrait",HOME_IMAGE_LANDSCAPE:"home-landscape",HOME_IMAGE_PORTRAIT_FILE:"home-portrait.jpg",HOME_IMAGE_LANDSCAPE_FILE:"home-landscape.jpg",HOME_IMAGE_ALT:"Oeuvre de Marion Casters"}},372:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:75}};i.loc.source={body:"query getContent($key: String!) {\n  getContent(key: $key) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,i)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,i)})),n.definitions&&n.definitions.forEach((function(n){e(n,i)}))}(e,n),t[e.name.value]=n}})),e.exports=i,e.exports.getContent=function(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var r=t[n]||new Set,a=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var d=l;l=new Set,d.forEach((function(e){a.has(e)||(a.add(e),(t[e]||new Set).forEach((function(e){l.add(e)})))}))}return a.forEach((function(n){var t=o(e,n);t&&i.definitions.push(t)})),i}(i,"getContent")},375:function(e,n,i){"use strict";var t,o=i(18),r=i.n(o),a=i(360),l=(i(364),i(367)),d=i.n(l),s=i(372),c=i.n(s),m=i(376),f=i.n(m);function u(e,n,i,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var l=new Array(a),d=0;d<a;d++)l[d]=arguments[d+3];n.children=l}if(n&&r)for(var s in r)void 0===n[s]&&(n[s]=r[s]);else n||(n=r||{});return{$$typeof:t,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}var p=u("p",{},void 0,"Chargement...");n.a=d()(f.a)((function(e){var n=e.keyContent,i=Object(a.c)(c.a,{variables:{key:n},ssr:!0}),t=i.data;return i.loading?p:r.a.createElement(r.a.Fragment,null,t.getContent&&u("p",{className:f.a.content},void 0,t.getContent.text))}))},376:function(e,n,i){var t=i(377),o=i(366),r="string"==typeof t?[[e.i,t,""]]:t;(n=e.exports=t.locals||{})._getContent=function(){return r},n._getCss=function(){return""+t},n._insertCss=function(e){return o(r,e)}},377:function(e,n,i){(n=e.exports=i(365)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}},541:function(e,n,i){var t=i(542),o=i(366),r="string"==typeof t?[[e.i,t,""]]:t;(n=e.exports=t.locals||{})._getContent=function(){return r},n._getCss=function(){return""+t},n._insertCss=function(e){return o(r,e)}},542:function(e,n,i){(n=e.exports=i(365)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}._2Z3LT{display:flex;height:100%;flex-direction:column;justify-content:flex-end}._2Rav6{display:none}._2bWaB{background-color:rgba(0,0,0,.4);font-variant:none;font-size:12px;font-size:var(--font-size-current);color:#eee;color:var(--color-xlight);padding:0 1em}@media (min-width:992px){._2Z3LT{margin-left:28%;margin-left:var(--aside-width-md)}._2bWaB{color:#aaa;color:var(--color-medium)}}@media (min-width:1200px){._2Z3LT{margin-left:20%;margin-left:var(--aside-width)}}",""]),n.locals={homeContainer:"_2Z3LT",title:"_2Rav6",homeContent:"_2bWaB"}},666:function(e,n,i){"use strict";i.r(n);i(18),i(364);var t,o=i(367),r=i.n(o),a=i(541),l=i.n(a),d=i(375),s=i(369);function c(e,n,i,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=o;else if(a>1){for(var l=new Array(a),d=0;d<a;d++)l[d]=arguments[d+3];n.children=l}if(n&&r)for(var s in r)void 0===n[s]&&(n[s]=r[s]);else n||(n=r||{});return{$$typeof:t,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}var m,f=r()(l.a)((function(e){var n=e.title;return c("div",{className:l.a.homeContainer},void 0,c("h1",{className:l.a.title},void 0,n),c("div",{className:l.a.homeContent},void 0,c(d.a,{keyContent:s.a.KEY.HOME3})))})),u=i(104),p=i(371);function v(e,n,i,t){m||(m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=t;else if(r>1){for(var a=new Array(r),l=0;l<r;l++)a[l]=arguments[l+3];n.children=a}if(n&&o)for(var d in o)void 0===n[d]&&(n[d]=o[d]);else n||(n=o||{});return{$$typeof:m,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}function h(e,n,i,t,o,r,a){try{var l=e[r](a),d=l.value}catch(e){return void i(e)}l.done?n(d):Promise.resolve(d).then(t,o)}function g(){var e;return e=regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.a.TITLE.HOME,i=u.a.META_DESCRIPTION.HOME,e.abrupt("return",{title:n,description:i,chunks:["home"],component:v(p.a,{},void 0,v(f,{title:n}))});case 3:case"end":return e.stop()}}),e)})),(g=function(){var n=this,i=arguments;return new Promise((function(t,o){var r=e.apply(n,i);function a(e){h(r,t,o,a,l,"next",e)}function l(e){h(r,t,o,a,l,"throw",e)}a(void 0)}))}).apply(this,arguments)}n.default=function(){return g.apply(this,arguments)}}}]);
//# sourceMappingURL=home.fc40c79b.chunk.js.map