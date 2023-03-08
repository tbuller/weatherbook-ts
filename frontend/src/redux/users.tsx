import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  _id: Object;
  friends: [];
  requests: [];
  email: String;
  password: String;
  username: String;
  photo: String;
}

export interface UsersState {
  users: User[];
  currentUserId: string | null;
}

const initialState: UsersState = {
  users: [],
  currentUserId: null,
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user._id !== action.payload);
    }
  }
})

export const selectAllUsers = (state: RootState) => state.users;

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;