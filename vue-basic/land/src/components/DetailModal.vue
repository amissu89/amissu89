<template>
      <div class="black-bg" v-if="modalShow">
      <div class="white-bg">
        <h4>{{ products[productIdx].title }}</h4>
        <p>{{ products[productIdx].content }}</p>
        <p>{{ products[productIdx].price }}원</p>
        <button @click="modalShow = false">닫기</button>
      
      </div>
    </div>
</template>

<script>
export default {
    name : "DetailModal"
}
</script>

<style>

</style>