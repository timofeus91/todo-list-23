import React, { FC } from 'react';
import style from './top-bar.module.css';
import { TFuncVoid } from '../../../services/general-types';

interface TopBarInterface {
  closePopup: TFuncVoid;
  title: string;
}

const TopBar: FC<TopBarInterface> = ({ closePopup, title }) => (
  <div className={style.topBar}>
    <h3 className={style.title}>{title}</h3>
    <button
      type="button"
      onClick={closePopup}
      className={style.buttonClose}
      aria-label="button-cancel"
    />
  </div>
);

export default TopBar;
