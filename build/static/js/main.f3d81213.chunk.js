(this["webpackJsonpassignment-8"]=this["webpackJsonpassignment-8"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var r=c(2),s=c.n(r),n=c(11),a=c.n(n),i=(c(19),c(14)),l=c(10),o=(c(20),c(0)),d=function(){return Object(o.jsxs)("div",{className:"text-center header pt-3 pb-1",children:[Object(o.jsx)("h2",{className:"my-0 text-primary",children:"Select Team Member For Coding Club"}),Object(o.jsx)("p",{style:{width:"800px"},className:"m-0 my-1 text-muted mx-auto",children:"Choose few employs for making an agency named Coding Club.It's a digital agency from where we will provide digital services."}),Object(o.jsx)("h4",{className:"m-0 text-white",children:"Total Budget: 110 MIllion"})]})},A=c(12),m=(c(22),c(5)),x=c(3),j=c(13),b=c(7);x.b.add(b.d,j.a,b.a,b.b,b.c);var h=function(e){var t=e.members,c=e.eventHandler;return Object(o.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:t.map((function(e){return Object(o.jsx)("div",{className:"my-4 mx-2",children:Object(o.jsxs)("div",{className:"card pt-2",style:{width:"18rem"},children:[Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("img",{style:{border:"1px solid #d4cbcb",boxShadow:"0px 0px 30px -12px black"},src:e.img,className:"card-img-top rounded-circle w-50",alt:"..."})}),Object(o.jsx)("div",{className:"mt-3 mb-2",children:Object(o.jsxs)("ul",{className:"list-unstyled d-flex m-0 justify-content-center",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)(m.a,{style:{color:"#3b5998 ",fontSize:"20px",cursor:"pointer"},icon:["fab","facebook-f"]})})}),Object(o.jsx)("li",{className:"mx-3",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)(m.a,{style:{color:"#0077b5",fontSize:"20px",cursor:"pointer"},icon:["fab","linkedin"]})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)(m.a,{style:{color:"#00aced",fontSize:"20px",cursor:"pointer"},icon:["fab","twitter"]})})})]})}),Object(o.jsxs)("div",{className:"card-body mt-0 pt-0",children:[Object(o.jsx)("h5",{className:"card-title text-primary text-uppercase",children:e.name}),Object(o.jsxs)("p",{className:"card-text mx-0 my-1",children:["Post: ",e.post]}),Object(o.jsxs)("p",{className:"card-text mx-0 my-1",children:["Age: ",e.age]}),Object(o.jsxs)("p",{className:"card-text mx-0 my-1",children:["Address: ",e.address]}),Object(o.jsxs)("p",{className:"card-text mx-0 my-1",children:["Salary: ",e.salary]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){return c(e)},className:"btn w-100 btn-primary",children:"Select"})})]})]})},e.id)}))})};function u(e){var t=e.name,c=e.img;return Object(o.jsxs)("li",{className:"text-muted mb-2",children:[Object(o.jsx)("img",{style:{width:"40px",borderRadius:"50%",display:"inline-block",marginRight:"10px"},src:c,alt:""}),t,Object(o.jsx)("button",{className:"btn py-1",children:Object(o.jsx)("small",{onClick:function(){return e.Remove(t)},children:Object(o.jsx)(m.a,{style:{color:"#b50000",fontSize:"20px",cursor:"pointer"},icon:["far","times-circle"]})})})]})}var f=function(e){var t,c=e.members,r=e.Remove,s=e.eventHandler,n=e.selectedMembers,a=0,i=Object(A.a)(n);try{for(i.s();!(t=i.n()).done;){var l=t.value;a+=Number(l.salary)}}catch(d){i.e(d)}finally{i.f()}return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row d-flex flex-wrap justify-content-around",children:[Object(o.jsx)("div",{style:{width:"960px",marginRight:"400px"},children:Object(o.jsx)(h,{eventHandler:s,members:c})}),Object(o.jsxs)("div",{className:"bg-dark shadow summary",children:[Object(o.jsxs)("div",{className:"display-employ  pt-2",children:[Object(o.jsxs)("h3",{style:{fontFamily:"'Roboto', 'sans-serif'"},children:["Total Selected ",n.length," Employs"]}),Object(o.jsxs)("h6",{className:"text-center text-primary",children:["Total Cost: $",a]}),Object(o.jsx)("hr",{}),Object(o.jsx)("ul",{className:"list-unstyled",children:n.map((function(e){return Object(o.jsx)(u,{Remove:r,name:e.name,img:e.img},e.id)}))})]}),Object(o.jsx)("button",{onClick:e.confirm,className:"btn mb-2 btn-primary w-100",children:"Confirm"})]})]})})},O=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"bg-dark",children:Object(o.jsxs)("p",{className:"text-center text-white m-0 py-3",children:["Copyright \xa9 All Reserved |",Object(o.jsx)("a",{className:"ms-1 text-primary text-decoration-none",href:"https://www.facebook.com/groups/codingclubpro",children:"Coding Club Pro - Programming Community"})]})})})};var g=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)([]),a=Object(l.a)(n,2),A=a[0],m=a[1];function x(){var e=localStorage.getItem("cart");return e?JSON.parse(e):[]}return Object(r.useEffect)((function(){fetch("./data.JSON").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(r.useEffect)((function(){var e=x();m(e)}),[c]),Object(o.jsxs)("div",{style:{background:"url(".concat("data:image/jpeg;base64,/9j/7gAOQWRvYmUAZMAAAAAB/9sAQwAEAwMEAwMEBAMEBAQEBQYJBgYFBQYLCAkHCQ0MDg4NDA0NDhAVEg4PExANDRIZExQWFhgYGA8SGhwaFxwWGBgX/9sAQwEEBAQGBQYLBgYLFw8NDxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcX/8AAEQgAZABkAwERAAIRAQMRAf/EABgAAQEBAQEAAAAAAAAAAAAAAAECAAMI/8QAKBABAAICAgEDAwUBAQAAAAAAAQARAiESMVEiQWEycZEDE0KBoVKx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEE/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A8aLYhNLK5WhXtKpriX5hCeuBNuNgwq8NY2siKs8wOauOTTKNia5XAxldFsKyODpgOFqsIvkd3IOTp11Kql07b+8Il+rfmFbKh9MChPdYROXcKcgPpYDimra1CJyetwpTHiV3A2LothGyfn3hWrHjfvAxWPe4QXl8wqwMiRDxDZA52uy6lU2JT35hGCm3/wAhWVX03/UIcfUU/mBXAkEZLdY2faUYy9st/eAcfn/IVVc+oRPJCoV0x1iXIhgchcbJVIUW9QG+WrhBbg1Cqw92EXIOeS45XKAHJuFPIqrgS+loYFJpdfiEDblV6uFbL0umAhd7OvEInJevaoU5HGqYCbq068QgV0XqFZKBHcITdWwBU6ff2gbicbvcKrgY7dkiI5Px+JVLSWd+8IwBt6hQ5b1VfaBQGZ8+YQ/tn3kErvVV9pVYRKe/aEAbNkKck/j19oQ41lpN+0B/bPO5BWXTA5mVY1UqsCbYC+rqEBlxsqFV+n1Ii4HLlxyddyjArftCm7A1r5hEl4NpCqwbyWtQjpIOSuLVyhcdLRqAKrx+YGbwdMKau2iEDk9GiBsrxrdwEOXi6gCoUdQocUBuBR6qurhArj15ganjd68QMY/9QBy+CFVx5bIRuHl1AF3ohWQSzvxCMCvq6hWUGiAgZHzCN+2+YBlWOiBisjeoBT1CnIvogYTjVbgXh9MiKYHLFARJVAPiBTT0VCJxQfUQqv0+2EdJByUM1TUoO8rCFVqqrfmEAuCwrOPbX+whcm6IGcssXcDVe6/2AOWuMApwRYVVct1CDlxKICuQCuoG+v2gF8DRAOLV+0Krgr6oQOXff5hWyP5EIwOTuFZaa3CHjyLPxAzjk/UwBeLW4GoyL8QDbpuFLWGoQgZkDccqr/IF5fSyDmcePzKoxgVl01AMeNeqBX6fTIi4HI4231KA+rUKrVFXcInGr9XUKrGuev6hHSQf/9k=",")"),backgroundAttachment:"fixed"},children:[Object(o.jsx)(d,{}),Object(o.jsx)(f,{Remove:function(e){var t=x().filter((function(t){return t.name!==e}));m(t),localStorage.setItem("cart",JSON.stringify(t))},confirm:function(){m([]),localStorage.setItem("cart",[]),alert("Thanks for Confirmation")},selectedMembers:A,eventHandler:function(e){if(A.find((function(t){return t.id===e.id})))alert("Already Selected \u26a0\ufe0f");else{var t=[].concat(Object(i.a)(A),[e]);m(t),localStorage.setItem("cart",JSON.stringify(t))}},members:c}),Object(o.jsx)(O,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.f3d81213.chunk.js.map