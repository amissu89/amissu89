import { createSlice } from "@reduxjs/toolkit";

let boughtItem = createSlice({
    name : 'boughtItem',
    initialState : [
        {id : 0, name : 'Hunt', count : 2},
        {id : 2, name : 'Witch', count : 1},
    ],
    reducers : {
        addCount(state, action){
            let id = action.payload;
            state.forEach(element => {
                if(element.id === id){
                    element.count += 1;
                }
            });
            /**
             * state.findIndex( (a) => { return a.id == action.payload})
             */
        }, 
        addItem(state, action){
            state.push(action.payload)
            state.forEach( elem => {
                console.log( `id : ${elem.id}, name : ${elem.name}, count : ${elem.count}`);
            })
        }
    }
})

export let {addCount, addItem} = boughtItem.actions 

export default boughtItem;