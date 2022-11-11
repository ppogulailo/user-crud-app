import { createSlice } from '@reduxjs/toolkit';
import {
  ActionReducerFetch,
  ActionReducerAdd,
  User,
  IState,
  ActionReducerRemove,
  ActionReducerUpdate,
} from '../../../type/types';

const initialState: IState = {
  item: [],
};
const userSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    fetchItem(state, action: ActionReducerFetch) {
      state.item = action.payload;
    },
    addItem(state, action: ActionReducerAdd) {
      state.item.push(action.payload);
    },
    removeTodo(state, action: ActionReducerRemove) {
      state.item = state.item.filter((todo: User) => todo.id !== action.payload);
    },
    updateItem(state, action: ActionReducerUpdate) {
      const { id, name, username } = action.payload;
      const existingUser = state.item.find((user: User) => user.id === id);
      if (existingUser != null) {
        existingUser.name = name;
        existingUser.username = username;
        existingUser.nameChanged = true;
      }
    },

  },
});

export const {
  fetchItem, addItem, removeTodo, updateItem,
} = userSlice.actions;

export default userSlice.reducer;
