import React, { FC, useEffect } from 'react';
import style from './TodoList.module.css';
import { generateTodosList } from '../../utils/todosGenerator';
import TodoListItem from './TodoListItem/TodoListItem';

const TodoList: FC = () => {
  useEffect(() => {
    console.log('заглушка');
  }, []);

  return (
    <ul className={style.list}>
      {generateTodosList(10).map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
