(this["webpackJsonpassignment-8"]=this["webpackJsonpassignment-8"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(2),r=c.n(s),n=c(11),a=c.n(n),i=(c(18),c(13)),l=c(10),d=(c(19),c(0)),A=function(){return Object(d.jsxs)("div",{className:"text-center header pt-3 pb-1",children:[Object(d.jsx)("h2",{className:"my-0 text-primary",children:"Select Team Member For Coding Club"}),Object(d.jsx)("p",{style:{width:"800px"},className:"m-0 my-1 text-muted mx-auto",children:"Choose few employs for making an agency named Coding Club.It's a digital agency from where we will provide digital services."}),Object(d.jsx)("h4",{className:"m-0 text-white",children:"Total Budget: 110 MIllion"})]})},o=c(12),x=(c(21),c(7)),j=c(3),b=c(6);j.b.add(b.d,b.a,b.b,b.c);var m=function(e){var t=e.members,c=e.eventHandler;return Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:t.map((function(e){return Object(d.jsx)("div",{className:"my-4 mx-2",children:Object(d.jsxs)("div",{className:"card pt-2",style:{width:"18rem"},children:[Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("img",{style:{border:"1px solid #d4cbcb",boxShadow:"0px 0px 30px -12px black"},src:e.img,className:"card-img-top rounded-circle w-50",alt:"..."})}),Object(d.jsx)("div",{className:"mt-3 mb-2",children:Object(d.jsxs)("ul",{className:"list-unstyled d-flex m-0 justify-content-center",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:Object(d.jsx)(x.a,{style:{color:"#3b5998 ",fontSize:"20px",cursor:"pointer"},icon:["fab","facebook-f"]})})}),Object(d.jsx)("li",{className:"mx-3",children:Object(d.jsx)("a",{href:"/",children:Object(d.jsx)(x.a,{style:{color:"#0077b5",fontSize:"20px",cursor:"pointer"},icon:["fab","linkedin"]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:Object(d.jsx)(x.a,{style:{color:"#00aced",fontSize:"20px",cursor:"pointer"},icon:["fab","twitter"]})})})]})}),Object(d.jsxs)("div",{className:"card-body mt-0 pt-0",children:[Object(d.jsx)("h5",{className:"card-title text-primary text-uppercase",children:e.name}),Object(d.jsxs)("p",{className:"card-text mx-0 my-1",children:["Post: ",e.post]}),Object(d.jsxs)("p",{className:"card-text mx-0 my-1",children:["Age: ",e.age]}),Object(d.jsxs)("p",{className:"card-text mx-0 my-1",children:["Address: ",e.address]}),Object(d.jsxs)("p",{className:"card-text mx-0 my-1",children:["Salary: ",e.salary]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return c(e)},className:"btn w-100 btn-primary",children:"Select"})})]})]})},e.id)}))})};function h(e){var t=e.name,c=e.img;return Object(d.jsxs)("li",{className:"text-muted mb-2",children:[Object(d.jsx)("img",{style:{width:"40px",borderRadius:"50%",display:"inline-block",marginRight:"10px"},src:c,alt:""}),t]})}var u=function(e){var t,c=e.members,s=e.eventHandler,r=e.selectedMembers,n=0,a=Object(o.a)(r);try{for(a.s();!(t=a.n()).done;){var i=t.value;n+=Number(i.salary)}}catch(l){a.e(l)}finally{a.f()}return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row d-flex flex-wrap justify-content-around",children:[Object(d.jsx)("div",{style:{width:"960px",marginRight:"400px"},children:Object(d.jsx)(m,{eventHandler:s,members:c})}),Object(d.jsxs)("div",{className:"bg-dark shadow summary",children:[Object(d.jsxs)("div",{className:"display-employ  pt-2",children:[Object(d.jsxs)("h3",{style:{fontFamily:"'Roboto', 'sans-serif'"},children:["Total Selected ",r.length," Employs"]}),Object(d.jsxs)("h6",{className:"text-center text-primary",children:["Total Cost: $",n]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"list-unstyled",children:r.map((function(e){return Object(d.jsx)(h,{name:e.name,img:e.img},e.id)}))})]}),Object(d.jsx)("button",{className:"btn mb-2 btn-primary w-100",children:"Confirm"})]})]})})},O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"bg-dark",children:Object(d.jsxs)("p",{className:"text-center text-white m-0 py-3",children:["Copyright \xa9 All Reserved |",Object(d.jsx)("a",{className:"ms-1 text-primary text-decoration-none",href:"https://www.facebook.com/groups/codingclubpro",children:"Coding Club Pro - Programming Community"})]})})})};var f=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)([]),a=Object(l.a)(n,2),o=a[0],x=a[1];return Object(s.useEffect)((function(){fetch("./data.JSON").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(s.useEffect)((function(){var e=function(){var e,t=localStorage.getItem("cart");e=t?JSON.parse(t):[];return e}();x(e)}),[c]),Object(d.jsxs)("div",{style:{background:"url(".concat("data:image/jpeg;base64,/9j/7gAOQWRvYmUAZMAAAAAB/9sAQwAEAwMEAwMEBAMEBAQEBQYJBgYFBQYLCAkHCQ0MDg4NDA0NDhAVEg4PExANDRIZExQWFhgYGA8SGhwaFxwWGBgX/9sAQwEEBAQGBQYLBgYLFw8NDxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcX/8AAEQgAZABkAwERAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAECAAMI/8QAKBABAAICAgEDAwUBAQAAAAAAAQARAiESMVEiQWEycZEDE0KBoVKx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEE/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A8aLYhNLK5WhXtKpriX5hCeuBNuNgwq8NY2siKs8wOauOTTKNia5XAxldFsKyODpgOFqsIvkd3IOTp11Kql07b+8Il+rfmFbKh9MChPdYROXcKcgPpYDimra1CJyetwpTHiV3A2LothGyfn3hWrHjfvAxWPe4QXl8wqwMiRDxDZA52uy6lU2JT35hGCm3/wAhWVX03/UIcfUU/mBXAkEZLdY2faUYy9st/eAcfn/IVVc+oRPJCoV0x1iXIhgchcbJVIUW9QG+WrhBbg1Cqw92EXIOeS45XKAHJuFPIqrgS+loYFJpdfiEDblV6uFbL0umAhd7OvEInJevaoU5HGqYCbq068QgV0XqFZKBHcITdWwBU6ff2gbicbvcKrgY7dkiI5Px+JVLSWd+8IwBt6hQ5b1VfaBQGZ8+YQ/tn3kErvVV9pVYRKe/aEAbNkKck/j19oQ41lpN+0B/bPO5BWXTA5mVY1UqsCbYC+rqEBlxsqFV+n1Ii4HLlxyddyjArftCm7A1r5hEl4NpCqwbyWtQjpIOSuLVyhcdLRqAKrx+YGbwdMKau2iEDk9GiBsrxrdwEOXi6gCoUdQocUBuBR6qurhArj15ganjd68QMY/9QBy+CFVx5bIRuHl1AF3ohWQSzvxCMCvq6hWUGiAgZHzCN+2+YBlWOiBisjeoBT1CnIvogYTjVbgXh9MiKYHLFARJVAPiBTT0VCJxQfUQqv0+2EdJByUM1TUoO8rCFVqqrfmEAuCwrOPbX+whcm6IGcssXcDVe6/2AOWuMApwRYVVct1CDlxKICuQCuoG+v2gF8DRAOLV+0Krgr6oQOXff5hWyP5EIwOTuFZaa3CHjyLPxAzjk/UwBeLW4GoyL8QDbpuFLWGoQgZkDccqr/IF5fSyDmcePzKoxgVl01AMeNeqBX6fTIi4HI4231KA+rUKrVFXcInGr9XUKrGuev6hHSQf/9k=",")"),backgroundAttachment:"fixed"},children:[Object(d.jsx)(A,{}),Object(d.jsx)(u,{selectedMembers:o,eventHandler:function(e){if(o.find((function(t){return t.id===e.id})))alert("Already Selected \u26a0\ufe0f");else{var t=[].concat(Object(i.a)(o),[e]);x(t),localStorage.setItem("cart",JSON.stringify(t))}},members:c}),Object(d.jsx)(O,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.7beb9ec0.chunk.js.map