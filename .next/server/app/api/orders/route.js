(()=>{var e={};e.id=789,e.ids=[789],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},94735:e=>{"use strict";e.exports=require("events")},74977:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>h,serverHooks:()=>j,workAsyncStorage:()=>v,workUnitAsyncStorage:()=>g});var s={};t.r(s),t.d(s,{GET:()=>x,POST:()=>l});var o=t(42706),n=t(28203),a=t(45994),i=t(39187),u=t(89458);let d=new(t.n(u)())({stdTTL:600}),p=process.env.API_AUTH_KEY||"qwerty123";function c(e){return e.headers.get("Authorization")===p}async function x(e){if(!c(e))return i.NextResponse.json({error:"Unauthorized"},{status:401});try{let e=d.get("orders")||[];return i.NextResponse.json(e)}catch(e){return i.NextResponse.json({error:"Failed to fetch orders"},{status:500})}}async function l(e){if(!c(e))return i.NextResponse.json({error:"Unauthorized"},{status:401});try{let r=await e.json(),t=d.get("orders")||[],s={id:`WU${Math.random().toString(36).substr(2,9)}`,...r,status:"order received",createdAt:new Date().toISOString()};return t.push(s),d.set("orders",t),i.NextResponse.json(s)}catch(e){return i.NextResponse.json({error:"Failed to create order"},{status:500})}}let h=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/orders/route",pathname:"/api/orders",filename:"route",bundlePath:"app/api/orders/route"},resolvedPagePath:"/Users/yakkshit/Downloads/project/temp/technical-tasks/udam/main/technical/app/api/orders/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:v,workUnitAsyncStorage:g,serverHooks:j}=h;function m(){return(0,a.patchFetch)({workAsyncStorage:v,workUnitAsyncStorage:g})}},96487:()=>{},78335:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,452,458],()=>t(74977));module.exports=s})();