(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"55Ip":function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return v}));var n=r("Ty5D"),a=r("dI71"),o=r("q1tI"),i=r.n(o),s=r("LhCv"),c=(r("17x9"),r("wx14")),l=r("zLVn"),u=r("9R94"),d=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=Object(s.a)(t.props),t}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(n.Router,{history:this.history,children:this.props.children})},t}(i.a.Component);i.a.Component;var p=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?Object(s.c)(e,null,null,t):e},h=function(e){return e},b=i.a.forwardRef;"undefined"===typeof b&&(b=h);var g=b((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,o=Object(l.a)(e,["innerRef","navigate","onClick"]),s=o.target,u=Object(c.a)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return u.ref=h!==b&&t||r,i.a.createElement("a",u)}));var v=b((function(e,t){var r=e.component,a=void 0===r?g:r,o=e.replace,s=e.to,d=e.innerRef,v=Object(l.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(n.__RouterContext.Consumer,null,(function(e){e||Object(u.a)(!1);var r=e.history,n=f(p(s,e.location),e.location),l=n?r.createHref(n):"",g=Object(c.a)({},v,{href:l,navigate:function(){var t=p(s,e.location);(o?r.replace:r.push)(t)}});return h!==b?g.ref=t||d:g.innerRef=d,i.a.createElement(a,g)}))})),m=function(e){return e},y=i.a.forwardRef;"undefined"===typeof y&&(y=m);y((function(e,t){var r=e["aria-current"],a=void 0===r?"page":r,o=e.activeClassName,s=void 0===o?"active":o,d=e.activeStyle,h=e.className,b=e.exact,g=e.isActive,j=e.location,w=e.strict,x=e.style,O=e.to,N=e.innerRef,M=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return i.a.createElement(n.__RouterContext.Consumer,null,(function(e){e||Object(u.a)(!1);var r=j||e.location,o=f(p(O,r),r),l=o.pathname,R=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=R?Object(n.matchPath)(r.pathname,{path:R,exact:b,strict:w}):null,E=!!(g?g(k,r):k),C=E?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(h,s):h,V=E?Object(c.a)({},x,{},d):x,I=Object(c.a)({"aria-current":E&&a||null,className:C,style:V,to:o},M);return m!==y?I.ref=t||N:I.innerRef=N,i.a.createElement(v,I)}))}))},BR8T:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r("vx99")}])},FS32:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("wx14"),a=r("zLVn");function o(e,t){if(null==e)return{};var r,n,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=r("q1tI"),s=r.n(i),c=r("YFqc"),l=r.n(c),u=(r("55Ip"),s.a.createElement);function d(e){var t=e.children,r=e.href,a=e.as,i=e.prepare,s=e.className,c=o(e,["children","href","as","prepare","className"]);return u(l.a,Object(n.a)({href:r,as:a},c),u("a",{className:s,onMouseEnter:function(){return i()}},t))}d.defaultProps={className:""}},bTjV:function(e,t,r){"use strict";var n=r("wx14"),a=r("zLVn"),o=r("q1tI"),i=r.n(o),s=r("17x9"),c=r.n(s),l=r("TSYQ"),u=r.n(l),d=r("33Jr"),p={tag:d.h,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},f=function(e){var t=e.className,r=e.cssModule,o=e.type,s=e.size,c=e.color,l=e.children,p=e.tag,f=Object(a.a)(e,["className","cssModule","type","size","color","children","tag"]),h=Object(d.e)(u()(t,!!s&&"spinner-"+o+"-"+s,"spinner-"+o,!!c&&"text-"+c),r);return i.a.createElement(p,Object(n.a)({role:"status"},f,{className:h}),l&&i.a.createElement("span",{className:Object(d.e)("sr-only",r)},l))};f.propTypes=p,f.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=f},vx99:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.r(t);var a=r("MX0m"),o=r.n(a),i=r("q1tI"),s=r.n(i),c=r("9R94");function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=new Map,f=new Map,h=new Map,b=0;function g(e,t,r){void 0===r&&(r={}),r.threshold||(r.threshold=0);var n=r,a=n.root,o=n.rootMargin,i=n.threshold;if(p.has(e)&&Object(c.a)(!1),e){var s=function(e){return e?h.has(e)?h.get(e):(b+=1,h.set(e,b.toString()),h.get(e)+"_"):""}(a)+(o?i.toString()+"_"+o:i.toString()),l=f.get(s);l||(l=new IntersectionObserver(m,r),s&&f.set(s,l));var u={callback:t,element:e,inView:!1,observerId:s,observer:l,thresholds:l.thresholds||(Array.isArray(i)?i:[i])};return p.set(e,u),l.observe(e),u}}function v(e){if(e){var t=p.get(e);if(t){var r=t.observerId,n=t.observer,a=n.root;n.unobserve(e);var o=!1,i=!1;r&&p.forEach((function(t,n){n!==e&&(t.observerId===r&&(o=!0,i=!0),t.observer.root===a&&(i=!0))})),!i&&a&&h.delete(a),n&&!o&&n.disconnect(),p.delete(e)}}}function m(e){e.forEach((function(e){var t=e.isIntersecting,r=e.intersectionRatio,n=e.target,a=p.get(n);if(a&&r>=0){var o=a.thresholds.some((function(e){return a.inView?r>e:r>=e}));void 0!==t&&(o=o&&t),a.inView=o,a.callback(o,e)}}))}var y=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return l(d(t=e.call.apply(e,[this].concat(n))||this),"state",{inView:!1,entry:void 0}),l(d(t),"node",null),l(d(t),"handleNode",(function(e){t.node&&(v(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),l(d(t),"handleChange",(function(e,r){(e!==t.state.inView||e)&&t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)})),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){this.node||Object(c.a)(!1)},a.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(v(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(v(this.node),this.node=null)},a.componentWillUnmount=function(){this.node&&(v(this.node),this.node=null)},a.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin;g(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n})}},a.render=function(){var e=this.state,t=e.inView,r=e.entry;if(!function(e){return"function"!==typeof e.children}(this.props))return this.props.children({inView:t,entry:r,ref:this.handleNode});var n=this.props,a=n.children,o=n.as,s=n.tag,c=(n.triggerOnce,n.threshold,n.root,n.rootMargin,n.onChange,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(i.createElement)(o||s||"div",u({ref:this.handleNode},c),a)},n}(i.Component);l(y,"displayName","InView"),l(y,"defaultProps",{threshold:0,triggerOnce:!1});var j={inView:!1,entry:void 0};var w=r("IujW"),x=r.n(w),O=r("ok1R"),N=r("rhny"),M=r("wx14"),R=r("zLVn"),k=r("17x9"),E=r.n(k),C=r("TSYQ"),V=r.n(C),I=r("33Jr"),S={tag:I.h,inverse:E.a.bool,color:E.a.string,body:E.a.bool,outline:E.a.bool,className:E.a.string,cssModule:E.a.object,innerRef:E.a.oneOfType([E.a.object,E.a.string,E.a.func])},_=function(e){var t=e.className,r=e.cssModule,n=e.color,a=e.body,o=e.inverse,i=e.outline,c=e.tag,l=e.innerRef,u=Object(R.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),d=Object(I.e)(V()(t,"card",!!o&&"text-white",!!a&&"card-body",!!n&&(i?"border":"bg")+"-"+n),r);return s.a.createElement(c,Object(M.a)({},u,{className:d,ref:l}))};_.propTypes=S,_.defaultProps={tag:"div"};var T=_,P={tag:I.h,className:E.a.string,cssModule:E.a.object},z=function(e){var t=e.className,r=e.cssModule,n=e.tag,a=Object(R.a)(e,["className","cssModule","tag"]),o=Object(I.e)(V()(t,"card-title"),r);return s.a.createElement(n,Object(M.a)({},a,{className:o}))};z.propTypes=P,z.defaultProps={tag:"div"};var A=z,L={tag:I.h,className:E.a.string,cssModule:E.a.object},q=function(e){var t=e.className,r=e.cssModule,n=e.tag,a=Object(R.a)(e,["className","cssModule","tag"]),o=Object(I.e)(V()(t,"card-subtitle"),r);return s.a.createElement(n,Object(M.a)({},a,{className:o}))};q.propTypes=L,q.defaultProps={tag:"div"};var D=q,K=r("sOKU"),J=r("1Yj4"),Y=r("bTjV"),B=r("VtrM"),F=r("7oih"),H=r("f23f"),U=r("hGN7"),W=r("FS32"),X=s.a.createElement;t.default=function(){var e=Object(i.useState)(!1),t=e[0],r=e[1],a=n(function(e){void 0===e&&(e={});var t=Object(i.useRef)(),r=Object(i.useState)(j),n=r[0],a=r[1];return[Object(i.useCallback)((function(r){t.current&&(v(t.current),e.triggerOnce||a(j)),r&&g(r,(function(t,n){a({inView:t,entry:n}),t&&e.triggerOnce&&v(r)}),e),t.current=r}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]),n.inView,n.entry]}({rootMargin:"-50px 0px"}),2),c=a[0],l=a[1],u=Object(B.d)("blog-posts",(function(e){var t=e.offset,n=(0,e.withSWR)(Object(U.d)(t)),a=n.data;return n.error&&r(!0),X(O.a,null,a&&a.posts.nodes.map((function(e){return X(N.a,{lg:"12",key:e.id},X("div",{className:"jsx-2651144421 post-card-container"},X(T,{className:"post-card",body:!0},X(A,{className:"post-card-title"},X("h3",{className:"jsx-2651144421"},e.title)),X(D,{className:"post-card-subtitle"},X("span",{className:"jsx-2651144421"},"".concat(e.author.name," | ").concat(Object(H.d)(e.date)))),X("hr",{className:"jsx-2651144421"}),X("div",{className:"jsx-2651144421 card-text"},X("div",{className:"jsx-2651144421 card-preview-text"},X(x.a,{source:Object(H.e)(e.content,350),escapeHtml:!1}))),X("div",{className:"jsx-2651144421 button-container"},X(W.a,{href:"/blog/".concat(e.slug),as:"".concat("/azerothcore.github.io","/"),passHref:!0,prepare:function(){return Object(U.a)(e.slug)}},X(K.a,{className:"post-card-button"},"Read the post"))))))})),X(o.a,{id:"2651144421"},[".post-card-container.jsx-2651144421{padding:20px;}",".card-text.jsx-2651144421{margin-bottom:10px;}","h3.jsx-2651144421{font-size:1.35rem;margin-bottom:0.3rem;}","hr.jsx-2651144421{margin-top:0.2rem;margin-bottom:0.7rem;}",".button-container.jsx-2651144421{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]))}),(function(e){return e.data&&!e.data.posts.pageInfo.hasNextPage?null:e.data.posts.pageInfo.endCursor}),[]),d=u.pages,p=u.isLoadingMore,f=u.isReachingEnd,h=u.loadMore;return s.a.useEffect((function(){l&&d.length>0&&!f&&!p&&!t&&h()}),[l,d,p,f,t,h]),X(F.a,{page:"blog",title:"AzerothCore Blog",lead:"Stay updated with the latest news from our developers"},X("div",{className:"jsx-3700103141 postlist-container"},X(J.a,null,d,X(O.a,null,X(N.a,null,X("div",{ref:c,className:"jsx-3700103141 load-more"},!f&&!p&&X(K.a,{onClick:h},"Load more"),p&&!t&&X(Y.a,{style:{width:"3rem",height:"3rem"},type:"grow"}),t&&X("p",{className:"jsx-3700103141"},"There was an error fetching the blog posts")))))),X(o.a,{id:"1044260971"},[".load-more.jsx-3700103141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","p.jsx-3700103141{text-align:center;}"]),X(o.a,{id:"3203255367"},[".post-card-title{margin-bottom:0;}",".post-card-subtitle{margin-bottom:10px;}",".post-card-subtitle span{color:var(--gray);font-size:0.9rem;}",".post-card-button{margin-left:auto;}",".card-preview-text p{margin:0;}",".card-preview-text ol,.card-preview-text li{list-style:none;}"]))}}},[["BR8T",1,2,7,6,0,3,4,5]]]);