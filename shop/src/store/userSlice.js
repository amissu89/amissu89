import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : {name : '양갱이', age : 9},
    reducers : {
        setName(state){
            console.log('clicked.... setname')
            state.name = 'park1'
        },
        clearName(){
            return '';
        },
        addAge(state, action){
            state.age += action.payload;
        }
    }
})

export let {setName, clearName, addAge} = user.actions 

export default user;