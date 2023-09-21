import { TTodosSlice } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TTodosSlice = {
  preloader: false,
  todos: null,
};

const setPreloader = (state: TTodosSlice, action: boolean) => {
  state.preloader = action;
};

const todosSlice = createSlice({
  name: 'todos-slice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    /*    builder;*/
  },
});

export default todosSlice.reducer;
