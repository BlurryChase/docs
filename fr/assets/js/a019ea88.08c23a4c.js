"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9083],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,r(r({ref:n},s),{},{components:t})):a.createElement(h,r({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6915:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={id:"manifest",title:"package.json Manifest",sidebar_label:"Manifest"},d=void 0,p={unversionedId:"manifest",id:"manifest",title:"package.json Manifest",description:"Every bundle must have a package.json. In addition to the required fields",source:"@site/docs/manifest.md",sourceDirName:".",slug:"/manifest",permalink:"/fr/docs/manifest",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/manifest.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1679792686,formattedLastUpdatedAt:"26 mars 2023",frontMatter:{id:"manifest",title:"package.json Manifest",sidebar_label:"Manifest"},sidebar:"mainSidebar",previous:{title:"Concepts and Terminology",permalink:"/fr/docs/concepts-and-terminology"},next:{title:"Configuration",permalink:"/fr/docs/nodecg-configuration"}},s={},c=[{value:"nodecg.compatibleRange",id:"compatible-range",level:2},{value:"nodecg.bundleDependencies",id:"bundle-dependencies",level:2},{value:"nodecg.dashboardPanels",id:"dashboard-panels",level:2},{value:"nodecg.graphics",id:"graphics",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every bundle must have a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},(0,o.kt)("inlineCode",{parentName:"a"},"package.json")),". In addition to the required fields\nlike ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," outlined in that link, NodeCG bundles must also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"nodecg")," object in their ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\nwith some additional properties that tell NodeCG about the bundle and how to load it."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"nodecg")," object in a bundle's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," must follow this structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "example-bundle",\n  ...\n  "nodecg": {\n    "compatibleRange": "~0.7.0",\n    "bundleDependencies": {\n      "other-bundle": "^1.2.1"\n    },\n    "dashboardPanels": [\n      {\n        "name": "sample-panel",\n        "title": "Sample Panel",\n        "width": 2,\n        "headerColor": "#2d4e8a",\n        "file": "sample-panel.html"\n      },\n      {\n        "name": "sample-dialog",\n        "title": "Sample Dialog",\n        "width": 2,\n        "dialog": true,\n        "dialogButtons": [\n          {\n            "name": "save",\n            "type": "confirm"\n          },\n          {\n            "name": "cancel",\n            "type": "dismiss"\n          }\n        ],\n        "file": "sample-dialog.html"\n      },\n      {\n        "name": "custom-workspace",\n        "title": "Custom Workspace Panel",\n        "width": 4,\n        "file": "custom-workspace.html",\n        "workspace": "My Workspace"\n      },\n      {\n        "name": "fullbleed-panel",\n        "title": "Fullbleed Panel",\n        "fullbleed": true\n      }\n    ],\n    "graphics": [\n      {\n        "file": "index.html",\n        "width": 1280,\n        "height": 720,\n        "singleInstance": false\n      }\n    ]\n  }\n  ...\n}\n')),(0,o.kt)("h2",{id:"compatible-range"},"nodecg.compatibleRange"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"http://semver.org/"},"semver")," range that defines which version(s) of NodeCG this bundle is compatible with.\nThis bundle will not load in NodeCG versions outside the specified range."),(0,o.kt)("p",null,"This field is required."),(0,o.kt)("h2",{id:"bundle-dependencies"},"nodecg.bundleDependencies"),(0,o.kt)("p",null,"Formatted identically to npm's ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," field, but behaves differently.\nBundles declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"bundleDependencies")," are not automatically installed.\nThis field's only job is to ensure that dependant bundles are loaded first.\nIn the above example, ",(0,o.kt)("inlineCode",{parentName:"p"},"other-bundle")," would be loaded before ",(0,o.kt)("inlineCode",{parentName:"p"},"example-bundle"),", and if ",(0,o.kt)("inlineCode",{parentName:"p"},"other-bundle")," fails to load\nthen so will ",(0,o.kt)("inlineCode",{parentName:"p"},"example-bundle"),"."),(0,o.kt)("p",null,"This field is only required if your bundle makes use of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/classes/nodecg#extensions"},(0,o.kt)("inlineCode",{parentName:"a"},"nodecg.extensions"))," API."),(0,o.kt)("h2",{id:"dashboard-panels"},"nodecg.dashboardPanels"),(0,o.kt)("p",null,"An array of objects, each object describing an individual dashboard panel or dialog.\nEvery panel and dialog must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," is relative to the bundle's ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard")," folder.\n",(0,o.kt)("inlineCode",{parentName:"p"},"width")," is optional, and defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),". The width scale is arbitrary and may change,\nso you'll want to play around with this number to get the desired width."),(0,o.kt)("p",null,"Panels also have an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"headerColor")," property that accepts a hex color string."),(0,o.kt)("p",null,"You can split your panels up into multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace"),"s. By default all panels are added to the same workspace.\nIf you'd like to specify a different workspace, simply provide a workspace name as the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace")," property.\nWorkspaces work across bundles. If ",(0,o.kt)("inlineCode",{parentName:"p"},"my-bundle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"your-bundle")," both declare a panel in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Shared Workspace"),"\nworkspace, then both of our panels will show up together."),(0,o.kt)("p",null,"If you have a really big panel that simply needs to be in its own workspace and have maximized screenspace, give it\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"fullbleed")," property. Fullbleed panels are put into their own workspace and have no margins around them. This is\ngood for when you have a large, complex UI that you need more fine-grained control over."),(0,o.kt)("video",{style:{width:"100%"},controls:!0,preload:!0},(0,o.kt)("source",{src:"/vid/Fullbleed.mp4",type:"video/mp4"})),(0,o.kt)("p",null,"To mark a panel as a dialog, it must have the ",(0,o.kt)("inlineCode",{parentName:"p"},"dialog")," property set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Dialogs don't immediately display on the\ndashboard, and must be manually invoked. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/making-dialogs"},"Making Dashboard Dialogs")," for more info.\n(",(0,o.kt)("a",{parentName:"p",href:"http://i.imgur.com/xA4mDvF.png"},"Screenshot of an open dialog"),")"),(0,o.kt)("p",null,"Dialogs have special buttons for confirmation and dismissal, which are defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dialogButtons")," property.\nThere are only two types of dialogButton: ",(0,o.kt)("inlineCode",{parentName:"p"},"confirm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dismiss"),". When one of these buttons is pressed, a\n",(0,o.kt)("inlineCode",{parentName:"p"},"dialog-confirmed")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dialog-dismissed")," event is emitted on the dialog's ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," to allow for easy handling with\nless boilerplate."),(0,o.kt)("p",null,"This field is only required if your bundle has dashboard panels."),(0,o.kt)("h2",{id:"graphics"},"nodecg.graphics"),(0,o.kt)("p",null,"An array of objects, each object describing a graphic.\nEach graphic must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," is relative to the bundle's ",(0,o.kt)("inlineCode",{parentName:"p"},"graphics")," folder.\nIf you wish to enforce that your graphic only ever be open in one place at a time, set ",(0,o.kt)("inlineCode",{parentName:"p"},"singleInstance")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\n(defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"This field is only required if your bundle has graphics."))}m.isMDXComponent=!0}}]);