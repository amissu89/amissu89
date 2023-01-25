<template>
  <div>
    <label for="size-select">Package Size</label>
    <select name="size" id="size-select">
      <option value="">SELECT</option>
      <option value="100">100g</option>
      <option value="200">200g</option>
      <option value="500">500g</option>
    </select>
    <br/>

    <label for="grind-select">Grind</label>
    <select name="grind" id="grind-select">
      <option value="">-[필수] 옵션을 선택해주세요.</option>
      <option value="">--------------------------</option>
      <option value="wholebean">홀빈(갈지않은원두)</option>
      <option value="espresso">(분쇄)에스프레소머신</option>
      <option value="mocha">(분쇄)모카포트</option>
      <option value="dutch">(분쇄)더치커피</option>
      <option value="drip">(분쇄)드립/커피메이커</option>
      <option value="airpress">(분쇄)에어프레스</option>
      <option value="frenchpress">(분쇄)프렌치프레스</option>
    </select>
    <br/>
    
    <label for="option-select">Option</label>
    <select name="option" id="option-select">
      <option value="">-[필수] 옵션을 선택해주세요.</option>
      <option value="">--------------------------</option>
      <option value="pouch">파우치(그린)(+KRW 4,000)[품절]</option>
      <option value="nope">선택안함</option>
    </select>
    <br/>

    <label for="quantity">QUANTITY</label>
    <input type="number" name="quantity" id="quantity">
    <br/>

    <button>BUY NOW</button> <br/>

    <router-link to="">ADD TO CART</router-link> <br/>
    <router-link to="">WISH LIST</router-link> 
    

  </div>
</template>

<script>
export default {
  name: "Order",
};
</script>

<style>
</style>