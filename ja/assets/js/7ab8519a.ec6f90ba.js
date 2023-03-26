"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[265],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"nodecg-configuration",title:"NodeCG Configuration",sidebar_label:"Configuration"},p=void 0,m={unversionedId:"nodecg-configuration",id:"nodecg-configuration",title:"NodeCG Configuration",description:"NodeCG is configured via a cfg/nodecg.js, cfg/nodecg.yaml, or cfg/nodecg.json file with the following schema:",source:"@site/docs/nodecg-configuration.md",sourceDirName:".",slug:"/nodecg-configuration",permalink:"/ja/docs/nodecg-configuration",draft:!1,editUrl:"https://github.com/nodecg/docs/edit/master/docs/nodecg-configuration.md",tags:[],version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1679792686,formattedLastUpdatedAt:"2023\u5e743\u670826\u65e5",frontMatter:{id:"nodecg-configuration",title:"NodeCG Configuration",sidebar_label:"Configuration"},sidebar:"mainSidebar",previous:{title:"Manifest",permalink:"/ja/docs/manifest"},next:{title:"Node Dependencies",permalink:"/ja/docs/using-npm"}},s={},d=[{value:"Schema",id:"schema",level:3},{value:"Example Config {#example}",id:"example",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NodeCG is configured via a ",(0,l.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.js"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.yaml"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"cfg/nodecg.json")," file with the following schema:"),(0,l.kt)("h3",{id:"schema"},"Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host")," ",(0,l.kt)("em",{parentName:"li"},"String")," The IP address or hostname that NodeCG should bind to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"port")," ",(0,l.kt)("em",{parentName:"li"},"Integer")," The port that NodeCG should listen on."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"baseURL")," ",(0,l.kt)("em",{parentName:"li"},"String")," The URL of this instance. Used for things like cookies. Defaults to HOST:PORT. If you use a reverse proxy, you'll likely need to set this value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"developer")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable features that speed up development. Not suitable for production."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exitOnUncaught")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether or not to exit on uncaught exceptions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logging")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains other configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"console")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains properties for console logging.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable console logging."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replicants")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable logging of the Replicants subsystem. Very spammy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamps")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to add timestamps to the console logging."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," ",(0,l.kt)("em",{parentName:"li"},"String")," Lowest importance of messages which should be logged. Must be ",(0,l.kt)("inlineCode",{parentName:"li"},'"trace"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"debug"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"info"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"warn"')," or ",(0,l.kt)("inlineCode",{parentName:"li"},'"error"')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains properties for file logging.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable file logging."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replicants")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable logging of the Replicants subsystem. Very spammy."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamps")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to add timestamps to the file logging."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," ",(0,l.kt)("em",{parentName:"li"},"String")," The filepath to log to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," ",(0,l.kt)("em",{parentName:"li"},"String")," Lowest importance of messages which should be logged. Must be ",(0,l.kt)("inlineCode",{parentName:"li"},'"trace"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"debug"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"info"'),", ",(0,l.kt)("inlineCode",{parentName:"li"},'"warn"')," or ",(0,l.kt)("inlineCode",{parentName:"li"},'"error"')))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bundles")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains configuration for bundles.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," A whitelist array of bundle names that will be the only ones loaded at startup. Cannot be used with ",(0,l.kt)("inlineCode",{parentName:"li"},"bundles.disabled"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disabled")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," A blacklist array of bundle names that will not be loaded at startup. Cannot be used with ",(0,l.kt)("inlineCode",{parentName:"li"},"bundles.enabled"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"paths")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," An array of additional paths where bundles are located."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"login")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains other configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable login security."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessionSecret")," ",(0,l.kt)("em",{parentName:"li"},"String")," The secret used to salt sessions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"forceHttpsReturn")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," orces Steam & Twitch login return URLs to use HTTPS instead of HTTP. Useful in reverse proxy setups."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"local")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains local username & password login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Local authentication."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedUsers")," ",(0,l.kt)("em",{parentName:"li"},"Array of objects")," Which usernames and passwords to allow. Example: ",(0,l.kt)("inlineCode",{parentName:"li"},'{"username": "admin", "password": "foo123"}')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"steam")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains steam login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Steam authentication."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apiKey")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Steam API Key. Obtained from ",(0,l.kt)("a",{parentName:"li",href:"http://steamcommunity.com/dev/apikey"},"http://steamcommunity.com/dev/apikey")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedIds")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which 64 bit Steam IDs to allow. Can be obtained from ",(0,l.kt)("a",{parentName:"li",href:"https://steamid.io/"},"https://steamid.io/")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"twitch")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains twitch login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Twitch authentication."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientID")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Twitch application ClientID ",(0,l.kt)("a",{parentName:"li",href:"http://twitch.tv/kraken/oauth2/clients/new"},"http://twitch.tv/kraken/oauth2/clients/new")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Twitch application ClientSecret ",(0,l.kt)("a",{parentName:"li",href:"http://twitch.tv/kraken/oauth2/clients/new"},"http://twitch.tv/kraken/oauth2/clients/new")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Note:")," Configure your Twitch OAuth credentials with a Redirect URI to ",(0,l.kt)("inlineCode",{parentName:"li"},"{baseURL}/login/auth/twitch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scope")," ",(0,l.kt)("em",{parentName:"li"},"String")," A space-separated string of Twitch application ",(0,l.kt)("a",{parentName:"li",href:"https://dev.twitch.tv/docs/authentication/#scopes"},"permissions"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedUsernames")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which Twitch usernames to allow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedIds")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which Twitch IDs to allow. Can be obtained from ",(0,l.kt)("a",{parentName:"li",href:"https://twitchinsights.net/checkuser"},"https://twitchinsights.net/checkuser")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"discord")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains discord login configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Discord authentication."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientID")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Discord application ClientID  ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications/"},"https://discord.com/developers/applications/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientSecret")," ",(0,l.kt)("em",{parentName:"li"},"String")," A Discord application ClientSecret ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications/"},"https://discord.com/developers/applications/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Note:")," Configure your Discord OAuth credentials with a Redirect URI to ",(0,l.kt)("inlineCode",{parentName:"li"},"{baseURL}/login/auth/discord")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scope")," ",(0,l.kt)("em",{parentName:"li"},"String")," A space-separated string of Discord application ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes"},"permissions"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedUserIDs")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Which Discord IDs to allow"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedGuilds")," ",(0,l.kt)("em",{parentName:"li"},"Array of objects")," Which servers to allow users from"),(0,l.kt)("li",{parentName:"ul"},"Format for ",(0,l.kt)("inlineCode",{parentName:"li"},"allowedGuilds")," objects",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildID")," ",(0,l.kt)("em",{parentName:"li"},"String")," Users in this Discord Server are allowed to log in"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowedRoleIDs")," ",(0,l.kt)("em",{parentName:"li"},"Array of strings")," Additionally require one of the roles on the server to log in"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildBotToken")," ",(0,l.kt)("em",{parentName:"li"},"String")," Discord bot token, needed if allowedRoleIDs is used ",(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications/"},"https://discord.com/developers/applications/")))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssl")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains HTTPS/SSL configuration properties.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable SSL/HTTPS encryption."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allowHTTP")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to allow insecure HTTP connections while SSL is active."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keyPath")," ",(0,l.kt)("em",{parentName:"li"},"String")," The path to an SSL key file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"certificatePath")," ",(0,l.kt)("em",{parentName:"li"},"String")," The path to an SSL certificate file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"passphrase")," ",(0,l.kt)("em",{parentName:"li"},"String")," The passphrase for the provided key file."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sentry")," ",(0,l.kt)("em",{parentName:"li"},"Object")," Contains ",(0,l.kt)("a",{parentName:"li",href:"https://sentry.io/welcome/"},"Sentry")," configuration properties. - ",(0,l.kt)("inlineCode",{parentName:"li"},"enabled")," ",(0,l.kt)("em",{parentName:"li"},"Boolean")," Whether to enable Sentry error reporting. - ",(0,l.kt)("inlineCode",{parentName:"li"},"dsn")," ",(0,l.kt)("em",{parentName:"li"},"String")," Your private DSN, for server-side error reporting. - ",(0,l.kt)("inlineCode",{parentName:"li"},"publicDsn")," ",(0,l.kt)("em",{parentName:"li"},"String")," Your public sentry DSN, for browser error reporting.")),(0,l.kt)("h3",{id:"example"},"Example Config {#example}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// cfg/nodecg.js\nmodule.exports = {\n    host: '0.0.0.0',\n    port: 9090,\n    developer: false,\n    bundles: {\n        enabled: ['bundle-name'],\n        paths: ['C:\\\\nodecg\\\\experimental-bundles'],\n    },\n    login: {\n        enabled: true,\n        sessionSecret: 'supersecret',\n        steam: {\n            enabled: true,\n            apiKey: 'YYYYY',\n            allowedIds: ['11111111111111111', '22222222222222222'],\n        },\n        twitch: {\n            enabled: true,\n            clientID: 'your_app_id',\n            clientSecret: 'your_app_key',\n            scope: 'user_read',\n            allowedUsernames: ['some_username'],\n            allowedIds: ['11111111111111111', '22222222222222222'],\n        },\n        discord: {\n            enabled: true,\n            clientID: 'your_discord_app_client_id',\n            clientSecret: 'your_discord_app_client_secret',\n            scope: 'identify guilds',\n            allowedUserIDs: ['159600065017675778', '54561421005950976'],\n            allowedGuilds: [\n                {\n                    guildID: '754749209722486814',\n                    allowedRoleIDs: ['754751725457637546', '755012946400378910'],\n                    guildBotToken: 'your_bot_token',\n                },\n                {\n                    guildID: '754749209722486814',\n                },\n            ],\n        },\n        logging: {\n            console: {\n                enabled: true,\n                timestamps: false,\n                level: 'verbose',\n                replicants: false,\n            },\n            file: {\n                enabled: true,\n                timestamps: true,\n                path: 'logs/server.log',\n                level: 'info',\n                replicants: false,\n            },\n        },\n        ssl: {\n            enabled: false,\n            keyPath: '',\n            certificatePath: '',\n        },\n        sentry: {\n            enabled: true,\n            dsn: 'https://xxx:yyy@sentry.io/zzz',\n        },\n    },\n};\n")))}u.isMDXComponent=!0}}]);