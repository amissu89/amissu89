<template>
  <div id="container">
    <Header/>
    <div class="body">
      <NavMenu/>
      <Content/>
    </div>
  </div>
  
  
</template>

<script>
import Header from './components/Header.vue'
import NavMenu from './components/NavMenu.vue'
import Content from './components/Content.vue'
export default {
  name: "App",
  components: {
    Header : Header,
    NavMenu : NavMenu,
    Content : Content,
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
  margin:0px;
  padding:0px;
  width:100vw;
  height: 100vh;
}

#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
  padding:0px;
  width:100vw;
  height: 100vh;
}

.body{
  display: flex;
}
</style>
