"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8596],{2572:function(e,n,s){s.r(n),s.d(n,{assets:function(){return a},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var t=s(5893),i=s(1151);const r={id:"typescript",title:"TypeScript",sidebar_label:"TypeScript"},o=void 0,c={id:"frameworks/typescript",title:"TypeScript",description:"NodeCG is natively written in TypeScript and has type definitions for all APIs.",source:"@site/docs/frameworks/typescript.md",sourceDirName:"frameworks",slug:"/frameworks/typescript",permalink:"/docs/frameworks/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/frameworks/typescript.md",tags:[],version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1716880703,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"typescript",title:"TypeScript",sidebar_label:"TypeScript"},sidebar:"mainSidebar",previous:{title:"Bundlers & Dev Environments",permalink:"/docs/frameworks/using-bundlers"},next:{title:"vue.js",permalink:"/docs/frameworks/vue"}},a={},d=[{value:"Setup",id:"setup",level:2},{value:"Typing Replicants",id:"typing-replicants",level:2},{value:"Using Type Definitions",id:"type-definitions",level:2},{value:"extension",id:"extension",level:3},{value:"dashboard/graphics",id:"dashboard",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"NodeCG is natively written in TypeScript and has type definitions for all APIs."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"Install TypeScript as your bundle's dev dependency."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -D typescript\n# or\nyarn add -D typescript\n"})}),"\n",(0,t.jsx)(n.h2,{id:"typing-replicants",children:"Typing Replicants"}),"\n",(0,t.jsx)(n.p,{children:"Optionally, you can define types of replicants using replicants' JSON schema."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Define schema for replicants"}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.a,{href:"https://github.com/nodecg/nodecg-cli",children:(0,t.jsx)(n.code,{children:"nodecg-cli"})}),"'s ",(0,t.jsx)(n.code,{children:"nodecg schema-types"})," command to convert JSON schema to TypeScript type definitions"]}),"\n",(0,t.jsx)(n.li,{children:"Import the type and pass it to type parameter like this:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { ExampleReplicant } from '../types/schemas/example_replicant';\nconst rep = nodecg.Replicant<ExampleReplicant>('example_replicant');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"type-definitions",children:"Using Type Definitions"}),"\n",(0,t.jsx)(n.p,{children:"To use NodeCG's type definitions, you'll need to first install them, as they are distributed as a separate package to keep things light and portable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -D @nodecg/types\n# or\nyarn add -D @nodecg/types\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The majority of the types are used by importing the types package and referencing the types that way, but to access the browser globals (",(0,t.jsx)(n.code,{children:"window.nodecg"})," and ",(0,t.jsx)(n.code,{children:"window.NodeCG"}),"), an extra step is required. You'll need to modify your bundle's ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," files(s) in one of two ways achieve this:"]}),"\n",(0,t.jsxs)(n.p,{children:["The first approach is to use ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#include",children:(0,t.jsx)(n.code,{children:"include"})})," to reference the file that augments the window object:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "include": ["src/**/*.ts", "src/**/*.tsx", "node_modules/@nodecg/types/augment-window.d.ts"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you use Vue, be sure to include your ",(0,t.jsx)(n.code,{children:"*.vue"})," files as well:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "include": ["src/**/*.ts", "**/*.vue", "node_modules/@nodecg/types/augment-window.d.ts"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The second approach is to use ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#types",children:(0,t.jsx)(n.code,{children:"types"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "compilerOptions": {\n        "types": ["node", "jest", "express", "@nodecg/types/augment-window"]\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Both of these approaches have pros and cons, so be sure to read their corresponding ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig",children:"TypeScript tsconfig.json docs"})," thoroughly."]}),"\n",(0,t.jsx)(n.h3,{id:"extension",children:"extension"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import NodeCG from '@nodecg/types';\n\nexport = (nodecg: NodeCG.ServerAPI) => {\n    nodecg.sendMessage('message');\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dashboard",children:"dashboard/graphics"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Some types get automatically injected into the global scope by our tsconfig.json.\n// For everything else, you can `import NodeCG from '@nodecg/types'` just as in our extension example.\nnodecg.listenFor('message', () => {\n    // ...\n})\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);