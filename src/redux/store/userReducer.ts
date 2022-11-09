import { createSlice } from '@reduxjs/toolkit';
import {ActionReducerFetch, ActionReducerAdd, User} from "../../type/types";


const initialState:any={
    item:[]
}
const userSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        fetchItem(state, action:ActionReducerFetch) {
            state.item= action.payload
        },
        addItem(state, action:ActionReducerAdd) {
            state.item.push(action.payload)
        },
        removeTodo(state, action) {
            state.item = state.item.filter((todo:User)=> todo.id !== action.payload);
        },
        updateItem(state,action){
            console.log(action.payload)
            const { id, name, username } = action.payload;
            const existingUser = state.item.find((user:User) => user.id === id);
            if(existingUser) {
                existingUser.name = name;
                existingUser.username = username;
            }
        },
    },
});

export const {fetchItem,addItem,removeTodo,updateItem} = userSlice.actions;

export default userSlice.reducer;
