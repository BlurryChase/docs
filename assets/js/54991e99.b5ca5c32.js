"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7908],{724:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var t=s(5893),r=s(1151);const i={id:"unlisten",title:"unlisten",sidebar_label:"unlisten"},a=void 0,l={id:"classes/unlisten",title:"unlisten",description:"unlisten(messageName, *bundleName, handlerFunc) \u2192 \\{boolean\\}",source:"@site/docs/classes/unlisten.md",sourceDirName:"classes",slug:"/classes/unlisten",permalink:"/docs/classes/unlisten",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/unlisten.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1699664005,formattedLastUpdatedAt:"Nov 11, 2023",frontMatter:{id:"unlisten",title:"unlisten",sidebar_label:"unlisten"},sidebar:"mainSidebar",previous:{title:"listenFor",permalink:"/docs/classes/listenFor"},next:{title:"log",permalink:"/docs/classes/log"}},d={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"unlisten(messageName, *bundleName, handlerFunc)"})," ",(0,t.jsx)(n.em,{children:"\u2192 {boolean}"})]}),"\n",(0,t.jsx)(n.p,{children:"Removes a listener for a message."}),"\n",(0,t.jsx)(n.p,{children:"Messages are namespaced by bundle. To remove a listener to a message in another bundle's namespace, provide it as the second argument."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Attributes"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"messageName"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"The name of the message."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bundleName"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"<optional>"}),(0,t.jsx)(n.td,{children:"Current bundle"}),(0,t.jsx)(n.td,{children:"The bundle namespace to in which to listen for this message"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"handlerFunc"}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["A reference to a handler function added as a listener to this message via ",(0,t.jsx)(n.a,{href:"/docs/classes/listenFor",children:"listenFor"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"nodecg.unlisten('printMessage', someFunctionName);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Removing a listener from a message in another bundle's namespace:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"nodecg.unlisten('printMessage', 'another-bundle', someFunctionName);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(7294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);