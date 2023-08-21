"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[265],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return n?i.createElement(k,r(r({ref:t},m),{},{components:n})):i.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"nodecg-configuration",title:"NodeCG Configuration",sidebar_label:"Configuration"},p=void 0,s={unversionedId:"nodecg-configuration",id:"nodecg-configuration",title:"NodeCG Configuration",description:"NodeCG is configured via a cfg/nodecg.js, cfg/nodecg.yaml, or cfg/nodecg.json file with the following schema:",source:"@site/docs/nodecg-configuration.md",sourceDirName:".",slug:"/nodecg-configuration",permalink:"/docs/nodecg-configuration",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/main/docs/nodecg-configuration.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1692621306,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{id:"nodecg-configuration",title:"NodeCG Configuration",sidebar_label:"Configuration"},sidebar:"mainSidebar",previous:{title:"Manifest",permalink:"/docs/manifest"},next:{title:"Node Dependencies",permalink:"/docs/using-npm"}},m={},d=[{value:"Schema",id:"schema",level:3},{value:"Example Config {#example}",id:"example",level:3}],c={toc:d},u="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NodeCG is configured via a ",(0,l.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.js"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.yaml"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.json")," file with the following schema:"),(0,l.kt)("h3",{id:"schema"},"Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host")," ",(0,l.kt)("em",{parentName:"li"},"String")," The IP address or hostname that NodeCG should bind to. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},'"0.0.0.0"'),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"port")," ",(0,l.kt)("em",{parentName:"li"},"Integer")," The port that NodeCG should listen on. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"9090"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"baseURL")," ",(0,l.kt)("em",{parentName:"li"},"String")," The URL of this instance. Used for things like cookies. If you use a reverse proxy, you'll likely need to set this value. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"HOST:PORT"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exitOnUncaught")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether or not to exit on uncaught exceptions. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logging")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains other configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"console")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains properties for console logging.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable console logging. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replicants")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable logging of the Replicants subsystem. Very spammy. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamps")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to add timestamps to the console logging. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," ",(0,l.kt)("em",{parentName:"li"},"String")," Lowest importance of messages which should be logged. Must be ",(0,l.kt)("inlineCode",{parentName:"li"},'"verbose"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"debug"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"info"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"warn"')," or ",(0,l.kt)("inlineCode",{parentName:"li"},'"error"')," ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},'"info"'),"]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains properties for file logging.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable file logging. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replicants")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable logging of the Replicants subsystem. Very spammy. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamps")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to add timestamps to the file logging. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," ",(0,l.kt)("em",{parentName:"li"},"String")," The filepath to log to. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},'"logs/nodecg.log"'),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," ",(0,l.kt)("em",{parentName:"li"},"String")," Lowest importance of messages which should be logged. Must be ",(0,l.kt)("inlineCode",{parentName:"li"},'"verbose"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"debug"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"info"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"warn"')," or ",(0,l.kt)("inlineCode",{parentName:"li"},'"error"')," ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},'"info"'),"]"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bundles")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains configuration for bundles.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," A whitelist array of bundle names that will be the only ones loaded at startup. Cannot be used with ",(0,l.kt)("inlineCode",{parentName:"li"},"bundles.disabled"),". ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," -> this bundle whitelist feature is disabled -> load all bundles]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disabled")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," A blacklist array of bundle names that will not be loaded at startup. Cannot be used with ",(0,l.kt)("inlineCode",{parentName:"li"},"bundles.enabled"),". ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," -> no bundle blacklisted from loading / all bundles are loaded]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"paths")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," An array of additional ABSOLUTE paths where bundles are located. [DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]")," (empty array)]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"login")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains other configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable login security. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessionSecret")," ",(0,l.kt)("em",{parentName:"li"},"String")," The secret used to salt sessions. This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"forceHttpsReturn")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Forces Steam & Twitch login return URLs to use HTTPS instead of HTTP. Useful in reverse proxy setups. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"local")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains local username & password login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Local authentication. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedUsers")," ",(0,l.kt)("em",{parentName:"li"},"Array of objects")," Which usernames and passwords to allow. Example: ",(0,l.kt)("inlineCode",{parentName:"li"},'{"username": "admin", "password": "foo123"}'),". This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.local.enabled = true"),"! ","[NO DEFAULT!]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steam")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains steam login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Steam authentication. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apiKey")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Steam API Key. Obtained from ",(0,l.kt)("a",{parentName:"li",href:"http://steamcommunity.com/dev/apikey"},"http://steamcommunity.com/dev/apikey"),". This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.steam.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedIds")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which 64 bit Steam IDs to allow. Can be obtained from ",(0,l.kt)("a",{parentName:"li",href:"https://steamid.io/"},"https://steamid.io/"),". This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.steam.enabled = true"),"! ","[NO DEFAULT!]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"twitch")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains twitch login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Twitch authentication. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientID")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Twitch application ClientID ",(0,l.kt)("a",{parentName:"li",href:"http://twitch.tv/kraken/oauth2/clients/new"},"http://twitch.tv/kraken/oauth2/clients/new"),". This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.twitch.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Twitch application ClientSecret ",(0,l.kt)("a",{parentName:"li",href:"http://twitch.tv/kraken/oauth2/clients/new"},"http://twitch.tv/kraken/oauth2/clients/new"),". This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.twitch.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Note:")," Configure your Twitch OAuth credentials with a Redirect URI to ",(0,l.kt)("inlineCode",{parentName:"li"},"{baseURL}/login/auth/twitch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scope")," ",(0,l.kt)("em",{parentName:"li"},"String")," A space-separated string of Twitch application ",(0,l.kt)("a",{parentName:"li",href:"https://dev.twitch.tv/docs/authentication/#scopes"},"permissions"),". ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},'"user_read"'),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedUsernames")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which Twitch usernames to allow. Either this option or ",(0,l.kt)("inlineCode",{parentName:"li"},"allowedIds")," is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.twitch.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedIds")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which Twitch IDs to allow. Can be obtained from ",(0,l.kt)("a",{parentName:"li",href:"https://twitchinsights.net/checkuser"},"https://twitchinsights.net/checkuser"),". Either this option or ",(0,l.kt)("inlineCode",{parentName:"li"},"allowedUsernames")," is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.twitch.enabled = true"),"! ","[NO DEFAULT!]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"discord")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains discord login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Discord authentication. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientID")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Discord application ClientID  ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications/"},"https://discord.com/developers/applications/"),". This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.discord.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Discord application ClientSecret ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications/"},"https://discord.com/developers/applications/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Note:")," Configure your Discord OAuth credentials with a Redirect URI to ",(0,l.kt)("inlineCode",{parentName:"li"},"{baseURL}/login/auth/discord"),". This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.discord.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scope")," ",(0,l.kt)("em",{parentName:"li"},"String")," A space-separated string of Discord application ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes"},"permissions"),". ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},'"identify"'),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedUserIDs")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which Discord IDs to allow. Either this option or ",(0,l.kt)("inlineCode",{parentName:"li"},"allowedGuilds")," is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.discord.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedGuilds")," ",(0,l.kt)("em",{parentName:"li"},"Array of objects")," Which servers to allow users from. Either this option or ",(0,l.kt)("inlineCode",{parentName:"li"},"allowedUserIDs")," is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"login.discord.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},"Format for ",(0,l.kt)("inlineCode",{parentName:"li"},"allowedGuilds")," objects",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildID")," ",(0,l.kt)("em",{parentName:"li"},"String")," Users in this Discord Server are allowed to log in"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedRoleIDs")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Additionally require one of the roles on the server to log in"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildBotToken")," ",(0,l.kt)("em",{parentName:"li"},"String")," Discord bot token, needed if allowedRoleIDs is used ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications/"},"https://discord.com/developers/applications/")))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssl")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains HTTPS/SSL configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable SSL/HTTPS encryption. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowHTTP")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to allow insecure HTTP connections while SSL is active. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keyPath")," ",(0,l.kt)("em",{parentName:"li"},"String")," The path to an SSL key file. This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"ssl.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"certificatePath")," ",(0,l.kt)("em",{parentName:"li"},"String")," The path to an SSL certificate file. This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"ssl.enabled = true"),"! ","[NO DEFAULT!]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"passphrase")," ",(0,l.kt)("em",{parentName:"li"},"String")," The passphrase for the provided key file. ","[OPTIONAL]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sentry")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains ",(0,l.kt)("a",{parentName:"li",href:"https://sentry.io/welcome/"},"Sentry")," configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Sentry error reporting. ","[DEFAULT: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dsn")," ",(0,l.kt)("em",{parentName:"li"},"String")," Your Sentry API key for error reporting. This option is required when ",(0,l.kt)("inlineCode",{parentName:"li"},"sentry.enabled = true"),"! ","[NO DEFAULT!]")))),(0,l.kt)("h3",{id:"example"},"Example Config {#example}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="cfg/nodecg.js"',title:'"cfg/nodecg.js"'},"module.exports = {\n    host: '0.0.0.0',\n    port: 9090,\n    bundles: {\n        enabled: ['bundle-name'],\n        paths: ['C:\\\\nodecg\\\\experimental-bundles'],\n    },\n    login: {\n        enabled: true,\n        sessionSecret: 'supersecret',\n        steam: {\n            enabled: true,\n            apiKey: 'YYYYY',\n            allowedIds: ['11111111111111111', '22222222222222222'],\n        },\n        twitch: {\n            enabled: true,\n            clientID: 'your_app_id',\n            clientSecret: 'your_app_key',\n            scope: 'user_read',\n            allowedUsernames: ['some_username'],\n            allowedIds: ['11111111111111111', '22222222222222222'],\n        },\n        discord: {\n            enabled: true,\n            clientID: 'your_discord_app_client_id',\n            clientSecret: 'your_discord_app_client_secret',\n            scope: 'identify guilds',\n            allowedUserIDs: ['159600065017675778', '54561421005950976'],\n            allowedGuilds: [\n                {\n                    guildID: '754749209722486814',\n                    allowedRoleIDs: ['754751725457637546', '755012946400378910'],\n                    guildBotToken: 'your_bot_token',\n                },\n                {\n                    guildID: '754749209722486814',\n                },\n            ],\n        },\n    },\n    logging: {\n        console: {\n            enabled: true,\n            timestamps: false,\n            level: 'verbose',\n            replicants: false,\n        },\n        file: {\n            enabled: true,\n            timestamps: true,\n            path: 'logs/server.log',\n            level: 'info',\n            replicants: false,\n        },\n    },\n    ssl: {\n        enabled: false,\n        keyPath: '',\n        certificatePath: '',\n    },\n    sentry: {\n        enabled: true,\n        dsn: 'https://xxx:yyy@sentry.io/zzz',\n    },\n};\n")))}k.isMDXComponent=!0}}]);