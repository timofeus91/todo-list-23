import React, { FC } from 'react';
import style from './TodoListItem.module.css';
import { TTodosItem } from '../../../services/todos/types';

type TTodoListItem = {
  todo: TTodosItem;
};

const TodoListItem: FC<TTodoListItem> = ({ todo }) => {
  return (
    <li className={style.item}>
      <p className={style.title}>{todo.title}</p>
    </li>
  );
};

export default TodoListItem;
