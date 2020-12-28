(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(142)),c={id:"typescript",title:"TypeScript",sidebar_label:"TypeScript"},o={unversionedId:"frameworks/typescript",id:"frameworks/typescript",isDocsHomePage:!1,title:"TypeScript",description:"NodeCG includes TypeScript type definitions for NodeCG APIs.",source:"@site/docs/frameworks/typescript.md",slug:"/frameworks/typescript",permalink:"/docs/frameworks/typescript",editUrl:"https://github.com/nodecg/docs/edit/master/docs/frameworks/typescript.md",version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1609122495,sidebar_label:"TypeScript",sidebar:"mainSidebar",previous:{title:"Using Bundlers",permalink:"/docs/frameworks/using-bundlers"},next:{title:"Using Vue.js",permalink:"/docs/frameworks/vue"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Typing Replicants",id:"typing-replicants",children:[]},{value:"Using Type Definitions",id:"using-type-definitions",children:[{value:"extension",id:"extension",children:[]},{value:"dashboard/graphics",id:"dashboardgraphics",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"NodeCG includes TypeScript type definitions for NodeCG APIs."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The type definition is experimental"))),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"Install TypeScript as your bundle's dev dependency."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install -D typescript\n# or\nyarn add -D typescript\n")),Object(i.b)("h2",{id:"typing-replicants"},"Typing Replicants"),Object(i.b)("p",null,"Optionally, you can define types of replicants using replicants' JSON schema."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Define schema for replicants"),Object(i.b)("li",{parentName:"ol"},"Use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/bcherny/json-schema-to-typescript"}),"https://github.com/bcherny/json-schema-to-typescript")," to convert JSON schema to TypeScript type definitions"),Object(i.b)("li",{parentName:"ol"},"Import the type and pass it to type parameter like this:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const rep = nodecg.Replicant<SchemaTypeDef>('schemaTypeDef')\n")),Object(i.b)("h2",{id:"using-type-definitions"},"Using Type Definitions"),Object(i.b)("p",null,"More examples are available in ",Object(i.b)("inlineCode",{parentName:"p"},"typetest")," directory, which is also used to test the type definitions."),Object(i.b)("h3",{id:"extension"},"extension"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// Directly import the type definition file\nimport {NodeCG} from '../../../../types/server'\n\nexport = (nodecg: NodeCG) => {\n  nodecg.sendMessage('message')\n}\n")),Object(i.b)("h3",{id:"dashboardgraphics"},"dashboard/graphics"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"/// <reference path=\"../../../../types/browser.d.ts\" />\n\nnodecg.listenFor('message', () => {\n  // ...\n})\n")))}l.isMDXComponent=!0}}]);