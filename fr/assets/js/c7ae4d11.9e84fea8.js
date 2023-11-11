"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7277],{158:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return l}});var r=t(5893),s=t(1151);const o={id:"creating-bundles",title:"Creating Bundles",sidebar_label:"Creating Bundles"},i=void 0,a={id:"creating-bundles",title:"Creating Bundles",description:"Examples",source:"@site/docs/creating-bundles.md",sourceDirName:".",slug:"/creating-bundles",permalink:"/fr/docs/creating-bundles",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/creating-bundles.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1699664005,formattedLastUpdatedAt:"11 nov. 2023",frontMatter:{id:"creating-bundles",title:"Creating Bundles",sidebar_label:"Creating Bundles"},sidebar:"mainSidebar",previous:{title:"Installing",permalink:"/fr/docs/installing"},next:{title:"Concepts and Terminology",permalink:"/fr/docs/concepts-and-terminology"}},c={},l=[{value:"Examples",id:"examples",level:2},{value:"Using Yeoman",id:"yeoman",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Before continuing, you may find it helpful to look over our ",(0,r.jsx)(n.a,{href:"https://github.com/nodecg/nodecg-simple-examples",children:"collection of simple example bundles"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"yeoman",children:"Using Yeoman"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use Yeoman and ",(0,r.jsx)(n.a,{href:"https://github.com/nodecg/generator-nodecg",children:"generator-nodecg"})," to generate the beginnings of your new bundle:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --global yo generator-nodecg\ncd bundles\nmkdir my-first-bundle\ncd my-first-bundle\nyo nodecg\n"})}),"\n",(0,r.jsx)(n.p,{children:"Answer the prompts one-by-one as they come up."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you wish to access the TypeScript boilerplate, just answer yes to the TypeScript prompt."}),"\n",(0,r.jsx)(n.li,{children:"If you wish to access the React boilerplate, first answer yes to the TypeScript prompt and then also answer yes to the React prompt (we currently have a TypeScript+React template but not a plain JavaScript+React template)."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you created the bundle with typescript (plain typescript or react) you have to compile the bundle using ",(0,r.jsx)(n.code,{children:"npm run build"})," inside the ",(0,r.jsx)(n.code,{children:"my-first-bundle"})," directory.",(0,r.jsx)(n.br,{}),"\n","(This is likely your issue if you see something like: ",(0,r.jsx)(n.code,{children:'Error: my-first-bundle has a "nodecg.dashboardPanels" property in its package.json, but no "dashboard" folder'})," when trying to start nodecg)"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'If you generated your bundle with TypeScript, you can use the "dev" script to start NodeCG, automatically re-compile your code when it changes, and also automatically restart NodeCG when specifically server-side code changes (such as your extension):'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# From the root of your new bundle's folder\nnpm run dev\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Else, you can start NodeCG the old-fashioned way with ",(0,r.jsx)(n.code,{children:"nodecg-cli"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ../..\nnodecg start\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When running NodeCG in production, ",(0,r.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," or ",(0,r.jsx)(n.a,{href:"https://github.com/Unitech/pm2",children:"pm2"})," are recommended."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the NodeCG Dashboard, which will be located at ",(0,r.jsx)(n.a,{href:"http://localhost:9090",children:"http://localhost:9090"})," by default. You should see a page like this:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Dashboard Screenshot",src:t(9908).Z+"",width:"641",height:"578"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'That\'s it! You can click the "Graphics" button in the top right to see a list of graphics in your installed bundles.'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you have more questions, want further guidance, or would just like to hang out with other NodeCG devs, ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/GJ4r8a8",children:"join our Discord server"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9908:function(e,n,t){n.Z=t.p+"assets/images/quickstart_dashboard-5d9d13369b59a7a0d68c7b8c889f07a5.png"},1151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(7294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);