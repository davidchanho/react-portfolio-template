(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('{"a":"service_tugc9mr","b":"template_adsad9f","c":"user_Al2WKEiRel6I9MEfFBgFg"}')},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(1),r=n.n(c),s=n(9),i=n.n(s),o=n(14),l=n(74),j=n(10),d=n(15);function b(){var e=Object(o.a)(["\n  background-color: #202020;\n  img {\n    width: 12vw;\n  }\n  h1 {\n    font-size: 6vw;\n  }\n  p {\n    font-size: 2vw;\n  }\n"]);return b=function(){return e},e}var h=Object(d.a)(j.Element)(b());var u=function(){return Object(a.jsx)(h,{name:"about",children:Object(a.jsxs)(l.a,{fluid:!0,className:"vh-100 text-white px-5 d-flex flex-column align-items-center justify-content-center",children:[Object(a.jsxs)("div",{className:"d-flex align-items-end justify-content-center",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"mr-4",src:"https://ca.slack-edge.com/TL77KG802-ULG4SK5Q9-a5e3db5965c6-512",alt:""})}),Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Hello, I am David Ho"})})]}),Object(a.jsxs)("div",{className:"ml-5",children:[Object(a.jsx)("p",{children:"I'm a Raleigh based Web Developer."}),Object(a.jsx)("p",{children:"I graduated from Coding Bootcamp of UNC Chapel Hill in 2020."}),Object(a.jsx)("p",{children:"I am currently looking for an entry level web developer role."})]})]})})},m=n(16),f=n(18),x=n(11);var O=function(e){var t=e.header;return Object(a.jsx)("h3",{className:"text-center text-capitalize mb-5",children:Object(a.jsx)("u",{children:t})})};function v(){var e=Object(o.a)(["\n    height: 100vh;\n    margin-bottom: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return v=function(){return e},e}var g=Object(d.a)(j.Element)(v());var p=function(e){var t=e.name,n=e.header,c=e.children;return Object(a.jsxs)(g,{name:t,children:[Object(a.jsx)(O,{header:n}),Object(a.jsx)(l.a,{children:c})]})},w=n(46),y=n.n(w);var N=n(78),S=n(75),C=n(30),k={name:"",email:"",message:""};var E=function(){var e=Object(c.useState)(k),t=Object(x.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),i=Object(x.a)(s,2),o=i[0],l=i[1],j=function(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(x.a)(n,2),r=a[0],s=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;s(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("form","{}"),d=Object(x.a)(j,2),b=d[0],h=d[1];Object(c.useEffect)((function(){r(b)}),[b]);var u=function(e){e.preventDefault(),y.a.sendForm(C.a,C.b,"#contactForm",C.c).then((function(e){console.log("SUCCESS!",e.status,e.text),r(k)}),(function(e){console.log("Error")})),r(k)},O=function(e){var t=e.target,a=t.name,c=t.value;n.name.length>3&&n.email.length>3&&n.message.length>3&&l(!1),h(Object(f.a)(Object(f.a)({},n),{},Object(m.a)({},a,c))),r(Object(f.a)(Object(f.a)({},n),{},Object(m.a)({},a,c)))};return Object(a.jsx)(p,{name:"contactForm",header:"Contact Me",children:Object(a.jsxs)(N.a,{id:"contactForm",className:"w-50 vh-100 my-5 d-flex flex-column mx-auto ",onSubmit:u,children:[Object(a.jsxs)(N.a.Group,{controlId:"formName",children:[Object(a.jsx)(N.a.Label,{children:"Name"}),Object(a.jsx)(N.a.Control,{defaultValue:n.name,onChange:O,name:"name",type:"text",placeholder:"Enter name"})]}),Object(a.jsxs)(N.a.Group,{controlId:"formEmail",children:[Object(a.jsx)(N.a.Label,{children:"Email address"}),Object(a.jsx)(N.a.Control,{onChange:O,name:"email",type:"email",placeholder:"Enter email",defaultValue:n.email})]}),Object(a.jsxs)(N.a.Group,{controlId:"formMessage",children:[Object(a.jsx)(N.a.Label,{children:"Message"}),Object(a.jsx)(N.a.Control,{onChange:O,name:"message",type:"text",placeholder:"Enter message",as:"textarea",rows:3,defaultValue:n.message})]}),Object(a.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(a.jsx)(S.a,{variant:"danger",onSubmit:function(e){e.preventDefault(),h("form",k),r(k)},children:"Clear"}),Object(a.jsx)(S.a,{disabled:o,type:"submit",variant:"success",onSubmit:u,children:"Submit"})]})]})})},I=n(47);var F=function(){var e=j.animateScroll.scrollToTop,t=function(){var e=Object(c.useState)({scrollpos:window.pageYOffset,visible:!1}),t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){var e=window.pageYOffset;a({scrollpos:e,visible:e>250})};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),{visible:n.visible}}().visible;return Object(a.jsx)("span",{className:"ml-auto",children:t&&Object(a.jsx)("a",{onClick:e,href:"#!",children:Object(a.jsx)(S.a,{children:Object(a.jsx)(I.a,{size:32})})})})},L=n(77);var M=function(){return Object(a.jsx)(L.a,{fixed:"bottom",children:Object(a.jsx)(F,{})})},_=n(50),z=n(76),B=n(17);var D=function(e){var t=e.title,n=e.github,c=e.link;return Object(a.jsxs)(_.a,{className:"d-flex align-items-center justify-content-between",children:[Object(a.jsx)("div",{children:Object(a.jsx)(z.a,{href:"/id",children:t})}),Object(a.jsxs)("div",{className:"ml-auto d-flex align-items-center",children:[Object(a.jsx)("a",{className:"mr-3",target:"_blank",rel:"noreferrer",href:n,children:Object(a.jsx)(B.a,{size:22})}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:c,children:"Live Demo"})]})]})},G=n(79);var H=function(){return Object(a.jsx)(p,{name:"projects",header:"projects",children:Object(a.jsxs)(G.a,{className:"mx-auto",children:[Object(a.jsx)(D,{title:"Slack",github:"https://github.com/davidchanho/react-native-slack",link:"https://react-firebase-chat-23479.firebaseapp.com/"}),Object(a.jsx)(D,{title:"Medium",github:"https://github.com/davidchanho/mediumClone",link:""})]})})};var J=function(){return Object(a.jsxs)("div",{className:"ml-3 d-flex align-items-center",children:[Object(a.jsx)("a",{className:"mr-3",href:"https://github.com/davidchanho",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(B.a,{size:32})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/david-ho-8603aba7/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(B.b,{size:32})}),Object(a.jsx)("a",{className:"ml-3 font-weight-bold",href:"https://docs.google.com/document/d/1nbkwwengFyqKdw5elYSCLsAaqh5r6FvQC9yi0BHg-dw/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"RESUME"})]})};function K(){var e=Object(o.a)(["\n cursor: pointer;\n margin-right: 15px;\n"]);return K=function(){return e},e}var T=Object(d.a)(j.Link)(K());var U=function(){return Object(a.jsxs)("div",{className:"ml-auto",children:[Object(a.jsx)(T,{activeClass:"active",to:"about",spy:!0,hashSpy:!0,smooth:!0,duration:500,children:"About"}),Object(a.jsx)(T,{activeClass:"active",to:"projects",spy:!0,hashSpy:!0,smooth:!0,duration:500,children:"Projects"}),Object(a.jsx)(T,{activeClass:"active",to:"contactForm",spy:!0,hashSpy:!0,smooth:!0,offset:-200,duration:500,children:"Contact Me"})]})};var W=function(){return Object(a.jsxs)(L.a,{expand:"lg",bg:"light",className:"fixed-top",children:[Object(a.jsxs)(L.a.Brand,{href:"/",className:"d-flex align-items-center",children:["David Chan Ho ",Object(a.jsx)(J,{})]}),Object(a.jsx)(L.a.Toggle,{className:"ml-auto"}),Object(a.jsx)(L.a.Collapse,{children:Object(a.jsx)(U,{})})]})};var A=function(e){var t=e.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)(W,{}),t]})};var R=function(){return Object(a.jsxs)(A,{children:[Object(a.jsx)(u,{}),Object(a.jsx)(H,{}),Object(a.jsx)(E,{}),Object(a.jsx)(M,{})]})};var V=function(){return Object(a.jsx)(R,{})};n(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.c73256b3.chunk.js.map