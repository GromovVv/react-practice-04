(this["webpackJsonpreact-practice-04"]=this["webpackJsonpreact-practice-04"]||[]).push([[1],{40:function(t,e,r){},42:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(8),c=r(2),a=(r(0),r(40),r(1)),i=function(t){var e=t.imgUrl,r=t.title;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"thumb",children:Object(a.jsx)("img",{src:e,alt:r})}),Object(a.jsx)("div",{className:"body",children:Object(a.jsx)("h2",{className:"title",children:r})})]})},o=Object(c.f)((function(t){var e=t.books,r=t.location;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.imgUrl,o=t.title;return Object(a.jsx)("li",{children:Object(a.jsx)(n.b,{to:{pathname:"/books/".concat(e),state:{from:r}},children:Object(a.jsx)(i,{imgUrl:c,title:o})})},e)}))})}))},43:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return a}))},73:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return m}));var n=r(43),c=r(35),a=r.n(c),i=r(36),o=r(37),s=r(38),u=r(44),b=r(41),l=r(0),h=r(39),j=r.n(h),p=r(8),O=r(2),f=r(42),d=r(1),m=function(t){Object(u.a)(r,t);var e=Object(b.a)(r);function r(){var t;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={authors:[]},t}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var t=Object(i.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("http://localhost:4040/authors?_embed=books");case 2:e=t.sent,this.setState({authors:e.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{style:{backgroundColor:"white"},children:"This is author page"}),";",Object(d.jsx)("ul",{children:this.state.authors.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(p.c,{to:"".concat(t.props.match.url,"/").concat(e.id),children:e.name})},e.id)}))}),this.state.authors.length>0&&Object(d.jsx)(O.a,{path:"".concat(this.props.match.path,"/:authorId"),render:function(e){var r=Number(e.match.params.authorId),c=t.state.authors.find((function(t){return t.id===r}));return c&&Object(d.jsx)(f.a,Object(n.a)(Object(n.a)({},e),{},{books:c.books}))}})]})}}]),r}(l.Component)}}]);
//# sourceMappingURL=authors-page.fb1a91c1.chunk.js.map