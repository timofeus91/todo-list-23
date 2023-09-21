import React, { FC } from 'react';
import style from 'create-todo.module.css';
import { TFuncVoid } from '../../../services/general-types';
import Popup from '../popup/popup';
import { CREATE_TODO } from '../../../utils/constants';

type TCreateTodo = {
  close: TFuncVoid;
};

const CreateTodo: FC<TCreateTodo> = ({ close }) => {
  return (
    <Popup title={CREATE_TODO.TITLE} close={close}>
      <p>test</p>
    </Popup>
  );
};

export default CreateTodo;
