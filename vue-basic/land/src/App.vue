<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <div class="menu">
      <a href="" v-for="(name, idx) in menuName" :key = "idx">{{name}}</a>
      
    </div>

    <div v-for="(name, idx) in products" :key ="idx">
      <h4 class="red" :style="redFont">{{name}}</h4>
      <p>{{ price[idx] }} 만원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      price : [60, 50, 40],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      redFont : 'color:red',
      menuName : ['Home', 'Products', 'About'],
    };
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

.menu{
  background: darkslateblue;
  padding : 15px;
  border-radius: 5px;
}

.menu a{
  color :white;
  padding : 10px;
}
</style>
