"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[931],{6992:function(e,t,n){var l=n(7387),a=n(6540),r=n(4194),o=n(5765);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){const{tags:e}=this.props;return a.createElement("span",null,e.map((e=>a.createElement("span",null," ",a.createElement(r.Link,{style:{boxShadow:"inset 0 -1px 0 rgba(27,31,35,.12)",borderRadius:"2px",padding:".15em 4px",textDecoration:"none",fontWeight:"600",fontSize:"12px",height:"20px",lineHeight:"15px",color:"inherit",marginLeft:(0,o.di)(1/4),background:"#ededed"},to:"/tags/"+e,key:e},"#",e)))))},t}(a.Component);t.A=i},9331:function(e,t,n){n.r(t);var l=n(6540),a=n(4194),r=n(3895),o=n(7528),i=n(6992),s=n(4967),c=n(5765);t.default=e=>{let{pageContext:t,data:n}=e;const{tag:m}=t,{edges:u,totalCount:p}=n.allMarkdownRemark,{title:g}=n.site.siteMetadata,d=p+" post"+(1===p?"":"s")+" tagged #"+m;return l.createElement(r.A,{location:"/tags/"+m,title:g},l.createElement(o.A,{title:"#"+m}),l.createElement("nav",null,l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:0}},l.createElement("li",null,l.createElement(a.Link,{to:"/"},"← All Posts")),l.createElement("li",null,l.createElement(a.Link,{to:"/tags"},"All Tags →")))),l.createElement("div",null,l.createElement("h1",null,d),l.createElement("ol",null,u.map((e=>{let{node:t}=e;const{slug:n}=t.fields,{title:r,date:o,tags:s}=t.frontmatter;return l.createElement("li",{key:n},l.createElement(a.Link,{to:n},r),l.createElement("br",null),o,l.createElement(i.A,{tags:s}))})))),l.createElement("hr",{style:{marginBottom:(0,c.di)(1)}}),l.createElement("footer",null,l.createElement(s.A,null)))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-aadeb8db71bb9f1e2835.js.map