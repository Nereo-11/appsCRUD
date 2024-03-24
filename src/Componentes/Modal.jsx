import React from 'react';
import './Modal.css'; // Importa el archivo CSS para los estilos del modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;