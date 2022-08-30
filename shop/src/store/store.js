import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './userSlice.js';
import boughtItem from './boughtItem.js';

//reducer 객체가 들어옴

let stock = createSlice({
    name : 'stock',
    initialState  : [10,11,12]
})

/** redux 안에서 모든걸 저장하지 맙시다. */
export default configureStore({
    reducer : {
        user : user.reducer,
        stock : stock.reducer,
        boughtItem : boughtItem.reducer,
    }
})