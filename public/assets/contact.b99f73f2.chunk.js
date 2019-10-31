(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[5],{114:function(e,n,t){"use strict";n.a={TYPE:"content",KEY:{HOME1:"Home 1",HOME2:"Home 2",HOME3:"Home 3",PRESENTATION:"Présentation",CONTACT_ADDRESS:"Adresse",CONTACT_PHONE:"Téléphone",CONTACT_EMAIL:"Email"},CONTENT_IMAGE_PATH:"/images/miscellaneous",PRESENTATION_IMAGE_TITLE:"portrait",PRESENTATION_IMAGE_FILE:"portrait.jpg",PRESENTATION_IMAGE_ALT:"Portrait de Marion Casters",HOME_IMAGE_PORTRAIT:"home-portrait",HOME_IMAGE_LANDSCAPE:"home-landscape",HOME_IMAGE_PORTRAIT_FILE:"home-portrait.jpg",HOME_IMAGE_LANDSCAPE_FILE:"home-landscape.jpg",HOME_IMAGE_ALT:"Oeuvre de Marion Casters"}},115:function(e,n,t){"use strict";n.a={HOME:"Bienvenue",PRESENTATION:"Présentation",CONTACT:"Contact",ADMINISTRATION:"Administration"}},116:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:75}};t.loc.source={body:"query getContent($key: String!) {\n  getContent(key: $key) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),i[e.name.value]=n}})),e.exports=t,e.exports.getContent=function(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=i[n]||new Set,r=new Set,s=new Set;for(o.forEach((function(e){s.add(e)}));s.size>0;){var c=s;s=new Set,c.forEach((function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach((function(e){s.add(e)})))}))}return r.forEach((function(n){var i=a(e,n);i&&t.definitions.push(i)})),t}(t,"getContent")},121:function(e,n,t){"use strict";var i=t(3),a=t.n(i),o=t(104),r=t(11),s=t.n(r),c=t(109),l=t.n(c),m=t(116),u=t.n(m),d=t(122),f=t.n(d),_="/Users/marioncasters/Sites/GIT/marioncasters-site/src/components/Content/Content.js";function p({keyContent:e}){l()(f.a);const{data:n,loading:t}=Object(o.c)(u.a,{variables:{key:e},ssr:!0});return t?a.a.createElement("p",{__source:{fileName:_,lineNumber:15},__self:this},"Chargement..."):a.a.createElement(a.a.Fragment,null,n.getContent&&a.a.createElement("p",{className:f.a.content,__source:{fileName:_,lineNumber:19},__self:this},n.getContent.text))}p.propTypes={keyContent:s.a.string.isRequired},n.a=p},122:function(e,n,t){var i=t(123),a=t(108),o="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return o},n._getCss=function(){return""+i},n._insertCss=function(e){return a(o,e)}},123:function(e,n,t){(n=e.exports=t(107)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.2em;--font-size-header-md-mobile:1.7em;--font-size-header:1.9em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}},234:function(e,n,t){var i=t(235),a=t(108),o="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return o},n._getCss=function(){return""+i},n._insertCss=function(e){return a(o,e)}},235:function(e,n,t){(n=e.exports=t(107)(!1)).push([e.i,"._35_9r{display:none}.Xkb5Q{font-size:var(--font-size-current-plus-plus)}.Xkb5Q:first-of-type{margin-top:4em;margin-bottom:6em}.Xkb5Q:last-of-type{margin-top:6em;margin-bottom:6em}",""]),n.locals={title:"_35_9r",contactContent:"Xkb5Q"}},284:function(e,n,t){"use strict";t.r(n);var i=t(3),a=t.n(i),o=t(115),r=t(28),s=t(11),c=t.n(s),l=t(109),m=t.n(l),u=t(114),d=t(117),f=t(234),_=t.n(f),p=t(121),E="/Users/marioncasters/Sites/GIT/marioncasters-site/src/routes/contactPage/ContactPage.js";function N({title:e}){m()(_.a);const n=d.a.EMAIL;return a.a.createElement("address",{__source:{fileName:E,lineNumber:15},__self:this},a.a.createElement("h1",{className:_.a.title,__source:{fileName:E,lineNumber:16},__self:this},e),a.a.createElement("div",{className:_.a.contactContent,__source:{fileName:E,lineNumber:17},__self:this},a.a.createElement(p.a,{keyContent:u.a.KEY.CONTACT_ADDRESS,__source:{fileName:E,lineNumber:18},__self:this})),a.a.createElement("div",{className:_.a.contactContent,__source:{fileName:E,lineNumber:20},__self:this},a.a.createElement(p.a,{keyContent:u.a.KEY.CONTACT_PHONE,__source:{fileName:E,lineNumber:21},__self:this})),a.a.createElement("div",{className:_.a.contactContent,__source:{fileName:E,lineNumber:23},__self:this},a.a.createElement("a",{href:`mailto:${n}`,__source:{fileName:E,lineNumber:24},__self:this},n)))}N.propTypes={title:c.a.string.isRequired};var g=N,h=t(113),k="/Users/marioncasters/Sites/GIT/marioncasters-site/src/routes/contactPage/index.js";n.default=function(){const e=o.a.CONTACT;return{title:e,description:r.a.CONTACT,chunks:["contact"],component:a.a.createElement(h.a,{__source:{fileName:k,lineNumber:16},__self:this},a.a.createElement(g,{title:e,__source:{fileName:k,lineNumber:17},__self:this}))}}}}]);
//# sourceMappingURL=contact.b99f73f2.chunk.js.map