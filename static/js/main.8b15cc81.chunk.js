(this.webpackJsonpcsinout=this.webpackJsonpcsinout||[]).push([[0],{99:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(0),r=n.n(i),o=n(10),c=n.n(o),s=n(33),l=n(13),d=n(11),u=n(82),p=n(40),b=function(e){var t=e.component,n=Object(u.a)(e,["component"]),i=Object(p.b)((function(e){return{isAuthenticated:!0}})).isAuthenticated;return Object(a.jsx)(l.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return i?Object(a.jsx)(t,Object(d.a)({},e)):Object(a.jsx)(l.a,{to:"/home"})}}))},j=n(80),h=n(156),m=n(154),g=n(149),f=n(14),O=n(30),x=n(81),w=n(139),v=n(145),y=n(155),S=n(59),C=n(142),_=n(158),E=Object(w.a)((function(e){return{root:{backgroundColor:"#ffffff",overflowY:"hidden"},gridContainer:{height:"100vh"},image:{height:"102%",position:"absolute",bottom:0},paper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",maxWidth:"640px",margin:"0 auto",backgroundColor:"3ffffff"},form:{width:"80%"},submit:{margin:e.spacing(3,0,3),padding:e.spacing(2)},link:{color:"inherit",textDecoration:"inherit"},stack:{zIndex:1,color:"rgb(0,0,0)"},loginTitle:{zIndex:1,color:"rgba(0,0,0,0.9)"}}}));function N(){var e=E(),t=Object(l.g)(),n=Object(x.a)(),r=n.register,o=n.handleSubmit,c=Object(p.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}})).isAuthenticated,s=Object(p.b)((function(e){return e.authentication.user})),u=Object(i.useState)({email:"",password:""}),b=Object(O.a)(u,2),j=b[0],h=b[1],m=function(e){return function(t){h(Object(d.a)(Object(d.a)({},j),{},Object(f.a)({},e,t.target.value)))}},g=function(e){e.preventDefault(),t.replace("/home")};return c&&("client"===s.role?t.replace("/new-request"):t.replace("/pending-requests")),Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(C.a,{container:!0,className:e.gridContainer,children:[Object(a.jsx)(_.a,{smDown:!0,children:Object(a.jsx)(C.a,{item:!0,md:8,lg:8,cl:8,className:e.gridImage,children:Object(a.jsx)("img",{alt:"CSINOUT",className:e.image})})}),Object(a.jsx)(C.a,{item:!0,xs:12,md:4,lg:4,xl:4,children:Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(S.a,{component:"h1",variant:"h5",className:e.stack,children:"Altimetrik Alumini Portal"}),Object(a.jsx)(S.a,{component:"h1",variant:"h6",className:e.loginTitle,children:"Login"}),Object(a.jsxs)("form",{className:e.form,onSubmit:o(g),children:[Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"email",placeholder:"email",name:"email",autoComplete:"email",autoFocus:!0,onChange:m("email"),inputRef:r({required:!0,max:10,min:5})}),Object(a.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",placeholder:"Enter Password",type:"password",id:"password",autoComplete:"current-password",onChange:m("password")}),Object(a.jsx)(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disableElevation:!0,onClick:g,disabled:!(j.email&&j.password),children:"Login"})]})]})})]})})}n(3),n(144),n(146),n(147),n(148),n(159),n(150),Object(w.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#F26522"},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap",backgroundColor:"#F26522"},drawerOpen:{width:240,backgroundColor:"#F26522",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(f.a)({backgroundColor:"#F26522",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(7)+1}),toolbar:Object(d.a)({backgroundColor:"#F26522",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1},image:{width:"212px"},logo_small:{width:"40px",height:"40px"},logo:{width:"100px",height:"60px"},listTop:{overflow:"hidden",paddingTop:"0px"},listBottom:{overflow:"hidden",paddingTop:"0px",marginTop:"auto",marginBottom:"10px"},logout:{marginLeft:"auto"},link:{textDecoration:"none",color:"#000000"},isSelected:{borderRight:"2px solid #fff",color:"white"},isSelectedListItem:{color:"white"}}}));var T=n(152),k=n(153),D=n(151);function q(e){var t=e.children,n=e.window,a=Object(D.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return r.a.cloneElement(t,{elevation:a?4:0})}function R(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,Object(d.a)(Object(d.a)({},e),{},{children:Object(a.jsx)(T.a,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(S.a,{variant:"h6",children:"Logo"})})})})),Object(a.jsx)(k.a,{})]})}var I=Object(w.a)((function(e){return{root:{display:"flex",width:"100%",marginLeft:"0px"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:"#f9f9f9",maxWidth:"1470px",minWidth:" 200px",padding:e.spacing(2)}}}));function A(){var e=I();return Object(a.jsxs)("div",{style:{display:"Flex"},children:[Object(a.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(l.a,{to:"/login"})}}),Object(a.jsx)(l.b,{path:"/",component:R}),Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)("main",{className:e.content,children:[Object(a.jsx)("div",{className:e.toolbar}),Object(a.jsx)(l.d,{})]})})]})}var L=Object(j.a)({props:{MuiButtonBase:{disableRipple:!0}},palette:{primary:{main:"#0460a9"},secondary:{main:"#F26522"},background:"#fff"},typography:{fontFamily:"Open Sans",h1:{fontSize:"6.857rem",lineHeight:"8rem"},h2:{fontSize:"4.286rem",lineHeight:"5.143rem"},h3:{fontSize:"3.429rem",lineHeight:"4rem"},h4:{fontSize:"2.429rem",lineHeight:"2.571rem"},h5:{fontSize:"1.714rem",lineHeight:"1.714rem"},h6:{fontSize:"1.0rem",lineHeight:"1.714rem"},caption:{fontSize:"0.857rem",lineHeight:"0.857rem"},button:{fontSize:"1rem",lineHeight:"1.143rem"},overline:{fontSize:"0.714rem",lineHeight:"1.143rem"}},chip:{pending:{color:"#fff",background:"linear-gradient(to right bottom, #04f7f3, #0072ff)"},granted:{color:"#fff",background:"linear-gradient(to right bottom, #13f448, #4f9305)"},declined:{color:"#fff",background:"linear-gradient(to right bottom,#fcb3b3, #f40c0c )"}}});var z=function(){return Object(a.jsx)(h.b,{injectFirst:!0,children:Object(a.jsxs)(m.a,{theme:L,children:[Object(a.jsx)(g.a,{}),Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/login",component:N}),Object(a.jsx)(b,{path:"/",component:A})]})})]})})},F=n(16),H=n(36),U=n(79),W="NEW_REQUEST_DRAFT",X="CLEAR_REQUEST_DRAFT",B="REQUEST_GET_OPTIONS",G="LOGOUT",P="LOGIN_SUCCESS",V={newRequestData:{requestType:"",accountName:"",businessCCCostCenter:"",projectName:"",AWSService:"",resourceType:"",quantity:"",budget:"",justification:"",usageDuration:"",projectSponsor:""},requestOptions:[]};var Q={isLoading:!0,user:null,isAuthenticated:!1},J=Object(H.c)({request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(d.a)(Object(d.a)({},e),{},{newRequestData:{requestType:t.payload.requestType,accountName:t.payload.accountName,businessCCCostCenter:t.payload.businessCCCostCenter,projectName:t.payload.projectName,AWSService:t.payload.AWSService,resourceType:t.payload.resourceType,quantity:t.payload.quantity,budget:t.payload.budget,justification:t.payload.justification,usageDuration:t.payload.usageDuration,projectSponsor:t.payload.projectSponsor}});case B:var n={};return t.payload.map((function(e){return n=Object(d.a)(Object(d.a)({},n),{},Object(f.a)({},e.optionName,e.items))})),Object(d.a)(Object(d.a)({},e),{},{requestOptions:n});case X:var a={};return Object.keys(e.newRequestData).forEach((function(e){return a[e]=""})),Object(d.a)(Object(d.a)({},e),{},{newRequestData:a});default:return e}},authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,user:t.payload});case G:return localStorage.removeItem("token"),Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isAuthenticated:!1});default:return e}}}),M=function(e,t){return"LOGOUT"===t.type&&(e=void 0),J(e,t)},Y=[U.a],K=[H.a.apply(void 0,Y),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()?window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__():null].filter((function(e){return e})),Z=Object(H.e)(M,{},H.d.apply(void 0,Object(F.a)(K)));c.a.render(Object(a.jsx)(p.a,{store:Z,children:Object(a.jsx)(z,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.8b15cc81.chunk.js.map