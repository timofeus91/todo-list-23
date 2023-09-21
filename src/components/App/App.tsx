import React, { useState } from 'react';
import style from './App.module.css';
import TodoList from '../TodoList/TodoList';
import { MAIN_TEXTS } from '../../utils/constants';
import { ToastContainer } from 'react-toastify';
import CreateTodo from '../Popups/create-todo/create-todo';

const App = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
      <main className={style.main}>
        <h3 className={style.title}>{MAIN_TEXTS.APP_TITLE}</h3>
        <button onClick={() => setPopupVisible(true)} className={style.button}>
          {MAIN_TEXTS.BUTTON_CREATE}
        </button>
        <TodoList />
      </main>
      {popupVisible && <CreateTodo close={() => setPopupVisible(false)} />}
      <ToastContainer />
    </>
  );
};

export default App;
