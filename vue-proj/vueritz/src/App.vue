<template>
  <Header/>
  <NavMenu/>
  
</template>

<script>
import Header from './components/Header.vue'
import NavMenu from './components/NavMenu.vue'

export default {
  name: "App",
  components: {
    Header : Header,
    NavMenu : NavMenu,
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
</style>
