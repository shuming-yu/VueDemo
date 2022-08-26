"use strict";(self["webpackChunkshuming_yu"]=self["webpackChunkshuming_yu"]||[]).push([[797],{9797:function(o,t,e){e.r(t),e.d(t,{default:function(){return q}});var n=e(3396),l=e(7139);const a={class:"text-end"},s={class:"table mt-4"},i=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否付款"),(0,n._)("th",null,"編輯")])],-1),d={class:"text-right"},u={key:0,class:"text-success"},p={key:1,class:"text-danger"},c={class:"btn-group"},r=["onClick"],h=["onClick"];function m(o,t,e,m,_,b){const C=(0,n.up)("Loading"),g=(0,n.up)("CouponModal"),f=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(C,{active:_.isLoading},null,8,["active"]),(0,n._)("div",a,[(0,n._)("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=o=>b.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,n._)("table",s,[i,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.coupons,((t,e)=>((0,n.wg)(),(0,n.iD)("tr",{key:"item"+e},[(0,n._)("td",null,(0,l.zw)(t.title),1),(0,n._)("td",null,(0,l.zw)(t.percent),1),(0,n._)("td",d,(0,l.zw)(o.$filters.date(t.due_date)),1),(0,n._)("td",null,[1===t.is_enabled?((0,n.wg)(),(0,n.iD)("span",u,"啟用")):((0,n.wg)(),(0,n.iD)("span",p,"未啟用"))]),(0,n._)("td",null,[(0,n._)("div",c,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>b.openCouponModal(!1,t)}," 編輯 ",8,r),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>b.openDelModal(t)}," 刪除 ",8,h)])])])))),128))])]),(0,n.Wm)(g,{ref:"couponModal",propCoupon:_.tempCoupon,onConfirmCoupon:b.confirmCoupon},null,8,["propCoupon","onConfirmCoupon"]),(0,n.Wm)(f,{ref:"delModal",item:_.tempCoupon,onDelProdcut:b.delCoupon},null,8,["item","onDelProdcut"])],64)}var _=e(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog",role:"document"},g={class:"modal-content border-0"},f=(0,n._)("div",{class:"modal-header bg-primary text-white"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},w={class:"mb-3"},v=(0,n._)("label",{for:"title"},"標題",-1),M={class:"mb-3"},k=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),x={class:"mb-3"},D=(0,n._)("label",{for:"price"},"折扣百分比",-1),$={class:"mb-3"},L=(0,n._)("label",{for:"due_date"},"到期日",-1),U={class:"mb-3"},V={class:"form-check"},j=(0,n._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),z={class:"modal-footer"},N=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function W(o,t,e,l,a,s){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",C,[(0,n._)("div",g,[f,(0,n._)("div",y,[(0,n._)("div",w,[v,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[0]||(t[0]=o=>a.gotCoupon.title=o)},null,512),[[_.nr,a.gotCoupon.title]])]),(0,n._)("div",M,[k,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[1]||(t[1]=o=>a.gotCoupon.code=o)},null,512),[[_.nr,a.gotCoupon.code]])]),(0,n._)("div",x,[D,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[2]||(t[2]=o=>a.gotCoupon.percent=o)},null,512),[[_.nr,a.gotCoupon.percent]])]),(0,n._)("div",$,[L,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[3]||(t[3]=o=>a.due_date=o)},null,512),[[_.nr,a.due_date]])]),(0,n._)("div",U,[(0,n._)("div",V,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=o=>a.gotCoupon.is_enabled=o)},null,512),[[_.e8,a.gotCoupon.is_enabled]]),j])])]),(0,n._)("div",z,[N,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>o.$emit("confirm-coupon",a.gotCoupon))}," 確認 ")])])])],512)}var Z=e(7972),H=e.n(Z),O={data(){return{modal:{},gotCoupon:{},due_date:""}},props:{propCoupon:{type:Object,default(){return{}}}},watch:{propCoupon(){this.gotCoupon=this.propCoupon;const o=new Date(1e3*this.propCoupon.due_date).toISOString().split("T");[this.due_date]=o},due_date(){this.gotCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(H())(this.$refs.modal)}},P=e(89);const S=(0,P.Z)(O,[["render",W]]);var T=S,Y=e(7349),I={data(){return{coupons:[],pagination:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!1,isLoading:!1}},components:{CouponModal:T,DelModal:Y.Z},inject:["emitter"],methods:{getCoupons(){this.isLoading=!0;const o="https://vue3-course-api.hexschool.io/api/shuming-api/admin/coupons";this.$http.get(o).then((o=>{console.log(o),this.coupons=o.data.coupons,this.pagination=o.data.pagination,this.isLoading=!1}))},openCouponModal(o,t){this.isNew=o,this.tempCoupon=o?{due_date:(new Date).getTime()/1e3}:{...t};const e=this.$refs.couponModal;e.showModal()},confirmCoupon(o){this.tempCoupon=o;const t=this.$refs.couponModal;let e="https://vue3-course-api.hexschool.io/api/shuming-api/admin/coupon",n="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/shuming-api/admin/coupon/${o.id}`,n="put"),this.$http[n](e,{data:this.tempCoupon}).then((o=>{console.log(o),o.data.success?(this.getCoupons(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:o.data.message.join("、")}),t.hideModal()}))},openDelModal(o){this.tempCoupon={...o};const t=this.$refs.delModal;t.showModal()},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/shuming-api/admin/coupon/${this.tempCoupon.id}`;this.$http.delete(o).then((o=>{const t=this.$refs.delModal;t.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const K=(0,P.Z)(I,[["render",m]]);var q=K}}]);
//# sourceMappingURL=797.7307c64e.js.map