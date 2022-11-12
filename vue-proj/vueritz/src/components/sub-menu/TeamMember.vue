<template>
  <h1>Team Member</h1>
  <div class="post">
    <div class="post-content" v-for="(member, idx) in Members" :key="idx">
      <img :src="`${member.profile}`" alt="">
    </div>
  </div>
</template>

<script>
import Members from "../../assets/js/members.js";
export default {
  name: "TeamMember",
  data() {
    return {
      Members: Members,
    };
  },
};
</script>

<style>
.post {
  width: 100%;
  height:100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.post-content {
  padding:10px;
}
</style>