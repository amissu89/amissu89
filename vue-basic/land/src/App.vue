<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <!-- 동적 UI 만드는 법
    1. UI의 현재 상태를 데이터로 저장해둠
    2. 데이터에 따라 UI가 어떻게 보일지 작성 -->
    <div class="black-bg" v-if="modalShow">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용임</p>
        <button @click="modalShow = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a href="" v-for="(name, idx) in menuName" :key="idx">{{ name }}</a>
    </div>

    <div v-for="(product, idx) in products" :key="idx">
      <!-- <img :src="`./assets/img/room${idx}.jpg`" alt=""> -->
      <img :src="product.image" alt="" @click="modalShow = true" class="room-img"/>
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
console.log(Products);
export default {
  name: "App",
  data() {
    return {
      products: Products,
      price: [60, 50, 40],
      //products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      redFont: "color:red",
      menuName: ["Home", "Products", "About"],
      report: [0, 0, 0],
      modalShow: false,
    };
  },
  methods: {
    increaseReportCnt(idx) {
      this.report[idx] += 1;
    },
  },
  components: {},
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
