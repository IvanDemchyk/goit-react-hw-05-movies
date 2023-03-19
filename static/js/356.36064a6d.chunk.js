"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[356],{356:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,o=t(861),i=t(439),s=t(757),u=t.n(s),l=t(689),p=t(791),d=t(207),f=t(459),v=t(168),h=t(444),x=t(87),g=(0,h.ZP)(x.rU)(r||(r=(0,v.Z)(["\n  text-decoration: none;\n  color: #2a363b;\n  font-size: 25px;\n  font-weight: 500;\n  display: inline-block;\n  border-radius: 8px;\n  border: 2px solid #2a363b;\n  width: 80px;\n  text-align: center;\n  margin-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    color: #2196f3;\n    border: 2px solid #2196f3;\n  }\n"]))),w=h.ZP.h1(a||(a=(0,v.Z)(["\n  padding: 8px;\n  margin-top: 0;\n  border-radius: 8px;\n  color: #02121beb;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-color: #2caf51;\n"]))),m=(0,h.ZP)(x.OL)(c||(c=(0,v.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 12px;\n  font-weight: 500;\n  color: #2a363b;\n  font-size: 20px;\n\n  &:hover,\n  &:focus {\n    color: #2196f3;\n  }\n\n  &.active {\n    color: #1ff767;\n  }\n"]))),b=t(184),k=function(){var n,e,t=(0,p.useState)({}),r=(0,i.Z)(t,2),a=r[0],c=r[1],s=(0,p.useState)(null),v=(0,i.Z)(s,2),h=v[0],x=v[1],k=(0,p.useState)(!1),Z=(0,i.Z)(k,2),j=Z[0],y=Z[1],_=(0,l.TH)(),U=null!==(n=null===_||void 0===_||null===(e=_.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",S=(0,l.UO)().movieId;(0,p.useEffect)((function(){y(!0);var n=function(){var n=(0,o.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.TP)(S);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),x(n.t0);case 10:return n.prev=10,y(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[S]);return(0,b.jsxs)(f.W2,{children:[(0,b.jsx)(g,{to:U,children:"Back"}),a&&(0,b.jsx)(w,{children:a.title}),j&&"Loading...",h&&(0,b.jsx)("div",{children:h}),a&&(0,b.jsxs)("div",{children:[(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a.poster_path),alt:a.title}),(0,b.jsx)("h3",{children:a.original_title}),(0,b.jsxs)("p",{children:["(",new Date(a.release_date).getFullYear(),")"]}),(0,b.jsxs)("p",{children:["User score: ",a.popularity]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:a.overview})]})]}),(0,b.jsx)("hr",{}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Additional information"}),(0,b.jsx)(m,{to:"/movies/".concat(S,"/cast"),state:_.state,children:"Cast"}),(0,b.jsx)(m,{to:"/movies/".concat(S,"/reviews"),state:_.state,children:"Reviews"}),(0,b.jsx)("hr",{}),(0,b.jsx)(l.j3,{})]})]})}},207:function(n,e,t){t.d(e,{M1:function(){return h},TP:function(){return v},XT:function(){return f},q:function(){return g},tx:function(){return x}});var r=t(861),a=t(757),c=t.n(a),o=t(243),i="16c22f8b3f9ec467c6ea31f26412513d";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",u="/search/movie",l="/movie",p="/credits",d="/reviews",f=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,o.Z.get("".concat(s,"?api_key=").concat(i,"&page=").concat(e,"&language=en-US&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(l,"/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e).concat(p,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o.Z.get("/movie/".concat(e).concat(d,"?api_key=").concat(i,"&language=en-US&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o.Z.get("".concat(u,"?api_key=").concat(i,"&page=").concat(t,"&query=").concat(e,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=356.36064a6d.chunk.js.map