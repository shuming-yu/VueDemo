<template>
  <Loading :active="isLoading"></Loading>

  <header class="header" style="background-image: url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80); height: 300px">
    <div class="container d-flex justify-content-center align-items-center h-100">
      <div class="row">
        <h1 class="text-white bg-secondary bg-opacity-75 rounded-pill">商品列表</h1>
      </div>
    </div>
  </header>

  <div class="row mt-4">
    <!-- 商品列表 -->
    <div class="col-md-7">
      <table class="table align-middle">
        <thead>
          <tr>
            <th width="200">圖片</th>
            <th width="150">商品名稱</th>
            <th width="120">價格</th>
            <th width="200">功能</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 100px">
              <div
                style="
                  height: 200px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </td>
            <td>
              <a href="#" class="text-dark">{{ item.title }}</a>
            </td>
            <td>
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }} 元
              </div>
              <del class="h6" v-if="item.price"
                >原價 {{ item.origin_price }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }} 元!!
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="getProduct(item.id)"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="addToCart(item.id)"
                  :disabled="status.loadingItem === item.id"
                >
                  <!-- 參考 spinners 讀取效果 : https://bootstrap5.hexschool.com/docs/5.1/components/spinners/ -->
                  <div
                    v-if="status.loadingItem === item.id"
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 商品列表END -->

    <!-- 購物車列表 -->
    <div class="col-md-5">
      <div class="sticky-top">
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 110px">數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <!-- 判斷陣列存在 -->
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    :disabled="status.loadingItem === item.id"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <!-- min 設定輸入最小為 1 -->
                    <input
                      type="number"
                      class="form-control"
                      min="1"
                      :disabled="item.id === status.loadingItem"
                      @change="updateCart(item)"
                      v-model.number="item.qty"
                    />
                    <div class="input-group-text">
                      / {{ item.product.unit }}
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small
                    v-if="cart.final_total !== cart.total"
                    class="text-success"
                    >折扣價：</small
                  >
                  {{ $filters.currency(item.final_total) }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">
                {{ $filters.currency(cart.final_total) }}
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
        <!-- <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary">清空購物車</button>
        </div> -->
      </div>
    </div>
    <!-- 購物車列表END -->

    <!-- 用戶訂單 -->
    <div class="my-5 row justify-content-center">
      <VForm class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <!-- {{ errors }} -->
        <!-- v-slot 把元件本身的資源提取出來使用 -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <!-- input 因為改成元件，必須包含頭尾的標籤 -->
          <!-- :class 的 errors[] 中的值對應 name -->
          <VField
            id="email"
            name="Email"
            type="email"
            class="form-control"
            placeholder="請輸入 Email"
            rules="email|required"
            :class="{ 'is-invalid': errors['Email'] }"
            v-model="form.user.email"
          >
          </VField>
          <!-- VField & ErrorMessage name欄位互相對應 -->
          <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VField
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            placeholder="請輸入姓名"
            rules="required"
            :class="{ 'is-invalid': errors['姓名'] }"
            v-model="form.user.name"
          >
          </VField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VField
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            placeholder="請輸入電話 0988692887"
            :rules="isPhone"
            :class="{ 'is-invalid': errors['電話'] }"
            v-model="form.user.tel"
          >
          </VField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VField
            id="address"
            name="地址"
            type="text"
            class="form-control"
            placeholder="請輸入地址"
            rules="required"
            :class="{ 'is-invalid': errors['地址'] }"
            v-model="form.user.address"
          >
          </VField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            :class="{ 'is-invalid': errors['留言'] }"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <!--       
                    如果要觸發 submit 驗證，需綁定事件在外層的 form 標籤上
                    所以這邊的 button 不需要綁上方法
          -->
          <button class="btn btn-danger" >送出訂單</button>
        </div>
      </VForm>
    </div>
    <!-- 用戶訂單END -->
  </div>

  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <footer class="p-2 border-top bg-light">
    <div class="container align-items-center justify-content-between d-flex">
      <p class="mb-0 text-muted">
        Copyright &copy; 2022 All Rights Reserved. Designed by ShuMingYU
      </p>
      <ul class="nav social">
        <li class="nav-item">
          <a href="https://github.com/shuming-yu" class="nav-link text-muted"> <i class="fa fa-github fa-2x"></i> </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-muted"> <i class="fa fa-facebook fa-2x"></i> </a>
        </li>
      </ul>
    </div>
  </footer>

</template>

<script>
import DelModal from "@/components/DelModal.vue";

export default {
  data() {
    return {
      products: [], // 產品資訊
      product: {},
      isLoading: false, // 預設 false - 關閉功能
      status: {
        loadingItem: "", // 對應品項 id
      },
      cart: {}, // 購物車列表資訊
      coupon_code: "", // 優惠碼

      form: {
        // 使用者訂單資訊
        user: {
          name: "",
          tel: "",
          email: "",
          address: "",
        },
        message: "",
      },
    };
  },

  inject: ["emitter"],

  components: {
    DelModal,
  },

  methods: {
    getProducts() {
      // 顯示後台產品
      // 取的商品列表api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        console.log(res.data);
        this.products = res.data.products; // 取得資訊丟到 products 陣列內
        this.isLoading = false;
      });
    },

    getProduct(id) {
      // 點選取得產品 id 後送到 product 頁面
      this.$router.push(`/userboard/product/${id}`);
    },

    addToCart(id) {
      this.isLoading = true;
      //console.log(id);
      // 加入購物車api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8A%A0%E5%85%A5%E8%B3%BC%E7%89%A9%E8%BB%8A
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id; // 將取得 id 放入, 後續比對用
      const cart = {
        product_id: id, // 將取得 id 放入 product_id
        qty: 1, // 預設數量為 1
      };
      this.$http.post(api, { data: cart }).then((res) => {
        this.isLoading = false;
        this.status.loadingItem = ""; // 成功後清空
        console.log(res); // 確認送出是否成功
        if(res.data.success){
          this.product = res.data.data.product; // 取得資訊塞入 product 內
          // this.emitter.emit('push-message', {
          //   style: 'success',
          //   title: '新增商品成功',
          // })
          this.$swal({
            icon: 'success',
            title: `已將 ${ this.product.title } 加入購物車！`,
          });
        }else{
          // this.emitter.emit('push-message', {
          //   style: 'danger',
          //   title: '新增商品失敗',
          //   content: res.data.message.join('、'),
          // })
          this.$swal({
            icon: 'error',
            title: '加入購物車失敗！',
          });
        }
        this.product = {},  // 結束後清空
        this.getCart(); // 重整購物車列表
      });
    },

    getCart() {
      this.isLoading = true;
      // 取得購物車列表api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%8F%96%E5%BE%97%E8%B3%BC%E7%89%A9%E8%BB%8A%E5%88%97%E8%A1%A8
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log(res.data.data.carts);
        this.cart = res.data.data;
      });
    },

    updateCart(item) {
      this.status.loadingItem = item.id;
      // 更新購物車api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E6%9B%B4%E6%96%B0%E8%B3%BC%E7%89%A9%E8%BB%8A
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        // id - 單一品項 id
        product_id: item.product_id, // product_id - 產品 id
        qty: item.qty, // 更新後數量
      };
      this.$http.put(api, { data: cart }).then((res) => {
        // console.log(res);
        this.status.loadingItem = ""; // 觸發 disable 動作(使用者無法狂點)
        this.getCart(); // 重整購物車列表
      });
    },

    removeCartItem(id) {
      this.status.loadingItem = id;
      // 刪除某一筆購物車資料 api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%88%AA%E9%99%A4%E6%9F%90%E4%B8%80%E7%AD%86%E8%B3%BC%E7%89%A9%E8%BB%8A%E8%B3%87%E6%96%99
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        if(res.data.success){
          this.$swal({
            icon: 'success',
            title: '已將商品從購物車移除！',
          })
        }else{
          this.$swal({
            icon: 'error',
            title: '商品從購物車移除失敗！',
          })
        }
        this.status.loadingItem = "";
        this.getCart(); // 重整購物車列表
      });
    },

    addCouponCode() {
      // 套用優惠券 api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E5%A5%97%E7%94%A8%E5%84%AA%E6%83%A0%E5%88%B8
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(url, { data: coupon }).then((res) => {
        console.log(res);
        this.getCart(); // 重整購物車列表
      });
    },

    // VeeValiadation 參考 : https://hackmd.io/FFv0a5cBToOATP7uI5COMQ
    createOrder() {
      // 送出訂單
      // 結帳頁面 api = https://github.com/hexschool/vue3-course-api-wiki/wiki/%E5%AE%A2%E6%88%B6%E8%B3%BC%E7%89%A9-%5B%E5%85%8D%E9%A9%97%E8%AD%89%5D#%E7%B5%90%E5%B8%B3%E9%A0%81%E9%9D%A2
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res);
        this.$router.push(`/userboard/checkout/${res.data.orderId}`); // 送出訂單成功後, 切換到 checkout 頁面
      });
    },
    isPhone(value) {
      // 電話規則
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入正確的電話號碼";
    },
  },

  created() {
    this.getProducts(); // 顯示產品
    this.getCart(); // 顯示購物車列表
  },
};
</script>
