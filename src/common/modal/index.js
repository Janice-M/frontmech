import React from 'react';

const Modal = ({ handleClose, show, children, contentStyles }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className={`modal__main ${contentStyles}`}>
        {children}
      </section>
      <button onClick={handleClose}>close</button>

    </div>
  );
};

export default Modal;
