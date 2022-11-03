<template>
  <!-- 컴포넌트 만들때
1. 다른곳에서 쓸 것 같다
2. 라우터로 나눌 페이지
3. html 너무 길어서 복잡하다 -->
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="page === 1" @click="page++">Next</li>
      <li v-if="page === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <h4>안녕{{author}} {{name}} {{$store.state.age}} {{age}}</h4>
  컴포넌트 안에서는 직접 수정하기 금지
  <button @click="$store.commit('changeName', 'yong')">이름 변경</button>
  <button @click="changeName('이용림')">이름 변경2</button>
  <button @click="$store.commit('addAge')">나이 +1</button>
  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기</button>
  <p>{{now2}} {{counter}}</p>
  <button @click="counter++">counter</button>   -->
  

  <Container
    :postings="postings"
    :page="page"
    :imgUrl="imgUrl"
    @sendTextArea="postText = $event"
    :choosedFilter="choosedFilter"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <!-- <input type="file"  id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label> -->
      <!-- accept는 임시방편일뿐 -->
      <input
        type="file"
        name="upload"
        id="upload"
        accept="image/*"
        @change="upload"
      />
    </ul>
  </div>

  <!-- <div class='tab'>내용0</div>
  <div class='tab'>내용1</div>
  <div class='tab'>내용2</div>
  <button @click='showTab(0)'>버튼0</button>
  <button @click='showTab(1)'>버튼1</button>
  <button @click='showTab(2)'>버튼2</button> -->
</template>

<script>
import Container from "./components/Container.vue"
import Postings from "./postings.js"
import axios from "axios"
import {mapMutations, mapState} from 'vuex'

export default {
  name: "App",
  components: {
    Container: Container,
  },
  data() {
    return {
      postings: Postings,
      cnt: 0,
      page: 0,
      imgUrl: "",
      imgBlob: null,
      postText: "",
      choosedFilter : "",
      counter : 0,
    };
  },
  methods: {
    ...mapMutations(['changeName']),
    now() {
      return new Date()
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
        .then((res) => {
          this.postings.push(res.data);
          this.cnt++;
        })
        .catch((fail) => {
          console.error(fail);
        });
    },
    showTab(idx) {
      let tabs = [...document.getElementsByClassName("tab")];
      tabs.forEach((element) => {
        element.style.display = "none";
      });

      tabs[idx].style.display = "block";
    },
    upload(e) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      this.page = 1;
      this.imgUrl = url;
    },
    publish() {
      console.log(`choosed filter: ${this.choosedFilter}`)
      const post = {
        name: "yllee",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.postText,
        filter: this.choosedFilter,
      };
      this.postings.unshift(post);
      this.page = 0;
    },
  },
  mounted() {
    this.emitter.on('filterEvent', (e) => {
      console.log(e);
      this.choosedFilter = e
    });
  },
  //computed : 사용해도 실행되지 않는다. 처음 실행하고 값을 간직함
  //위에서 콜 할 때, now2()로 콜하지 말고 now2로 콜할 것.
  //데이터 계산 결과 저장소
  //항상 리턴이 있어야함. 계산 결과를 리턴해야하기 때문.
  computed : {
   now2() {
    return new Date()
   },
   name(){
    return this.$store.state.name
   },
   ...mapState(['age', 'clicked']),
   ...mapState({author : 'age'})
  }
};
</script>

<style>
@import "./css/style.css";

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.tab {
  display: none;
}
</style>
