(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=a(33),u=(a(95),a(41)),s=a(31),i=a(170),m=a(163),d=a(80),p=a(26),E=a(22),f=a(158),b=a(159),v=a(160),g=a(161),h=a(162),O=function(e){var t=e.users,a=e.loadMoreDisabled,n=void 0!==a&&a,c=e.onLoadMoreClick;return r.a.createElement(i.a,{display:"flex",flexDirection:"column"},r.a.createElement(i.a,null,r.a.createElement(f.a,null,t.map(function(e){return r.a.createElement(b.a,{button:!0,key:e.id,component:u.b,to:"/users/".concat(e.id,"/")},r.a.createElement(v.a,null,r.a.createElement(g.a,{src:e.avatar})),r.a.createElement(h.a,null,e.email))}))),r.a.createElement(i.a,null,r.a.createElement(m.a,{fullWidth:!0,color:"secondary",disabled:n,onClick:c},"Load more...")))},y=a(38),w=a.n(y),j=a(56),x=a(54),k=a(55),R=a.n(k),_={list:function(){var e=Object(x.a)(w.a.mark(function e(t){var a,n,r,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("https://reqres.in/api/users",{params:t});case 2:return a=e.sent,n=a.data,r=n.data,c=Object(j.a)(n,["data"]),e.abrupt("return",{data:r,meta:c});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),get:function(){var e=Object(x.a)(w.a.mark(function e(t){var a,n,r,c,o;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,R.a.get("https://reqres.in/api/users/".concat(a),{params:{delay:3}});case 3:return n=e.sent,r=n.data,c=r.data,o=Object(j.a)(r,["data"]),e.abrupt("return",{data:c,meta:o});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};var M=Object(l.connect)(function(e,t){var a=Object(p.getFrom)(e,"users");return{usersRes:a,users:a.data||[],page:Object(E.get)(a.meta,"page",0),totalPages:Object(E.get)(a.meta,"total_pages",0)}},function(e,t){return{loadUsers:function(t){return e(Object(p.listResources)("users",_.list,{page:t},{append:!0}))}}},function(e,t,a){return Object(d.a)({},e,t,a,{loadMoreDisabled:e.page===e.totalPages||e.usersRes.loading,onLoadMoreClick:function(){t.loadUsers(e.usersRes.meta.page+1)}})})(function(e){var t=e.loadUsers;return Object(n.useEffect)(function(){t()},[t]),e.usersRes.error?r.a.createElement("div",null,"Error"):r.a.createElement(O,e)}),S=a(171),D=a(164),U=a(165),L=a(166),C=a(167),P=a(48),W=a(168),B=function(e){var t=e.loading,a=void 0!==t&&t,n=e.email,c=e.first_name,o=e.last_name,l=e.avatar;return r.a.createElement(S.a,null,r.a.createElement(D.a,null,a?r.a.createElement(U.a,null):r.a.createElement(L.a,{component:"img",height:"140",image:l,alt:"".concat(o,"'s avatar"),title:"".concat(o,"'s avatar")}),r.a.createElement(C.a,null,r.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},o),r.a.createElement(P.a,{variant:"body2",color:"textSecondary",component:"p"},c," ",o," (",n,")"))),r.a.createElement(W.a,null,r.a.createElement(m.a,{size:"small",color:"primary"},"Share"),r.a.createElement(m.a,{size:"small",color:"primary"},"Learn More")))};var F=Object(l.connect)(function(e,t){var a=t.match.params.id;return{id:a,user:Object(p.getFrom)(e,"users",a)}},function(e,t){return{loadUser:function(t){return e(Object(p.fetchResource)("users",_.get,t))}}})(function(e){var t=e.loadUser,a=e.id,c=e.user;return Object(n.useEffect)(function(){t(a)},[a,t]),c.error?r.a.createElement("div",null,"Error"):r.a.createElement(B,Object.assign({},c.data,{loading:c.loading}))}),N=function(e){return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),r.a.createElement("input",{id:"email",placeholder:"Enter your email",type:"text"}),r.a.createElement("button",{type:"button",className:"outline"},"Reset"),r.a.createElement("button",{type:"submit"},"Submit"))},q=a(20),z=a(79);var G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.compose,I=Object(z.a)(),J=Object(q.createStore)(Object(q.combineReducers)({rootReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments.length>1&&arguments[1],e},resources:p.reducer}),G(Object(q.applyMiddleware)(I)));I.run(p.saga);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.Provider,{store:J},r.a.createElement(function(){return r.a.createElement(u.a,null,r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(i.a,{display:"flex"},r.a.createElement(i.a,{display:"flex",flexDirection:"column"},r.a.createElement(i.a,null,r.a.createElement(m.a,{fullWidth:!0,color:"primary",component:u.b,to:"/users/"},"Add user")),r.a.createElement(i.a,{flexGrow:1},r.a.createElement(M,null))),r.a.createElement(i.a,{flexGrow:1},r.a.createElement(s.a,{path:"/",exact:!0,component:function(){return r.a.createElement("div",null)}}),r.a.createElement(s.a,{path:"/users/",exact:!0,component:N}),r.a.createElement(s.a,{path:"/users/:id",component:F})))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a(144)},95:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.c0f490c1.chunk.js.map