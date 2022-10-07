<template>
<!-- 동적 UI 만드는 법
    1. UI의 현재 상태를 데이터로 저장해둠
    2. 데이터에 따라 UI가 어떻게 보일지 작성 -->
      <div class="black-bg" v-if="modalShow">
      <div class="white-bg">
        <img :src="products[productIdx].image" alt="" class="room-img" />
        <h4>{{ products[productIdx].title }}</h4>
        <p>{{ products[productIdx].content }}</p>
        <p>{{ products[productIdx].price }}원</p>
        <button @click="closeModal">닫기</button>
      
      </div>
    </div>
</template>

<script>

export default {
    name : "DetailModal",
    props : {
      //string, Object, Array 등의 타입을 적기
      products : Array,
      modalShow : Boolean,
      productIdx : Number,
    },
    methods : {
      closeModal(){
        this.$emit('closeModal')
      }
    }
}
</script>

<style>

</style>