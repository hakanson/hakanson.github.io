"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[942],{4310:function(e,t,n){var l=n(1721),a=n(7294),r=n(5444),o=n(5713),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props.tags;return a.createElement("span",null,e.map((function(e){return a.createElement("span",null," ",a.createElement(r.Link,{style:{boxShadow:"inset 0 -1px 0 rgba(27,31,35,.12)",borderRadius:"2px",padding:".15em 4px",textDecoration:"none",fontWeight:"600",fontSize:"12px",height:"20px",lineHeight:"15px",color:"inherit",marginLeft:(0,o.qZ)(1/4),background:"#ededed"},to:"/tags/"+e,key:e},"#",e))})))},t}(a.Component);t.Z=i},5929:function(e,t,n){n.r(t);var l=n(7294),a=n(5444),r=n(7198),o=n(6179),i=n(4310),s=n(9535),c=n(5713);t.default=function(e){var t=e.pageContext,n=e.data,u=t.tag,m=n.allMarkdownRemark,p=m.edges,g=m.totalCount,d=n.site.siteMetadata.title,E=g+" post"+(1===g?"":"s")+" tagged #"+u;return l.createElement(r.Z,{location:"/tags/"+u,title:d},l.createElement(o.Z,{title:"#"+u}),l.createElement("nav",null,l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:0}},l.createElement("li",null,l.createElement(a.Link,{to:"/"},"← All Posts")),l.createElement("li",null,l.createElement(a.Link,{to:"/tags"},"All Tags →")))),l.createElement("div",null,l.createElement("h1",null,E),l.createElement("ol",null,p.map((function(e){var t=e.node,n=t.fields.slug,r=t.frontmatter,o=r.title,s=r.date,c=r.tags;return l.createElement("li",{key:n},l.createElement(a.Link,{to:n},o),l.createElement("br",null),s,l.createElement(i.Z,{tags:c}))})))),l.createElement("hr",{style:{marginBottom:(0,c.qZ)(1)}}),l.createElement("footer",null,l.createElement(s.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-1a43d4b33a6476235576.js.map