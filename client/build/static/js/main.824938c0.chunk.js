(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{84:function(n,e,t){"use strict";t.r(e);var c,r,o,i,a,b,s,l,j,d=t(0),x=t(19),h=t.n(x),u=t(17),p=t(15),O=t(12),f=t(3),g=t(1),m=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h1",{children:"Home"})})},y=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h3",{children:"Mis Palabras"})})},v=t(6),k=t(7),I={black1:"#2f3640",black2:"#353b48",grey0:"#dfe4ea",grey1:"#a4b0be",grey2:"#747d8c",grey3:"#57606f",grey4:"#2f3542",red1:"#ff6b81",red2:"#ff4757",green1:"#24e9d0",green2:"#2ed573",blue1:"#2868ee",blue2:"#1e90ff",blue3:"#1b1e34",yellow1:"#eccc68",yellow2:"#ffa502",body:"#fff"},w=k.b.div(c||(c=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  height: 80vh;\n  h1 {\n    font-size: 6rem;\n  }\n  h3 {\n    color: ",";\n  }\n"])),I.grey2),N=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(w,{children:[Object(g.jsx)("h1",{children:"NOT FOUND 404"}),Object(g.jsx)("h3",{children:"Extraviado == Perdido"})]})})},z=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(f.c,{children:[Object(g.jsx)(f.a,{exact:!0,path:"/",children:Object(g.jsx)(m,{})}),Object(g.jsx)(f.a,{exact:!0,path:"/mispalabras",children:Object(g.jsx)(y,{})}),Object(g.jsx)(f.a,{exact:!0,path:"/mispalabras",children:Object(g.jsx)(y,{})}),Object(g.jsx)(f.a,{component:N})]})})},M=t.p+"static/media/logo_icon.0d910a26.svg",C=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(O.b,{to:"/",children:Object(g.jsx)("img",{src:M,alt:"Icono de Logo Wahlcionario",style:{height:"40px"}})})})},F=k.b.div(r||(r=Object(v.a)(["\n  position: relative;\n"]))),T=k.b.button(o||(o=Object(v.a)(["\n  position: absolute;\n  top: 8px;\n  right: 5px;\n  background-color: transparent;\n  border: 0;\n  .bx {\n    color: ",";\n    font-size: 18px;\n    &:hover {\n      color: ",";\n    }\n  }\n"])),I.grey3,I.blue1),J=k.b.input(i||(i=Object(v.a)(["\n  width: 15vw;\n  padding: 6px 40px 6px 40px;\n  font-size: 0.85rem;\n  text-align: center;\n  background-color: ",";\n  border: 0;\n  border-radius: 100px;\n"])),I.grey0),E=function(){return Object(g.jsxs)(F,{children:[Object(g.jsx)(T,{type:"button",children:Object(g.jsx)("i",{className:"bx bx-search"})}),Object(g.jsx)(J,{type:"text",name:"search",placeholder:"Buscador una palabra"})]})},L=t(29),S=t(46),P=t.n(S),B=k.b.div(a||(a=Object(v.a)(["\n  position: relative;\n  display: flex;\n"]))),D=k.b.button(b||(b=Object(v.a)(["\n  background-color: transparent;\n  border: 0;\n  .bx {\n    color: ",";\n    font-size: 18px;\n    &:hover {\n      color: ",";\n    }\n  }\n  .bx-user {\n    color: ",";\n  }\n"])),I.grey1,I.blue1,(function(n){return n.activeuser})),U=k.b.div(s||(s=Object(v.a)(["\n  position: absolute;\n  top: 30px;\n  right: 0;\n  width: 200px;\n  padding: 15px;\n  border-radius: 6px;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);\n  ul {\n    margin: 0;\n    padding: 0;\n    li {\n      margin-bottom: 10px;\n      :last-child {\n        margin-bottom: 0;\n        padding-top: 10px;\n        border-top: 1px dotted ",";\n      }\n      i {\n        position: relative;\n        top: 2px;\n        margin-right: 10px;\n        color: ",";\n      }\n    }\n  }\n"])),I.grey0,I.grey1),W=function(){var n=Object(d.useState)(!1),e=Object(L.a)(n,2),t=e[0],c=e[1],r=Object(d.useState)(!1),o=Object(L.a)(r,2),i=o[0],a=o[1],b=Object(f.f)();return Object(d.useEffect)((function(){P.a.get("http://localhost:3000/user/current",{headers:{"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyZDdlZTkyZjI0OGQzNTAxMWQwMTJmIn0sImlhdCI6MTYxMzc0MTM1MCwiZXhwIjoxNjEzNzc3MzUwfQ.iruzrEBwb44WcqY5vcYKlTnGzn7hUv08Wu556Rk8Lno"}}).then((function(n){n&&a(n.data.data.name)})).catch((function(n){return console.error(n)}));var n=document.querySelector("body");n&&n.addEventListener("mouseover",(function(n){n.clientY>=220&&c(!1)}))})),Object(g.jsxs)(B,{children:[Object(g.jsx)(D,{type:"button",onClick:function(){return b.push("mispalabras")},children:Object(g.jsx)("i",{className:"bx bx-layer"})}),Object(g.jsx)(D,{type:"button",activeuser:t?"#2868ee":"#a4b0be",onClick:function(){return c(!t)},children:Object(g.jsx)("i",{className:"bx bx-user"})}),t&&Object(g.jsx)(U,{className:"boxSubMenu",children:Object(g.jsxs)("ul",{className:"list-unstyled",children:[Object(g.jsx)("li",{children:Object(g.jsx)("p",{children:i||"Desconocido"})}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"bx bx-layer"}),Object(g.jsx)(O.b,{to:"mispalabras",children:"Mis palabras"})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"bx bxs-cog"}),Object(g.jsx)(O.b,{to:"configuracion",children:"Configuraci\xf3n"})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"bx bx-exit"}),Object(g.jsx)(O.b,{to:"logout",children:"Salir"})]})]})})]})},Y=k.b.div(l||(l=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n"]))),Z=function(){return Object(g.jsxs)(Y,{children:[Object(g.jsx)(C,{}),Object(g.jsx)(E,{children:"search"}),Object(g.jsx)(W,{})]})},G=k.b.div(j||(j=Object(v.a)(["\n  min-height: 90vh;\n"]))),Q=function(n){var e=n.children;return Object(g.jsxs)("div",{children:[Object(g.jsx)(Z,{}),Object(g.jsx)(G,{children:e})]})},q=function(){return Object(g.jsx)(O.a,{children:Object(g.jsx)(Q,{children:Object(g.jsx)(z,{})})})},A=t(50),R=t(14),V=t(49),X=t(47),H=t(40),K=t(48),_=function(n){return Object(R.c)({router:Object(p.b)(n)})},$=Object(V.a)();Object(K.createLogger)({level:"info",collapsed:!0,logger:console,predicate:function(n,e){return!0}});var nn,en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,85)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),o(n),i(n)}))},tn=Object(k.a)(nn||(nn=Object(v.a)(["\n  body {\n    font-family:  'Poppins', sans-serif !important;\n    background: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none !important;\n    :hover {\n      color: ",";\n      text-decoration: none !important;\n    }\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-bottom: 0;\n    color: ",";\n    letter-spacing: -1px;\n  }\n  p,\n  li,\n  abbr {\n    color: ",";\n    font-weight: 300;\n    font-size: 0.9rem;\n  }\n  *:focus {\n    outline: none !important;\n    box-shadow: none !important;\n  }\n\n  input {\n    caret-color: ",";\n  }\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  input,\n  label,\n  li,\n  span {\n    ::selection {\n      color: #fff;\n      background-color: ",";\n    }\n  }\n"])),I.body,I.black1,I.blue1,I.black1,I.black1,I.blue1,I.blue1),cn=(t(83),function(n){var e=[],t=[Object(H.a)($)];e=[].concat(t,[X.a]);var c=Object(R.d)(R.a.apply(void 0,Object(A.a)(e)));return Object(R.e)(_($),n,c)}({}));h.a.render(Object(g.jsx)(u.a,{store:cn,children:Object(g.jsxs)(p.a,{history:$,children:[Object(g.jsx)(tn,{}),Object(g.jsx)(q,{})]})}),document.getElementById("root")),en()}},[[84,1,2]]]);
//# sourceMappingURL=main.824938c0.chunk.js.map