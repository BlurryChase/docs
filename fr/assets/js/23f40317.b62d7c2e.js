"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4401],{2540:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return d}});var s=t(5893),a=t(1151);const r={id:"migrating-0.8-to-0.9",title:"Migrating from 0.8 to 0.9",sidebar_label:"0.8 \u2192 0.9"},i=void 0,o={id:"migrating/migrating-0.8-to-0.9",title:"Migrating from 0.8 to 0.9",description:"Breaking Changes",source:"@site/docs/migrating/migrating-0.8-to-0.9.md",sourceDirName:"migrating",slug:"/migrating/migrating-0.8-to-0.9",permalink:"/fr/docs/migrating/migrating-0.8-to-0.9",draft:!1,unlisted:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/migrating/migrating-0.8-to-0.9.md",tags:[],version:"current",lastUpdatedBy:"Daniel Shields",lastUpdatedAt:1716880703,formattedLastUpdatedAt:"28 mai 2024",frontMatter:{id:"migrating-0.8-to-0.9",title:"Migrating from 0.8 to 0.9",sidebar_label:"0.8 \u2192 0.9"},sidebar:"mainSidebar",previous:{title:"0.7 \u2192 0.8",permalink:"/fr/docs/migrating/migrating-0.7-to-0.8"},next:{title:"0.9 \u2192 1.0",permalink:"/fr/docs/migrating/migrating-0.9-to-1.0"}},l={},d=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Routing Changes",id:"routing-changes",level:3},{value:"Removed Default Styles",id:"removed-default-styles",level:3},{value:"sendMessage acknowledgement Errors",id:"sendmessage-acknowledgement-errors",level:3},{value:"No Auto-Installation of Dependencies",id:"no-auto-installation-of-dependencies",level:3},{value:"Removed Rollbar integration, replaced it with Sentry",id:"removed-rollbar-integration-replaced-it-with-sentry",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#breaking-changes",children:"Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#routing-changes",children:"Routing Changes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#removed-default-styles",children:"Removed Default Styles"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#sendmessage-acknowledgement-errors",children:"sendMessage acknowledgement Errors"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#no-auto-installation-of-dependencies",children:"No Auto-Installation of Dependencies"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#removed-rollbar-integration-replaced-it-with-sentry",children:"Removed Rollbar integration, replaced it with Sentry"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"routing-changes",children:"Routing Changes"}),"\n",(0,s.jsxs)(n.p,{children:["NodeCG's routing has always been a little arbitrary and confusing. It did not match the structure of the filesystem, and there wasn't really a good reason for this. This arbitrary routing structure was hard to remember and prevented bundle authors from taking advantage of their IDE's autocomplete functionality. It also made using filesystem-aware tools like the ",(0,s.jsx)(n.a,{href:"https://github.com/Polymer/polymer-bundler",children:(0,s.jsx)(n.code,{children:"polymer-bundler"})})," (formerly called ",(0,s.jsx)(n.code,{children:"vulcanize"}),") needlessly difficult."]}),"\n",(0,s.jsx)(n.p,{children:"The new routing structure matches the structure of the filesystem, making routes easier to work with and avoiding certain bugs relating to the de-duplication of HTML Imports (and soon, ES Modules)."}),"\n",(0,s.jsx)(n.p,{children:"Old (don't use these anymore!):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"/panels/my-bundle/panel.html\n/graphics/my-bundle/graphic.html\n\n# Two different routes to the same file! This breaks the de-duplication of HTML Imports and causes errors.\n/panels/my-bundle/components/polymer/polymer.html\n/graphics/my-bundle/components/polymer/polymer.html\n"})}),"\n",(0,s.jsx)(n.p,{children:"New:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"/bundles/my-bundle/dashboard/panel.html\n/bundles/my-bundle/graphics/graphic.html\n\n# Now, there is only one single route to any given file.\n/bundles/my-bundle/bower_components/polymer/polymer.html\n"})}),"\n",(0,s.jsx)(n.h3,{id:"removed-default-styles",children:"Removed Default Styles"}),"\n",(0,s.jsx)(n.p,{children:"Up until now, NodeCG has injected some default styles and helper classes into each and every panel. The idea was to provide a set of base styles that every bundle author could use to try to create a cohesive NodeCG panel design across all bundles."}),"\n",(0,s.jsx)(n.p,{children:"However, this set of styles was far too small and limited to achieve that, and upon further reflection we decided that NodeCG core was not the place to attempt to accomplish this. Additionally, it's possible for these injected styles to cause frustrating conflicts."}),"\n",(0,s.jsxs)(n.p,{children:["NodeCG ",(0,s.jsx)(n.em,{children:"does"})," still inject a few default styles, but the number of styles has been dramatically reduced to just a few necessary things, such as the background color for panels. And, as always, this value can be easily overridden in your panel's CSS."]}),"\n",(0,s.jsxs)(n.p,{children:["If your panels relied on any of these default styles or helper classes such as ",(0,s.jsx)(n.code,{children:"nodecg-configure"}),", you will need to manually specify new styles instead."]}),"\n",(0,s.jsx)(n.h3,{id:"sendmessage-acknowledgement-errors",children:"sendMessage acknowledgement Errors"}),"\n",(0,s.jsxs)(n.p,{children:["In the past, if you tried to reply to a ",(0,s.jsx)(n.code,{children:"sendMessage"})," with an ",(0,s.jsx)(n.code,{children:"Error"}),", you'd end up with just an empty Object at the other end (",(0,s.jsx)(n.code,{children:"{}"}),"). This is because by default, JavaScript ",(0,s.jsx)(n.code,{children:"Error"}),"s are serialized as an empty Object by ",(0,s.jsx)(n.code,{children:"JSON.stringify"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, if the first argument to a ",(0,s.jsx)(n.a,{href:"/docs/classes/sendMessage",children:(0,s.jsx)(n.code,{children:"sendMessage"})})," acknowledgement is an error, it will be properly serialized and sent across the wire. As part of this, we are now strongly encouraging that all ",(0,s.jsx)(n.a,{href:"/docs/classes/sendMessage",children:(0,s.jsx)(n.code,{children:"sendMessage"})})," acknowledgements always be treated as standard error-first Node.js-style callbacks."]}),"\n",(0,s.jsxs)(n.p,{children:["In addition, client-side ",(0,s.jsx)(n.a,{href:"/docs/classes/sendMessage",children:(0,s.jsx)(n.code,{children:"sendMessage"})})," now also returns a ",(0,s.jsx)(n.code,{children:"Promise"}),", so that you may use ",(0,s.jsx)(n.code,{children:".then"}),"/",(0,s.jsx)(n.code,{children:".catch"})," instead of a callback function. See the updated ",(0,s.jsx)(n.a,{href:"/docs/classes/sendMessage",children:(0,s.jsx)(n.code,{children:"sendMessage"})})," documentation for more information."]}),"\n",(0,s.jsxs)(n.p,{children:["Please note that if you do not specify a callback to your ",(0,s.jsx)(n.code,{children:"sendMessage"}),", then it will always return a Promise. Additionally, the first argument sent back in your acknowledgement is always assumed to be either an ",(0,s.jsx)(n.code,{children:"Error"})," or ",(0,s.jsx)(n.code,{children:"null"}),". If this value is truthy, then it will be used to ",(0,s.jsx)(n.code,{children:"reject"})," the Promise. For this reason, it is strongly encouraged that all ",(0,s.jsx)(n.code,{children:"sendMessage"})," acknowledgements strictly adhere to the error-first style of callbacks."]}),"\n",(0,s.jsx)(n.h3,{id:"no-auto-installation-of-dependencies",children:"No Auto-Installation of Dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["Since the earliest versions of NodeCG, it has attempted to be helpful by automatically running both ",(0,s.jsx)(n.code,{children:"npm install --production"})," and ",(0,s.jsx)(n.code,{children:"bower install"})," on every installed bundle, every time you started up NodeCG. While some users may have found this helpful, over time we've come to realize that this was a misguided decision, and that installation of each bundle's dependencies should really be left to the user."]}),"\n",(0,s.jsxs)(n.p,{children:["The main rationale for the removal of this feature is that there's a lot more package managers out there than just ",(0,s.jsx)(n.code,{children:"npm"})," and ",(0,s.jsx)(n.code,{children:"bower"}),", and it's not reasonable for NodeCG to know about every single one of them and to be able to properly invoke them. The auto-dependency installation system made a lot of assumptions, and it's going to become more and more frequent that these assumptions just aren't valid. For example, if a bundle doesn't have a ",(0,s.jsx)(n.code,{children:"bower.json"}),", then running ",(0,s.jsx)(n.code,{children:"bower install"})," on it would actually have unintended side-effects. This is just one example that is easy to fix on its own, but there are many such examples of odd side-effects and unintended consequences of this automatic installation behavior. Together, they paint a clear picture that this feature was misguided, and should be removed."]}),"\n",(0,s.jsxs)(n.p,{children:["Going forward, users will always need to manually run whatever dependency installation steps are required by the bundle in question. For most bundles, this still means just running ",(0,s.jsx)(n.code,{children:"npm install --production && bower install"}),", but this will not always be the case. Each bundle will need to add their dependency installation steps to their READMEs, and make sure that users are educated in the fact that pulling down new updates to a bundle means that they may need to also install updated dependencies."]}),"\n",(0,s.jsx)(n.h3,{id:"removed-rollbar-integration-replaced-it-with-sentry",children:"Removed Rollbar integration, replaced it with Sentry"}),"\n",(0,s.jsxs)(n.p,{children:["In NodeCG v0.8, we introduced a first-class integration with the Rollbar error tracking service. This was very helpful and made NodeCG safer to use in production, but we were unhappy with the level of service and features that Rollbar provided. In NodeCG v0.9, we have removed the Rollbar integration and replaced it with a Sentry integration. See the ",(0,s.jsx)(n.a,{href:"/docs/sentry",children:"Sentry tutorial"})," for more info on how to set up Sentry in your NodeCG deployment."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(7294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);