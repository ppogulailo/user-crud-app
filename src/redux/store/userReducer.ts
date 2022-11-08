import { createSlice } from '@reduxjs/toolkit';

const initialState:any={
    item:[]
}
const userSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem(state, action:any) {
            state.item= action.payload
            console.log(state.item)
        },
        removeTodo(state, action:any) {
            // state.item = state.item.filter(todo => todo.id !== action.payload.id);
        }
    },
});

export const {addItem, removeTodo} = userSlice.actions;

export default userSlice.reducer;
