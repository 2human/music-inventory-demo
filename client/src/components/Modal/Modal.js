import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ content, onDismiss, classMod, children }) => {
  function handleKeyDown({ keyCode }) {
    const escapeKeyCode = 27;

    if (keyCode === escapeKeyCode) {
      onDismiss();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return ReactDOM.createPortal(
    <div id="modalContainer" className="modal" onClick={onDismiss}>
      <ModalContent onDismiss={onDismiss} classMod={classMod}>
        {content ? content : children}
      </ModalContent>
    </div>,
    document.querySelector('#modal')
  );
};

const ModalContent = ({ children, classMod }) => (
  <div
    id="modalContent"
    onClick={(e) => e.stopPropagation()}
    className={
      classMod
        ? `modal__content modal__content--${classMod}`
        : 'modal__content'
    }>
    {children}
  </div>
);

Modal.defaultProps = {
  onDismiss: () => {},
  classMod: null,
};

export default Modal;
