(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(18);var r=a(0),n=a.n(r),i=a(205),o=a(212),s=a(209),l=a(210),c=a(204);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title;return n.a.createElement(s.a,{location:this.props.location,title:t},n.a.createElement(l.a,{title:e.frontmatter.title}),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:0}},n.a.createElement("li",null," "),n.a.createElement("li",null,n.a.createElement(i.a,{to:"/"},"All Posts →")))),n.a.createElement("article",null,n.a.createElement("header",null,n.a.createElement("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},e.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})})),n.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),n.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),n.a.createElement("footer",null,n.a.createElement(o.a,null))))},r}(n.a.Component);t.default=d;var u="565333596"},204:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return f});var r=a(217),n=a.n(r),i=a(218),o=a.n(i),s=a(219),l=a.n(s);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}};var c=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","!default"];o.a.headerFontFamily=c,o.a.bodyFontFamily=c,delete o.a.googleFonts;var d=new n.a(l.a);var u=d.rhythm,f=d.scale},205:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(206),a(7).default.enqueue,n.a.createContext({})},206:function(e,t,a){var r;e.exports=(r=a(208))&&r.default||r},207:function(e,t,a){"use strict";a(213)("fixed",function(e){return function(){return e(this,"tt","","")}})},208:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e,t,a){"use strict";a(18);var r=a(0),n=a.n(r),i=a(205),o=a(204);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,s=t.children;return e="/"===a.pathname?n.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.25),{marginBottom:Object(o.a)(0),marginTop:0})},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(36),padding:Object(o.a)(.75)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,e),n.a.createElement("main",null,s),n.a.createElement("footer",null,"© ",(new Date).getFullYear()," Kevin Hakanson (built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),")"))},r}(n.a.Component);t.a=s},210:function(e,t,a){"use strict";var r=a(211),n=a(0),i=a.n(n),o=a(220),s=a.n(o);function l(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},211:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"kevinhakanson.com","description":"Kevin Hakanson\'s Blog","author":"Kevin Hakanson"}}}}')},212:function(e,t,a){"use strict";a(207);var r=a(214),n=a(0),i=a.n(n),o=a(215),s=a.n(o),l=a(204);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(1)}},i.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null," ","Software Architect. Web Platform. JavaScript. Cloud. Information Security. Speaker.",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Twitter")," | ",i.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedin+"/"},"LinkedIn")," | ",i.a.createElement("a",{href:"https://github.com/"+n.github},"GitHub")," | ",i.a.createElement("a",{href:"https://stackoverflow.com/users/22514/kevin-hakanson"},"Stack Overflow")))}},213:function(e,t,a){var r=a(1),n=a(8),i=a(31),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},214:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABcBAQEBAQAAAAAAAAAAAAAAAAECAAP/2gAMAwEAAhADEAAAAUl0WdRwzmznaLQH/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQMAAhIxITL/2gAIAQEAAQUCZZma6BwIwgqp7bYjOL+uz//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQMBAT8BCZf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQIBAT8BXI//xAAfEAABAwMFAAAAAAAAAAAAAAAAARAyERKRITFBQqH/2gAIAQEABj8CnvyTuJeFciJodcsjf//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExUWFB/9oACAEBAAE/IdKgVRlU+Ow7Ir4Cmwm4GsC4IBhbHoiphrk3IfSZn//aAAwDAQACAAMAAAAQq+c//8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQESH/2gAIAQMBAT8QDO0Fxms//8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARIVH/2gAIAQIBAT8QVW1YcseX/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARIUFRMWFxwf/aAAgBAQABPxCgSRRgDbUAgF3iY+vcHYYuW/YPRPYBV3XyYEIW6CAaAbyvkXFi3wx8SFiaaiGibeez/9k=","width":50,"height":50,"src":"/static/6004a4629feb58918b636b2d4129ef34/9b664/profile-pic.jpg","srcSet":"/static/6004a4629feb58918b636b2d4129ef34/9b664/profile-pic.jpg 1x,\\n/static/6004a4629feb58918b636b2d4129ef34/06a10/profile-pic.jpg 1.5x,\\n/static/6004a4629feb58918b636b2d4129ef34/f1b5a/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Kevin Hakanson","social":{"twitter":"hakanson","linkedin":"kevinhakanson","github":"hakanson"}}}}}')},215:function(e,t,a){"use strict";a(29),a(30),a(13),a(90),a(131),a(207);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),o=r(a(67)),s=r(a(132)),l=r(a(133)),c=r(a(0)),d=r(a(50)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+c+o+s+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(R,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},R=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},A,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||"eager"==t.loading||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,j=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:O?1:0,transition:k?"opacity "+h+"ms":"none"},s),L="boolean"==typeof m?"lightgray":m,Q={transitionDelay:h+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&Q,{},s,{},f),N={title:t,alt:this.state.isVisible?"":a,style:C,className:A};if(p){var M=p,T=M[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),L&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&Q)}),T.base64&&c.default.createElement(B,{src:T.base64,spreadProps:N,imageVariants:M,generateSources:v}),T.tracedSVG&&c.default.createElement(B,{src:T.tracedSVG,spreadProps:N,imageVariants:M,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(M),c.default.createElement(R,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:M}))}}))}if(g){var F=g,V=F[0],Y=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete Y.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},L&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},k&&Q)}),V.base64&&c.default.createElement(B,{src:V.base64,spreadProps:N,imageVariants:F,generateSources:v}),V.tracedSVG&&c.default.createElement(B,{src:V.tracedSVG,spreadProps:N,imageVariants:F,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(F),c.default.createElement(R,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:F}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:k,sizes:x,fixed:d.default.oneOfType([k,d.default.arrayOf(k)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=O;t.default=L}}]);
//# sourceMappingURL=component---src-templates-page-js-37a68f1f5f967ce0f399.js.map