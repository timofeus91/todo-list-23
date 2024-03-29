import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import todosReducer from './todos/slice';

export const reducer = {
  todos: todosReducer,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
