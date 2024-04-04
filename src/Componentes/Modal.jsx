import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        {children}
        <div className="modal-buttons">
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;