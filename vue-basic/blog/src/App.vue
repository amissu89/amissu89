<template>
  <div class="main-bg">
    <NavTop />
    <router-link to="/list">리스트페이지</router-link>
    <div class="list-container">
      <router-view :items="Items" > </router-view>
      
    </div>
  </div>
</template>

<script>
import NavTop from "./components/NavTop.vue";
//import Article from "./components/Article.vue";
import Items from "./assets/dummy/items.js";

export default {
  name: "App",
  components: {
    NavTop: NavTop,
  //  Article: Article,
  },
  data(){
    return {
      Items : Items,
    }
  }
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

.main-bg {
  background-image: url("assets/img/background.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  filter: brightness(80%) saturate(70%);
}

.list-container {
  width: 60%;
  height: 100%;
  border: 1px solid pink;
  margin-left: auto;
  margin-right: auto;
  color: white;
}
</style>
