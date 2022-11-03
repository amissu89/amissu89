<template>
  <header>
    <div class="flex-container">
      <div class="flex-item">
        <router-link to="/home">
          <img class="logo" alt="vuelitz logo" src="../assets/img/logo.jpg">
        </router-link>
      </div>
      <div class="flex-item" style="flex-grow: 3"></div>
      <div class="flex-item">
        <h4>Fritz Company</h4>
      </div>
      <div class="flex-item">
        <h5>
          <router-link to="/private/login">Login</router-link>
        </h5>
      </div>
      <div class="flex-item">
        <h5>
          <router-link to="/private/my-page">My Page</router-link>
        </h5>
      </div>
      <div class="flex-item">
        <h5>
          <router-link to="/private/cart">Cart</router-link>
        </h5>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name : "Header",
};
</script>

<style>
header {
  height: 15vh;
  width : 100%;
}

.logo {
  width: 80px;
  height: 80px;
}

.flex-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.flex-item {
  width: 100px;
  height: 100px;
  padding: 10px 0 10px 0;
}
</style>