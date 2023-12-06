import React from 'react';
import css from './Modal.module.css'

const Modal = ({largeImageURL, tags}) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
