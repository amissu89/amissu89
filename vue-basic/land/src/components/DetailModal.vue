<template>
<!-- 동적 UI 만드는 법
    1. UI의 현재 상태를 데이터로 저장해둠
    2. 데이터에 따라 UI가 어떻게 보일지 작성 -->
      <div class="black-bg" v-if="modalShow">
      <div class="white-bg">
        <img :src="products[productIdx].image" alt="" class="room-img" />
        <h4>{{ products[productIdx].title }}</h4>
        <p>{{ products[productIdx].content }}</p>
        <label for="month">몇 개월</label>
        <!-- <input @input="month = $event.target.value" type="text" id="month" name="month"> -->
        <!-- textarea, select 모두 v-model 사용 가능 -->
        <input type="text" v-model.number="month">
        <p> {{month}} 개월 선택함. {{ products[productIdx].price * month }}원</p>
        <button @click="closeModal">닫기</button>
      
      </div>
    </div>
</template>

<script>

export default {
    name : "DetailModal",
    data() {
      return{
        month : 3,
      }
    },
    props : {
      //string, Object, Array 등의 타입을 적기
      products : Array,
      modalShow : Boolean,
      productIdx : Number,
    },
    methods : {
      closeModal(){
        this.$emit('closeModal')
      },
    },
    // watch : {
    //   month(after, before){
    //     console.log(`after ${after} before ${before}`)
    //     if(typeof(after) === 'string'){
    //       alert('문자열입니다.')
    //       this.month = 1
    //       return
    //     }
    //     console.log(typeof(after))
    //     if (after > 12){
    //       alert('12개월이 최대치입니다.')
    //     }
    //   },
    updated(){
      if(this.month < 3){
        alert('최소 계약가능 기간은 3개월부터입니다')
        this.month = 3
      }
    }
}
</script>

<style>

</style>