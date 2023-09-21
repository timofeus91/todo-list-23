import style from './popup.module.css';
import React, { FC, ReactNode, SyntheticEvent } from 'react';
import { TFuncVoid } from '../../../services/general-types';
import TopBar from '../top-bar/top-bar';

type TPopup = {
  id?: string;
  title?: string;
  close: TFuncVoid;
  cancelTopBar?: boolean;
  noOverlayClick?: boolean;
  children: ReactNode;
};

const Popup: FC<TPopup> = ({
  cancelTopBar,
  close,
  title,
  children,
  id,

  noOverlayClick,
}) => {
  function closePopupClickOnOverlay(e: SyntheticEvent) {
    const element = e.target as Element;
    if (element.matches(id ? `#${id}` : '#popup')) {
      close();
    }
  }

  function closePopupEsc(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      close();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', closePopupEsc);
    return () => document.removeEventListener('keydown', closePopupEsc);
  });

  return (
    <div
      onClick={noOverlayClick ? undefined : closePopupClickOnOverlay}
      className={style.popup}
    >
      <div className={style.popupContainer}>
        {!cancelTopBar && <TopBar closePopup={close} title={title || ''} />}
        {children}
      </div>
    </div>
  );
};

export default Popup;
