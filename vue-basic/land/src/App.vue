<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <!-- 동적 UI 만드는 법
    1. UI의 현재 상태를 데이터로 저장해둠
    2. 데이터에 따라 UI가 어떻게 보일지 작성 -->

    <!-- <div class="black-bg" v-if="modalShow">
      <div class="white-bg">
        <h4>{{ products[productIdx].title }}</h4>
        <p>{{ products[productIdx].content }}</p>
        <p>{{ products[productIdx].price }}원</p>
        <button @click="modalShow = false">닫기</button>
        <Discount/>
      </div>
    </div> -->

    <DetailModal/>

    <div v-if="1 === 0">안녕하세요.</div>
    <div v-else-if="1 === 2">그럼 이것 0</div>
    <div v-else>그럼 이것1</div>

    <Discount/>

    <div class="menu">
      <a href="" v-for="(name, idx) in menuName" :key="idx">{{ name }}</a>
    </div>

    <div v-for="(product, idx) in products" :key="idx">
      <!-- <img :src="`./assets/img/room${idx}.jpg`" alt=""> -->
      <img
        :src="product.image"
        alt=""
        @click="
          modalShow = true;
          clickedProduct(idx);
        "
        class="room-img"
      />
      <h4 class="red" :style="redFont">{{ product.title }}</h4>
      <p>{{ product.price }} 만원</p>
      <p>{{ product.content }}</p>
      <!-- <button v-on:click="aaa">허위매물 신고</button>  -->
      <!-- @mouseover 등등 @은 v-on과 같음 -->
      <button @click="increaseReportCnt(idx)">허위매물 신고</button>
      <span>신고 수 : {{ report[idx] }}</span>
    </div>
  </div>
</template>

<script>
import Products from "./products.js";
import Discount from "./components/Discount.vue"
import DetailModal from "./components/DetailModal.vue"

console.log(Products);
export default {
  name: "App",
  data() {
    return {
      products: Products,
      price: [60, 50, 40],
      redFont: "color:red",
      menuName: ["Home", "Products", "About"],
      report: [0, 0, 0],
      modalShow: false,
      productIdx: 0,
    };
  },
  methods: {
    increaseReportCnt(idx) {
      this.report[idx] += 1;
    },
    clickedProduct(idx) {
      this.productIdx = idx;
    },
  },
  components: {
    Discount : Discount, //왼쪽 변수 : 오른쪽 import해온것
    DetailModal : DetailModal,
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
