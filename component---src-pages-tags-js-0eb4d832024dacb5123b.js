(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var A=a(0),n=a.n(A),r=a(234),i=a.n(r),o=a(209),l=a(210),c=a(212),s=a(205),u=a(204);t.default=function(e){var t=e.data,a=t.allMarkdownRemark.group,A=t.site.siteMetadata.title;return n.a.createElement(o.a,{location:"/tags",title:A},n.a.createElement(l.a,{title:"All Tags"}),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:0}},n.a.createElement("li",null,n.a.createElement(s.a,{to:"/"},"← All Posts")))),n.a.createElement("div",null,n.a.createElement("h1",null,"All Tags"),n.a.createElement("ul",null,a.map(function(e){return n.a.createElement("li",{key:e.fieldValue},n.a.createElement(s.a,{to:"/tags/"+i()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))),n.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),n.a.createElement("footer",null,n.a.createElement(c.a,null)))};var m="3450235017"},204:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return m});var A=a(216),n=a.n(A),r=a(218),i=a.n(r),o=a(219),l=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}};var c=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","!default"];i.a.headerFontFamily=c,i.a.bodyFontFamily=c,delete i.a.googleFonts;var s=new n.a(l.a);var u=s.rhythm,m=s.scale},205:function(e,t,a){"use strict";var A=a(0),n=a.n(A),r=a(66),i=a.n(r);a.d(t,"a",function(){return i.a});a(206),a(9).default.enqueue,n.a.createContext({})},206:function(e,t,a){var A;e.exports=(A=a(208))&&A.default||A},208:function(e,t,a){"use strict";a.r(t);a(18);var A=a(0),n=a.n(A),r=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e,t,a){"use strict";a(18);var A=a(0),n=a.n(A),r=a(205),i=a(204);var o=function(e){var t,a;function A(){return e.apply(this,arguments)||this}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){var e,t=this.props,a=t.location,A=t.title,o=t.children;return e="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(i.b)(1.25),{marginBottom:Object(i.a)(0),marginTop:0})},n.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(36),padding:Object(i.a)(.75)+" "+Object(i.a)(.75)}},n.a.createElement("header",null,e),n.a.createElement("main",null,o),n.a.createElement("footer",null,"© ",(new Date).getFullYear()," Kevin Hakanson (built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),")"))},A}(n.a.Component);t.a=o},210:function(e,t,a){"use strict";var A=a(211),n=a(0),r=a.n(n),i=a(220),o=a.n(i);function l(e){var t=e.description,a=e.lang,n=e.meta,i=e.title,l=A.data.site,c=t||l.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},211:function(e){e.exports={data:{site:{siteMetadata:{title:"kevinhakanson.com",description:"Kevin Hakanson's Blog",author:"Kevin Hakanson"}}}}},212:function(e,t,a){"use strict";a(207);var A=a(214),n=a(0),r=a.n(n),i=a(215),o=a.n(i),l=a(204);t.a=function(){var e=A.data,t=e.site.siteMetadata,a=t.author,n=t.social;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(1)}},r.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null," ","Software Architect. Web Platform. JavaScript. Cloud. Information Security. Speaker.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Twitter")," | ",r.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedin+"/"},"LinkedIn")," | ",r.a.createElement("a",{href:"https://github.com/"+n.github},"GitHub")," | ",r.a.createElement("a",{href:"https://stackoverflow.com/users/22514/kevin-hakanson"},"Stack Overflow")))}},214:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABcBAQEBAQAAAAAAAAAAAAAAAAECAAP/2gAMAwEAAhADEAAAAUl0WdRwzmznaLQH/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQMAAhIxITL/2gAIAQEAAQUCZZma6BwIwgqp7bYjOL+uz//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQMBAT8BCZf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQIBAT8BXI//xAAfEAABAwMFAAAAAAAAAAAAAAAAARAyERKRITFBQqH/2gAIAQEABj8CnvyTuJeFciJodcsjf//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExUWFB/9oACAEBAAE/IdKgVRlU+Ow7Ir4Cmwm4GsC4IBhbHoiphrk3IfSZn//aAAwDAQACAAMAAAAQq+c//8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQESH/2gAIAQMBAT8QDO0Fxms//8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARIVH/2gAIAQIBAT8QVW1YcseX/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARIUFRMWFxwf/aAAgBAQABPxCgSRRgDbUAgF3iY+vcHYYuW/YPRPYBV3XyYEIW6CAaAbyvkXFi3wx8SFiaaiGibeez/9k=",width:50,height:50,src:"/static/6004a4629feb58918b636b2d4129ef34/9b664/profile-pic.jpg",srcSet:"/static/6004a4629feb58918b636b2d4129ef34/9b664/profile-pic.jpg 1x,\n/static/6004a4629feb58918b636b2d4129ef34/06a10/profile-pic.jpg 1.5x,\n/static/6004a4629feb58918b636b2d4129ef34/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Kevin Hakanson",social:{twitter:"hakanson",linkedin:"kevinhakanson",github:"hakanson"}}}}}}}]);
//# sourceMappingURL=component---src-pages-tags-js-0eb4d832024dacb5123b.js.map