"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{4310:function(e,t,n){var r=n(1721),a=n(7294),l=n(5444),o=n(5713),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.tags;return a.createElement("span",null,e.map((function(e){return a.createElement("span",null," ",a.createElement(l.Link,{style:{boxShadow:"inset 0 -1px 0 rgba(27,31,35,.12)",borderRadius:"2px",padding:".15em 4px",textDecoration:"none",fontWeight:"600",fontSize:"12px",height:"20px",lineHeight:"15px",color:"inherit",marginLeft:(0,o.qZ)(1/4),background:"#ededed"},to:"/tags/"+e,key:e},"#",e))})))},t}(a.Component);t.Z=i},7704:function(e,t,n){n.r(t);var r=n(1721),a=n(7294),l=n(5444),o=n(9535),i=n(7198),s=n(6179),c=n(4310),u=n(5713),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,r="9999";return a.createElement(i.Z,{location:this.props.location,title:t},a.createElement(s.Z,{title:"All Posts"}),a.createElement("nav",null,a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:0}},a.createElement("li",null," "),a.createElement("li",null,a.createElement(l.Link,{to:"/presentations"},"Presentations →")))),a.createElement(o.Z,null),n.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,o=t.frontmatter.tags||[],i=!1,s=t.frontmatter.date.length;return t.frontmatter.date.substring(s-4,s)!==r&&(r=t.frontmatter.date.substring(s-4,s),i=!0),a.createElement("article",{key:t.fields.slug},i&&a.createElement("h2",null,r),a.createElement("header",null,a.createElement("h3",{style:{marginBottom:(0,u.qZ)(1/4)}},a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),a.createElement("p",{style:Object.assign({},(0,u.bA)(-.2),{display:"block"})},t.frontmatter.date,a.createElement(c.Z,{tags:o}))),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))})),a.createElement("hr",{style:{marginBottom:(0,u.qZ)(1)}}))},t}(a.Component);t.default=m}}]);
//# sourceMappingURL=component---src-pages-index-js-720d710d783c17d9bf6a.js.map