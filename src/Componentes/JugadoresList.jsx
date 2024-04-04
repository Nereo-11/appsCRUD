import React from 'react';
import Jugador from './Jugador';
import './JugadoresList.css';

const JugadoresList = ({ jugadores, onEditJugador, onDeleteJugador }) => {
  return (
    <div className="jugadores-list">
      <h2>Lista de Jugadores</h2>
      {jugadores.map(jugador => (
        <Jugador
          key={jugador.id}
          jugador={jugador}
          onEdit={onEditJugador} 
          onDelete={onDeleteJugador}
        />
      ))}
    </div>
  );
};

export default JugadoresList;