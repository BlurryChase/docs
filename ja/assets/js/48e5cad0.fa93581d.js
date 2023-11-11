"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8674],{3164:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=t(5893),i=t(1151);const s={id:"bundle-configuration",title:"Bundle Configuration",sidebar_label:"Bundle Configuration"},r=void 0,c={id:"bundle-configuration",title:"Bundle Configuration",description:"Bundles can be configured via .js, .yaml, or *.json config files in the cfg directory of NodeCG.",source:"@site/docs/bundle-configuration.md",sourceDirName:".",slug:"/bundle-configuration",permalink:"/ja/docs/bundle-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/bundle-configuration.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1699664005,formattedLastUpdatedAt:"2023\u5e7411\u670811\u65e5",frontMatter:{id:"bundle-configuration",title:"Bundle Configuration",sidebar_label:"Bundle Configuration"},sidebar:"mainSidebar",previous:{title:"Extensions",permalink:"/ja/docs/extensions"},next:{title:"Assets",permalink:"/ja/docs/assets"}},a={},d=[{value:"Example",id:"example",level:2},{value:"JSON Schema",id:"json-schema",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Bundles can be configured via ",(0,o.jsx)(n.code,{children:"*.js"}),", ",(0,o.jsx)(n.code,{children:"*.yaml"}),", or ",(0,o.jsx)(n.code,{children:"*.json"})," config files in the ",(0,o.jsx)(n.code,{children:"cfg"})," directory of NodeCG."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["Say we have a bundle named ",(0,o.jsx)(n.code,{children:"test-bundle"}),". If we create",(0,o.jsx)(n.code,{children:"./cfg/test-bundle.js"})," with the following contents:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'module.exports = {\n    myData: "hello"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["... that data can be accessed via ",(0,o.jsx)(n.a,{href:"/docs/bundle-configuration",children:(0,o.jsx)(n.code,{children:"bundleConfig"})}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'console.log(nodecg.bundleConfig.myData); // prints "hello"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"json-schema",children:"JSON Schema"}),"\n",(0,o.jsxs)(n.p,{children:["If your bundle has a ",(0,o.jsx)(n.code,{children:"configschema.json"})," file in its root, NodeCG will validate the config file (if any) for your bundle\nagainst this JSON Schema, and will throw errors on startup if the config file fails to pass validation. This is often\nthe most efficient way to enforce a specific structure for your bundle's config."]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"http://spacetelescope.github.io/understanding-json-schema/",children:(0,o.jsx)(n.em,{children:"Understanding JSON Schema"})}),"\nfor more information on what a JSON Schema is and how to use one."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);