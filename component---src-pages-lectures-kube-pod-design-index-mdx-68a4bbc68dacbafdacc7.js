(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),b=n.n(a),l=n("NmYn"),c=n.n(l),o=n("Wbzz"),p=n("Xrax"),r=n("k4MR"),s=n("TSYQ"),i=n.n(s),m=n("QH2O"),j=n.n(m),d=n("qKvR"),O=function(e){var t,n=e.title,a=e.theme,b=e.tabs,l=void 0===b?[]:b;return Object(d.b)("div",{className:i()(j.a.pageHeader,(t={},t[j.a.withTabs]=l.length,t[j.a.darkMode]="dark"===a,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:j.a.text},n)))))},u=n("BAC9"),h=function(e){var t=e.relativePagePath,n=e.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=n||a,l=b.baseUrl,c=b.subDirectory,p=l+"/edit/"+b.branch+c+"/src/pages"+t;return l?Object(d.b)("div",{className:"bx--row "+u.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:u.link,href:p},"Edit this page on GitHub"))):null},y=n("FCXl"),g=n("dI71"),N=n("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=c()(e,{lower:!0,strict:!0}),l=b===a,p=new RegExp(a+"/?(#.*)?$"),r=n.replace(p,b);return Object(d.b)("li",{key:e,className:i()((t={},t[N.selectedItem]=l,t),N.listItem)},Object(d.b)(o.Link,{className:N.link,to:""+r},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},b))))))},t}(b.a.Component),k=n("MjG9"),x=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,b=e.Title,l=t.frontmatter,s=void 0===l?{}:l,i=t.relativePagePath,m=t.titleType,j=s.tabs,u=s.title,g=s.theme,N=s.description,v=s.keywords,D=Object(x.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,w=T?a.pathname.replace(T,""):a.pathname,P=j?w.split("/").filter(Boolean).slice(-1)[0]||c()(j[0],{lower:!0}):"",C=g||D;return Object(d.b)(r.a,{tabs:j,homepage:!1,theme:C,pageTitle:u,pageDescription:N,pageKeywords:v,titleType:m},Object(d.b)(O,{title:b?Object(d.b)(b,null):u,label:"label",tabs:j,theme:C}),j&&Object(d.b)(f,{slug:w,tabs:j,currentTab:P}),Object(d.b)(k.a,{padded:!0},n,Object(d.b)(h,{relativePagePath:i})),Object(d.b)(y.a,{pageContext:t,location:a,slug:w,tabs:j,currentTab:P}),Object(d.b)(p.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kCHs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return O}));var a=n("wx14"),b=n("zLVn"),l=(n("q1tI"),n("7ljp")),c=n("013z"),o=(n("qKvR"),{}),p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},r=p("AnchorLinks"),s=p("AnchorLink"),i=p("Tabs"),m=p("Tab"),j={_frontmatter:o},d=c.a;function O(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)(d,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(r,{small:!0,mdxType:"AnchorLinks"},Object(l.b)(s,{mdxType:"AnchorLink"},"Labels, Selectors, and Annotations"),Object(l.b)(s,{mdxType:"AnchorLink"},"Deployments"),Object(l.b)(s,{mdxType:"AnchorLink"},"Deployments rolling updates and rollback"),Object(l.b)(s,{mdxType:"AnchorLink"},"Jobs and CronJobs"),Object(l.b)(s,{mdxType:"AnchorLink"},"Activities")),Object(l.b)("h1",null,"Labels, Selectors, and Annotations"),Object(l.b)("p",null,"Labels are key/value pairs that are attached to objects, such as pods. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object."),Object(l.b)("p",null,"You can use Kubernetes annotations to attach arbitrary non-identifying metadata to objects. Clients such as tools and libraries can retrieve this metadata."),Object(l.b)("p",null,"You can use either labels or annotations to attach metadata to Kubernetes objects. Labels can be used to select objects and to find collections of objects that satisfy certain conditions. In contrast, annotations are not used to identify and select objects. The metadata in an annotation can be small or large, structured or unstructured, and can include characters not permitted by labels."),Object(l.b)("h2",null,"Resources"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"OpenShift")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/enterprise/3.0/cli_reference/basic_cli_operations.html#application-modification-cli-operations"}),"CLI Label Commands"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"IKS")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"}),"Labels")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"}),"Annotations"))),Object(l.b)("h2",null,"References"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\n  labels:\n    app: foo\n    tier: frontend\n    env: dev\n  annotations:\n    imageregistry: "https://hub.docker.com/"\n    gitrepo: "https://github.com/csantanapr/knative"\nspec:\n  containers:\n  - name: app\n    image: bitnami/nginx\n')),Object(l.b)(i,{mdxType:"Tabs"},Object(l.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Change Labels on Objects ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc label pod my-pod boot=camp\n")),Object(l.b)("p",null," ",Object(l.b)("strong",{parentName:"p"},"Getting Pods based on their labels.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods --show-labels\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods -L tier,env\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods -l app\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods -l tier=frontend\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods -l 'env=dev,tier=frontend'\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods -l 'env in (dev, test)'\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods -l 'tier!=backend'\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods -l 'env,env notin (prod)'\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Delete the Pod.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc delete pod my-pod\n"))),Object(l.b)(m,{label:"IKS",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Change Labels on Objects ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl label pod my-pod boot=camp\n")),Object(l.b)("p",null," ",Object(l.b)("strong",{parentName:"p"},"Getting Pods based on their labels.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods --show-labels\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -L tier,env\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l app\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l tier=frontend\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l 'env=dev,tier=frontend'\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l 'env in (dev, test)'\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l 'tier!=backend'\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -l 'env,env notin (prod)'\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Delete the Pod.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete pod my-pod\n")))),Object(l.b)("h1",null,"Deployments"),Object(l.b)("p",null,"A Deployment provides declarative updates for Pods and ReplicaSets."),Object(l.b)("p",null,"You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments."),Object(l.b)("p",null,"The following are typical use cases for Deployments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create a Deployment to rollout a ReplicaSet. The ReplicaSet creates Pods in the background. Check the status of the rollout to see if it succeeds or not."),Object(l.b)("li",{parentName:"ul"},"Declare the new state of the Pods by updating the PodTemplateSpec of the Deployment. A new ReplicaSet is created and the Deployment manages moving the Pods from the old ReplicaSet to the new one at a controlled rate. Each new ReplicaSet updates the revision of the Deployment."),Object(l.b)("li",{parentName:"ul"},"Rollback to an earlier Deployment revision if the current state of the Deployment is not stable. Each rollback updates the revision of the Deployment."),Object(l.b)("li",{parentName:"ul"},"Scale up the Deployment to facilitate more load."),Object(l.b)("li",{parentName:"ul"},"Pause the Deployment to apply multiple fixes to its PodTemplateSpec and then resume it to start a new rollout."),Object(l.b)("li",{parentName:"ul"},"Use the status of the Deployment as an indicator that a rollout has stuck."),Object(l.b)("li",{parentName:"ul"},"Clean up older ReplicaSets that you don’t need anymore.")),Object(l.b)("h2",null,"Resources"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"OpenShift")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/what-deployments-are.html"}),"Deployments")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/managing-deployment-processes.html"}),"Managing Deployment Processes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/deployment-strategies.html"}),"DeploymentConfig Strategies")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/route-based-deployment-strategies.html"}),"Route Based Deployment Strategies"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"IKS")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"}),"Deployments")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#scaling-a-deployment"}),"Scaling Deployments"))),Object(l.b)("h2",null,"References"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: bitnami/nginx:1.16.0\n        ports:\n        - containerPort: 8080\n")),Object(l.b)(i,{mdxType:"Tabs"},Object(l.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Creates a Deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc apply -f deployment.yaml\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Deployments ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets the deployments description ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Edit the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc edit deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Scale the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc scale deployment/my-deployment --replicas=3\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Delete the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc delete deployment my-deployment\n"))),Object(l.b)(m,{label:"IKS",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Creates a Deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f <deploymentYAML>\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Describe the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Edit the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl edit deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Scale the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl scale deployment/my-deployment --replicas=4\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Delete the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete deployment my-deployment\n")))),Object(l.b)("h1",null,"Deployments rolling updates and rollback"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Updating a Deployment"),"\nA Deployment’s rollout is triggered if and only if the Deployment’s Pod template (that is, .spec.template) is changed, for example if the labels or container images of the template are updated. Other updates, such as scaling the Deployment, do not trigger a rollout."),Object(l.b)("p",null,"Each time a new Deployment is observed by the Deployment controller, a ReplicaSet is created to bring up the desired Pods. If the Deployment is updated, the existing ReplicaSet that controls Pods whose labels match .spec.selector but whose template does not match .spec.template are scaled down. Eventually, the new ReplicaSet is scaled to .spec.replicas and all old ReplicaSets is scaled to 0."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Label selector updates"),"\nIt is generally discouraged to make label selector updates and it is suggested to plan your selectors up front. In any case, if you need to perform a label selector update, exercise great caution and make sure you have grasped all of the implications."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Rolling Back a Deployment"),"\nSometimes, you may want to rollback a Deployment; for example, when the Deployment is not stable, such as crash looping. By default, all of the Deployment’s rollout history is kept in the system so that you can rollback anytime you want (you can change that by modifying revision history limit)."),Object(l.b)("p",null,"A Deployment’s revision is created when a Deployment’s rollout is triggered. This means that the new revision is created if and only if the Deployment’s Pod template (.spec.template) is changed, for example if you update the labels or container images of the template. Other updates, such as scaling the Deployment, do not create a Deployment revision, so that you can facilitate simultaneous manual- or auto-scaling. This means that when you roll back to an earlier revision, only the Deployment’s Pod template part is rolled back."),Object(l.b)("h2",null,"Resources"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"OpenShift")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/what-deployments-are.html#delpoymentconfigs-specific-features_what-deployments-are"}),"Rollouts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/deployments/managing-deployment-processes.html#deployments-rolling-back_deployment-operations"}),"Rolling Back"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"IKS")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment"}),"Updating a Deployment")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment"}),"Rolling Back a Deployment"))),Object(l.b)("h2",null,"References"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: bitnami/nginx:1.16.0\n        ports:\n        - containerPort: 8080\n")),Object(l.b)(i,{mdxType:"Tabs"},Object(l.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Creates a Deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc apply -f deployment.yaml\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get Deployments ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get deployments\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Sets new image for Deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc set image deployment/my-deployment nginx=bitnami/nginx:1.16.1 --record\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Check the status of the rollout ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc rollout status deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get ReplicaSets ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get rs\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get Deployment Description ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get Rollout History ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc rollout history deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Undo Rollout ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc rollback my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Delete the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc delete deployment my-deployment\n"))),Object(l.b)(m,{label:"IKS",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Creates a Deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl apply -f deployment.yaml\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get Deployments ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get deployments\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Sets new image for Deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl set image deployment/my-deployment nginx=bitnami/nginx:1.16.1 --record\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Check the status of the rollout ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout status deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get ReplicaSets ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get rs\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get Deployment Description ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Get Rollout History ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout history deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Undo Rollout ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl rollout undo deployment my-deployment\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Delete the deployment ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete deployment my-deployment\n")))),Object(l.b)("h1",null,"Jobs and CronJobs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Jobs"),"\nA Job creates one or more Pods and ensures that a specified number of them successfully terminate. As pods successfully complete, the Job tracks the successful completions. When a specified number of successful completions is reached, the task (ie, Job) is complete. Deleting a Job will clean up the Pods it created."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"CronJobs"),"\nOne CronJob object is like one line of a crontab (cron table) file. It runs a job periodically on a given schedule, written in Cron format."),Object(l.b)("p",null,"All CronJob schedule: times are based on the timezone of the master where the job is initiated."),Object(l.b)("h2",null,"Resources"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"OpenShift")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/jobs/nodes-nodes-jobs.html"}),"Jobs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/jobs/nodes-nodes-jobs.html#nodes-nodes-jobs-creating-cron_nodes-nodes-jobs"}),"CronJobs"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"IKS")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"}),"Jobs to Completion")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"}),"Cron Jobs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/job/automated-tasks-with-cron-jobs/"}),"Automated Tasks with Cron"))),Object(l.b)("h2",null,"References"),Object(l.b)("p",null,"It computes π to 2000 places and prints it out"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: pi\nspec:\n  template:\n    spec:\n      containers:\n      - name: pi\n        image: perl\n        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  backoffLimit: 4\n')),Object(l.b)("p",null,"Running in parallel"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: pi\nspec:\n  parallelism: 2\n  completions: 3\n  template:\n    spec:\n      containers:\n        - name: pi\n          image: perl\n          command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  backoffLimit: 4\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: hello\nspec:\n  schedule: "*/1 * * * *"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: hello\n            image: busybox\n            args:\n            - /bin/sh\n            - -c\n            - date; echo Hello from the Kubernetes cluster\n          restartPolicy: OnFailure\n')),Object(l.b)(i,{mdxType:"Tabs"},Object(l.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Jobs ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get jobs\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Job Description ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe job pi\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Pods from the Job ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Deletes Job ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc delete job pi\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get cronjobs\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Describes CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe cronjobs pi\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Pods from CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get pods\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Deletes CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"oc delete cronjobs pi\n"))),Object(l.b)(m,{label:"IKS",mdxType:"Tab"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Jobs ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get jobs\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Job Description ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe job pi\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Pods from the Job ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Deletes Job ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete job pi\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get cronjobs\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Describes CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe cronjobs pi\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Gets Pods from CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Deletes CronJob ")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl delete cronjobs pi\n")))),Object(l.b)("h2",null,"Activities"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Task"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Rolling Updates Lab"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create a Rolling Update for your application."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"../kube-overview/activities/labs/lab6"}),"Rolling Updates"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cron Jobs Lab"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Using Tekton to test new versions of applications."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"../kube-overview/activities/labs/lab7"}),"Crons Jobs"))))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-pod-design-index-mdx-68a4bbc68dacbafdacc7.js.map