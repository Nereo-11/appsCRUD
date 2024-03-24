import React, { useState } from 'react';
import Modal from './Modal';
import JugadorForm from './JugadorForm';

const Jugador = ({ jugador, onDeleteJugador, onUpdateJugador }) => {
  const { id, nombre, descripcion, habilidades, seleccionado, categoria, imageUrl } = jugador; // Añade la imageUrl
  const [modalOpen, setModalOpen] = useState(false);
  const [editedJugador, setEditedJugador] = useState(jugador);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleDeleteClick = () => {
    onDeleteJugador(id);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSaveChanges = () => {
    onUpdateJugador(editedJugador);
    setModalOpen(false);
  };

  const handleJugadorChange = (field, value) => {
    setEditedJugador(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  return (
    <div className="jugador">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
      <p>Seleccionado: {seleccionado}</p>
      <p>Categoría: {categoria}</p>
      {/* Mostrar la imagen si la URL de la imagen está presente */}
      {imageUrl && <img src={imageUrl} alt="Imagen del jugador" />}
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Eliminar</button>
      
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>Editar Jugador</h2>
        <JugadorForm
          jugador={editedJugador}
          onFieldChange={handleJugadorChange}
          onSave={handleSaveChanges}
        />
      </Modal>
    </div>
  );
};

export default Jugador;