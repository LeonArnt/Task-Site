import React from "react";
import "./Modal.css";

export default function Modal({ title, onCloseClick, children }) {
  const handleOnCloseClick = () => {
    if (onCloseClick) {
      onCloseClick();
    }
  };

  return (
    <>
      <div className="modal-backdrop" />
      <div className="modal">
        <div className="modal-toolbar">
          <h1 className="modal-title">{title}</h1>
          <div
            className="modal-close-icon"
            onClick={() => handleOnCloseClick()}
          >
            X
          </div>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}
