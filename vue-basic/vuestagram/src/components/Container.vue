<template>
  <div>
    <Post :posting="posting" v-for="(posting, idx) in postings" :key="idx" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "post",
  components: {
    Post: Post,
  },
  props: {
    postings: Array,
  },
};
</script>

<style>
</style>