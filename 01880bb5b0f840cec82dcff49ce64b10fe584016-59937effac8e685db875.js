"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[598],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return 0===(e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim()).length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,i=0;i<e.length;i++){var a=e[i];t&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=r,r=!0,i++):r&&n&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=r,r=!1,t=!0):(t=a.toLowerCase()===a&&a.toUpperCase()!==a,n=r,r=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},4041:function(){var e,t,r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=(e=["",""],t=["",""],Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(){for(var t=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return i(this,e),this.tag=function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return"function"==typeof e?t.interimTag.bind(t,e):"string"==typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,n))))},n.length>0&&Array.isArray(n[0])&&(n=n[0]),this.transformers=n.map((function(e){return"function"==typeof e?e():e})),this.tag}return r(e,[{key:"interimTag",value:function(e,t){for(var r=arguments.length,i=Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return this.tag(n,e.apply(void 0,[t].concat(i)))}},{key:"processSubstitutions",value:function(e,t,r){var n=this.transformSubstitution(e.shift(),t);return"".concat(t,n,r)}},{key:"transformString",value:function(e){return this.transformers.reduce((function(e,t){return t.onString?t.onString(e):e}),e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce((function(e,r){return r.onSubstitution?r.onSubstitution(e,t):e}),e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce((function(e,t){return t.onEndResult?t.onEndResult(e):e}),e)}}]),e}(),o={separator:"",conjunction:"",serial:!1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return{onSubstitution:function(t,r){if(Array.isArray(t)){var n=t.length,i=e.separator,a=e.conjunction,o=e.serial,s=r.match(/(\n?[^\S\n]+)$/);if(t=s?t.join(i+s[1]):t.join(i+" "),a&&n>1){var u=t.lastIndexOf(i);t=t.slice(0,u)+(o?i:"")+" "+a+t.slice(u+1)}}return t}}};function u(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(t){if("initial"===e){var r=t.match(/^[^\S\n]*(?=\S)/gm),n=r&&Math.min.apply(Math,u(r.map((function(e){return e.length}))));if(n){var i=new RegExp("^.{"+n+"}","gm");return t.replace(i,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+e)}}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(t){if(""===e)return t.trim();if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"");if("end"===e||"right"===e)return t.replace(/\s*$/,"");throw new Error("Side not supported: "+e)}}},d=(new a(s({separator:","}),l,c),new a(s({separator:",",conjunction:"and"}),l,c),new a(s({separator:",",conjunction:"or"}),l,c),function(e){return{onSubstitution:function(t,r){if(null==e||"string"!=typeof e)throw new Error("You need to specify a string character to split by.");return"string"==typeof t&&t.includes(e)&&(t=t.split(e)),t}}}),p=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!=typeof e},f=function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(p):p(e)?e:""}}},h=(new a(d("\n"),f,s,l,c),function(e,t){return{onSubstitution:function(r,n){if(null==e||null==t)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==r?r:r.toString().replace(e,t)}}}),g=(new a(d("\n"),s,l,c,h(/&/g,"&amp;"),h(/</g,"&lt;"),h(/>/g,"&gt;"),h(/"/g,"&quot;"),h(/'/g,"&#x27;"),h(/`/g,"&#x60;")),function(e,t){return{onEndResult:function(r){if(null==e||null==t)throw new Error("replaceResultTransformer requires at least 2 arguments.");return r.replace(e,t)}}});new a(g(/(?:\n(?:\s*))+/g," "),c),new a(g(/(?:\n\s*)/g,""),c),new a(s({separator:","}),g(/(?:\s+)/g," "),c),new a(s({separator:",",conjunction:"or"}),g(/(?:\s+)/g," "),c),new a(s({separator:",",conjunction:"and"}),g(/(?:\s+)/g," "),c),new a(s,l,c),new a(s,g(/(?:\s+)/g," "),c),new a(l,c),new a(l("all"),c)},2359:function(e,t,r){r.d(t,{G:function(){return T},L:function(){return w},M:function(){return O},P:function(){return C},_:function(){return l},a:function(){return s},b:function(){return g},g:function(){return m}});var n=r(7294),i=(r(4041),r(4811),r(5697)),a=r.n(i),o=r(3935);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}var c=new Set,d=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function p(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function f(e){e&&c.add(e)}function h(e){return c.has(e)}function g(e,t,n,i,a,o,u,l){var c,d;return void 0===l&&(l={}),null!=u&&u.current&&!("objectFit"in document.documentElement.style)&&(u.current.dataset.objectFit=null!=(c=l.objectFit)?c:"cover",u.current.dataset.objectPosition=""+(null!=(d=l.objectPosition)?d:"50% 50%"),function(e){try{var t=function(){window.objectFitPolyfill(e.current)},n=function(){if(!("objectFitPolyfill"in window))return Promise.resolve(r.e(231).then(r.t.bind(r,7231,23))).then((function(){}))}();Promise.resolve(n&&n.then?n.then(t):t())}catch(e){return Promise.reject(e)}}(u)),p()||(l=s({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},l)),s({},n,{loading:i,shouldLoad:e,"data-main-image":"",style:s({},l,{opacity:t?1:0}),onLoad:function(e){if(!t){f(o);var r=e.currentTarget,n=new Image;n.src=r.currentSrc,n.decode?n.decode().catch((function(){})).then((function(){a(!0)})):a(!0)}},ref:u})}function m(e,t,r,n,i,a,o,u){var l={};a&&(l.backgroundColor=a,"fixed"===r?(l.width=n,l.height=i,l.backgroundColor=a,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),u&&(l.objectPosition=u);var c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return p()||(c.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),c}var y,v=["children"],b=function(e){var t=e.layout,r=e.width,i=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},w=function(e){var t=e.children,r=l(e,v);return n.createElement(n.Fragment,null,n.createElement(b,s({},r)),t,!1)},E=["src","srcSet","loading","alt","shouldLoad","innerRef"],S=["fallback","sources","shouldLoad"],L=function(e){var t=e.src,r=e.srcSet,i=e.loading,a=e.alt,o=void 0===a?"":a,u=e.shouldLoad,c=e.innerRef,d=l(e,E);return n.createElement("img",s({},d,{decoding:"async",loading:i,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:o,ref:c}))},k=(0,n.forwardRef)((function(e,t){var r=e.fallback,i=e.sources,a=void 0===i?[]:i,o=e.shouldLoad,u=void 0===o||o,c=l(e,S),d=c.sizes||(null==r?void 0:r.sizes),p=n.createElement(L,s({},c,r,{sizes:d,shouldLoad:u,innerRef:t}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,i=e.type;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,sizes:d})})),p):p}));L.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},k.displayName="Picture",k.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var R=["fallback"],C=function(e){var t=e.fallback,r=l(e,R);return t?n.createElement(k,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},r))};C.displayName="Placeholder",C.propTypes={fallback:i.string,sources:null==(y=k.propTypes)?void 0:y.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var O=(0,n.forwardRef)((function(e,t){return n.createElement(n.Fragment,null,n.createElement(k,s({ref:t},e)),n.createElement("noscript",null,n.createElement(k,s({},e,{shouldLoad:!0}))))}));O.displayName="MainImage",O.propTypes=k.propTypes;var _=function(e,t,r){return e.alt||""===e.alt?a().string.apply(a(),[e,t,r].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:a().object.isRequired,alt:_},A=["style","className"],x=function(e){var t,i;function a(t){var r;return(r=e.call(this,t)||this).root=(0,n.createRef)(),r.hydrated={current:!1},r.forceRender={current:!1},r.lazyHydrator=null,r.ref=(0,n.createRef)(),r.unobserveRef=void 0,r.state={isLoading:d(),isLoaded:!1},r}i=e,(t=a).prototype=Object.create(i.prototype),t.prototype.constructor=t,u(t,i);var c=a.prototype;return c._lazyHydrate=function(e,t){var n=this,i=this.root.current.querySelector("[data-gatsby-image-ssr]");return d()&&i&&!this.hydrated.current?(this.hydrated.current=!0,Promise.resolve()):r.e(987).then(r.bind(r,4987)).then((function(r){n.lazyHydrator=(0,r.lazyHydrate)(s({image:e.image.images,isLoading:t.isLoading,isLoaded:t.isLoaded,toggleIsLoaded:function(){null==e.onLoad||e.onLoad(),n.setState({isLoaded:!0})},ref:n.ref},e),n.root,n.hydrated,n.forceRender)}))},c._setupIntersectionObserver=function(e){var t=this;void 0===e&&(e=!0),r.e(175).then(r.bind(r,7175)).then((function(r){var n=(0,r.createIntersectionObserver)((function(){if(t.root.current){var r=JSON.stringify(t.props.image.images);null==t.props.onStartLoad||t.props.onStartLoad({wasCached:e&&h(r)}),t.setState({isLoading:!0,isLoaded:e&&h(r)})}}));t.root.current&&(t.unobserveRef=n(t.root))}))},c.shouldComponentUpdate=function(e,t){var r=this,n=!1;return this.state.isLoading||!t.isLoading||t.isLoaded||(this.forceRender.current=!0),this.props.image.images!==e.image.images&&(this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&(0,o.render)(null,this.root.current)),this.setState({isLoading:!1,isLoaded:!1},(function(){r._setupIntersectionObserver(!1)})),n=!0),this.root.current&&!n&&this._lazyHydrate(e,t),!1},c.componentDidMount=function(){if(this.root.current){var e=this.root.current.querySelector("[data-gatsby-image-ssr]"),t=JSON.stringify(this.props.image.images);if(d()&&e&&p()){var r,n;if(null==(r=(n=this.props).onStartLoad)||r.call(n,{wasCached:!1}),e.complete){var i,a;null==(i=(a=this.props).onLoad)||i.call(a),f(t)}else{var o=this;e.addEventListener("load",(function r(){e.removeEventListener("load",r),null==o.props.onLoad||o.props.onLoad(),f(t)}))}return}this._setupIntersectionObserver(!0)}},c.componentWillUnmount=function(){this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&this.lazyHydrator())},c.render=function(){var e=this.props.as||"div",t=this.props.image,r=t.width,i=t.height,a=t.layout,o=function(e,t,r){var n={},i="gatsby-image-wrapper";return p()||(n.position="relative",n.overflow="hidden"),"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(p()||(n.display="inline-block",n.verticalAlign="top"),i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(r,i,a),u=o.style,c=o.className,d=l(o,A),f=this.props.className;this.props.class&&(f=this.props.class);var h=function(e,t,r){var n=null;return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(a,r,i);return n.createElement(e,s({},d,{style:s({},u,this.props.style,{backgroundColor:this.props.backgroundColor}),className:c+(f?" "+f:""),ref:this.root,dangerouslySetInnerHTML:{__html:h},suppressHydrationWarning:!0}))},a}(n.Component),T=function(e){if(!e.image)return null;p();var t=e.image,r=JSON.stringify([t.width,t.height,t.layout,e.className,e.class,e.backgroundColor]);return n.createElement(x,s({key:r},e))};T.propTypes=j,T.displayName="GatsbyImage";var I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),N={src:a().string.isRequired,alt:_,width:z,height:z,sizes:a().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=function(e){return function(t){var r=t.src,i=t.__imageData,a=t.__error,o=l(t,I);return a&&console.warn(a),i?n.createElement(e,s({image:i},o)):(console.warn("Image not loaded",r),null)}}(T);P.displayName="StaticImage",P.propTypes=N},9535:function(e,t,r){var n=r(7294),i=r(5444),a=r(2359),o=r(5713);t.Z=function(){var e=(0,i.useStaticQuery)("97908498"),t=e.site.siteMetadata,r=t.author,s=t.social;return n.createElement("div",{style:{display:"flex",marginBottom:(0,o.qZ)(1)}},n.createElement(a.G,{image:e.avatar.childImageSharp.gatsbyImageData,alt:r,style:{marginRight:(0,o.qZ)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.createElement("p",null," ","Multi-Cloud Certified Architect | DevSecOps | AppSec | Web Platform | Speaker | Learner | Builder",n.createElement("br",null),n.createElement("a",{href:"https://twitter.com/"+s.twitter},"Twitter")," | ",n.createElement("a",{href:"https://www.linkedin.com/in/"+s.linkedin+"/"},"LinkedIn")," | ",n.createElement("a",{href:"https://github.com/"+s.github},"GitHub")," | ",n.createElement("a",{href:"https://stackoverflow.com/users/22514/kevin-hakanson"},"Stack Overflow")," | ",n.createElement("a",{href:"https://www.credly.com/users/kevin-hakanson"},"Credly")))}}}]);
//# sourceMappingURL=01880bb5b0f840cec82dcff49ce64b10fe584016-59937effac8e685db875.js.map