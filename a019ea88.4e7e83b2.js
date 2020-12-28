(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(7),o=(t(0),t(142)),r={id:"manifest",title:"package.json Manifest",sidebar_label:"Manifest"},l={unversionedId:"manifest",id:"manifest",isDocsHomePage:!1,title:"package.json Manifest",description:"Every bundle must have a package.json. In addition to the required fields",source:"@site/docs/manifest.md",slug:"/manifest",permalink:"/docs/manifest",editUrl:"https://github.com/nodecg/docs/edit/master/docs/manifest.md",version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1609122495,sidebar_label:"Manifest",sidebar:"mainSidebar",previous:{title:"Concepts and Terminology",permalink:"/docs/concepts-and-terminology"},next:{title:"NodeCG Configuration",permalink:"/docs/nodecg-configuration"}},d=[{value:"nodecg.compatibleRange",id:"nodecgcompatiblerange",children:[]},{value:"nodecg.bundleDependencies",id:"nodecgbundledependencies",children:[]},{value:"nodecg.dashboardPanels",id:"nodecgdashboardpanels",children:[]},{value:"nodecg.graphics",id:"nodecggraphics",children:[]}],p={rightToc:d};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every bundle must have a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package.json"}),Object(o.b)("inlineCode",{parentName:"a"},"package.json")),". In addition to the required fields\nlike ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"version")," outlined in that link, NodeCG bundles must also have a ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg")," object in their ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"\nwith some additional properties that tell NodeCG about the bundle and how to load it."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"nodecg")," object in a bundle's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," must follow this structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "example-bundle",\n  ...\n  "nodecg": {\n    "compatibleRange": "~0.7.0",\n    "bundleDependencies": {\n      "other-bundle": "^1.2.1"\n    },\n    "dashboardPanels": [\n      {\n        "name": "sample-panel",\n        "title": "Sample Panel",\n        "width": 2,\n        "headerColor": "#2d4e8a",\n        "file": "sample-panel.html"\n      },\n      {\n        "name": "sample-dialog",\n        "title": "Sample Dialog",\n        "width": 2,\n        "dialog": true,\n        "dialogButtons": [\n          {\n            "name": "save",\n            "type": "confirm"\n          },\n          {\n            "name": "cancel",\n            "type": "dismiss"\n          }\n        ],\n        "file": "sample-dialog.html"\n      },\n      {\n        "name": "custom-workspace",\n        "title": "Custom Workspace Panel",\n        "width": 4,\n        "file": "custom-workspace.html",\n        "workspace": "My Workspace"\n      },\n      {\n        "name": "fullbleed-panel",\n        "title": "Fullbleed Panel",\n        "fullbleed": true\n      }\n    ],\n    "graphics": [\n      {\n        "file": "index.html",\n        "width": 1280,\n        "height": 720,\n        "singleInstance": false\n      }\n    ]\n  }\n  ...\n}\n')),Object(o.b)("h2",{id:"nodecgcompatiblerange"},"nodecg.compatibleRange"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://semver.org/"}),"semver")," range that defines which version(s) of NodeCG this bundle is compatible with.\nThis bundle will not load in NodeCG versions outside the specified range."),Object(o.b)("p",null,"This field is required."),Object(o.b)("h2",{id:"nodecgbundledependencies"},"nodecg.bundleDependencies"),Object(o.b)("p",null,"Formatted identically to npm's ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," field, but behaves differently.\nBundles declared as ",Object(o.b)("inlineCode",{parentName:"p"},"bundleDependencies")," are not automatically installed.\nThis field's only job is to ensure that dependant bundles are loaded first.\nIn the above example, ",Object(o.b)("inlineCode",{parentName:"p"},"other-bundle")," would be loaded before ",Object(o.b)("inlineCode",{parentName:"p"},"example-bundle"),", and if ",Object(o.b)("inlineCode",{parentName:"p"},"other-bundle")," fails to load\nthen so will ",Object(o.b)("inlineCode",{parentName:"p"},"example-bundle"),"."),Object(o.b)("p",null,"This field is only required if your bundle makes use of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/classes/nodecg#extensions"}),Object(o.b)("inlineCode",{parentName:"a"},"nodecg.extensions"))," API."),Object(o.b)("h2",{id:"nodecgdashboardpanels"},"nodecg.dashboardPanels"),Object(o.b)("p",null,"An array of objects, each object describing an individual dashboard panel or dialog.\nEvery panel and dialog must have a ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"title"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"file"),". ",Object(o.b)("inlineCode",{parentName:"p"},"file")," is relative to the bundle's ",Object(o.b)("inlineCode",{parentName:"p"},"dashboard")," folder.\n",Object(o.b)("inlineCode",{parentName:"p"},"width")," is optional, and defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"2"),". The width scale is arbitrary and may change,\nso you'll want to play around with this number to get the desired width."),Object(o.b)("p",null,"Panels also have an optional ",Object(o.b)("inlineCode",{parentName:"p"},"headerColor")," property that accepts a hex color string."),Object(o.b)("p",null,"You can split your panels up into multiple ",Object(o.b)("inlineCode",{parentName:"p"},"workspace"),"s. By default all panels are added to the same workspace.\nIf you'd like to specify a different workspace, simply provide a workspace name as the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace")," property.\nWorkspaces work across bundles. If ",Object(o.b)("inlineCode",{parentName:"p"},"my-bundle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"your-bundle")," both declare a panel in the ",Object(o.b)("inlineCode",{parentName:"p"},"Shared Workspace"),"\nworkspace, then both of our panels will show up together."),Object(o.b)("p",null,"If you have a really big panel that simply needs to be in its own workspace and have maximized screenspace, give it\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"fullbleed")," property. Fullbleed panels are put into their own workspace and have no margins around them. This is\ngood for when you have a large, complex UI that you need more fine-grained control over."),Object(o.b)("video",{style:{width:"100%"},controls:!0,preload:!0},Object(o.b)("source",{src:"/vid/Fullbleed.mp4",type:"video/mp4"})),Object(o.b)("p",null,"To mark a panel as a dialog, it must have the ",Object(o.b)("inlineCode",{parentName:"p"},"dialog")," property set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". Dialogs don't immediately display on the\ndashboard, and must be manually invoked. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/making-dialogs"}),"Making Dashboard Dialogs")," for more info.\n(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://i.imgur.com/xA4mDvF.png"}),"Screenshot of an open dialog"),")"),Object(o.b)("p",null,"Dialogs have special buttons for confirmation and dismissal, which are defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"dialogButtons")," property.\nThere are only two types of dialogButton: ",Object(o.b)("inlineCode",{parentName:"p"},"confirm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"dismiss"),". When one of these buttons is pressed, a\n",Object(o.b)("inlineCode",{parentName:"p"},"dialog-confirmed")," or ",Object(o.b)("inlineCode",{parentName:"p"},"dialog-dismissed")," event is emitted on the dialog's ",Object(o.b)("inlineCode",{parentName:"p"},"document")," to allow for easy handling with\nless boilerplate."),Object(o.b)("p",null,"This field is only required if your bundle has dashboard panels."),Object(o.b)("h2",{id:"nodecggraphics"},"nodecg.graphics"),Object(o.b)("p",null,"An array of objects, each object describing a graphic.\nEach graphic must have a ",Object(o.b)("inlineCode",{parentName:"p"},"file"),", ",Object(o.b)("inlineCode",{parentName:"p"},"width"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"height"),". ",Object(o.b)("inlineCode",{parentName:"p"},"file")," is relative to the bundle's ",Object(o.b)("inlineCode",{parentName:"p"},"graphics")," folder.\nIf you wish to enforce that your graphic only ever be open in one place at a time, set ",Object(o.b)("inlineCode",{parentName:"p"},"singleInstance")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"\n(defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),")."),Object(o.b)("p",null,"This field is only required if your bundle has graphics."))}c.isMDXComponent=!0},142:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,m=s["".concat(r,".").concat(u)]||s[u]||b[u]||o;return t?i.a.createElement(m,l(l({ref:n},p),{},{components:t})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);