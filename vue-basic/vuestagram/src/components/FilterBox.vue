<template>
  <div :class="`${filter} filter-item`" :style="`background-image : url(${imgUrl})`"></div>
</template>

<script>
export default {
    name : 'filterBox',
    data() {
        return {
            uploadImg : "",
        }
    },
    props :{
        imgUrl : String,
        filter : String,
    },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>