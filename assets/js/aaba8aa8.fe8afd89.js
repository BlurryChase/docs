"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4215],{9639:function(e,n,s){s.r(n),s.d(n,{assets:function(){return i},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l}});var t=s(5893),r=s(1151);const a={id:"sendMessage",title:"sendMessage",sidebar_label:"sendMessage"},d=void 0,o={id:"classes/sendMessage",title:"sendMessage",description:"sendMessage(messageName, data, cb) \u2192 \\{Promise\\}",source:"@site/docs/classes/sendMessage.md",sourceDirName:"classes",slug:"/classes/sendMessage",permalink:"/docs/classes/sendMessage",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/classes/sendMessage.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1699664005,formattedLastUpdatedAt:"Nov 11, 2023",frontMatter:{id:"sendMessage",title:"sendMessage",sidebar_label:"sendMessage"},sidebar:"mainSidebar",previous:{title:"waitForReplicants",permalink:"/docs/classes/waitForReplicants"},next:{title:"sendMessageToBundle",permalink:"/docs/classes/sendMessageToBundle"}},i={},l=[{value:"Returns",id:"returns",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sendMessage(messageName, *data, *cb)"})," ",(0,t.jsx)(n.em,{children:"\u2192 {Promise}"})]}),"\n",(0,t.jsx)(n.p,{children:"Sends a message with optional data within the current bundle. Messages can be sent from client to server, server to client, or client to client."}),"\n",(0,t.jsxs)(n.p,{children:["Messages are namespaced by bundle. To send a message in another bundle's namespace, use ",(0,t.jsx)(n.a,{href:"sendMessageToBundle",children:"sendMessageToBundle"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'When a sendMessage is used from a client context (i.e., graphic or dashboard panel), it returns a Promise called an "acknowledgement". Your server-side code (i.e., extension) can invoke this acknowledgement with whatever data (or error) it wants. Errors sent to acknowledgements from the server will be properly serialized and intact when received on the client.'}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, if you do not wish to use a Promise, you can provide a standard error-first callback as the last argument to sendMessage."}),"\n",(0,t.jsx)(n.p,{children:"If your server-side code has multiple listenFor handlers for your message, you must first check if the acknowledgement has already been handled before attempting to call it. You may so do by checking the .handled boolean property of the ack function passed to your listenFor handler."}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"http://socket.io/docs/#sending-and-getting-data-%28acknowledgements%29",children:"Socket.IO's docs"})," for more information on how acknowledgements work under the hood."]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.admonition,{title:"Browser Only",type:"important",children:(0,t.jsx)(n.p,{children:"This can only be used in code which runs in Dashboards and Graphics."})}),"\n",(0,t.jsx)(n.p,{children:"A Promise that is rejected if the first argument provided to the acknowledgement is an Error, otherwise it is resolved with the remaining arguments provided to the acknowledgement."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Attributes"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"The name of the message."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data"}),(0,t.jsx)(n.td,{children:"mixed"}),(0,t.jsx)(n.td,{children:"<optional>"}),(0,t.jsx)(n.td,{children:"The data to send."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cb"}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"<optional>"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"Browser only"})," The error-first callback to handle the server's acknowledgement message, if any."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Sending a normal message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"nodecg.sendMessage('printMessage', 'dope.');\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sending a message and replying with an acknowledgement:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="bundles/my-bundle/extension.js"',children:"module.exports = function(nodecg) {\n    nodecg.listenFor('multiplyByTwo', (value, ack) => {\n        if (value === 4) {\n            ack(new Error('I don\\'t like multiplying the number 4!'));\n            return;\n        }\n\n        // Acknowledgements should always be error-first callbacks.\n        // If you do not wish to send an error, use a falsey value\n        // like \"null\" instead.\n        if (ack && !ack.handled) {\n            ack(null, value * 2);\n        }\n    });\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="bundles/my-bundle/graphics/script.js"',children:"/* Both of these examples are functionally identical. */\n\n// Promise acknowledgement\nnodecg.sendMessage('multiplyByTwo', 2)\n    .then(result => {\n        console.log(result); // Will eventually print '4'\n    }).catch(error => {\n        console.error(error);\n    });\n\n// Error-first callback acknowledgement\nnodecg.sendMessage('multiplyByTwo', 2, (error, result) => {\n    if (error) {\n        console.error(error);\n        return;\n    }\n\n    console.log(result); // Will eventually print '4'\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(7294);const r={},a=t.createContext(r);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);