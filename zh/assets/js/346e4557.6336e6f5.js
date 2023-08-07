"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[59229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15112:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"Kubernetes \u63a7\u5236\u5668\u914d\u7f6e",description:"Kubernetes \u63a7\u5236\u5668\u914d\u7f6e"},i=void 0,u={unversionedId:"user-guide/kubernetes-controller/config",id:"user-guide/kubernetes-controller/config",isDocsHomePage:!1,title:"Kubernetes \u63a7\u5236\u5668\u914d\u7f6e",description:"Kubernetes \u63a7\u5236\u5668\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/kubernetes-controller/config.md",sourceDirName:"user-guide/kubernetes-controller",slug:"/user-guide/kubernetes-controller/config",permalink:"/zh/docs/next/user-guide/kubernetes-controller/config",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/kubernetes-controller/config.md",version:"current",frontMatter:{title:"Kubernetes \u63a7\u5236\u5668\u914d\u7f6e",description:"Kubernetes \u63a7\u5236\u5668\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u6784\u5efa\u548c\u90e8\u7f72 Kubernetes \u63a7\u5236\u5668",permalink:"/zh/docs/next/user-guide/kubernetes-controller/build-deploy"},next:{title:"\u5ba2\u6237\u7aef\u6ce8\u518cAPI\u6587\u6863",permalink:"/zh/docs/next/user-guide/api-document-register"}},o=[{value:"\u5f00\u542f HTTPS",id:"\u5f00\u542f-https",children:[]},{value:"Ingress \u914d\u7f6e",id:"ingress-\u914d\u7f6e",children:[{value:"\u901a\u7528",id:"\u901a\u7528",children:[]},{value:"Divide \u63d2\u4ef6\uff08HTTP\u4ee3\u7406\uff09",id:"divide-\u63d2\u4ef6http\u4ee3\u7406",children:[]}]}],s={toc:o},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd Kubernetes \u63a7\u5236\u5668\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u5f00\u542f-https"},"\u5f00\u542f HTTPS"),(0,a.kt)("p",null,"\u5f00\u542f HTTPS \u9700\u8981\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"sni\u534f\u8bae")," \u7684\u76f8\u5173\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  netty:\n    http:\n      sni:\n        enabled: true\n        mod: k8s #k8s\u6a21\u5f0f\u9002\u7528\n        defaultK8sSecretNamespace: shenyu-ingress #\u9ed8\u8ba4secret\u8d44\u6e90\u7684namespace\n        defaultK8sSecretName: default-cert #\u9ed8\u8ba4secret\u8d44\u6e90\u540d\u5b57\n")),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c\u9ed8\u8ba4secret\u8d44\u6e90\u5fc5\u987b\u8981\u6709\uff0c\u4f46\u662f\u76ee\u524d\u4e0d\u4f1a\u5b9e\u9645\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"ingress-\u914d\u7f6e"},"Ingress \u914d\u7f6e"),(0,a.kt)("p",null,"ShenYu Kubernetes Controller \u5b9e\u73b0\u4e86 K8s \u539f\u751f\u7684 Ingress \u6807\u51c6\uff0c\u539f\u751f\u6807\u51c6\u7684\u4f7f\u7528\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"K8s \u5b98\u65b9\u6587\u6863")),(0,a.kt)("p",null,"\u53e6\u5916\uff0cApache ShenYu \u57fa\u4e8e Ingress \u7684 Annotation \u5b57\u6bb5\u8fdb\u884c\u4e86\u62d3\u5c55\uff0c\u914d\u7f6e\u89c1\u4e0b\u6587\u8868\u683c\uff1a"),(0,a.kt)("h3",{id:"\u901a\u7528"},"\u901a\u7528"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kubernetes.io/ingress.class"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u586bshenyu")))),(0,a.kt)("h3",{id:"divide-\u63d2\u4ef6http\u4ee3\u7406"},"Divide \u63d2\u4ef6\uff08HTTP\u4ee3\u7406\uff09"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/loadbalancer"),(0,a.kt)("td",{parentName:"tr",align:null},"random"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0c\u53ef\u9009hash\u3001random\u3001roundRobin\u3001leastActive\u3001p2c\u3001shortestResponse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/retry"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25\u91cd\u8bd5\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"3000"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/header-max-size"),(0,a.kt)("td",{parentName:"tr",align:null},"10240"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u5934\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4dbyte")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shenyu.apache.org/request-max-size"),(0,a.kt)("td",{parentName:"tr",align:null},"102400"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4dbyte")))))}c.isMDXComponent=!0}}]);