import React, { FC } from 'react';
import style from './TodoListItem.module.css';
import { TTodosItem } from '../../../services/todos/types';
import { LIST_ITEM_TEXTS } from '../../../utils/constants';

type TTodoListItem = {
  todo: TTodosItem;
};

const TodoListItem: FC<TTodoListItem> = ({ todo }) => {
  return (
    <li className={style.item}>
      <div className={style.titleContainer}>
        <h4 className={style.title}>{todo.title}</h4>
        <button
          title-={LIST_ITEM_TEXTS.DELETE_BUTTON_TITLE}
          type="button"
          className={style.deleteButton}
        />
      </div>
      <div className={style.mainContainer}>
        <p className={style.subtitle}>{todo.text}</p>
      </div>
      <div className={style.bottomContainer}>
        <label className={style.labelWithInput}>
          {LIST_ITEM_TEXTS.SPAN_STATUS}
          <input
            checked={todo.active}
            type="checkbox"
            className={style.inputChangeActive}
          />
        </label>
      </div>
    </li>
  );
};

export default TodoListItem;
