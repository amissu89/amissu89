<template>
  <h1>Detail</h1>
  <h2>{{ $route.params.id }}</h2>
  <div class="detail-box">
    <div class="detail-images">
      <img :alt="coffee.title" :src="coffee.image" />
      <img :alt="coffee.title" :src="coffee.imageDescription" />
    </div>
    <div class="detail-description">
      <h4>{{ coffee.title }}</h4>
      <h4>KRW {{ coffee.price }}</h4>
      <hr />
      <h6>Details</h6>
      <ul v-for="(description, idx) in coffee.description2" :key="idx">
        <li>{{ description }}</li>
      </ul>
      <hr />
      <Order/>
    </div>
  </div>
</template>

<script>
import Coffees from "../../assets/js/coffee.js";
import Order from "./Order.vue";

export default {
  name: "Default",
  components: {
    Order : Order,
  },
  data() {
    return {
      Coffees: Coffees,
      idx: -1,
      coffee: null,
    };
  },
  created() {
    this.idx = Number(this.$route.params.id);
    const id = this.idx;
    const arr = [...Coffees];
    this.coffee = arr.find((item) => item.id === id);
    console.log(this.coffee.title);
  },
};
</script>

<style>
.detail-box {
  display: flex;

  border: 1px solid red;
  width: 80%;
}

.detail-images {
  border: 1px solid green;
  width: 40%;
}

.detail-images img {
  width: 100%;
}

.detail-description {
  border: 1px solid blue;
  width: 40%;
}
</style>
