<template>
  <h1>Team Member</h1>
  <div class="post-content" v-for="(member, idx) in members" :key="idx">
      {{member.role}}
    </div>
  <div class="post">
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${posting.postImage})` }"
      :class="`${posting.filter}`"
      @click="$store.commit('clickedLike')"
    >
    
    <div class="post-content" v-for="(member, idx) in members" :key="idx">
      {{member.role}}
    </div>
  
  
  
    
  
  
    </div>
  </div>
</template>

<script>
export default {
  /**
   *
   * 데이터 가져올것
   *
   */
  name: "TeamMember",
  mounted() {
    fetch(
      "https://gist.githubusercontent.com/amissu89/40ff79d0c8b1cb2ea70deaa635db9f75/raw/3aaf91e3210eec0b93b6d2c79aed0716e0202b3e/team-member.json"
    )
      .then((res) => res.text())
      .then((data) => {
        this.members = data;
        console.log(this.members);
      });
  },
  data() {
    return {
      members: [],
    };
  },
};
</script>

<style>
.post {
  width: 100%;
}

.post-body {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
</style>