(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BR8T:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r("vx99")}])},bTjV:function(e,t,r){"use strict";var n=r("wx14"),o=r("zLVn"),a=r("q1tI"),s=r.n(a),i=r("17x9"),c=r.n(i),l=r("TSYQ"),d=r.n(l),u=r("33Jr"),p={tag:u.h,type:c.a.string,size:c.a.string,color:c.a.string,className:c.a.string,cssModule:c.a.object,children:c.a.string},h=function(e){var t=e.className,r=e.cssModule,a=e.type,i=e.size,c=e.color,l=e.children,p=e.tag,h=Object(o.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(u.e)(d()(t,!!i&&"spinner-"+a+"-"+i,"spinner-"+a,!!c&&"text-"+c),r);return s.a.createElement(p,Object(n.a)({role:"status"},h,{className:f}),l&&s.a.createElement("span",{className:Object(u.e)("sr-only",r)},l))};h.propTypes=p,h.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=h},vx99:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.r(t);var o=r("MX0m"),a=r.n(o),s=r("YFqc"),i=r.n(s),c=r("q1tI"),l=r.n(c),d=!0,u="Invariant failed";var p=function(e,t){if(!e){if(d)throw new Error(u);throw new Error(u+": "+(t||""))}};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=new Map,v=new Map,m=new Map,y=0;function w(e,t,r){void 0===r&&(r={}),r.threshold||(r.threshold=0);var n=r,o=n.root,a=n.rootMargin,s=n.threshold;if(b.has(e)&&p(!1),e){var i=function(e){return e?m.has(e)?m.get(e):(y+=1,m.set(e,y.toString()),m.get(e)+"_"):""}(o)+(a?s.toString()+"_"+a:s.toString()),c=v.get(i);c||(c=new IntersectionObserver(x,r),i&&v.set(i,c));var l={callback:t,element:e,inView:!1,observerId:i,observer:c,thresholds:c.thresholds||(Array.isArray(s)?s:[s])};return b.set(e,l),c.observe(e),l}}function j(e){if(e){var t=b.get(e);if(t){var r=t.observerId,n=t.observer,o=n.root;n.unobserve(e);var a=!1,s=!1;r&&b.forEach((function(t,n){n!==e&&(t.observerId===r&&(a=!0,s=!0),t.observer.root===o&&(s=!0))})),!s&&o&&m.delete(o),n&&!a&&n.disconnect(),b.delete(e)}}}function x(e){e.forEach((function(e){var t=e.isIntersecting,r=e.intersectionRatio,n=e.target,o=b.get(n);if(o&&r>=0){var a=o.thresholds.some((function(e){return o.inView?r>e:r>=e}));void 0!==t&&(a=a&&t),o.inView=a,o.callback(a,e)}}))}var N=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return h(g(t=e.call.apply(e,[this].concat(n))||this),"state",{inView:!1,entry:void 0}),h(g(t),"node",null),h(g(t),"handleNode",(function(e){t.node&&(j(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),h(g(t),"handleChange",(function(e,r){(e!==t.state.inView||e)&&t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)})),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){this.node||p(!1)},o.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(j(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(j(this.node),this.node=null)},o.componentWillUnmount=function(){this.node&&(j(this.node),this.node=null)},o.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin;w(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n})}},o.render=function(){var e=this.state,t=e.inView,r=e.entry;if(!function(e){return"function"!==typeof e.children}(this.props))return this.props.children({inView:t,entry:r,ref:this.handleNode});var n=this.props,o=n.children,a=n.as,s=n.tag,i=(n.triggerOnce,n.threshold,n.root,n.rootMargin,n.onChange,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(c.createElement)(a||s||"div",f({ref:this.handleNode},i),o)},n}(c.Component);h(N,"displayName","InView"),h(N,"defaultProps",{threshold:0,triggerOnce:!1});var O={inView:!1,entry:void 0};var M=r("IujW"),V=r.n(M),E=r("ok1R"),k=r("rhny"),I=r("wx14"),T=r("zLVn"),R=r("17x9"),S=r.n(R),C=r("TSYQ"),P=r.n(C),_=r("33Jr"),z={tag:_.h,inverse:S.a.bool,color:S.a.string,body:S.a.bool,outline:S.a.bool,className:S.a.string,cssModule:S.a.object,innerRef:S.a.oneOfType([S.a.object,S.a.string,S.a.func])},A=function(e){var t=e.className,r=e.cssModule,n=e.color,o=e.body,a=e.inverse,s=e.outline,i=e.tag,c=e.innerRef,d=Object(T.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),u=Object(_.e)(P()(t,"card",!!a&&"text-white",!!o&&"card-body",!!n&&(s?"border":"bg")+"-"+n),r);return l.a.createElement(i,Object(I.a)({},d,{className:u,ref:c}))};A.propTypes=z,A.defaultProps={tag:"div"};var L=A,q={tag:_.h,className:S.a.string,cssModule:S.a.object},D=function(e){var t=e.className,r=e.cssModule,n=e.tag,o=Object(T.a)(e,["className","cssModule","tag"]),a=Object(_.e)(P()(t,"card-title"),r);return l.a.createElement(n,Object(I.a)({},o,{className:a}))};D.propTypes=q,D.defaultProps={tag:"div"};var J=D,Y={tag:_.h,className:S.a.string,cssModule:S.a.object},$=function(e){var t=e.className,r=e.cssModule,n=e.tag,o=Object(T.a)(e,["className","cssModule","tag"]),a=Object(_.e)(P()(t,"card-subtitle"),r);return l.a.createElement(n,Object(I.a)({},o,{className:a}))};$.propTypes=Y,$.defaultProps={tag:"div"};var B=$,U=r("sOKU"),W=r("1Yj4"),X=r("bTjV"),Q=r("VtrM"),F=r("7oih"),H=r("f23f"),K=l.a.createElement,G="\nquery Posts($first: Int, $after: String) {\n  posts(first: $first, after: $after) {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    nodes {\n      date\n      title\n      slug\n      id\n      content(format: RENDERED)\n      author {\n        name\n      }\n    }\n  }\n}";t.default=function(){var e=Object(c.useState)(!1),t=e[0],r=e[1],o=n(function(e){void 0===e&&(e={});var t=Object(c.useRef)(),r=Object(c.useState)(O),n=r[0],o=r[1];return[Object(c.useCallback)((function(r){t.current&&(j(t.current),e.triggerOnce||o(O)),r&&w(r,(function(t,n){o({inView:t,entry:n}),t&&e.triggerOnce&&j(r)}),e),t.current=r}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]),n.inView,n.entry]}({rootMargin:"-50px 0px"}),2),s=o[0],d=o[1],u=Object(Q.b)("blog-posts",(function(e){var t=e.offset,n=(0,e.withSWR)(Object(Q.a)([G,t],(function(e,t){return Object(H.e)(e,{first:3,after:t})}))),o=n.data;return n.error&&r(!0),K(E.a,null,o&&o.posts.nodes.map((function(e){return K(k.a,{lg:"12",key:e.id},K("div",{className:"jsx-766358442 post-card-container"},K(L,{className:"post-card",body:!0},K(J,{className:"post-card-title"},K("h3",{className:"jsx-766358442"},e.title)),K(B,{className:"post-card-subtitle"},K("span",{className:"jsx-766358442"},"".concat(e.author.name," | ").concat(Object(H.c)(e.date)))),K("hr",{className:"jsx-766358442"}),K("div",{className:"jsx-766358442 card-text"},K("div",{className:"jsx-766358442 card-preview-text"},K(V.a,{source:Object(H.d)(e.content,350),escapeHtml:!1}))),K(i.a,{href:"/blog/".concat(e.slug),as:"".concat("/azerothcore.github.io","/blog/").concat(e.slug)},K(U.a,{className:"post-card-button"},"Read the post")))))})),K(a.a,{id:"766358442"},[".post-card-container.jsx-766358442{padding:20px;}",".card-text.jsx-766358442{margin-bottom:10px;}","h3.jsx-766358442{font-size:1.35rem;margin-bottom:0.3rem;}","hr.jsx-766358442{margin-top:0.2rem;margin-bottom:0.7rem;}"]))}),(function(e){return e.data&&!e.data.posts.pageInfo.hasNextPage?null:e.data.posts.pageInfo.endCursor}),[]),p=u.pages,h=u.isLoadingMore,f=u.isReachingEnd,g=u.loadMore;return l.a.useEffect((function(){d&&p.length>0&&!f&&!h&&!t&&g()}),[d,p,h,f,t,g]),K(F.a,{page:"blog",title:"AzerothCore Blog",lead:"Stay updated with the latest news from our developers"},K("div",{className:"jsx-3700103141 postlist-container"},K(W.a,null,p,K(E.a,null,K(k.a,null,K("div",{ref:s,className:"jsx-3700103141 load-more"},!f&&!h&&K(U.a,{onClick:g},"Load more"),h&&!t&&K(X.a,{style:{width:"3rem",height:"3rem"},type:"grow"}),t&&K("p",{className:"jsx-3700103141"},"There was an error fetching the blog posts")))))),K(a.a,{id:"1044260971"},[".load-more.jsx-3700103141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","p.jsx-3700103141{text-align:center;}"]),K(a.a,{id:"3203255367"},[".post-card-title{margin-bottom:0;}",".post-card-subtitle{margin-bottom:10px;}",".post-card-subtitle span{color:var(--gray);font-size:0.9rem;}",".post-card-button{margin-left:auto;}",".card-preview-text p{margin:0;}",".card-preview-text ol,.card-preview-text li{list-style:none;}"]))}}},[["BR8T",1,2,6,5,0,3,4]]]);