<template>
  <nav class="flex-menu-container">
      <div class="flex-menu-item">
        <p class="menu">About</p>
        <div class="category">
            <ul>
                <li>
                  <router-link to="/about/direct-trade">Direct Trade</router-link>
                </li>
                <li>
                  <router-link to="/about/team-member">Team Member</router-link>
                </li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p class="menu">Shop</p>
        <div class="category">
            <ul>
                <li>
                  <router-link to="/shop/coffee/all">Coffee</router-link>
                  <ul>
                    <li>
                      <router-link to="/shop/coffee/single">Single Origin</router-link>
                    </li>
                    <li>
                      <router-link to="/shop/coffee/blend">Blend</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/shop/goods">Goods</router-link>
                </li>
                <li>
                  <router-link to="/shop/gifts">Gifts</router-link>
                </li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p class="menu">
          <router-link to="/coffee-club">Coffee Club</router-link>
        </p>
      </div>
      <div class="flex-menu-item">
        <p class="menu">Whole Sale</p>
        <div class="category">
            <ul>
                <li>
                  <router-link to="/whole-sale/about-blend">About Blend</router-link>
                </li>
                <li>
                  <router-link to="/whole-sale/sample">Sample | 샘플신청</router-link>
                </li>
                <li>
                  <router-link to="/whole-sale/notice">Notice / Q&A</router-link>
                </li>
                <li>
                  <router-link to="/whole-sale/help">Help</router-link>
                </li>
            </ul>
        </div>
      </div>
      <div class="flex-menu-item">
        <p class="menu">
          <router-link to="/education">Education</router-link>
        </p>
      </div>
      <div class="flex-menu-item">
        <p class="menu">
          <router-link to="/contact">Contact</router-link>
        </p>
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
    width : 10vw;
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

.flex-menu-item ul{
  list-style-type: square;
}

.flex-menu-item a {
  text-decoration: none;
}

</style>