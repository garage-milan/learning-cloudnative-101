(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),m=a("TSYQ"),p=a.n(m),b=a("QH2O"),g=a.n(b),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(g.a.pageHeader,(t={},t[g.a.withTabs]=o.length,t[g.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:g.a.text},a)))))},k=a("BAC9"),y=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+k.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:k.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),h=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,r);return Object(u.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(u.b)(s.Link,{className:j.link,to:""+l},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:j.list},r))))))},t}(r.a.Component),v=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,m=void 0===o?{}:o,p=t.relativePagePath,b=t.titleType,g=m.tabs,k=m.title,h=m.theme,j=m.description,N=m.keywords,w=Object(x.a)().interiorTheme,T=Object(s.useStaticQuery)("2456312558").site.pathPrefix,L=T?n.pathname.replace(T,""):n.pathname,S=g?L.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"",P=h||w;return Object(u.b)(l.a,{tabs:g,homepage:!1,theme:P,pageTitle:k,pageDescription:j,pageKeywords:N,titleType:b},Object(u.b)(d,{title:r?Object(u.b)(r,null):k,label:"label",tabs:g,theme:P}),g&&Object(u.b)(O,{slug:L,tabs:g,currentTab:S}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(y,{relativePagePath:p})),Object(u.b)(f.a,{pageContext:t,location:n,slug:L,tabs:g,currentTab:S}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},BzJD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),{}),c={_frontmatter:s},l=i.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Using Reactive Messaging on OpenLiberty"),Object(o.b)("p",null,"Following through the tutorial’s ",Object(o.b)("inlineCode",{parentName:"p"},"start")," path via ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://openliberty.io/guides/microprofile-reactive-messaging.html#getting-started"}),"Getting Started")),", you will be directed through all the necessary steps to build the application as expected."),Object(o.b)("p",null,"Contents for the ",Object(o.b)("inlineCode",{parentName:"p"},"system/src/main/resources/META-INF/microprofile-config.properties")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),'mp.messaging.connector.liberty-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n\nmp.messaging.connector.liberty-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.liberty-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.liberty-kafka.sasl.mechanism=PLAIN\nmp.messaging.connector.liberty-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n\nmp.messaging.outgoing.systemLoad.connector=liberty-kafka\nmp.messaging.outgoing.systemLoad.topic=systemLoadTopic\nmp.messaging.outgoing.systemLoad.key.serializer=org.apache.kafka.common.serialization.StringSerializer\nmp.messaging.outgoing.systemLoad.value.serializer=io.openliberty.guides.models.SystemLoad$SystemLoadSerializer\n')),Object(o.b)("p",null,"Contents for the ",Object(o.b)("inlineCode",{parentName:"p"},"inventory/src/main/resources/META-INF/microprofile-config.properties")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),'mp.messaging.connector.liberty-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n\nmp.messaging.connector.liberty-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.liberty-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.liberty-kafka.sasl.mechanism=PLAIN\nmp.messaging.connector.liberty-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n\nmp.messaging.incoming.systemLoad.connector=liberty-kafka\nmp.messaging.incoming.systemLoad.topic=systemLoadTopic\nmp.messaging.incoming.systemLoad.key.deserializer=org.apache.kafka.common.serialization.StringDeserializer\nmp.messaging.incoming.systemLoad.value.deserializer=io.openliberty.guides.models.SystemLoad$SystemLoadDeserializer\nmp.messaging.incoming.systemLoad.group.id=system-load-status\n')),Object(o.b)("p",null,"As the tutorial is built to run Kafka and Zookeeper locally in containers as well, you can replace the ",Object(o.b)("inlineCode",{parentName:"p"},"startContainers.sh")," script in the project with the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\n\nNETWORK=reactive-app\n\ndocker network create $NETWORK\n\ndocker run -d \\\n  -p 9083:9083 \\\n  --network=$NETWORK \\\n  --name=system \\\n  --rm \\\n  system:1.0-SNAPSHOT &\n\ndocker run -d \\\n  -p 9085:9085 \\\n  --network=$NETWORK \\\n  --name=inventory \\\n  --rm \\\n  inventory:1.0-SNAPSHOT &\n\nwait\n")),Object(o.b)("h2",null,"Using Reactive Messaging with Quarkus"),Object(o.b)("p",null,"Following along with ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://quarkus.io/guides/kafka#creating-the-maven-project"}),"Creating the Maven project"))," through the ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://quarkus.io/guides/kafka#get-it-running"}),"Get it running"))," section, you will be walked through the necessary steps to create a simple Quarkus-based project that utilizes the Reactive Messaging feature of MicroProfile."),Object(o.b)("p",null,"Your ",Object(o.b)("inlineCode",{parentName:"p"},"application.properties")," file will need to contain the necessary security and credential information to configure the connector correctly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),'mp.messaging.connector.smallrye-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n\nmp.messaging.connector.smallrye-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.smallrye-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.smallrye-kafka.sasl.mechanism=PLAIN\nmp.messaging.connector.smallrye-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n\n# Configure the Kafka sink (we write to it)\nmp.messaging.outgoing.generated-price.connector=smallrye-kafka\nmp.messaging.outgoing.generated-price.topic=prices\nmp.messaging.outgoing.generated-price.value.serializer=org.apache.kafka.common.serialization.IntegerSerializer\n\n# Configure the Kafka source (we read from it)\nmp.messaging.incoming.prices.connector=smallrye-kafka\nmp.messaging.incoming.prices.value.deserializer=org.apache.kafka.common.serialization.IntegerDeserializer\n')))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-eda-activities-labs-lab-3-solution-mdx-06043eb6087f23cd045e.js.map