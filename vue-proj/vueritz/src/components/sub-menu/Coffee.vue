<template>
  <h1>Coffee</h1>
  <div class="list">
    <div class="item" v-for="(coffee, idx) in filtered" :key="idx">
      <img :alt="`${coffee.title}`" src="../../assets/img/coffee/decaffein.jpeg">
      ../../assets{{coffee.image}}
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
        this.filtered = [...Coffees];
      } else if (type === "single") {
        this.filtered = this.Coffees.filter(
          (coffee) => coffee.category === "single"
        );
      } else {
        this.filtered = this.Coffees.filter(
          (coffee) => coffee.category === "blend"
        );
      }
      this.type = type;
    },
  },
};
</script>

<style>
.list {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: (3, 1fr);
}

.item {
  padding: 10px;
  border: 1px brown solid;
}

.imem img{
  width : 100px;
  height: 100px;
}
</style>