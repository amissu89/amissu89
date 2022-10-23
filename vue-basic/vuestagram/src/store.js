import axios from 'axios'
import {createStore} from 'vuex'

const store = createStore({
    state(){
        return {
            name : 'kim',
            age : 20,
            like : 30,
            clicked : false,
            more : {},
        }
    },
    mutations : {
        changeName(state, param1){
            state.name = param1
        },
        addAge(state){
            state.age++
        },
        clickedLike(state){
            if(!state.clicked){
                state.like++
            }
            else{
                state.like--
            }
            state.clicked = !state.clicked
        },
        setMore(state, m){
            state.more = m 
        }
    },
    actions : {
        getData(ctx){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then( (res)=>{
                console.log(res.data)
                ctx.commit('setMore', res.data)
            })
        }
    }
})

export default store