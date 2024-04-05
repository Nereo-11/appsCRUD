import React from 'react';

const Jugador = ({ jugador, onEdit, onDelete }) => {
  const { id, nombre, descripcion, habilidades, seleccionado, categoria, imageUrl } = jugador;

  const handleEditClick = () => {
    console.log("Clic en editar");
    onEdit(jugador); // Pasamos el jugador al hacer clic en editar
  };

  const handleDeleteClick = () => {
    onDelete(id); // Pasamos el ID del jugador al hacer clic en eliminar
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
      <p>Patrocinador: {seleccionado}</p>
      <p>Equipo: {categoria}</p>
      {imageUrl && <img src={imageUrl} alt="Imagen del jugador" />}
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Eliminar</button>
    </div>
  );
};

export default Jugador;