<template>
  <h1>Team Member</h1>
  <!-- <img :src="Members[0].profile" alt="프로필 사진" /> -->
  <!-- <div class="post">
    <div class="post-content" v-for="(member, idx) in Members" :key="idx">
      <img :src="`${member.profile}`" alt="">
    </div>
  </div> -->
  <ul>
    <li v-for="(member, idx) in Members" :key="idx">
      {{ member.role }}
      <img :src="`${member.profile}`" alt="">
    </li>
  </ul>
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.post-content {
  width: 50px;
  height: 50px;
}
</style>