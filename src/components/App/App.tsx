import React from 'react';
import style from './App.module.css';
import TodoList from '../TodoList/TodoList';
import { MAIN_TEXTS } from '../../utils/constants';

const App = () => {
  return (
    <main className={style.main}>
      <h3 className={style.title}>{MAIN_TEXTS.APP_TITLE}</h3>
      <TodoList />
    </main>
  );
};

export default App;
