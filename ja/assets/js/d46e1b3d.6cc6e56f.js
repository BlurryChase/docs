"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2956],{324:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return l},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return a}});var s=t(5893),o=t(1151);const i={id:"using-npm",title:"Using npm Dependencies",sidebar_label:"Node Dependencies"},r=void 0,d={id:"using-npm",title:"Using npm Dependencies",description:"As of NodeCG v0.9, per-bundle bower and npm dependencies are no longer automatically installed. It is up to the user to run whatever installation commands are necessary in each bundle.",source:"@site/docs/using-npm.md",sourceDirName:".",slug:"/using-npm",permalink:"/ja/docs/using-npm",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/using-npm.md",tags:[],version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1716880703,formattedLastUpdatedAt:"2024\u5e745\u670828\u65e5",frontMatter:{id:"using-npm",title:"Using npm Dependencies",sidebar_label:"Node Dependencies"},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/ja/docs/nodecg-configuration"},next:{title:"Extensions",permalink:"/ja/docs/extensions"}},c={},a=[];function u(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["As of NodeCG v0.9, per-bundle ",(0,s.jsx)(n.code,{children:"bower"})," and ",(0,s.jsx)(n.code,{children:"npm"})," dependencies are no longer automatically installed. It is up to the user to run whatever installation commands are necessary in each bundle."]})}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"npm"})," dependencies as you would in any other Node.js project. Extensions can then access these dependencies directly, via normal ",(0,s.jsx)(n.code,{children:"require"})," statements:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"bundles/my-bundle/package.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "my-bundle",\n    ...\n    "dependencies": {\n        "some-dep": "^1.0.0"\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"bundles/my-bundle/extension.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const someDep = require('some-dep');\n\nmodule.exports = function(nodecg) {\n    // I can use someDep whenever I want!\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);