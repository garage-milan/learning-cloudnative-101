(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),c=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,b=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),x=a("dI71"),v=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,b=new RegExp(n+"/?(#.*)?$"),l=a.replace(b,o);return Object(m.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(m.b)(c.Link,{className:v.link,to:""+l},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},o))))))},t}(o.a.Component),N=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,p=s.tabs,j=s.title,x=s.theme,v=s.description,T=s.keywords,k=Object(y.a)().interiorTheme,w=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=w?n.pathname.replace(w,""):n.pathname,C=p?P.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",I=x||k;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:I,pageTitle:j,pageDescription:v,pageKeywords:T,titleType:u},Object(m.b)(h,{title:o?Object(m.b)(o,null):j,label:"label",tabs:p,theme:I}),p&&Object(m.b)(f,{slug:P,tabs:p,currentTab:C}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(g.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:C}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xjyh:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n,o=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:b},d=c.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(d,Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Problem"),Object(r.b)("p",null,"This service has already been packaged into a container image, but there is one special requirement:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The legacy app is hard-coded to only serve content on port ",Object(r.b)("inlineCode",{parentName:"li"},"8989"),", but the team wants to be able to access the service using the standard port ",Object(r.b)("inlineCode",{parentName:"li"},"80"),".")),Object(r.b)("p",null,"Your task is to build a Kubernetes pod that runs this legacy container and uses the ambassador design pattern to expose access to the service on port ",Object(r.b)("inlineCode",{parentName:"p"},"80"),"."),Object(r.b)("p",null,"This setup will need to meet the following specifications:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The pod should have the name ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service")," pod should have a container that runs the legacy vader service image: ",Object(r.b)("inlineCode",{parentName:"li"},"ibmcase/millennium-falcon:1"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service")," pod should have an ambassador container that runs the ",Object(r.b)("inlineCode",{parentName:"li"},"haproxy:1.7")," image and proxies incoming traffic on port ",Object(r.b)("inlineCode",{parentName:"li"},"80")," to the legacy service on port ",Object(r.b)("inlineCode",{parentName:"li"},"8989")," (the HAProxy configuration for this is provided below)."),Object(r.b)("li",{parentName:"ul"},"Port ",Object(r.b)("inlineCode",{parentName:"li"},"80")," should be exposed as a ",Object(r.b)("inlineCode",{parentName:"li"},"containerPort"),".")),Object(r.b)(l,{mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": You do not need to expose port 8989")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The HAProxy configuration should be stored in a ConfigMap called ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service-ambassador-config"),"."),Object(r.b)("li",{parentName:"ul"},"The HAProxy config should be provided to the ambassador container using a volume mount that places the data from the ConfigMap in a file at /usr/local/etc/haproxy/haproxy.cfg.\nhaproxy.cfg should contain the following configuration data:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"global\n    daemon\n    maxconn 256\n\ndefaults\n    mode http\n    timeout connect 5000ms\n    timeout client 50000ms\n    timeout server 50000ms\n\nlisten http-in\n    bind *:80\n    server server1 127.0.0.1:8989 maxconn 32\n")),Object(r.b)("p",null,"Once your pod is up and running, it’s a good idea to test it to make sure you can access the service from within the cluster using port 80. In order to do this, you can create a busybox pod in the cluster, and then run a command to attempt to access the service from within the busybox pod."),Object(r.b)("p",null,"Create a descriptor for the busybox pod called ",Object(r.b)("inlineCode",{parentName:"p"},"busybox.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\nspec:\n  containers:\n  - name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")),Object(r.b)("p",null,"Create the busybox testing pod."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f busybox.yml\n")),Object(r.b)("p",null,"Use this command to access ",Object(r.b)("inlineCode",{parentName:"p"},"vader-service")," using port 80 from within the busybox pod."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl exec busybox -- curl $(kubectl get pod vader-service -o=custom-columns=IP:.status.podIP --no-headers):80\n")),Object(r.b)("p",null,"If the service is working, you should get a message that the hyper drive of the millennium falcon needs repair."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Relevant Documentation:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent"}),"Kubernetes Sidecar Logging Agent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/"}),"Shared Volumes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"}),"Distributed System Toolkit Patterns"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-3-index-mdx-a51746878ddcda6f1f58.js.map