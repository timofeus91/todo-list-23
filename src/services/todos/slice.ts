import { TTodosSlice } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TTodosSlice = {
  preloader: false,
  todos: null,
};

const setPreloader = (state: TTodosSlice, action: boolean) => {
  state.preloader = action;
};

export const orderPassSlice = createSlice({
  name: 'todos-slice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    /*    builder;*/
  },
});
