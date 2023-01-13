<template>
  <div class="list">
    <div class="item" v-for="(coffee, idx) in filtered" :key="idx" @click="$router.push(`/detail/${coffee.id}`)">
      <img :alt="coffee.title" :src="coffee.image">
      <p> {{ coffee.title }}</p>
      <p> {{ coffee.price }}</p>
    </div>
  </div>
</template>

<script>
import Coffees from "../../assets/js/coffee.js";

export default {
  name: "Coffee",
  data() {
    return {
      Coffees: Coffees,
      type: "",
      filtered: [],
    };
  },
  mounted() {
    this.makeFilteredList(this.$route.params.type);
  },
  updated() {
    this.makeFilteredList(this.$route.params.type);
  },
  methods: {
    makeFilteredList(type) {
      if (type === "all") {
        this.filtered = [...Coffees]
      } else if (type === "single") {
        this.filtered = this.Coffees.filter(
          (coffee) => coffee.category === "single"
        )
      } else {
        this.filtered = this.Coffees.filter(
          (coffee) => coffee.category === "blend"
        )
      }
      this.type = type
    },
  },
};
</script>

<style>
.list {
  display: grid;
  grid-template-columns : repeat(3, 1fr);
  grid-template-rows : repeat(3, 1fr);
}

.item {
  padding: 10px;
}

.item img{
  width : 315px;
}
</style>