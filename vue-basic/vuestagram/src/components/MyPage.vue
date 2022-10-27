<template>
  <div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" />
  <div class="post-header" v-for="(follower, idx) in followers" :key="idx">
        <div class="profile" :style="`background-image: url(${follower.image})`"></div>
        <span class="profile-name">{{follower.name}}</span>
  </div>
</div>
</template>

<script>
import {onMounted, ref, reactive, toRefs} from 'vue'
import axios from 'axios'

export default {
    name : 'mypage',
    //Composition API만들때, setup()부터 만들기 
    setup(props, ctx){ //첫번째 파라미너터는 항상 props
        let followers = ref([]) //reactive안들어가는 자료형 넣음
        let test = reactive({name : 'ylee'}) //array, object 집어넣고
        test
        let {one, two} = toRefs(props)
        console.log(one.value)
        console.log(two.value)
        ctx
        onMounted( ()=>{
            axios.get('/res/follower.json').then( (res)=>{
                followers.value = res.data
                console.log(res.data)
            })
        })

       
        return {followers}
    },
    data(){
        return{

        }
    },
    props : {
        one : Number,
        two : Number,
    }
}
</script>

<style>

</style>