require("source-map-support").install(),exports.ids=[4],exports.modules={178:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),o=t(4),r=t.n(o),s=t(59),l=t.n(s),m=t(93),c=t.n(m),d=t(77),f=t(10),u="/Users/marioncasters/Sites/GIT/marioncasters-site/src/routes/home/Home.js";function p({title:e}){return l()(c.a),a.a.createElement("div",{className:c.a.homeContainer,__source:{fileName:u,lineNumber:13},__self:this},a.a.createElement("h1",{className:c.a.title,__source:{fileName:u,lineNumber:14},__self:this},e),a.a.createElement("div",{className:c.a.homeContent,__source:{fileName:u,lineNumber:15},__self:this},a.a.createElement(d.a,{keyContent:f.a.KEY.HOME3,__source:{fileName:u,lineNumber:16},__self:this})))}p.propTypes={title:r.a.string.isRequired};var g=p,h=t(72),b=t(21),k=t(71),x="/Users/marioncasters/Sites/GIT/marioncasters-site/src/routes/home/index.js";n.default=async function(){const e=h.a.HOME;return{title:e,description:b.a.HOME,chunks:["home"],component:a.a.createElement(k.a,{__source:{fileName:x,lineNumber:16},__self:this},a.a.createElement(g,{title:e,__source:{fileName:x,lineNumber:17},__self:this}))}}},72:function(e,n,t){"use strict";n.a={HOME:"Bienvenue",PRESENTATION:"Présentation",CONTACT:"Contact",ADMINISTRATION:"Administration"}},73:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:75}};t.loc.source={body:"query getContent($key: String!) {\n  getContent(key: $key) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),i[e.name.value]=n}})),e.exports=t,e.exports.getContent=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=i[n]||new Set,r=new Set,s=new Set;for(o.forEach((function(e){s.add(e)}));s.size>0;){var l=s;s=new Set,l.forEach((function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach((function(e){s.add(e)})))}))}return r.forEach((function(n){var i=a(e,n);i&&t.definitions.push(i)})),t}(t,"getContent")},77:function(e,n,t){"use strict";var i=t(1),a=t.n(i),o=t(20),r=t(4),s=t.n(r),l=t(59),m=t.n(l),c=t(73),d=t.n(c),f=t(78),u=t.n(f),p="/Users/marioncasters/Sites/GIT/marioncasters-site/src/components/Content/Content.js";function g({keyContent:e}){m()(u.a);const{data:n,loading:t}=Object(o.useQuery)(d.a,{variables:{key:e},ssr:!0});return t?a.a.createElement("p",{__source:{fileName:p,lineNumber:15},__self:this},"Chargement..."):a.a.createElement(a.a.Fragment,null,n.getContent&&a.a.createElement("p",{className:u.a.content,__source:{fileName:p,lineNumber:19},__self:this},n.getContent.text))}g.propTypes={keyContent:s.a.string.isRequired},n.a=g},78:function(e,n,t){var i=t(79),a=t(40),o="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return o},n._getCss=function(){return""+i},n._insertCss=function(e){return a(o,e)}},79:function(e,n,t){(n=e.exports=t(39)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.2em;--font-size-header-md-mobile:1.7em;--font-size-header:1.9em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}},93:function(e,n,t){var i=t(94),a=t(40),o="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return o},n._getCss=function(){return""+i},n._insertCss=function(e){return a(o,e)}},94:function(e,n,t){(n=e.exports=t(39)(!1)).push([e.i,':root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.2em;--font-size-header-md-mobile:1.7em;--font-size-header:1.9em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}._2Z3LT{display:flex;height:100%;flex-direction:column;justify-content:flex-end}._2Rav6{display:none}._2bWaB{background-color:rgba(0,0,0,.5);color:#eee;color:var(--color-xlight);font-feature-settings:"c2sc";font-variant:small-caps;padding:0 1em}@media (min-width:992px){._2Z3LT{margin-left:28%;margin-left:var(--aside-width-md)}._2bWaB{color:#aaa;color:var(--color-medium)}}@media (min-width:1200px){._2Z3LT{margin-left:20%;margin-left:var(--aside-width)}}',""]),n.locals={homeContainer:"_2Z3LT",title:"_2Rav6",homeContent:"_2bWaB"}}};
//# sourceMappingURL=home.js.map