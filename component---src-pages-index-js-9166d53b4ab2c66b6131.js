"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[293],{6992:function(e,t,n){var l=n(7387),r=n(6540),a=n(4794),o=n(5765);let s=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){const{tags:e}=this.props;return r.createElement("span",null,e.map((e=>r.createElement("span",null," ",r.createElement(a.Link,{style:{boxShadow:"inset 0 -1px 0 rgba(27,31,35,.12)",borderRadius:"2px",padding:".15em 4px",textDecoration:"none",fontWeight:"600",fontSize:"12px",height:"20px",lineHeight:"15px",color:"inherit",marginLeft:(0,o.di)(1/4),background:"#ededed"},to:`/tags/${e}`,key:e},"#",e)))))},t}(r.Component);t.A=s},9639:function(e,t,n){n.r(t);var l=n(7387),r=n(6540),a=n(4794),o=n(4967),s=n(3895),i=n(7528),c=n(6992),m=n(5765);let p=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){const{data:e}=this.props,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;let l="9999";return r.createElement(s.A,{location:this.props.location,title:t},r.createElement(i.A,{title:"All Posts"}),r.createElement("nav",null,r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:0}},r.createElement("li",null," "),r.createElement("li",null,r.createElement(a.Link,{to:"/presentations"},"Presentations →")))),r.createElement(o.A,null),n.map((e=>{let{node:t}=e;const n=t.frontmatter.title||t.fields.slug,o=t.frontmatter.tags||[];let s=!1;const i=t.frontmatter.date.length;return t.frontmatter.date.substring(i-4,i)!==l&&(l=t.frontmatter.date.substring(i-4,i),s=!0),r.createElement("article",{key:t.fields.slug},s&&r.createElement("h2",null,l),r.createElement("header",null,r.createElement("h3",{style:{marginBottom:(0,m.di)(1/4)}},r.createElement(a.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.createElement("p",{style:{...(0,m.hs)(-.2),display:"block"}},t.frontmatter.date,r.createElement(c.A,{tags:o}))),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))})),r.createElement("hr",{style:{marginBottom:(0,m.di)(1)}}))},t}(r.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-index-js-9166d53b4ab2c66b6131.js.map