(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("NmYn"),o=n.n(r),b=n("Wbzz"),s=n("Xrax"),i=n("k4MR"),l=n("TSYQ"),m=n.n(l),p=n("QH2O"),u=n.n(p),d=n("qKvR"),O=function(e){var t,n=e.title,a=e.theme,c=e.tabs,r=void 0===c?[]:c;return Object(d.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===a,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},n)))))},j=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,c=n||a,r=c.baseUrl,o=c.subDirectory,s=r+"/edit/"+c.branch+o+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:s},"Edit this page on GitHub"))):null},h=n("FCXl"),f=n("dI71"),y=n("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(e){var t,c=o()(e,{lower:!0,strict:!0}),r=c===a,s=new RegExp(a+"/?(#.*)?$"),i=n.replace(s,c);return Object(d.b)("li",{key:e,className:m()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(d.b)(b.Link,{className:y.link,to:""+i},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},c))))))},t}(c.a.Component),v=n("MjG9"),x=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,c=e.Title,r=t.frontmatter,l=void 0===r?{}:r,m=t.relativePagePath,p=t.titleType,u=l.tabs,j=l.title,f=l.theme,y=l.description,k=l.keywords,P=Object(x.a)().interiorTheme,T=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=T?a.pathname.replace(T,""):a.pathname,S=u?C.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",A=f||P;return Object(d.b)(i.a,{tabs:u,homepage:!1,theme:A,pageTitle:j,pageDescription:y,pageKeywords:k,titleType:p},Object(d.b)(O,{title:c?Object(d.b)(c,null):j,label:"label",tabs:u,theme:A}),u&&Object(d.b)(N,{slug:C,tabs:u,currentTab:S}),Object(d.b)(v.a,{padded:!0},n,Object(d.b)(g,{relativePagePath:m})),Object(d.b)(h.a,{pageContext:t,location:a,slug:C,tabs:u,currentTab:S}),Object(d.b)(s.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"W+8S":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return O}));var a=n("wx14"),c=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("013z"),b=(n("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},i=s("AnchorLinks"),l=s("AnchorLink"),m=s("Tabs"),p=s("Tab"),u={_frontmatter:b},d=o.a;function O(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(l,{mdxType:"AnchorLink"},"Container Configuration"),Object(r.b)(l,{mdxType:"AnchorLink"},"Resource Requirements"),Object(r.b)(l,{mdxType:"AnchorLink"},"ConfigMaps"),Object(r.b)(l,{mdxType:"AnchorLink"},"Secrets"),Object(r.b)(l,{mdxType:"AnchorLink"},"SecurityContexts"),Object(r.b)(l,{mdxType:"AnchorLink"},"Service Accounts"),Object(r.b)(l,{mdxType:"AnchorLink"},"Activities")),Object(r.b)("h1",null,"Container Configuration"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Command and Argument")),Object(r.b)("p",null,"When you create a Pod, you can define a command and arguments for the containers that run in the Pod."),Object(r.b)("p",null,"The command and arguments that you define in the configuration file override the default command and arguments provided by the container image"),Object(r.b)("p",null,"Dockerfile vs Kubernetes\nDockerfile Entrypoint -> k8s command\nDockerfile CMD -> k8s args"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Ports")),Object(r.b)("p",null,"When you create a Pod, you can specify the port number the container exposes, as best practice is good to put a ",Object(r.b)("inlineCode",{parentName:"p"},"name"),", this way a service can specify targetport by name reference."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Environment Variable")),Object(r.b)("p",null,"When you create a Pod, you can set environment variables for the containers that run in the Pod. To set environment variables, include the env or envFrom field in the container configuration"),Object(r.b)("p",null,"A Pod can use environment variables to expose information about itself to Containers running in the Pod. Environment variables can expose Pod fields and Container fields"),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS & OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/"}),"Container Commands")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/"}),"Environment Variables")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/#exposing-pods-to-the-cluster"}),"Pod Exposing"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-cmd-pod\nspec:\n  containers:\n  - name: myapp-container\n    image: busybox\n    command: ['echo']\n  restartPolicy: Never\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-arg-pod\nspec:\n  containers:\n  - name: myapp-container\n    image: busybox\n    command: ['echo']\n    args: ['Hello World']\n  restartPolicy: Never\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-port-pod\nspec:\n  containers:\n  - name: myapp-container\n    image: bitnami/nginx\n    ports:\n    - containerPort: 8080\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-env-pod\nspec:\n  restartPolicy: Never\n  containers:\n  - name: c\n    image: busybox\n    env:\n    - name: DEMO_GREETING\n      value: "Hello from the environment"\n    command: ["echo"]\n    args: ["$(DEMO_GREETING)"]\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-inter-pod\n  labels:\n    app: jedi\nspec:\n  restartPolicy: Never\n  containers:\n    - name: myapp\n      image: bitnami/nginx\n      ports:\n        - containerPort: 8080\n          name: http\n      env:\n        - name: MY_NODE_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: spec.nodeName\n        - name: MY_POD_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.name\n        - name: MY_POD_IP\n          valueFrom:\n            fieldRef:\n              fieldPath: status.podIP\n      command: ["echo"]\n      args: ["$(MY_NODE_NAME) $(MY_POD_NAME) $(MY_POD_IP)"]\n')),Object(r.b)("h1",null,"Resource Requirements"),Object(r.b)("p",null,"When you specify a Pod, you can optionally specify how much CPU and memory (RAM) each Container needs. When Containers have resource requests specified, the scheduler can make better decisions about which nodes to place Pods on."),Object(r.b)("p",null,"CPU and memory are each a resource type. A resource type has a base unit. CPU is specified in units of cores, and memory is specified in units of bytes."),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS & OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container"}),"Compute Resources")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/memory-default-namespace/"}),"Memory Management"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n  - name: my-app\n    image: bitnami/nginx\n    ports:\n      - containerPort: 8080\n    resources:\n      requests:\n        memory: "64Mi"\n        cpu: "250m"\n      limits:\n        memory: "128Mi"\n        cpu: "500m"\n')),Object(r.b)("p",null,"Namespaced defaults mem"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: LimitRange\nmetadata:\n  name: mem-limit-range\nspec:\n  limits:\n  - default:\n      memory: 512Mi\n    defaultRequest:\n      memory: 256Mi\n    type: Container\n")),Object(r.b)("p",null,"Namespaced defaults mem"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: LimitRange\nmetadata:\n  name: cpu-limit-range\nspec:\n  limits:\n  - default:\n      cpu: 1\n    defaultRequest:\n      cpu: 0.5\n    type: Container\n")),Object(r.b)("h1",null,"ConfigMaps"),Object(r.b)("p",null,"ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable."),Object(r.b)("p",null,"You can data from a ConfigMap in 3 different ways."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"As a single environment variable specific to a single key"),Object(r.b)("li",{parentName:"ul"},"As a set of environment variables from all keys"),Object(r.b)("li",{parentName:"ul"},"As a set of files, each key represented by a file on mounted volume")),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/containers/nodes-containers-projected-volumes.html"}),"Mapping Volumes"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"}),"ConfigMaps"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n   name: my-cm\ndata:\n   color: blue\n   location: naboo\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  restartPolicy: Never\n  containers:\n    - name: myapp\n      image: busybox\n      command: ["echo"]\n      args: ["color is $(MY_VAR)"]\n      env:\n        - name: MY_VAR\n          valueFrom:\n            configMapKeyRef:\n              name: my-cm\n              key: color\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  restartPolicy: Never\n  containers:\n    - name: myapp\n      image: busybox\n      command:\n        [\n          "sh",\n          "-c",\n          "ls -l /etc/config; echo located at $(cat /etc/config/location)",\n        ]\n      volumeMounts:\n        - name: config-volume\n          mountPath: /etc/config\n  volumes:\n    - name: config-volume\n      configMap:\n        name: my-cm\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  restartPolicy: Never\n  containers:\n    - name: myapp\n      image: busybox\n      command: ["/bin/sh", "-c", "env | sort"]\n      envFrom:\n        - configMapRef:\n            name: my-cm\n  restartPolicy: Never\n')),Object(r.b)("h1",null,"Secrets"),Object(r.b)("p",null,"Kubernetes secret objects let you store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys. Putting this information in a secret is safer and more flexible than putting it verbatim in a Pod definition or in a container image."),Object(r.b)("p",null,"A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. Such information might otherwise be put in a Pod specification or in an image; putting it in a Secret object allows for more control over how it is used, and reduces the risk of accidental exposure."),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/containers/nodes-containers-projected-volumes.html"}),"Secrets")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/developer-cli-commands.html#secrets"}),"Secret Commands"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/"}),"Secrets")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/"}),"Secret Distribution"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: mysecret\ntype: Opaque\ndata:\n  username: YWRtaW4=\nstringData:\n  admin: administrator\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Secret\nmetadata:\n  name: mysecret-config\ntype: Opaque\nstringData:\n  config.yaml: |-\n    apiUrl: "https://my.api.com/api/v1"\n    username: token\n    password: thesecrettoken\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n  - name: my-app\n    image: bitnami/nginx\n    ports:\n      - containerPort: 8080\n    env:\n      - name: SECRET_USERNAME\n        valueFrom:\n          secretKeyRef:\n            name: mysecret\n            key: username\n    envFrom:\n      - secretRef:\n          name: mysecret\n    volumeMounts:\n      - name: config\n        mountPath: "/etc/secrets"\n  volumes:\n    - name: config\n      secret:\n        secretName: mysecret-config\n')),Object(r.b)(m,{mdxType:"Tabs"},Object(r.b)(p,{label:"OpenShift",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Create files needed for rest of example.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"echo -n 'admin' > ./username.txt\necho -n '1f2d1e2e67df' > ./password.txt\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Creating Secret from files. ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Getting Secret ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get secrets\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Gets the Secret’s Description. ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe secrets/db-user-pass\n"))),Object(r.b)(p,{label:"IKS",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Create files needed for rest of example. ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"echo -n 'admin' > ./username.txt\necho -n '1f2d1e2e67df' > ./password.txt\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Creates the Secret from the files ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Gets the Secret ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get secrets\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Gets the Secret’s Description. ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe secrets/db-user-pass\n")))),Object(r.b)("h1",null,"SecurityContexts"),Object(r.b)("p",null,"A security context defines privilege and access control settings for a Pod or Container."),Object(r.b)("p",null,"To specify security settings for a Pod, include the securityContext field in the Pod specification. The securityContext field is a PodSecurityContext object. The security settings that you specify for a Pod apply to all Containers in the Pod."),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/authentication/managing-security-context-constraints.html"}),"Managing Security Contexts"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"}),"Security Contexts"))),Object(r.b)("h2",null,"References"),Object(r.b)("p",null,"Setup minikube VM with users"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"minikube ssh\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"su -\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'echo "container-user-0:x:2000:2000:-:/home/container-user-0:/bin/bash" >> /etc/passwd\necho "container-user-1:x:2001:2001:-:/home/container-user-1:/bin/bash" >> /etc/passwd\necho "container-group-0:x:3000:" >>/etc/group\necho "container-group-1:x:3001:" >>/etc/group\nmkdir -p /etc/message/\necho "Hello, World!" | sudo tee -a /etc/message/message.txt\nchown 2000:3000 /etc/message/message.txt\nchmod 640 /etc/message/message.txt\n')),Object(r.b)("p",null,"Using the this ",Object(r.b)("inlineCode",{parentName:"p"},"securityContext")," the container will be able to read the file ",Object(r.b)("inlineCode",{parentName:"p"},"/message/message.txt")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-securitycontext-pod\nspec:\n  restartPolicy: Never\n  securityContext:\n    runAsUser: 2000\n    runAsGroup: 3000\n    fsGroup: 3000\n  containers:\n    - name: myapp-container\n      image: busybox\n      command: ["sh", "-c", "cat /message/message.txt && sleep 3600"]\n      volumeMounts:\n        - name: message-volume\n          mountPath: /message\n  volumes:\n    - name: message-volume\n      hostPath:\n        path: /etc/message\n')),Object(r.b)("p",null,"Using the this ",Object(r.b)("inlineCode",{parentName:"p"},"securityContext")," the container should NOT be able to read the file ",Object(r.b)("inlineCode",{parentName:"p"},"/message/message.txt")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-securitycontext-pod\nspec:\n  restartPolicy: Never\n  securityContext:\n    runAsUser: 2001\n    runAsGroup: 3001\n    fsGroup: 3001\n  containers:\n    - name: myapp-container\n      image: busybox\n      command: ["sh", "-c", "cat /message/message.txt && sleep 3600"]\n      volumeMounts:\n        - name: message-volume\n          mountPath: /message\n  volumes:\n    - name: message-volume\n      hostPath:\n        path: /etc/message\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Run to see the errors ")),Object(r.b)(m,{mdxType:"Tabs"},Object(r.b)(p,{label:"OpenShift",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Pod Logs ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc logs my-securitycontext-pod\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Should return ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cat: can't open '/message/message.txt': Permission denied\n"))),Object(r.b)(p,{label:"IKS",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Get Pod Logs ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl logs my-securitycontext-pod\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Should return ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cat: can't open '/message/message.txt': Permission denied\n")))),Object(r.b)("h1",null,"Service Accounts"),Object(r.b)("p",null,"A service account provides an identity for processes that run in a Pod."),Object(r.b)("p",null,"When you (a human) access the cluster (for example, using kubectl), you are authenticated by the apiserver as a particular User Account (currently this is usually admin, unless your cluster administrator has customized your cluster). Processes in containers inside pods can also contact the apiserver. When they do, they are authenticated as a particular Service Account (for example, default)."),Object(r.b)("p",null,"User accounts are for humans. Service accounts are for processes, which run in pods."),Object(r.b)("p",null,"User accounts are intended to be global. Names must be unique across all namespaces of a cluster, future user resource will not be namespaced. Service accounts are namespaced."),Object(r.b)("h2",null,"Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OpenShift")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/authentication/understanding-and-creating-service-accounts.html"}),"Service Accounts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/authentication/using-service-accounts-in-applications.html"}),"Using Service Accounts"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IKS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/"}),"Service Accounts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"}),"Service Account Configuration"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: my-service-account\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  serviceAccountName: my-service-account\n  containers:\n  - name: my-app\n    image: bitnami/nginx\n    ports:\n      - containerPort: 8080\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: build-robot-secret\n  annotations:\n    kubernetes.io/service-account.name: my-service-account\ntype: kubernetes.io/service-account-token\n")),Object(r.b)(m,{mdxType:"Tabs"},Object(r.b)(p,{label:"OpenShift",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Creating a ServiceAccount")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc create sa <service_account_name>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," View ServiceAccount Details ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe sa <service_account_name>\n"))),Object(r.b)(p,{label:"IKS",mdxType:"Tab"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Create a ServiceAccount ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create sa <service_account_name>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," View ServiceAccount Details ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe sa <service_account_name>\n")))),Object(r.b)("h2",null,"Activities"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pod Creation"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Challenge yourself to create a Pod YAML file to meet certain parameters."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"../kube-overview/activities/labs/lab1"}),"Pod Creation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pod Configuration"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configure a pod to meet compute resource requirements."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"../kube-overview/activities/labs/lab2"}),"Pod Configuration"))))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-configuration-index-mdx-81269d309773733959cb.js.map