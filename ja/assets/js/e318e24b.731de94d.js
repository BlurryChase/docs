"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3819],{1672:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var i=t(5893),s=t(1151);const o={description:"Extension documentation",id:"extensions",title:"Extensions",sidebar_label:"Extensions"},r=void 0,c={id:"extensions",title:"Extensions",description:"Extension documentation",source:"@site/docs/extensions.md",sourceDirName:".",slug:"/extensions",permalink:"/ja/docs/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/extensions.md",tags:[],version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1716880703,formattedLastUpdatedAt:"2024\u5e745\u670828\u65e5",frontMatter:{description:"Extension documentation",id:"extensions",title:"Extensions",sidebar_label:"Extensions"},sidebar:"mainSidebar",previous:{title:"Node Dependencies",permalink:"/ja/docs/using-npm"},next:{title:"Bundle Configuration",permalink:"/ja/docs/bundle-configuration"}},l={},d=[{value:"What to use extensions for",id:"what-to-use-extensions-for",level:2},{value:"Extension entrypoint",id:"extension-entrypoint",level:2},{value:"Single file",id:"single-file",level:2},{value:"Using multiple files",id:"using-multiple-files",level:2},{value:"Utility script",id:"utility-script",level:3},{value:"Have each extension export a function to call",id:"have-each-extension-export-a-function-to-call",level:3},{value:"Extension specific API",id:"extension-specific-api",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Extensions are server-side code that runs on the NodeCG server. They are vital for any NodeCG bundle."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Extensions are the first things that run in a bundle"})," so it is the best place to setup replicants and other data that will be used throughout a bundle."]}),"\n",(0,i.jsx)(n.h2,{id:"what-to-use-extensions-for",children:"What to use extensions for"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setting up replicants"}),"\n",(0,i.jsx)(n.li,{children:'Handling changes to replicants to keep dashboards as a "dumb terminal"'}),"\n",(0,i.jsx)(n.li,{children:"Getting data from other websites/services"}),"\n",(0,i.jsx)(n.li,{children:"Automating your bundle"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"extension-entrypoint",children:"Extension entrypoint"}),"\n",(0,i.jsx)(n.p,{children:"NodeCG looks for 2 file locations."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A single file called ",(0,i.jsx)(n.code,{children:"extension.js"})," in the bundle's root directory."]}),"\n",(0,i.jsxs)(n.li,{children:["A folder called ",(0,i.jsx)(n.code,{children:"extension"})," with an ",(0,i.jsx)(n.code,{children:"index.js"})," in the bundle's root directory."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If both exist NodeCG will throw an error and not run any extensions from that bundle."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"We recommend the folder method unless your bundle is very basic and doesn't need much functionality."})}),"\n",(0,i.jsx)(n.h2,{id:"single-file",children:"Single file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="extension.js"',children:"module.exports = function (nodecg) {\n    nodecg.Replicant('test-replicant');\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-multiple-files",children:"Using multiple files"}),"\n",(0,i.jsx)(n.p,{children:"To make programming easier we split different functionality into different files. The problem is that NodeCG is only injected into the first file it touches. There are a few methods to deal with this:"}),"\n",(0,i.jsx)(n.h3,{id:"utility-script",children:"Utility script"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="nodecg-api-context.ts"',children:"import type NodeCG from '@nodecg/types';\n\nlet context: NodeCG.ServerAPI;\n\nexport function get(): NodeCG.ServerAPI {\n    return context;\n}\n\nexport function set(ctx: NodeCG.ServerAPI) {\n    context = ctx;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:"import type NodeCG from '@nodecg/types';\nimport * as nodecgApiContext from './nodecg-api-context';\n\nlet ncgConfig: NodeCG.ServerAPI<ConfigSchema>['bundleConfig'];\n\nmodule.exports = (nodecg: NodeCG.ServerAPI) => {\n    // Store a reference to this nodecg API context in a place where other libs can easily access it.\n    // This must be done before any other files are `require`d.\n    nodecgApiContext.set(nodecg);\n    ncgConfig = nodecg.bundleConfig;\n    init().then(() => {\n        nodecg.log.info('Initialization successful.');\n    }).catch(error => {\n        nodecg.log.error('Failed to initialize:', error);\n    });\n};\n\nasync function init() {\n    require('./example.ts');\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="example.ts"',children:"import * as nodecgApiContext from './nodecg-api-context';\n\nconst nodecg = nodecgApiContext.get();\n\n// Initializes a replicant\nnodecg.Replicant<string>('test-replicant');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"have-each-extension-export-a-function-to-call",children:"Have each extension export a function to call"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="example.ts"',children:"import type NodeCG from '@nodecg/types';\n\nexport const test = (nodecg: NodeCG) => {\n    nodecg.Replicant<string>('test-replicant');\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:"import type NodeCG from '@nodecg/types';\n\nimport { test } from \"./example\";\n\nexport default (nodecg: NodeCG) => {\n    test(nodecg);\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"extension-specific-api",children:"Extension specific API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ja/docs/classes/getSocketIOServer",children:"getSocketIOServer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ja/docs/classes/mount",children:"mount"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ja/docs/classes/router",children:"Router"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ja/docs/classes/nodecg#events-events",children:"Events"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);