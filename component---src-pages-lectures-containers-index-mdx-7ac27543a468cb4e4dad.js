(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),b=n.n(a),l=n("NmYn"),r=n.n(l),c=n("Wbzz"),i=n("Xrax"),o=n("k4MR"),d=n("TSYQ"),u=n.n(d),s=n("QH2O"),O=n.n(s),j=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,b=e.tabs,l=void 0===b?[]:b;return Object(j.b)("div",{className:u()(O.a.pageHeader,(t={},t[O.a.withTabs]=l.length,t[O.a.darkMode]="dark"===a,t))},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12"},Object(j.b)("h1",{id:"page-title",className:O.a.text},n)))))},p=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,b=n||a,l=b.baseUrl,r=b.subDirectory,i=l+"/edit/"+b.branch+r+"/src/pages"+t;return l?Object(j.b)("div",{className:"bx--row "+p.row},Object(j.b)("div",{className:"bx--col"},Object(j.b)("a",{className:p.link,href:i},"Edit this page on GitHub"))):null},h=n("FCXl"),N=n("dI71"),k=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=r()(e,{lower:!0,strict:!0}),l=b===a,i=new RegExp(a+"/?(#.*)?$"),o=n.replace(i,b);return Object(j.b)("li",{key:e,className:u()((t={},t[k.selectedItem]=l,t),k.listItem)},Object(j.b)(c.Link,{className:k.link,to:""+o},e))}));return Object(j.b)("div",{className:k.tabsContainer},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(j.b)("nav",null,Object(j.b)("ul",{className:k.list},b))))))},t}(b.a.Component),y=n("MjG9"),w=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,b=e.Title,l=t.frontmatter,d=void 0===l?{}:l,u=t.relativePagePath,s=t.titleType,O=d.tabs,p=d.title,N=d.theme,k=d.description,f=d.keywords,v=Object(w.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,T=C?a.pathname.replace(C,""):a.pathname,I=O?T.split("/").filter(Boolean).slice(-1)[0]||r()(O[0],{lower:!0}):"",D=N||v;return Object(j.b)(o.a,{tabs:O,homepage:!1,theme:D,pageTitle:p,pageDescription:k,pageKeywords:f,titleType:s},Object(j.b)(m,{title:b?Object(j.b)(b,null):p,label:"label",tabs:O,theme:D}),O&&Object(j.b)(x,{slug:T,tabs:O,currentTab:I}),Object(j.b)(y.a,{padded:!0},n,Object(j.b)(g,{relativePagePath:u})),Object(j.b)(h.a,{pageContext:t,location:a,slug:T,tabs:O,currentTab:I}),Object(j.b)(i.a,null))}},"5S1X":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n("wx14"),b=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("013z"),c=(n("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},o=i("MiniCard"),d=i("Accordion"),u=i("AccordionItem"),s=i("InlineNotification"),O={_frontmatter:c},j=r.a;function m(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Containers"),Object(l.b)("p",null,"Containers are a standard way to package an application and all its dependencies so that it can be moved between environments and run without change. They work by hiding the differences between applications inside the container so that everything outside the container can be standardized."),Object(l.b)("p",null,"For example, Docker created standard way to create images for Linux Containers."),Object(l.b)("h2",null,"Resources"),Object(l.b)(o,{title:"Container Basics Presentation",href:"/slides/02-Containers-Basics.pdf",mdxType:"MiniCard"}),Object(l.b)("h2",null,"Basic Docker Commands"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Action"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Command"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Get Docker version"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"docker version"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Run ",Object(l.b)("inlineCode",{parentName:"td"},"hello-world")," Container"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"docker run hello-world"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"List Running Containers"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"docker ps"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Stop a container"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"docker stop <container-name/container-id>"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"List Docker Images"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"}," docker images"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Login into registry"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"docker login"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Build an image"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"docker build <image_name>:<tag> ."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inspect a docker object"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"}," docker inspect <name/id>"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inspect a docker image"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"}," docker inspect image <name/id>"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pull an image"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"}," docker pull <image_name>:<tag>"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Push an Image"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"}," docker push <image_name>:<tag>"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Remove a container"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"}," docker rm <container-name/container-id>"))))),Object(l.b)("h2",null,"Running Docker on Kubernetes"),Object(l.b)("ol",null,Object(l.b)("li",null,"Make sure you are logged in to your Kubernetes cluster through a terminal or IBM Cloud Shell."),Object(l.b)("li",null,"Next, we need to apply the yaml file for the Docker in Docker pod.",Object(l.b)("code",null,"kubectl apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/containers/dind.yaml")),Object(l.b)("li",null,"Then, we need to bash into the running pod.",Object(l.b)("code",null,"kubectl exec -it dind bash")),Object(l.b)("li",null,"Finally check to make sure you can run docker commands, such as ",Object(l.b)("strong",null,Object(l.b)("em",null,"docker version")))),Object(l.b)("h2",null,"Docker Lecture Walkthroughs"),Object(l.b)(d,{mdxType:"Accordion"},Object(l.b)(u,{title:"Verify Docker Installation",mdxType:"AccordionItem"},Object(l.b)("ol",null,Object(l.b)("li",null,"Check the Docker Version",Object(l.b)("code",null,"docker version")),Object(l.b)("li",null,"Run the `hello-world` container",Object(l.b)("code",null,"docker run hello-world"),Object(l.b)(s,{mdxType:"InlineNotification"},"Notice: If it is not already on your machine, it will be downloaded automatically.")),Object(l.b)("li",null,"Check the output:",Object(l.b)("blockquote",null,"Hello from Docker! ",Object(l.b)("br",null),"This message shows that your installation appears to be working correctly!....")))),Object(l.b)(u,{title:"Running a Basic Container",mdxType:"AccordionItem"},Object(l.b)("ol",null,Object(l.b)("li",null,"Start and nginx container and name it `nginx`.",Object(l.b)("code",null,"docker run --rm -d --name nginx -p 8080:8080 bitnami/nginx")),Object(l.b)("li",null,"Check to see if the container is running",Object(l.b)("code",null,"docker ps")),Object(l.b)("li",null,"Bash into the running nginx container",Object(l.b)("code",null,"docker exec -it nginx bash")),Object(l.b)("li",null,"Accessing the running nginx container",Object(l.b)("code",null,"curl http://localhost:8080")),Object(l.b)("li",null,"Stopping the nginx container",Object(l.b)("code",null,"docker stop nginx")))),Object(l.b)(u,{title:"Building and Running a Docker Image",mdxType:"AccordionItem"},Object(l.b)("ol",null,Object(l.b)("li",null,"Let's start by creating a directory named ",Object(l.b)("strong",null,Object(l.b)("em",null,"assets"))," and add an ",Object(l.b)("strong",null,Object(l.b)("em",null,"index.html"))," file to it. ",Object(l.b)("br",null),Object(l.b)("code",null,'mkdir -p assets; echo "Welcome to the Cloud Native BootCamp" > assets/index.html; cd assets')),Object(l.b)("li",null,"Download the sample ",Object(l.b)("strong",null,Object(l.b)("em",null,"Dockerfile"))," into the ",Object(l.b)("strong",null,Object(l.b)("em",null,"assets"))," directory.",Object(l.b)("code",null,"wget https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/containers/Dockerfile")),Object(l.b)("li",null,"Build the docker image and name it ",Object(l.b)("strong",null,Object(l.b)("em",null,"webserver"))," with a tag of ",Object(l.b)("strong",null,Object(l.b)("em",null,"1.0")),".",Object(l.b)("code",null,"docker build -t webserver:1.0 .")),Object(l.b)("li",null,"Run the new image in a container.",Object(l.b)("code",null,"docker run --rm -d -p 8000:8080 webserver:1.0")),Object(l.b)("li",null,"Access the new container",Object(l.b)("code",null,"curl http://localhost:8000")))),Object(l.b)(u,{title:"Pushing to a Container Registry",mdxType:"AccordionItem"},Object(l.b)("ol",null,Object(l.b)("li",null,"Login to Docker Hub using YOUR created username and password.",Object(l.b)("code",null,"docker login -u USERNAME  -p PASSWORD")),Object(l.b)("li",null,"Tag the docker image with docker hub username",Object(l.b)("code",null,"docker tag webserver:1.0 USERNAME/webserver:1.0")),Object(l.b)("li",null,"Push the image to the registry",Object(l.b)("code",null,"docker push USERNAME/webserver:1.0")),Object(l.b)("li",null,"Run the new image",Object(l.b)("code",null,"docker run --rm -p 8000:8080 USERNAME/webserver:1.0")),Object(l.b)("li",null,"You can also pull down other images from other users.",Object(l.b)("code",null,"docker pull USERNAME/webserver:1.0")))),Object(l.b)(u,{title:"Adding Environment Variables for your Container.",mdxType:"AccordionItem"},Object(l.b)("ol",null,Object(l.b)("li",null,"Create a Docker file",Object(l.b)("code",null,"docker run --rm --name nginx -e USERNAME=Carlos -e PASSWORD=IlikeYAML -e LOG_LEVEL=ERROR -p 8080:8080 bitnami/nginx")),Object(l.b)("li",null,"Create a Docker file",Object(l.b)("code",null,"docker exec -it nginx sh -c \"env | grep 'USERNAME\\|PASSWORD\\|LOG_LEVEL'\"")))),Object(l.b)(u,{title:"Running a Container with a Mounted Volume",mdxType:"AccordionItem"},Object(l.b)("ol",null,Object(l.b)("li",null,"Run the image with a volume attached.",Object(l.b)("code",null,"docker run --rm --name nginx -p 8080:8080 -v $PWD/assets:/app bitnami/nginx"))))),Object(l.b)("h2",null,"Activities"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Task"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Link"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Time"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"What is a Container?"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A look under the the covers at what is a Linux Container?"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container",target:"_blank"},"Understand Containers")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10 min")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"What is an Image?"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A look under the the covers at what is a Linux Container Image?"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container-image",target:"_blank"},"Container Images")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10 min")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Docker Basics"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Set of walkthroughs that cover docker basics"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",{href:"https://www.katacoda.com/courses/docker",target:"_blank"},"Docker Basics")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10 min")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IBM Container Registry"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Build and Deploy Run using IBM Container Registry"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"./activities/ibmcloud-cr"}),"IBM Container Registry")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"30 min")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Docker Lab"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Running a Sample Application on Docker"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"./activities/"}),"Docker Lab")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"30 min")))),Object(l.b)("p",null,"Once you have completed these tasks, you should have a base understanding of containers and how to use Docker."))}m.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-containers-index-mdx-7ac27543a468cb4e4dad.js.map