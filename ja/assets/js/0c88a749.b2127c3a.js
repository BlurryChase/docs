"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5789],{7303:function(e,n,s){s.r(n),s.d(n,{assets:function(){return i},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var t=s(5893),o=s(1151);const a={id:"sounds",title:"Sounds",sidebar_label:"Sounds"},d=void 0,l={id:"sounds",title:"Sounds",description:"NodeCG features a system for management and playback of sound cues. To add sound cues to your bundle,",source:"@site/docs/sounds.md",sourceDirName:".",slug:"/sounds",permalink:"/ja/docs/sounds",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/sounds.md",tags:[],version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1716880703,formattedLastUpdatedAt:"2024\u5e745\u670828\u65e5",frontMatter:{id:"sounds",title:"Sounds",sidebar_label:"Sounds"},sidebar:"mainSidebar",previous:{title:"Assets",permalink:"/ja/docs/assets"},next:{title:"Replicant Validation",permalink:"/ja/docs/replicant-schemas"}},i={},c=[];function r(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["NodeCG features a system for management and playback of sound cues. To add sound cues to your bundle,\ncreate a ",(0,t.jsx)(n.code,{children:"nodecg.soundCues"})," array in your ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "test-bundle",\n    "nodecg": {\n        "soundCues": [\n            {\n                "name": "name-only"\n            },\n            {\n                "name": "default-volume",\n                "defaultVolume": 80\n            },\n            {\n                "name": "non-assignable",\n                "assignable": false,\n                "defaultFile": "sound/default-file.ogg"\n            },\n            {\n                "name": "default-file",\n                "defaultFile": "sound/default-file.ogg"\n            },\n            {\n                "name": "single-channel",\n                "channels": 1\n            }\n        ]\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Your bundle will now have a card on the Mixer page of the Dashboard."}),"\n",(0,t.jsx)("video",{style:{width:"100%"},controls:!0,preload:!0,children:(0,t.jsx)("source",{src:"/vid/Sounds.mp4",type:"video/mp4"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defaultFile"}),'s are audio files that you ship with your bundle. They will be available to that specific cue as a\n"Default" option in that cue\'s dropdown select on the Mixer.']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"channels"})," determines how many instances of a sound can be playing simultaneously. The default value is ",(0,t.jsx)(n.code,{children:"100"}),". If set to ",(0,t.jsx)(n.code,{children:"1"}),",\nonly one instance can play at a time, and a new instance cannot be started until the currently playing instance has completed."]}),"\n",(0,t.jsxs)(n.p,{children:["If your bundle has at least one cue that is ",(0,t.jsx)(n.code,{children:"assignable"}),', it will gain a "Sounds" ',(0,t.jsx)(n.a,{href:"/docs/assets",children:"Asset"})," category.\nThis category accepts ",(0,t.jsx)(n.code,{children:".ogg"})," and ",(0,t.jsx)(n.code,{children:".mp3"})," files. Any audio files uploaded to this category will become available as options\nin all of your ",(0,t.jsx)(n.code,{children:"assignable"})," cues' dropdown boxes."]}),"\n",(0,t.jsx)(n.p,{children:"If your bundle has Sound Cues, the following API methods will be available to your graphic:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"classes/playSound",children:"playSound"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"classes/stopSound",children:"stopSound"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"classes/stopAllSounds",children:"stopAllSounds"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},1151:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(7294);const o={},a=t.createContext(o);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);