import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
   componentDidMount() {
    window.addEventListener('keydown', e => {
      if(e.code === 'Escape') {
       this.props.onClose();
      }
    })
   }

  render() {
    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
