"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[751],{6992:function(e,t,n){var r=n(7387),a=n(6540),l=n(4794),o=n(5765);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{tags:e}=this.props;return a.createElement("span",null,e.map((e=>a.createElement("span",null," ",a.createElement(l.Link,{style:{boxShadow:"inset 0 -1px 0 rgba(27,31,35,.12)",borderRadius:"2px",padding:".15em 4px",textDecoration:"none",fontWeight:"600",fontSize:"12px",height:"20px",lineHeight:"15px",color:"inherit",marginLeft:(0,o.di)(1/4),background:"#ededed"},to:`/tags/${e}`,key:e},"#",e)))))},t}(a.Component);t.A=i},6093:function(e,t,n){n.r(t);var r=n(7387),a=n(6540),l=n(4794),o=n(4967),i=n(3895),s=n(7528),c=n(6992),p=n(5765);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,{previous:n,next:r}=this.props.pageContext;return a.createElement(i.A,{location:this.props.location,title:t},a.createElement(s.A,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt,canonical:e.frontmatter.canonical}),a.createElement("nav",null,a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:0}},a.createElement("li",null,n&&a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← previous")),a.createElement("li",null,r&&a.createElement(l.Link,{to:r.fields.slug,rel:"next"},"next →")))),a.createElement("article",null,a.createElement("header",null,a.createElement("h1",{style:{marginTop:(0,p.di)(1),marginBottom:0}},e.frontmatter.title),a.createElement("p",{style:{...(0,p.hs)(-.2),display:"block",marginBottom:(0,p.di)(1)}},e.frontmatter.date,a.createElement(c.A,{tags:e.frontmatter.tags}))),a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),a.createElement("hr",{style:{marginBottom:(0,p.di)(1)}}),a.createElement("footer",null,a.createElement(o.A,null))))},t}(a.Component);t.default=m}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5e6e5e5fba5cb7e1fc13.js.map