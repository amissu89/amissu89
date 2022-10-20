<template>
  <div>
    <h1>{{ page }}</h1>
    <div v-if="page === 0">
      <Post :posting="posting" v-for="(posting, idx) in postings" :key="idx" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="page === 1">
      <div class="upload-image" :style="uploadImg"></div>
      <div class="filters">
        <FilterBox :imgUrl="imgUrl" :filter="filter" v-for="(filter, idx) in filterList" :key="idx"> 
          {{filter}}
          <!-- <template v-slot:a> {{filter}} </template>
          <template v-slot:b> yllee </template>
          <template v-slot:default="tag"> <span>{{tag.msg}}</span> </template>  -->
          
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="page === 2">
      <div class="upload-image" :style="uploadImg"></div>
      <div class="write">
        <textarea
          class="write-box"
          id="writeText"
          @input="$emit('sendTextArea', $event.target.value)"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "post",
  components: {
    Post: Post,
    FilterBox: FilterBox,
  },
  props: {
    postings: Array,
    page: Number,
    imgUrl: String,
    postText: String,
  },
  data() {
    return {
      uploadImg: "",
      filterList: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  updated() {
    this.uploadImg = `background-image : url(${this.imgUrl})`;
  },
  methods: {
    sendTextArea(e) {
      const text = e.target.value;
      this.$emit("sendTextArea", text);
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>