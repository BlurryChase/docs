"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7125],{5934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c}});var s=n(5893),r=n(1151);const i={id:"listenFor",title:"listenFor",sidebar_label:"listenFor"},d=void 0,a={id:"classes/listenFor",title:"listenFor",description:"listenFor(messageName, *bundleName, handlerFunc)",source:"@site/docs/classes/listenFor.md",sourceDirName:"classes",slug:"/classes/listenFor",permalink:"/fr/docs/classes/listenFor",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/listenFor.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1699664005,formattedLastUpdatedAt:"11 nov. 2023",frontMatter:{id:"listenFor",title:"listenFor",sidebar_label:"listenFor"},sidebar:"mainSidebar",previous:{title:"sendMessageToBundle",permalink:"/fr/docs/classes/sendMessageToBundle"},next:{title:"unlisten",permalink:"/fr/docs/classes/unlisten"}},l={},c=[{value:"Parameters",id:"parameters",level:3}];function o(e){const t={code:"code",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"listenFor(messageName, *bundleName, handlerFunc)"})}),"\n",(0,s.jsx)(t.p,{children:"Listens for a message, and invokes the provided callback each time the message is received. If any data was sent with the message, it will be passed to the callback."}),"\n",(0,s.jsx)(t.p,{children:"Messages are namespaced by bundle. To listen to a message in another bundle's namespace, provide it as the second argument."}),"\n",(0,s.jsx)(t.p,{children:"You may define multiple listenFor handlers for a given message. They will be called in the order they were registered."}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Attributes"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"messageName"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The name of the message."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bundleName"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"<optional>"}),(0,s.jsx)(t.td,{children:"Current bundle"}),(0,s.jsx)(t.td,{children:"The bundle namespace to in which to listen for this message."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"handlerFunc"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The callback fired when this message is received."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(7294);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);