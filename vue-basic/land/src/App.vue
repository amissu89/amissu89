<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <DetailModal
      @closeModal="modalShow = false" 
      :products="products"
      :modalShow="modalShow"
      :productIdx="productIdx"
    />

    <div v-if="1 === 0">안녕하세요.</div>
    <div v-else-if="1 === 2">그럼 이것 0</div>
    <div v-else>그럼 이것1</div>

    <Discount v-bind="obj" />

    <div class="menu">
      <a href="" v-for="(name, idx) in menuName" :key="idx">{{ name }}</a>
    </div>

    <!-- @mouseover 등등 @은 v-on과 같음 -->
    <Card @openModal="modalShow = true; productIdx=$event" :product="product" v-for="(product, idx) in products" :key="idx" />
  </div>
</template>

<script>
import Products from "./products.js";
import Discount from "./components/Discount.vue";
import DetailModal from "./components/DetailModal.vue";
import Card from "./components/Card.vue";

console.log(Products);
export default {
  name: "App",
  data() {
    return {
      products: Products,
      price: [60, 50, 40],
      menuName: ["Home", "Products", "About"],
      report: [0, 0, 0],
      modalShow: false,
      productIdx: 0,
      obj: {
        name: "lee",
        age: 33,
      },
    };
  },
  methods: {
    increaseReportCnt(idx) {
      this.report[idx] += 1;
    },
    clickedProduct(idx) {
      this.productIdx = idx;
      console.log(idx);
    },
  },
  components: {
    Discount: Discount, //왼쪽 변수 : 오른쪽 import해온것
    DetailModal: DetailModal,
    Card: Card,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 400px;
  margin-top: 40px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
