"use strict";(()=>{var e={};e.id=152,e.ids=[152],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8758:(e,r,t)=>{let s;t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>v,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d});var o={};t.r(o),t.d(o,{POST:()=>p});var a=t(3278),n=t(5002),i=t(4877);async function p(e){let r=await s.projects.findMany();return r?Response.json({status:200,message:"ok",data:r}):Response.json({status:500,message:"error"})}s=new(require("@prisma/client")).PrismaClient;let u=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/v1/projects/route",pathname:"/v1/projects",filename:"route",bundlePath:"app/v1/projects/route"},resolvedPagePath:"C:\\Users\\elvxk\\Projects\\api.sandri.my.id\\src\\app\\v1\\projects\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:l}=u,m="/v1/projects/route";function v(){return(0,i.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:d})}},3278:(e,r,t)=>{e.exports=t(517)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[379],()=>t(8758));module.exports=s})();