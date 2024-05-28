"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5565],{5615:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var s=t(5893),r=t(1151);const a={id:"migrating-0.7-to-0.8",title:"Migrating from 0.7 to 0.8",sidebar_label:"0.7 \u2192 0.8"},i=void 0,l={id:"migrating/migrating-0.7-to-0.8",title:"Migrating from 0.7 to 0.8",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.7-to-0.8.md",sourceDirName:"migrating",slug:"/migrating/migrating-0.7-to-0.8",permalink:"/fr/docs/migrating/migrating-0.7-to-0.8",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/migrating/migrating-0.7-to-0.8.md",tags:[],version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1716880703,formattedLastUpdatedAt:"28 mai 2024",frontMatter:{id:"migrating-0.7-to-0.8",title:"Migrating from 0.7 to 0.8",sidebar_label:"0.7 \u2192 0.8"},sidebar:"mainSidebar",previous:{title:"p5.js",permalink:"/fr/docs/frameworks/using-p5js"},next:{title:"0.8 \u2192 0.9",permalink:"/fr/docs/migrating/migrating-0.8-to-0.9"}},o={},d=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Replicant Change Event",id:"replicant-change-event",level:3},{value:"Panel Routes",id:"panel-routes",level:3},{value:"Assets &amp; Asset Categories",id:"assets--asset-categories",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#breaking-changes",children:"Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#replicant-change-event",children:"Replicant Change Event"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#panel-routes",children:"Panel Routes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#assets--asset-categories",children:"Assets & Asset Categories"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"replicant-change-event",children:"Replicant Change Event"}),"\n",(0,s.jsx)(n.p,{children:"Prior to NodeCG v0.8, the Replicant change handler had the following signature:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// NodeCG v0.7 and earlier\nmyRep.on('change', function (oldVal, newVal, changes) {});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In v0.8, ",(0,s.jsx)(n.code,{children:"newVal"})," and ",(0,s.jsx)(n.code,{children:"oldVal"})," have been swapped, as ",(0,s.jsx)(n.code,{children:"newVal"})," is frequently used whereas ",(0,s.jsx)(n.code,{children:"oldVal"})," is less frequently used."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// NodeCG v0.8 and later\nmyRep.on('change', function(newVal, oldVal, operations) {});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"panel-routes",children:"Panel Routes"}),"\n",(0,s.jsxs)(n.p,{children:["Dashboard panels are now served from ",(0,s.jsx)(n.code,{children:"/panel/:bundleName/:panelFile"})," routes. Prior to v0.8, they were served from the\n",(0,s.jsx)(n.code,{children:"/panel/:bundleName/:panelName"})," route."]}),"\n",(0,s.jsx)(n.p,{children:"This means that for a panel with the following declaration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "test",\n    "title": "Test Panel",\n    "width": 2,\n    "file": "panel.html"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["... the route to access this panel is now ",(0,s.jsx)(n.code,{children:"/panel/test-bundle/panel.html"})," instead of ",(0,s.jsx)(n.code,{children:"/panel/test-bundle/test"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This also affects panels served from subfolders. Previously, the following panel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "test-dialog",\n    "title": "Test Dialog",\n    "width": 2,\n    "file": "dialogs/test-dialog.html"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["... would have been served from ",(0,s.jsx)(n.code,{children:"/panel/test-bundle/test-dialog"}),". It is now served from ",(0,s.jsx)(n.code,{children:"/panel/test-bundle/dialogs/test-dialog.html"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If your panel or dialog is in a subfolder, you will need to update any relative links in your panel's HTML, CSS, and JS accordingly.\nFor example, if ",(0,s.jsx)(n.code,{children:"test-dialog"})," were importing ",(0,s.jsx)(n.a,{href:"https://elements.polymer-project.org/elements/paper-button?view=demo:demo/index.html",children:(0,s.jsx)(n.code,{children:"<paper-button>"})}),",\nthe URL it uses would have to change:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- Won\'t work anymore. --\x3e\n<link rel="import" href="components/paper-button/paper-button.html" />\n\n\x3c!-- Works with the new panel routes. --\x3e\n<link rel="import" href="../components/paper-button/paper-button.html" />\n'})}),"\n",(0,s.jsx)(n.h3,{id:"assets--asset-categories",children:"Assets & Asset Categories"}),"\n",(0,s.jsx)(n.p,{children:'NodeCG v0.7.2 introduced the Uploads system. NodeCG v0.8 has renamed this system to "Assets", and introduces\nthe concept of categories. See the [Assets tutorial]tutorial assets for more information on how to configure Assets for your bundle.'})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(7294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);