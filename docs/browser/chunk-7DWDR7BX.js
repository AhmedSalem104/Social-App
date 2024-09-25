import{a as G,c as H,d as j,e as D,g as f,i as L,k as N,l as U,p as M}from"./chunk-MVVDI6KC.js";import{k as E,q as $,v as l}from"./chunk-PD7QXDTS.js";import{Ab as m,Bb as d,Fa as y,Hb as k,Jb as F,Ka as a,Kb as I,M as x,R as g,S as b,V as h,db as u,fa as C,ga as v,ib as w,jb as S,kb as n,lb as o,mb as c,tb as _}from"./chunk-4EDIGTJX.js";import"./chunk-TMC7WMLO.js";var P=(()=>{let e=class e{constructor(t){this._HttpClient=t}CreateComment(t){return this._HttpClient.post(`${l.basUrl}comments`,t)}GetPostComments(t){return this._HttpClient.get(`${l.basUrl}posts/${t}/comments`)}UpdateComment(t,i){return this._HttpClient.put(`${l.basUrl}comments/${t}`,i)}DeleteComment(t){return this._HttpClient.delete(`${l.basUrl}comments/${t}`)}};e.\u0275fac=function(i){return new(i||e)(g($))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var V=(r,e)=>e._id;function A(r,e){if(r&1&&(n(0,"div",2)(1,"article",13)(2,"div",14),c(3,"img",15),n(4,"div",16)(5,"h4",17),m(6),o(),n(7,"p",18),m(8),F(9,"date"),o(),n(10,"p",19),m(11),o()()(),n(12,"div",20)(13,"button",21),m(14,"Like"),o(),n(15,"button",21),m(16,"Reply"),o()()()()),r&2){let s=e.$implicit;a(3),u("src",s.commentCreator.photo,y),a(3),d(s.commentCreator.name),a(2),d(I(9,4,s.createdAt)),a(3),d(s.content)}}var X=(()=>{let e=class e{constructor(){this._CommentService=b(P)}ngOnInit(){this.commentForm=new D({content:new f(null),post:new f(this.postId)}),this._CommentService.GetPostComments(this.postId).subscribe({next:t=>{this.CommentList=t.comments.reverse()}})}sendComment(){this._CommentService.CreateComment(this.commentForm.value).subscribe({next:t=>{this.CommentList=t.comments.reverse(),this.commentForm.get("content")?.reset()}})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-comments"]],inputs:{postId:"postId"},standalone:!0,features:[k],decls:16,vars:1,consts:[[1,"flex","flex-col","gap-4","bg-gray-100","p-4","rounded-lg","shadow-lg","max-w-2xl","mx-auto"],[1,"commentContainer","flex","flex-col","gap-4"],[1,"space-y-6"],[1,"mt-4"],[1,"w-full"],[1,"w-full",3,"ngSubmit","formGroup"],["for","chat",1,"sr-only"],[1,"flex","items-center","px-3","py-2","rounded-lg","bg-gray-50","dark:bg-gray-700","w-full"],["formControlName","content","id","chat","rows","1","placeholder","Your comment...",1,"block","w-full","text-sm","text-gray-900","bg-white","rounded-lg","border","border-gray-300","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-800","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["type","submit",1,"inline-flex","justify-center","p-2","text-blue-600","rounded-full","cursor-pointer","hover:bg-blue-100","dark:text-blue-500","dark:hover:bg-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 18 20",1,"w-5","h-5","rotate-90","rtl:-rotate-90"],["d","m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"],[1,"sr-only"],[1,"bg-white","p-4","rounded-md","shadow-md","flex","flex-col","gap-3"],[1,"flex","items-start","gap-3"],["alt","Profile",1,"w-10","h-10","rounded-full","object-cover",3,"src"],[1,"flex-1"],[1,"font-semibold","text-sm","sm:text-base"],[1,"text-xs","text-gray-500"],[1,"mt-2","text-sm","sm:text-base","text-gray-700"],[1,"flex","gap-4","mt-2"],[1,"text-blue-600","text-sm","hover:underline"]],template:function(i,p){i&1&&(n(0,"section",0)(1,"div",1),w(2,A,17,6,"div",2,V),o()(),n(4,"section",3)(5,"div",4)(6,"form",5),_("ngSubmit",function(){return p.sendComment()}),n(7,"label",6),m(8,"Your comment"),o(),n(9,"div",7),c(10,"textarea",8),n(11,"button",9),C(),n(12,"svg",10),c(13,"path",11),o(),v(),n(14,"span",12),m(15,"Send comment"),o()()()()()()),i&2&&(a(2),S(p.CommentList),a(4),u("formGroup",p.commentForm))},dependencies:[E,M,L,G,H,j,N,U],styles:[".commentContainer[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}"]});let r=e;return r})();export{X as CommentsComponent};
