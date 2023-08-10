"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),l=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(m,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96355:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const i={title:"Committer Guide",sidebar_position:5,description:"Apache ShenYu Committer's Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Committer"],date:new Date("2019-04-09T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},a=void 0,s={unversionedId:"committer",id:"committer",isDocsHomePage:!1,title:"Committer Guide",description:"Apache ShenYu Committer's Guide",source:"@site/community/5-committer.md",sourceDirName:".",slug:"/committer",permalink:"/community/committer",editUrl:"https://github.com/apache/shenyu-website/edit/main/community/5-committer.md",version:"current",lastUpdatedBy:"Kerwin Bryant",lastUpdatedAt:1691660602,formattedLastUpdatedAt:"8/10/2023",sidebarPosition:5,frontMatter:{title:"Committer Guide",sidebar_position:5,description:"Apache ShenYu Committer's Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Committer"],date:"2019-04-09T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Sign ICLA Guide",permalink:"/community/icla"},next:{title:"How to use Apache email",permalink:"/community/use-apache-email"}},m=[{value:"Committer Promotion",id:"committer-promotion",children:[]},{value:"Promotion process",id:"promotion-process",children:[]},{value:"Committer Responsibilities",id:"committer-responsibilities",children:[]},{value:"Pull Request",id:"pull-request",children:[]}],l={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"committer-promotion"},"Committer Promotion"),(0,r.kt)("p",null,"After you have made a lot of contributions, the community will nominate. Become a committer you will have"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Permissions written by Apache ShenYu repository"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/shop/eform/apache"},"jetbrains all"))),(0,r.kt)("h2",{id:"promotion-process"},"Promotion process"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Follow this ",(0,r.kt)("a",{parentName:"strong",href:"https://community.apache.org/newcommitter.html"},"Committer Guide")," to complete the vote")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Promotion Prepare. New Committer list all contributions to PMC member:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"### shenyu \uff08project name\uff09\n[total commits](https://github.com/apache/shenyu/commits?author=Nominee)\n> code++, code--\n\n- [ISSUE #xx] do something #pr\n\n### shenyu-website\n\n[total commits](https://github.com/apache/shenyu-website/commits?author=Nominee)\n> code++, code--\n\n- [ISSUE #xx] do something #pr\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vote new Committer list to ",(0,r.kt)("a",{parentName:"li",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Title : [VOTE] New committer: \uff08Nominee\uff09\nMain Text\uff1a\n\nHi, PMCs\n\nThis is a formal vote about inviting (Nominee) as our new committer.\n\n(Reason for nomination)\n\nThe vote will be open for at least 72 hours or until the necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n\n[ ] +0 no opinion\n\n[ ] -1 disapprove with the reason\n\nThe following links will direct you to Nominee work.\n\nlist Nominee all contributions\uff1a\n\n(Nominee Prepare)\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vote result list to ",(0,r.kt)("a",{parentName:"li",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Title [RESULT] [VOTE] New committer:(Nominee)\nMain Text\uff1a\nI am glad to receive your votes, and the voting result is[1],\n\uff08total number\uff09 +1 votes, (total number) +0 votes, \uff08total number\uff09-1 votes\n\n+1 PMC members name (PMC)\n\n[1]: vote thread refer to https://lists.apache.org/list?private@shenyu.apache.org\nTherefore, I will send the invitation to (Nominee).\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Invitation new Committer to Nominee email and copied to ",(0,r.kt)("a",{parentName:"li",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"),":",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"new committer need prepare an available email.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Title:Invitation to become apache shenyu committer (Nominee)\nMain Text\uff1a\n\nHello (Nominee),\n\nThe Apache ShenYu Project Management Committee (PMC) hereby\noffers you committer privileges to the project. These privileges are\noffered on the understanding that you'll use them reasonably and with\ncommon sense. We like to work on trust\nrather than unnecessary constraints.\nBeing a committer enables you to more easily make changes without\nneeding to go through the patch submission process.\nBeing a committer does not require you to participate any more than\nyou already do. It does tend to make one even more committed. You\nwill probably find that you spend more time here.\nOf course, you can decline and instead remain as a contributor,\nparticipating as you do now.\nA. This personal invitation is a chance for you to accept or decline\nin private. Either way, please let us know in reply to the\nprivate@shenyu.apache.org\naddress only.\nB. If you accept, the next step is to register an iCLA:\n1. Details of the iCLA and the forms are found through this link:\nhttp://www.apache.org/licenses/#clas\n\n2. Instructions for its completion and return to the Secretary of\nthe ASF are found at http://www.apache.org/licenses/#submitting\n\n3. When you transmit the completed iCLA, request to notify the\nApache shenyu and choose a unique Apache id. Look to see if your\npreferred id is already taken at\nhttp://people.apache.org/committer-index.html\nThis will allow the Secretary to notify the PMC when your iCLA has\nbeen recorded.\nWhen recording of your iCLA is noticed, you will receive a follow-up\nmessage with the next steps for establishing you as a committer.\n\nBest wishes,\nApache ShenYu PMC\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if new Committer accepted invitation, reply mail:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"New committer accepted invitation need copied to ",(0,r.kt)("a",{parentName:"p",href:"mailto:private@shenyu.apache.org"},"private@shenyu.apache.org"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi (Nominee),\n\nWelcome! Here are the next steps. After that we will make an\nannouncement to the shenyu-dev list.\n\nyou not need to submit iCLA again.\n\nYou need to send a Contributor License Agreement to the ASF. Normally\nyou would send an Individual CLA. If you also make contributions done\nin work time or using work resources then see the Corporate CLA. Ask\nus if you have any issues.\nhttp://www.apache.org/licenses/#clas\n\nYou need to choose a preferred ASF user name and alternatives. In\norder to ensure it is available you can view a list of taken ids at\nhttp://people.apache.org/committer-index.html\nPlease notify us when you have submitted the CLA and by what means you\ndid so. This will enable us to monitor its progress.\n\nWe will arrange for your Apache user account when the CLA has been recorded.\n\nAfter that is done, please make follow-up replies to the shenyu-dev\nlist. We generally discuss everything there and keep the\nprivate@shenyu.apache.org list for occasional matters which must be\nprivate.\n\nThe developer section of the website describes the roles and provides\nother resources:\nhttp://www.apache.org/foundation/how-it-works.html\nhttp://www.apache.org/dev/\n\nJust as before you became a committer, participation in any ASF\ncommunity requires adherence to the ASF Code of Conduct:\nhttps://www.apache.org/foundation/policies/conduct.html\n\nHere is the guideline for sign icla:\nhttps://shenyu.apache.org/community/icla\n\nHere is the guideline for all of the Apache ShenYu committers:\nhttps://shenyu.apache.org/community/committer\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If nominee have not signed the ICLA, Please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/community/icla/"},"ICLA Guide")," to complete the signing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If nominee have ever signed an ICLA, please provide request account like this:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Prospective userid:  \nFull name: \nForwarding email address(sign icla send eamil):\nWhat time to receive the reply signed by icla:\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Add the new committer to ",(0,r.kt)("a",{parentName:"strong",href:"https://whimsy.apache.org/roster/committee/shenyu"},"roster"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Complete the ",(0,r.kt)("a",{parentName:"strong",href:"https://gitbox.apache.org/setup/"},"GitBox Setup"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Enable GitHub two-factor authentication")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization"},"two-factor authentication")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. ANNOUNCE to ",(0,r.kt)("a",{parentName:"strong",href:"mailto:dev@shenyu.apache.org"},"dev@shenyu.apache.org"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Title: [ANNOUNCE] New committer: (Nominee)\nMain Text\uff1a\n\nThe Project Management Committee (PMC) for Apache ShenYu\nhas invited (Nominee) to become a committer and we are pleased to\nannounce that he has accepted.\n\n(Nominee) is active in the Apache ShenYu community, hope to see your\nfurther interactions with the community!\nThanks for your contributions.\nBest wishes!\n")),(0,r.kt)("h2",{id:"committer-responsibilities"},"Committer Responsibilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solving issue problems."),(0,r.kt)("li",{parentName:"ul"},"Mentoring contributors to the community.")),(0,r.kt)("h2",{id:"pull-request"},"Pull Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Give sound advice where possible."),(0,r.kt)("li",{parentName:"ul"},"AThe pull request should be marked ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu Lable")," and the schedule must be set."),(0,r.kt)("li",{parentName:"ul"},"Once the merge is complete, you need to check that the associated ",(0,r.kt)("inlineCode",{parentName:"li"},"issueNo")," is closed.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The content refers to")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://community.apache.org/newcommitter.html"},"https://community.apache.org/newcommitter.html")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization"},"https://docs.github.com/cn/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization")))}u.isMDXComponent=!0}}]);