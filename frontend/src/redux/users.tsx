import { createSlice } from '@reduxjs/toolkit';
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
}

const initialState: UsersState = {
  users: []
}

const usersReducer = (state = initialState, action: any) => {

}