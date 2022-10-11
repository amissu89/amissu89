<template>
  <h4>이것은 디테일 페이지입니다.</h4>
  <h3>{{items[$route.params.id].title}}</h3>
  <p>{{items[$route.params.id].content}}</p>
  <router-view></router-view>
</template>

<script>
export default {
  props : {
    items : Array,
  }
}
</script>

<style>

</style>