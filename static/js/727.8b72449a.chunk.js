"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{26:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,c,u=t(861),i=t(439),s=t(757),o=t.n(s),p=t(791),f=t(689),l=t(207),d=t(168),v=t(444),h=v.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n"]))),g=v.ZP.li(a||(a=(0,d.Z)(["\n  flex-basis: calc((100% - 100px) / 3);\n"]))),x=v.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 500;\n  font-size: 16px;\n  padding-top: 8px;\n"]))),m=t(184),w=function(){var n=(0,f.UO)().movieId,e=(0,p.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1],c=(0,p.useState)(null),s=(0,i.Z)(c,2),d=s[0],v=s[1],w=(0,p.useState)(!1),Z=(0,i.Z)(w,2),k=Z[0],y=Z[1];return(0,p.useEffect)((function(){y(!0);var e=function(){var e=(0,u.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.M1)(n);case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0);case 10:return e.prev=10,y(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,m.jsxs)(m.Fragment,{children:[k&&"Loading...",d&&(0,m.jsx)("div",{children:d}),(0,m.jsx)(h,{children:r.map((function(n){return(0,m.jsxs)(g,{children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.profile_path),alt:"".concat(n.name," portrait")}),(0,m.jsxs)(x,{children:[(0,m.jsxs)("p",{children:["Name: ",n.name]}),(0,m.jsxs)("p",{children:["Role: ",n.character]})]})]},n.id)}))})]})}},207:function(n,e,t){t.d(e,{M1:function(){return h},TP:function(){return v},XT:function(){return d},q:function(){return x},tx:function(){return g}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="16c22f8b3f9ec467c6ea31f26412513d";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",o="/search/movie",p="/movie",f="/credits",l="/reviews",d=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,u.Z.get("".concat(s,"?api_key=").concat(i,"&page=").concat(e,"&language=en-US&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e).concat(f,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("/movie/".concat(e).concat(l,"?api_key=").concat(i,"&language=en-US&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(t,"&query=").concat(e,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=727.8b72449a.chunk.js.map