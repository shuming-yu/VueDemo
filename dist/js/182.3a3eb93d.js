"use strict";(self["webpackChunkshuming_yu"]=self["webpackChunkshuming_yu"]||[]).push([[182],{5182:function(s,e,n){n.r(e),n.d(e,{default:function(){return f}});var t=n(3396),o=n(9242);const r=s=>((0,t.dD)("data-v-2d530594"),s=s(),(0,t.Cn)(),s),a={id:"wrapper"},u={class:"loginbox container mt-5"},i=r((()=>(0,t._)("h2",{class:"mb-3",style:{"text-align":"center"}},"後台管理系統",-1))),l={class:"group mb-2"},d=r((()=>(0,t._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1))),c={class:"group mb-2"},p=r((()=>(0,t._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1))),m=r((()=>(0,t._)("div",{class:"text-end btn-group mt-4"},[(0,t._)("button",{class:"btn btn-lg btn-block",type:"submit"}," 登入 "),(0,t._)("button",{class:"btn btn-lg btn-block disabled",type:"submit"}," 註冊 ")],-1)));function b(s,e,n,r,b,h){return(0,t.wg)(),(0,t.iD)("div",a,[(0,t._)("div",u,[(0,t._)("form",{class:"form",onSubmit:e[2]||(e[2]=(0,o.iM)(((...s)=>h.signIn&&h.signIn(...s)),["prevent"]))},[i,(0,t._)("div",l,[d,(0,t.wy)((0,t._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"yu.shuming0829@gmail.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>b.user.username=s)},null,512),[[o.nr,b.user.username]])]),(0,t._)("div",c,[p,(0,t.wy)((0,t._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"1qaz@WSX",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>b.user.password=s)},null,512),[[o.nr,b.user.password]])]),m],32)])])}var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:n}=s.data;console.log("token:",e,"expired:",n),document.cookie=`benToken=${e}; expires=${new Date(n)}`,this.$router.push("/dashboard/products")}}))}}},g=n(89);const _=(0,g.Z)(h,[["render",b],["__scopeId","data-v-2d530594"]]);var f=_}}]);
//# sourceMappingURL=182.3a3eb93d.js.map