"use strict";(self["webpackChunkshuming_yu"]=self["webpackChunkshuming_yu"]||[]).push([[587],{3774:function(t,e,a){a.d(e,{Z:function(){return b}});var l=a(3396),o=a(7139),s=a(9242);const i={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n=(0,l._)("span",{"aria-hidden":"true"},"«",-1),r=[n],c=["onClick"],u=(0,l._)("span",{"aria-hidden":"true"},"»",-1),p=[u];function m(t,e,a,n,u,m){return(0,l.wg)(),(0,l.iD)("nav",i,[(0,l._)("ul",d,[(0,l._)("li",{class:(0,o.C_)(["page-item",{disabled:1===a.pages.current_page}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,s.iM)((t=>m.updatePage(a.pages.current_page-1)),["prevent"]))},r)],2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pages.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:(0,o.C_)(["page-item",{active:t===a.pages.current_page}]),key:t},[(0,l._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,c)],2)))),128)),(0,l._)("li",{class:(0,o.C_)(["page-item",{disabled:a.pages.current_page===a.pages.total_pages}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,s.iM)((t=>m.updatePage(a.pages.current_page+1)),["prevent"]))},p)],2)])])}var h={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=a(89);const _=(0,g.Z)(h,[["render",m]]);var b=_},4587:function(t,e,a){a.r(e),a.d(e,{default:function(){return dt}});var l=a(3396),o=a(7139);const s={class:"text-end"},i={class:"table mt-4"},d=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"100"},"是否啟用"),(0,l._)("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},r={class:"text-right"},c={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],h=["onClick"];function g(t,e,a,g,_,b){const f=(0,l.up)("Loading"),P=(0,l.up)("ProductModal"),v=(0,l.up)("DelModal"),y=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,l._)("div",s,[(0,l._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>b.openModal(!0))}," 新增一筆產品 ")]),(0,l._)("table",i,[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,o.zw)(e.category),1),(0,l._)("td",null,(0,o.zw)(e.title),1),(0,l._)("td",n,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,l._)("td",r,(0,o.zw)(t.$filters.currency(e.price)),1),(0,l._)("td",null,[e.is_enabled?((0,l.wg)(),(0,l.iD)("span",c,"啟用")):((0,l.wg)(),(0,l.iD)("span",u,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",p,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>b.openModal(!1,e)}," 編輯 ",8,m),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>b.openDelproductModal(e)}," 刪除 ",8,h)])])])))),128))])]),(0,l.Wm)(P,{ref:"productModal",propProduct:_.addProduct,onConfirmProduct:b.confirmProduct},null,8,["propProduct","onConfirmProduct"]),(0,l.Wm)(v,{ref:"delModal",item:_.addProduct,onDelProdcut:b.delProduct},null,8,["item","onDelProdcut"]),(0,l.Wm)(y,{pages:_.pagination,onEmitPages:b.getProducts},null,8,["pages","onEmitPages"])],64)}var _=a(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},v=(0,l._)("div",{class:"modal-header bg-primary text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},w={class:"row"},x={class:"col-sm-4"},k=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"image",class:"form-label"},"輸入圖片網址"),(0,l._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1),M={class:"mb-3"},C=(0,l._)("label",{for:"customFile",class:"form-label"},[(0,l.Uk)("或 上傳圖片 "),(0,l._)("i",{class:"fas fa-spinner fa-spin"})],-1),$=(0,l.uE)('<img class="img-fluid" alt=""><div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',2),D={class:"col-sm-8"},U={class:"mb-3"},V=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),L={class:"row gx-2"},Z={class:"mb-3 col-md-6"},F=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),z={class:"mb-3 col-md-6"},j=(0,l._)("label",{for:"price",class:"form-label"},"單位",-1),N={class:"row gx-2"},W={class:"mb-3 col-md-6"},E=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),H={class:"mb-3 col-md-6"},I=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),Y=(0,l._)("hr",null,null,-1),K={class:"mb-3"},O=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),q={class:"mb-3"},A=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),B={class:"mb-3"},G={class:"form-check"},J=(0,l._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Q={class:"modal-footer"},R=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function S(t,e,a,o,s,i){return(0,l.wg)(),(0,l.iD)("div",b,[(0,l._)("div",f,[(0,l._)("div",P,[v,(0,l._)("div",y,[(0,l._)("div",w,[(0,l._)("div",x,[k,(0,l._)("div",M,[C,(0,l._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[0]||(e[0]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)]),$]),(0,l._)("div",D,[(0,l._)("div",U,[V,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[1]||(e[1]=t=>s.tempProduct.title=t)},null,512),[[_.nr,s.tempProduct.title]])]),(0,l._)("div",L,[(0,l._)("div",Z,[F,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempProduct.category=t)},null,512),[[_.nr,s.tempProduct.category]])]),(0,l._)("div",z,[j,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.unit=t)},null,512),[[_.nr,s.tempProduct.unit]])])]),(0,l._)("div",N,[(0,l._)("div",W,[E,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.origin_price=t)},null,512),[[_.nr,s.tempProduct.origin_price]])]),(0,l._)("div",H,[I,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.price=t)},null,512),[[_.nr,s.tempProduct.price]])])]),Y,(0,l._)("div",K,[O,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.description=t)},null,512),[[_.nr,s.tempProduct.description]])]),(0,l._)("div",q,[A,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.content=t)},null,512),[[_.nr,s.tempProduct.content]])]),(0,l._)("div",B,[(0,l._)("div",G,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.is_enabled=t)},null,512),[[_.e8,s.tempProduct.is_enabled]]),J])])])])]),(0,l._)("div",Q,[R,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=e=>t.$emit("confirm-product",s.tempProduct))}," 確認 ")])])])],512)}var T=a(5741),X={data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=(this.$refs.fileInput.id,new FormData);e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/shuming-api/admin/upload";this.$http.post(a,e).then((t=>{console.log(t.data),t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},props:{propProduct:{type:Object,default(){return{}}}},watch:{propProduct(){this.tempProduct=this.propProduct,this.tempProduct.images||(this.tempProduct.images=[])}},mixins:[T.Z]},tt=a(89);const et=(0,tt.Z)(X,[["render",S]]);var at=et,lt=a(7349),ot=a(3774),st={data(){return{products:[],pagination:{},addProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:at,DelModal:lt.Z,Pagination:ot.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/shuming-api/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.isNew=t,this.addProduct=t?{}:{...e};const a=this.$refs.productModal;a.showModal()},confirmProduct(t){this.addProduct=t;let e="https://vue3-course-api.hexschool.io/api/shuming-api/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/shuming-api/admin/product/${t.id}`,a="put");const l=this.$refs.productModal;this.$http[a](e,{data:this.addProduct}).then((t=>{console.log(t),l.hideModal(),t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))},openDelproductModal(t){this.addProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/shuming-api/admin/product/${this.addProduct.id}`;this.$http.delete(t).then((t=>{console.log(t);const e=this.$refs.delModal;e.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const it=(0,tt.Z)(st,[["render",g]]);var dt=it}}]);
//# sourceMappingURL=587.cc5098ed.js.map