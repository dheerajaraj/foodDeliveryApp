(this.webpackJsonpappeng=this.webpackJsonpappeng||[]).push([[0],{21:function(e,n,t){e.exports=t(45)},26:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},27:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(4),c=t.n(o);t(6),t(26),t(27);var i=t(19),u=t(3),l=t(2),m=t.n(l),s=t(15),d=t(16),f=t(18),p=t(17),h=t(20),b=function(e){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.personList.map((function(n,t){return n.name===e.props.selection?r.a.createElement("li",{key:t},n.name," ",n.number):""})))}}]),n}(a.Component),E=function(e){return m.a.post("/api/notes",e).then((function(e){return e.data}))},v=function(e){return m.a.delete("/api/notes/"+e)},g=function(){return m.a.get("/api/notes")},j=function(e){return m.a.put("/api/notes/"+e.id,e).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),m=l[0],s=l[1],d=Object(a.useState)([]),f=Object(u.a)(d,2),p=f[0],h=f[1],w=Object(a.useState)(""),O=Object(u.a)(w,2),k=O[0],y=O[1],S=Object(a.useState)(""),C=Object(u.a)(S,2),x=C[0],D=C[1],B=function(e){!0===window.confirm(e.name+" is already added to phonebook, replace the old number with a new one?")&&j(e).then((function(n){h(p.map((function(n){return n.id===e.id?Object(i.a)({},n,{number:e.number}):n}))),o(""),s("")})).catch((function(e){return D(e)}))},J=function(e){!0===window.confirm("Delete "+e.name+" ?")&&v(e.id).then(h(p.filter((function(n){return n.id!=e.id})))).catch((function(n){alert("the person '".concat(e.name," does not exist'"))}))};Object(a.useEffect)((function(){g().then((function(e){h(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement((function(){return""===x?r.a.createElement("div",null):r.a.createElement("div",{className:"error"},r.a.createElement("p",null,x))}),null),"filter shown with"," ",r.a.createElement("input",{value:k,onChange:function(e){y(e.target.value)}}),r.a.createElement(b,{personList:p,selection:k}),r.a.createElement("h2",null," Add a new"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:t,number:m},a=p.find((function(e){return e.name===n.name}));null!=a?(n.id=a.id,B(n)):E(n).then((function(e){h(p.concat(e)),o(""),s("")})).catch((function(e){console.log("Error message is triggered: "),console.log(e.response.data),D(e.response.data.error),setTimeout((function(){D("")}),5e3)}))}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:function(e){o(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:m,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement("h2",null,"Numbers"),r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement("ul",null,p.map((function(e,n){return r.a.createElement("li",{key:n},e.name," ",e.number," ",r.a.createElement("button",{id:n,onClick:J.bind(void 0,e)},"Delete"))}))))}),null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,n,t){}},[[21,1,2]]]);
//# sourceMappingURL=main.bc301e22.chunk.js.map