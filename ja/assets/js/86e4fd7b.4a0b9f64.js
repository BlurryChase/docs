"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5542],{9609:function(e,s,n){n.r(s),n.d(s,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return o}});var t=n(5893),d=n(1151);const r={id:"sendMessageToBundle",title:"sendMessageToBundle",sidebar_label:"sendMessageToBundle"},a=void 0,i={id:"classes/sendMessageToBundle",title:"sendMessageToBundle",description:"sendMessageToBundle(messageName, bundleName, data, cb) \u2192 \\{Promise|undefined\\}",source:"@site/docs/classes/sendMessageToBundle.md",sourceDirName:"classes",slug:"/classes/sendMessageToBundle",permalink:"/ja/docs/classes/sendMessageToBundle",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/sendMessageToBundle.md",tags:[],version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1716880703,formattedLastUpdatedAt:"2024\u5e745\u670828\u65e5",frontMatter:{id:"sendMessageToBundle",title:"sendMessageToBundle",sidebar_label:"sendMessageToBundle"},sidebar:"mainSidebar",previous:{title:"sendMessage",permalink:"/ja/docs/classes/sendMessage"},next:{title:"listenFor",permalink:"/ja/docs/classes/listenFor"}},l={},o=[{value:"Returns",id:"returns",level:3},{value:"Parameters",id:"parameters",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"sendMessageToBundle(messageName, bundleName, *data, *cb)"})," ",(0,t.jsx)(s.em,{children:"\u2192 {Promise|undefined}"})]}),"\n",(0,t.jsxs)(s.p,{children:["Sends a message to a specific bundle. Also available as a static method. See ",(0,t.jsx)(s.a,{href:"/ja/docs/classes/sendMessage",children:"sendMessage"})," for usage details."]}),"\n",(0,t.jsx)(s.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(s.admonition,{title:"Browser Only",type:"important",children:(0,t.jsx)(s.p,{children:"This can only be used in code which runs in Dashboards and Graphics."})}),"\n",(0,t.jsx)(s.p,{children:"A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement. But, if a callback was provided, this return value will be undefined, and there will be no Promise."}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Attributes"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"The name of the message."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bundleName"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"The name of the target bundle."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"data"}),(0,t.jsx)(s.td,{children:"mixed"}),(0,t.jsx)(s.td,{children:"<optional>"}),(0,t.jsx)(s.td,{children:"The data to send."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"cb"}),(0,t.jsx)(s.td,{children:"function"}),(0,t.jsx)(s.td,{children:"<optional>"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"Browser only"})," The error-first callback to handle the server's ",(0,t.jsx)(s.a,{href:"http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29",children:"acknowledgement"})," message, if any."]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return a}});var t=n(7294);const d={},r=t.createContext(d);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);