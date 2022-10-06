<template>
  <div>
    <img :src="product.image" alt="" class="room-img" />
    <h4 class="red" :style="redFont">{{ product.title }}</h4>
    <p>{{ product.price }} 만원</p>
    <p>{{ product.content }}</p>
    <button>허위매물 신고</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Object,
  },
};
</script>

<style>
</style>