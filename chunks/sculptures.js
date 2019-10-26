require("source-map-support").install(),exports.ids=[10],exports.modules={117:function(e,n,i){var t=i(118),a=i(36),r="string"==typeof t?[[e.i,t,""]]:t;(n=e.exports=t.locals||{})._getContent=function(){return r},n._getCss=function(){return""+t},n._insertCss=function(e){return a(r,e)}},118:function(e,n,i){(n=e.exports=i(35)(!1)).push([e.i,"._20th3{height:800px}._jzyv{display:none}",""]),n.locals={loading:"_20th3",title:"_jzyv"}},157:function(e,n,i){"use strict";i.r(n);var t,a=i(5),r=i.n(a),o=i(19),l=i(41),d=i.n(l),s=(i(18),i(65)),u=i(2),c=i(117),f=i.n(c),m=i(55),v=i.n(m);function p(e,n,i,a){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),1===o)n.children=a;else if(o>1){for(var l=new Array(o),d=0;d<o;d++)l[d]=arguments[d+3];n.children=l}if(n&&r)for(var s in r)void 0===n[s]&&(n[s]=r[s]);else n||(n=r||{});return{$$typeof:t,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}var h=p("div",{},void 0,"Erreur au chargement des sculptures :(");var y,k=function({title:e}){d()(f.a);const n=u.a.SCULPTURE.TYPE,{data:i,loading:t,error:a}=Object(o.useQuery)(v.a,{variables:{type:n},ssr:!0});return t?p("div",{className:f.a.loading},void 0,"Chargement..."):a?h:r.a.createElement(r.a.Fragment,null,p("h1",{className:f.a.title},void 0,e),i.getAllItems&&i.getAllItems.map(e=>p(s.a,{item:e,type:n},e.title)))},g=i(20),S=i(52);function N(e,n,i,t){y||(y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=t;else if(r>1){for(var o=new Array(r),l=0;l<r;l++)o[l]=arguments[l+3];n.children=o}if(n&&a)for(var d in a)void 0===n[d]&&(n[d]=a[d]);else n||(n=a||{});return{$$typeof:y,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}function b(e,n,i,t,a,r,o){try{var l=e[r](o),d=l.value}catch(e){return void i(e)}l.done?n(d):Promise.resolve(d).then(t,a)}function w(){var e;return e=function*(){const e=u.a.SCULPTURE.TITLE;return{title:e,description:g.a.SCULPTURE,chunks:["drawings"],component:N(S.a,{},void 0,N(k,{title:e}))}},(w=function(){var n=this,i=arguments;return new Promise((function(t,a){var r=e.apply(n,i);function o(e){b(r,t,a,o,l,"next",e)}function l(e){b(r,t,a,o,l,"throw",e)}o(void 0)}))}).apply(this,arguments)}n.default=function(){return w.apply(this,arguments)}},55:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAllItems"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllItems"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"technique"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:159}};i.loc.source={body:"query getAllItems($type: String!) {\n  getAllItems(type: $type) {\n    id\n    title\n    date\n    technique\n    description\n    height\n    width\n    length\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,i)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,i)})),n.definitions&&n.definitions.forEach((function(n){e(n,i)}))}(e,n),t[e.name.value]=n}})),e.exports=i,e.exports.getAllItems=function(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var r=t[n]||new Set,o=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var d=l;l=new Set,d.forEach((function(e){o.has(e)||(o.add(e),(t[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(n){var t=a(e,n);t&&i.definitions.push(t)})),i}(i,"getAllItems")}};
//# sourceMappingURL=sculptures.js.map