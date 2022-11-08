import { createSlice } from '@reduxjs/toolkit';

const initialState:any={
    item:[]
}
const itemSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action:any) {

        },
        removeTodo(state, action:any) {

        }
    },
});

export const {addTodo, removeTodo} = itemSlice.actions;

export default itemSlice.reducer;
