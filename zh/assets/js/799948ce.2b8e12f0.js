"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[95438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33607:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u793e\u533a\u65b0\u4eba\u5f00\u53d1\u8005\u542f\u52a8\u53ca\u5f00\u53d1\u9632\u8e29\u5751\u6307\u5357",author:"Yuxuan Zhang",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/zuobiao-zhou",author_image_url:"https://avatars.githubusercontent.com/u/61108539?s=400&u=f065b78a2944f2cea9160de7f7df054e2f157867&v=4",tags:["first-start","Apache ShenYu"]},p=void 0,l={permalink:"/zh/blog/Start-SourceCode-Analysis-Start-Demo-for-Contributor",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/Start-SourceCode-Analysis-Start-Demo-for-Contributor.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/Start-SourceCode-Analysis-Start-Demo-for-Contributor.md",title:"\u793e\u533a\u65b0\u4eba\u5f00\u53d1\u8005\u542f\u52a8\u53ca\u5f00\u53d1\u9632\u8e29\u5751\u6307\u5357",description:"\u524d\u8a00",date:"2024-01-06T13:07:43.979Z",formattedDate:"2024\u5e741\u67086\u65e5",tags:[{label:"first-start",permalink:"/zh/blog/tags/first-start"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:6.83,truncated:!1,prevItem:{title:"MatchStrategy--\u57fa\u4e8eSPI\u7684\u4ee3\u7801\u5206\u6790",permalink:"/zh/blog/SPI-SourceCode-Analysis-MatchStrategy-SPI"},nextItem:{title:"Apache ShenYu \u542f\u52a8\u793a\u4f8b",permalink:"/zh/blog/Start-SourceCode-Analysis-Start-Demo"}},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"ShenYu \u540e\u7aef\u542f\u52a8\u6307\u5357",id:"shenyu-\u540e\u7aef\u542f\u52a8\u6307\u5357",children:[{value:"\u5b89\u88c5\u5e76\u914d\u7f6eMaven",id:"\u5b89\u88c5\u5e76\u914d\u7f6emaven",children:[]},{value:"\u62c9\u53d6 ShenYu \u4ee3\u7801",id:"\u62c9\u53d6-shenyu-\u4ee3\u7801",children:[]},{value:"ShenYu \u521d\u542f\u52a8",id:"shenyu-\u521d\u542f\u52a8",children:[]},{value:"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6",id:"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6",children:[]}]},{value:"Shenyu \u524d\u7aef\u542f\u52a8\u6307\u5357",id:"shenyu-\u524d\u7aef\u542f\u52a8\u6307\u5357",children:[{value:"\u5b89\u88c5 Node.js",id:"\u5b89\u88c5-nodejs",children:[]},{value:"\u62c9\u53d6 ShenYu Dashboard \u4ee3\u7801",id:"\u62c9\u53d6-shenyu-dashboard-\u4ee3\u7801",children:[]},{value:"\u524d\u540e\u7aef\u8054\u5408\u5f00\u53d1",id:"\u524d\u540e\u7aef\u8054\u5408\u5f00\u53d1",children:[]},{value:"\u6253\u5305\u524d\u7aef\u4ee3\u7801",id:"\u6253\u5305\u524d\u7aef\u4ee3\u7801",children:[]}]},{value:"\u4e3a Shenyu \u5b98\u7f51\u505a\u8d21\u732e",id:"\u4e3a-shenyu-\u5b98\u7f51\u505a\u8d21\u732e",children:[{value:"\u5c0f\u8d34\u58eb",id:"\u5c0f\u8d34\u58eb",children:[]}]}],m={toc:o},s="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(s,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Shenyu")," \u793e\u533a\u521d\u6765\u4e4d\u5230\u7684\u5f00\u53d1\u8005\uff0c\u6211\u5728\u6309\u7167\u76f8\u5173\u6559\u7a0b\u8fdb\u884c\u9879\u76ee\u542f\u52a8\u53ca\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9047\u5230\u4e86\u4e00\u4e9b\u6559\u7a0b\u4e2d\u5e76\u672a\u63d0\u53ca\u5230\u7684 \u201c\u5751\u201d \uff0c \u6211\u5c06\u6211\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-dashboard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-website")," \u7684\u8be6\u7ec6\u6b65\u9aa4\u8bb0\u5f55\u5728\u8fd9\u7bc7\u535a\u5ba2\u4e2d\uff0c\u5e0c\u671b\u53ef\u4ee5\u5e2e\u5230\u793e\u533a\u4e2d\u66f4\u591a\u7684\u65b0\u4eba\u5f00\u53d1\u8005\u3002"),(0,r.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"li"},"JDK1.8+")),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Git")),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u6b3e\u5f00\u53d1\u5de5\u5177\uff0c\u672c\u6587\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"IDEA")," \u4e3a\u4f8b")),(0,r.kt)("h2",{id:"shenyu-\u540e\u7aef\u542f\u52a8\u6307\u5357"},"ShenYu \u540e\u7aef\u542f\u52a8\u6307\u5357"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u5e76\u914d\u7f6emaven"},"\u5b89\u88c5\u5e76\u914d\u7f6eMaven"),(0,r.kt)("p",null,"Maven\u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u9879\u76ee\u7ba1\u7406\u5de5\u5177\u3002\u4f5c\u4e3aApache\u7ec4\u7ec7\u9876\u7ea7\u5f00\u6e90\u9879\u76ee\uff0c\u5176\u4e3b\u8981\u670d\u52a1\u4e8e\u57fa\u4e8eJava\u5e73\u53f0\u7684\u9879\u76ee\u521b\u5efa\uff0c\u4f9d\u8d56\u7ba1\u7406\u548c\u9879\u76ee\u4fe1\u606f\u7ba1\u7406\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"\u4e0b\u8f7d maven"),"\uff0c\u5e76\u89e3\u538b\u5230\u4e00\u4e2a\u6ca1\u6709\u4e2d\u6587\u6ca1\u6709\u7a7a\u683c\u7684\u8def\u5f84\u4e0b\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(64362).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"maven")," \u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u6dfb\u52a0\u81f3\u73af\u5883\u53d8\u91cf\u4e2d\u3002\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows")," \u4e3a\u4f8b\uff0c\u82e5\u4e0b\u8f7d\u76ee\u5f55\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"E:\\apache-maven-3.9.1")," \uff0c\u5219\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"E:\\apache-maven-3.9.1\\bin")," \u6dfb\u52a0\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," \u7cfb\u7edf\u53d8\u91cf\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002\u5728\u547d\u4ee4\u884c\u7a97\u53e3\u4e2d\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn -v")," \uff0c\u82e5\u51fa\u73b0 Maven \u7248\u672c\u53ca Java \u7248\u672c\u5373\u4e3a\u5b89\u88c5\u6210\u529f\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'C:\\Users\\pc>mvn -v\nApache Maven 3.9.1 (2e178502fcdbffc201671fb2537d0cb4b4cc58f8)\nMaven home: E:\\apache-maven-3.9.1\nJava version: 18.0.1.1, vendor: Oracle Corporation, runtime: C:\\Program Files\\Java\\jdk-18.0.1.1\nDefault locale: zh_CN, platform encoding: UTF-8\nOS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u52a0\u5feb\u9879\u76ee\u76f8\u5173\u4f9d\u8d56\u7684\u4e0b\u8f7d\u901f\u5ea6\uff0c\u9700\u8981\u66f4\u6539 Maven \u955c\u50cf\uff0c\u6b64\u5904\u6dfb\u52a0\u963f\u91cc\u4e91\u7b49\u955c\u50cf\u3002\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/settings.xml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"<mirrors> </mirrors>")," \u6807\u7b7e\u5bf9\u66f4\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<mirrors>\n    <mirror>\n    <id>alimaven</id>\n    <name>aliyun maven</name>\n    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>\n    <mirrorOf>central</mirrorOf>\n    </mirror>\n\n    <mirror>\n    <id>alimaven</id>\n    <mirrorOf>central</mirrorOf>\n    <name>aliyun maven</name>\n    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>\n    </mirror>\n\n    <mirror>\n    <id>maven</id>\n    <mirrorOf>central</mirrorOf>\n    <name>name_</name>\n    <url>http://repo1.maven.org/maven2</url>\n    </mirror> \n\n    <mirror>\n    <id>junit</id>\n    <mirrorOf>central</mirrorOf>\n    <name>junit address/</name>\n    <url>http://jcenter.bintray.com/</url>\n    </mirror>\n</mirrors>\n")),(0,r.kt)("p",{parentName:"li"},"\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"</mirrors>")," \u4e0b\u4e00\u884c\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"<localRepository>E:/maven_local_repository</localRepository>"),"\u8bbe\u7f6e Maven \u672c\u5730\u4ed3\u5e93\u4f4d\u7f6e\u3002\u5177\u4f53\u4f4d\u7f6e\u53ef\u81ea\u884c\u6307\u5b9a\u3002"))),(0,r.kt)("h3",{id:"\u62c9\u53d6-shenyu-\u4ee3\u7801"},"\u62c9\u53d6 ShenYu \u4ee3\u7801"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 Github \u4e0a Fork ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu"},"ShenYu")," \u4ed3\u5e93\u5230\u81ea\u5df1\u7684\u5b58\u50a8\u5e93\u4e2d\uff0c\u4ee5\u540e\u53ef\u5728\u6b64\u4ed3\u5e93\u4e2d\u8fdb\u884c\u5f00\u53d1\u5e76\u63d0\u4ea4 PR")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Git \u5c06\u4e0a\u4e00\u6b65 Fork \u7684\u4ed3\u5e93\u4e0b\u8f7d\u5230\u672c\u5730\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:${YOUR_USERNAME}/${TARGET_REPO}.git\n")),(0,r.kt)("p",{parentName:"li"},"\u82e5\u63d0\u793a\u6587\u4ef6\u540d\u8fc7\u957f\uff0c\u5219\u901a\u8fc7\u547d\u4ee4\u884c\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global core.longpaths true\n")))),(0,r.kt)("h3",{id:"shenyu-\u521d\u542f\u52a8"},"ShenYu \u521d\u542f\u52a8"),(0,r.kt)("h4",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu")," \u76ee\u5f55\u4e0b\u4f7f\u7528 Maven \u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e IDEA \u73af\u5883\u3002\u4f7f\u7528 IDEA \u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu")," \u9879\u76ee\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2 ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," \uff0c\u6309\u7167\u4e0b\u56fe\u914d\u7f6e  Maven \u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"User settings file")," \u9009\u62e9\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.xml")," \u6240\u5728\u76ee\u5f55\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"Local repository")," \u4f1a\u81ea\u52a8\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.xml")," \u4e2d\u8bbe\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"localRepository")," \u8def\u5f84\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(78315).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6b64\u65f6\uff0cIDEA \u4f1a\u81ea\u52a8\u4e0b\u8f7d\u9879\u76ee\u76f8\u5173\u4f9d\u8d56\uff0c\u9700\u7b49\u5f85\u4e00\u4f1a\uff0c\u5b8c\u6210\u540e\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(60377).Z})),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u53d1\u73b0\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-e2e"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-examples"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-integrated-test")," \u6ca1\u6709\u88ab IDEA \u6807\u8bb0\u4e3a Maven \u9879\u76ee\uff0c\u9700\u624b\u52a8\u6dfb\u52a0\u3002\u5206\u522b\u9009\u4e2d\u5305\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\uff0c\u53f3\u952e\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Add as Maven Project")," \u3002\n\u82e5 shenyu-e2e \u6784\u5efa\u5931\u8d25\uff0c\u5219\u5c06\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"<relativePath>./pom.xml</relativePath>")," \u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"<relativePath/>")," \u3002"))),(0,r.kt)("h4",{id:"\u542f\u52a8\u7f51\u5173\u670d\u52a1"},"\u542f\u52a8\u7f51\u5173\u670d\u52a1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u63a7\u5236\u53f0\uff08\u9ed8\u8ba4\u4f7f\u7528H2\u6570\u636e\u5e93\uff09"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(52705).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(71914).Z})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5230\u8fd9\u4e00\u6b65\uff0cshenyu\u7f51\u5173\u5df2\u7ecf\u542f\u52a8\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8bbf\u95eeadmin\u63a7\u5236\u53f0\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9095/"},"http://localhost:9095/")),(0,r.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u8d26\u53f7\uff1aadmin \uff0c\u9ed8\u8ba4\u5bc6\u7801\uff1a123456")),(0,r.kt)("h4",{id:"\u542f\u52a8\u5e94\u7528\u670d\u52a1"},"\u542f\u52a8\u5e94\u7528\u670d\u52a1"),(0,r.kt)("p",null,"Apache ShenYu\u63d0\u4f9b\u4e86Http\u3001Dubbo\u3001SpringCloud\u7b49\u5e94\u7528\u63a5\u5165shenyu\u7f51\u5173\u7684\u6837\u4f8b\uff0c\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-example")," \u6a21\u5757\uff0c\u8fd9\u91cc\u4ee5Http\u670d\u52a1\u4e3a\u4f8b\u3002"),(0,r.kt)("p",null,"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37659).Z})),(0,r.kt)("p",null,"\u8fd9\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http")," \u4f1a\u81ea\u52a8\u628a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," \u6ce8\u89e3\u7684\u63a5\u53e3\u65b9\u6cd5\uff0c\u4ee5\u53caapplication.yml\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u6ce8\u518c\u5230\u7f51\u5173\u3002\u6211\u4eec\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9095/"},"admin\u63a7\u5236\u53f0"),"\uff0c\u5373\u53ef\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> Proxy -> divide")," \u4e2d\u770b\u5230\u76f8\u5173\u914d\u7f6e\u3002"),(0,r.kt)("h4",{id:"\u6d4b\u8bd5http\u8bf7\u6c42"},"\u6d4b\u8bd5Http\u8bf7\u6c42"),(0,r.kt)("p",null,"\u4e0b\u9762\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDEA HTTP Client Plugin")," \u6a21\u62df http \u7684\u65b9\u5f0f\u6765\u8bbf\u95ee http \u670d\u52a1\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u672c\u5730\u8bbf\u95ee\uff0c\u4e0d\u4f7f\u7528 shenyu \u4ee3\u7406"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:n(28208).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 shenyu \u4ee3\u7406"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:n(74483).Z})))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6"},"\u4f7f\u7528\u66f4\u591a\u63d2\u4ef6"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../docs/index"},"\u5b98\u65b9\u6587\u6863"),"\u5de6\u4fa7",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u96c6\u5408"),"\uff0c\u6765\u4f7f\u7528\u6240\u9700\u8981\u63d2\u4ef6\u3002"),(0,r.kt)("h2",{id:"shenyu-\u524d\u7aef\u542f\u52a8\u6307\u5357"},"Shenyu \u524d\u7aef\u542f\u52a8\u6307\u5357"),(0,r.kt)("h3",{id:"\u5b89\u88c5-nodejs"},"\u5b89\u88c5 Node.js"),(0,r.kt)("h4",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"\u5b98\u7f51"),"\u4e0b\u8f7d\u5e76\u5b89\u88c5Node.js \uff0c\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"LTS")," \u7248\u672c\u5373\u53ef")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u65f6\uff0c\u9664\u4e86\u8bbe\u7f6e\u5b89\u88c5\u8def\u5f84\uff0c\u5176\u4ed6\u4e00\u76f4\u70b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Next")," \u5373\u53ef")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5728\u547d\u4ee4\u884c\u4e2d\u8fdb\u884c\u9a8c\u8bc1\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\Users\\pc>node -v\nv12.22.12\n\nC:\\Users\\pc>npm -v\n6.14.16\n")))),(0,r.kt)("h4",{id:"\u6362\u6e90"},"\u6362\u6e90"),(0,r.kt)("p",null,"\u4e3a\u4e86\u52a0\u5feb npm \u4e0b\u8f7d\u901f\u5ea6\uff0c\u9700\u8981\u8fdb\u884c\u6362\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u5f53\u524d\u6e90\nnpm config get registry\n# \u6362\u4e3a\u4e2d\u56fd npmmirror \u955c\u50cf\u6e90\nnpm config set registry https://registry.npmmirror.com\n# \u67e5\u770b\u662f\u5426\u6362\u6e90\u6210\u529f\nnpm config get registry\n")),(0,r.kt)("h3",{id:"\u62c9\u53d6-shenyu-dashboard-\u4ee3\u7801"},"\u62c9\u53d6 ShenYu Dashboard \u4ee3\u7801"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fork ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-dashboard"},"ShenYu Dashboard")," \u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Git \u4e0b\u8f7d\u5230\u672c\u5730\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:${YOUR_USERNAME}/${TARGET_REPO}.git\n")))),(0,r.kt)("h3",{id:"\u524d\u540e\u7aef\u8054\u5408\u5f00\u53d1"},"\u524d\u540e\u7aef\u8054\u5408\u5f00\u53d1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u540e\u7aef\u4ed3\u5e93 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin/src/main/resources/application.yml")," \u6587\u4ef6\u4e2d\u6309\u4e0b\u56fe\u6240\u793a\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"enablePrintApiLog: true")," \uff0c\u4ee5\u5728\u540e\u7aef\u63a7\u5236\u53f0\u663e\u793a\u524d\u7aef\u63a5\u53e3\u88ab\u8c03\u7528\u7684\u65e5\u5fd7\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(88718).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuAdminBootstrap"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5207\u6362\u81f3\u524d\u7aef\u4ed3\u5e93 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-dashboard")," \uff0c\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," \uff0c\u4f9d\u6b21\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," \u6216\u901a\u8fc7\u547d\u4ee4\u884c\u8f93\u5165\u4e0a\u8ff0\u547d\u4ee4\u5373\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")," \u8bbf\u95ee\u524d\u7aef\u754c\u9762\uff0c\u5e76\u53ef\u5728\u540e\u7aef\u63a7\u5236\u53f0\u4e2d\u663e\u793a\u524d\u7aef\u63a5\u53e3\u88ab\u8c03\u7528\u7684\u65e5\u5fd7\uff0c\u5b9e\u73b0\u524d\u540e\u7aef\u8054\u5408\u5f00\u53d1\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(88505).Z})))),(0,r.kt)("h3",{id:"\u6253\u5305\u524d\u7aef\u4ee3\u7801"},"\u6253\u5305\u524d\u7aef\u4ee3\u7801"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"npm build")," \u547d\u4ee4\uff0c\u5e76\u5c06 dist \u6587\u4ef6\u5939\u4e0b\u751f\u6210\u7684\u6240\u6709\u6587\u4ef6\u590d\u5236\u5230\u540e\u7aef\u4ed3\u5e93\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin/src/main/resources/static/")," \u76ee\u5f55\u4e0b\u3002"),(0,r.kt)("h2",{id:"\u4e3a-shenyu-\u5b98\u7f51\u505a\u8d21\u732e"},"\u4e3a Shenyu \u5b98\u7f51\u505a\u8d21\u732e"),(0,r.kt)("p",null,"\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-website"},"shenyu-website")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," \u8fdb\u884c\u64cd\u4f5c\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"\u5c0f\u8d34\u58eb"},"\u5c0f\u8d34\u58eb"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," \u8fdb\u884c\u6362\u6e90\uff0c\u6d41\u7a0b\u540c ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")),(0,r.kt)("li",{parentName:"ol"},"\u5efa\u8bae\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"li"},"Node")," ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"\u5b98\u7f51"),"\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"LTS")," \u7248\u672c"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Windows")," \u7cfb\u7edf\u65e0\u6cd5\u8fdb\u884c\u90e8\u7f72\uff0c\u5982\u9700\u5bf9\u4f60\u7684\u66f4\u6539\u8fdb\u884c\u9a8c\u8bc1\uff0c\u53ef\u4ee5\u5728Linux \u865a\u62df\u673a\u6216\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u90e8\u7f72")))}d.isMDXComponent=!0},88505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/admin-log-37289f14905e15906d363c0345b797cb.png"},52705:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/admin-debdd1ee5e979a4892f26e4d54572ead.png"},71914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bootstrap-cafa4d22b0d69bb6ee82c01e7b45d239.png"},88718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-api-log-b7eedec55079ce1ef7b96e3076f46841.png"},78315:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/idea-config-eab162e57c60c188ae39b46d08d17d0a.png"},64362:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/maven-install-1810a86409d255c485e91852e679baad.png"},60377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-without-example-0a8dc1e81a325b6ce56328b3d282325d.png"},37659:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shenyu-examples-http-16e2cd3166eb89067d20ab76fbd2000a.png"},28208:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shenyu-http-test-api-local-0769bf0aa49ba1d1bf19781429c0311b.png"},74483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shenyu-http-test-api-b3f37741aee04845e891179e8eb6a137.png"}}]);