import React, { useState } from 'react';
import Jugador from './Jugador';
import './JugadoresList.css'; 

const JugadoresList = ({ jugadores, onDeleteJugador }) => {
  const handleUpdateJugador = (jugadorActualizado) => {
    // Actualiza el jugador en la lista de jugadores
    // Implementa la lógica para actualizar la lista de jugadores según sea necesario
  };

  return (
    <div className="jugadores-list">
      <h2>Lista de Jugadores</h2>
      {jugadores.map(jugador => (
        <Jugador
          key={jugador.id}
          jugador={jugador}
          onDeleteJugador={onDeleteJugador}
          onUpdateJugador={handleUpdateJugador} // Pasa la función de actualización al componente Jugador
        />
      ))}
    </div>
  );
};

export default JugadoresList;