<template>
  <div :class="`${filter} filter-item`" :style="`background-image : url(${imgUrl})`">
    <!-- slot으로 부모 -> 자식 데이터 전송법
    1. 자식은 구멍 뚫기
    2. <컴포넌트> 태그 사이에 데이터 넣기 
    주의. 태그 안에 데이터 바인딩 할 때만 slot 사용가능.
    html만 가능
    
    slot props
    1.<slot :자식데이터="자식데이터">
    2. 부모에서는 <template v-slot="작명"> 후에 {{작명.자식데이터}}
    -->
    <slot></slot>
    <!--<slot name="a"></slot>
    <slot name="b"></slot> -->
    <!-- <slot :msg= "msg"></slot> -->
    <button @click="fire">이벤트발사</button>
  </div>
</template>

<script>
export default {
    name : 'filterBox',
    data() {
        return {
            uploadImg : "",
            msg : "messssage",
        }
    },
    props :{
        imgUrl : String,
        filter : String,
    },
    methods : {
      fire(){
        this.emitter.emit('filterEvent', this.filter)
      }
    }
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