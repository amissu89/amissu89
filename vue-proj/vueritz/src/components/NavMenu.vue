<template>
  <nav class="flex-menu-container">
      <div class="flex-menu-item">About</div>
      <div class="flex-menu-item">Shop</div>
      <div class="flex-menu-item">Coffee Club</div>
      <div class="flex-menu-item">Whole Sale</div>
      <div class="flex-menu-item">Education</div>
      <div class="flex-menu-item">Contact</div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.flex-menu-container{
    float:left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items : center;
}

.flex-menu-item{
    width:8vw;
    height:30px;
    text-align: left;
    padding:5px 0 5px 20px;
}
</style>