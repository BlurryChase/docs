"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8596],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"typescript",title:"TypeScript",sidebar_label:"TypeScript"},p=void 0,l={unversionedId:"frameworks/typescript",id:"frameworks/typescript",title:"TypeScript",description:"NodeCG is natively written in TypeScript and has type definitions for all APIs.",source:"@site/docs/frameworks/typescript.md",sourceDirName:"frameworks",slug:"/frameworks/typescript",permalink:"/docs/frameworks/typescript",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/frameworks/typescript.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1679792686,formattedLastUpdatedAt:"Mar 26, 2023",frontMatter:{id:"typescript",title:"TypeScript",sidebar_label:"TypeScript"},sidebar:"mainSidebar",previous:{title:"Bundlers & Dev Environments",permalink:"/docs/frameworks/using-bundlers"},next:{title:"vue.js",permalink:"/docs/frameworks/vue"}},c={},d=[{value:"Setup",id:"setup",level:2},{value:"Typing Replicants",id:"typing-replicants",level:2},{value:"Using Type Definitions",id:"type-definitions",level:2},{value:"extension",id:"extension",level:3},{value:"dashboard/graphics",id:"dashboard",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"NodeCG is natively written in TypeScript and has type definitions for all APIs."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Install TypeScript as your bundle's dev dependency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D typescript\n# or\nyarn add -D typescript\n")),(0,o.kt)("h2",{id:"typing-replicants"},"Typing Replicants"),(0,o.kt)("p",null,"Optionally, you can define types of replicants using replicants' JSON schema."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define schema for replicants"),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodecg/nodecg-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"nodecg-cli")),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"nodecg schema-types")," command to convert JSON schema to TypeScript type definitions"),(0,o.kt)("li",{parentName:"ol"},"Import the type and pass it to type parameter like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ExampleReplicant } from '../types/schemas/example_replicant';\nconst rep = nodecg.Replicant<ExampleReplicant>('example_replicant')\n")),(0,o.kt)("h2",{id:"type-definitions"},"Using Type Definitions"),(0,o.kt)("p",null,"To use NodeCG's type definitions, you'll need to first install them, as they are distributed as a separate package to keep things light and portable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @nodecg/types\n# or\nyarn add -D @nodecg/types\n")),(0,o.kt)("p",null,"The majority of the types are used by importing the types package and referencing the types that way, but to access the browser globals (",(0,o.kt)("inlineCode",{parentName:"p"},"window.nodecg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"window.NodeCG"),"), an extra step is required. You'll need to modify your bundle's ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," files(s) in one of two ways achieve this:"),(0,o.kt)("p",null,"The first approach is to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#include"},(0,o.kt)("inlineCode",{parentName:"a"},"include"))," to reference the file that augments the window object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "include": ["src/**/*.ts", "src/**/*.tsx", "node_modules/@nodecg/types/augment-window.d.ts"]\n}\n')),(0,o.kt)("p",null,"If you use Vue, be sure to include your ",(0,o.kt)("inlineCode",{parentName:"p"},"*.vue")," files as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "include": ["src/**/*.ts", "**/*.vue", "node_modules/@nodecg/types/augment-window.d.ts"]\n}\n')),(0,o.kt)("p",null,"The second approach is to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "types": ["node", "jest", "express", "@nodecg/types/augment-window"]\n  }\n}\n')),(0,o.kt)("p",null,"Both of these approaches have pros and cons, so be sure to read their corresponding ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig"},"TypeScript tsconfig.json docs")," thoroughly."),(0,o.kt)("h3",{id:"extension"},"extension"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import NodeCG from '@nodecg/types'\n\nexport = (nodecg: NodeCG.ServerAPI) => {\n  nodecg.sendMessage('message')\n}\n")),(0,o.kt)("h3",{id:"dashboard"},"dashboard/graphics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Some types get automatically injected into the global scope by our tsconfig.json.\n// For everything else, you can `import NodeCG from '@nodecg/types'` just as in our extension example.\nnodecg.listenFor('message', () => {\n  // ...\n})\n")))}m.isMDXComponent=!0}}]);