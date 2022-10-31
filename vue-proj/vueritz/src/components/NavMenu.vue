<template>
  <nav class="flex-menu-container">
      <div class="flex-menu-item">
        <p class="menu">About</p>
        <div class="category">
            <ul>
                <li>Direct Trade</li>
                <li>Team Member</li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p class="menu">Shop</p>
        <div class="category">
            <ul>
                <li>Coffee</li>
                <li>Goods</li>
                <li>Gifts</li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p class="menu">Coffee Club</p>
      </div>
      <div class="flex-menu-item">
        <p class="menu">Whole Sale</p>
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
        <p class="menu">Education</p>
      </div>
      <div class="flex-menu-item">
        <p class="menu">Contact</p>
      </div>
  </nav>
</template>

<script>
export default {
    name : "NavMenu",
    mounted() {
      
      const wrap = document.querySelector('.flex-menu-container')
      wrap.addEventListener('click', e =>{
        const targetEl = e.target

        if(!targetEl.classList.contains('menu')) return
        
        const submenu = targetEl.nextElementSibling
        if(submenu == null) return

        submenu.classList.toggle('category')
      })
      
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.flex-menu-container{
    height : 85vh;
    width : 20vw;
    float:left;
    display: flex;
    justify-content:start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items : center;
}

.flex-menu-item{
    width:18vw;
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