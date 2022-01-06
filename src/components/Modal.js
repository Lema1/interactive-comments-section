import { useState } from "react";

const Modal = (props) => {
  const { setModal, state } = props;
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={() => setModal(false)} />
      <div className="modal__container">
        <p className="modal__header">Delete commnet</p>
        <p className="modal__content">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="modal__btn">
          <button className="modal__btn-no" onClick={() => setModal(false)}>
            No, Cancel
          </button>
          <button className="modal__btn-yes">Yes, Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
