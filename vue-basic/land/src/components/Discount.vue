<template>
 <!-- 컴포넌트 만들 때
 1. vue 파일 만들기
 2. <template>에 축약할 html 넣기
 3. name 넣기

컴포넌트 가져다 쓸때
1. vue 파일 임포트
2. 등록
3. use it -->
  <div class="discount">
    <h4>지금 결제하면 {{discountVal}}% 할인</h4>
  </div>
</template>

<script>
export default {
    name : "Discount",
    props : {
      discountVal : Number,
    }
};
</script>

<style>
.discount {
  background: grey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  color: white;
}
</style>