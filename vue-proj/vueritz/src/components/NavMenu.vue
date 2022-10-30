<template>
  <nav class="flex-menu-container">
      <div class="flex-menu-item">
        <p>About</p>
        <div class="category">
            <ul>
                <li>Direct Trade</li>
                <li>Team Member</li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p>Shop</p>
        <div class="category">
            <ul>
                <li>Coffee</li>
                <li>Goods</li>
                <li>Gifts</li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p>Coffee Club</p>
      </div>
      <div class="flex-menu-item">
        <p>Whole Sale</p>
        <div class="category">
            <ul>
                <li>Shop</li>
                <li>About Blend</li>
                <li>Sample | 샘플신청</li>
                <li>Notice / Q&A</li>
                <li>Help</li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p>Education</p>
      </div>
      <div class="flex-menu-item">
        <p>Contact</p>
      </div>
  </nav>
</template>

<script>
export default {
    name : "NavMenu",
    data() {
        return {

        }
    }

}
</script>

<style>
.flex-menu-container{
    height : 85vh;
    width : 10vw;
    float:left;
    display: flex;
    justify-content:start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items : center;
}

.flex-menu-item{
    width:8vw;
    text-align: left;
    padding:5px 0 5px 20px;
}


.flex-menu-item p{
   font-weight: bolder; 
   cursor: pointer;
}

.category{
    display: none;
}
</style>