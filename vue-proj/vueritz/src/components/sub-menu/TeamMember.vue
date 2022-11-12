<template>
  <h1>Team Member</h1>

  <div class="black-bg" v-if="modalShow">
    <div class="white-bg" @click="closeModal">
      <img :src="`${Members[selectedIdx].profile}`" alt="profile" />
      <p>{{ Members[selectedIdx].role }} | {{ Members[selectedIdx].email }}</p>
      <p>
        {{ Members[selectedIdx].like }}
      </p>
    </div>
  </div>
  <div class="post">
    <div class="post-content" v-for="(member, idx) in Members" :key="idx">
      <img :src="`${member.profile}`" alt="" @click="openProfile(idx)" />
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
      modalShow: false,
      selectedIdx: -1,
    };
  },
  methods: {
    openProfile(idx) {
      this.selectedIdx = idx
      this.modalShow = true
    },
    closeModal(){
      this.modalShow = false
    }
  },
};
</script>

<style>
.post {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.post-content {
  padding: 10px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>