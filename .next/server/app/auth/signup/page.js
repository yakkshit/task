(()=>{var e={};e.id=778,e.ids=[778],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},3894:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d});var r=t(70260),a=t(28203),n=t(25155),i=t.n(n),o=t(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(s,l);let d=["",{children:["auth",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3552)),"/Users/yakkshit/Downloads/project/temp/technical-tasks/udam/main/technical/app/auth/signup/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,19611)),"/Users/yakkshit/Downloads/project/temp/technical-tasks/udam/main/technical/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,61129)),"/Users/yakkshit/Downloads/project/temp/technical-tasks/udam/main/technical/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/yakkshit/Downloads/project/temp/technical-tasks/udam/main/technical/app/auth/signup/page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/auth/signup/page",pathname:"/auth/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},17475:(e,s,t)=>{Promise.resolve().then(t.bind(t,3552))},83131:(e,s,t)=>{Promise.resolve().then(t.bind(t,84460))},84460:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var r=t(45512),a=t(58009),n=t(15800),i=t(56689),o=t(71671),l=t(41257),d=t(26377),p=t(78100),c=t(50367),u=t(79334),m=t(28531),h=t.n(m);let{Title:x,Text:g}=n.A;function f(){let{notification:e}=i.A.useApp(),[s,t]=(0,a.useState)(!1),{signup:n}=(0,c.A)(),m=(0,u.useRouter)(),f=async s=>{t(!0);try{await n(s.email,s.password),e.success({message:"Signup successful",description:"You have successfully created an account."}),m.push("/")}catch(s){e.error({message:"Signup failed",description:"An error occurred during signup. Please try again."})}finally{t(!1)}};return(0,r.jsx)("div",{className:"max-w-md mx-auto mt-8 p-4",children:(0,r.jsxs)(o.A,{children:[(0,r.jsx)(x,{level:2,className:"text-center mb-6",children:"Create an Account"}),(0,r.jsxs)(l.A,{name:"signup",onFinish:f,layout:"vertical",children:[(0,r.jsx)(l.A.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Please enter a valid email address!"}],children:(0,r.jsx)(d.A,{})}),(0,r.jsx)(l.A.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"},{min:6,message:"Password must be at least 6 characters long!"}],children:(0,r.jsx)(d.A.Password,{})}),(0,r.jsx)(l.A.Item,{name:"confirmPassword",label:"Confirm Password",dependencies:["password"],rules:[{required:!0,message:"Please confirm your password!"},({getFieldValue:e})=>({validator:(s,t)=>t&&e("password")!==t?Promise.reject(Error("The two passwords do not match!")):Promise.resolve()})],children:(0,r.jsx)(d.A.Password,{})}),(0,r.jsx)(l.A.Item,{children:(0,r.jsx)(p.Ay,{type:"primary",htmlType:"submit",loading:s,block:!0,children:"Sign Up"})})]}),(0,r.jsxs)(g,{className:"block text-center",children:["Already have an account? ",(0,r.jsx)(h(),{href:"/auth/login",children:"Log in"})]})]})})}},3552:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});let r=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/yakkshit/Downloads/project/temp/technical-tasks/udam/main/technical/app/auth/signup/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/yakkshit/Downloads/project/temp/technical-tasks/udam/main/technical/app/auth/signup/page.tsx","default")}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[638,763,257,233],()=>t(3894));module.exports=r})();