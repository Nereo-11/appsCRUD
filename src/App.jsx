import React, { useState } from 'react';
import JugadoresList from "./Componentes/JugadoresList";
import JugadorForm from './Componentes/JugadorForm';

const App = () => {
  const [jugadores, setJugadores] = useState([
    { 
      id: 1, 
      nombre: 'Jugador 1', 
      descripcion: 'Descripción del Jugador 1',
      habilidades: ["Velocidad", "Fuerza"],
      seleccionado: "Seleccionado 1",
      categoria: "Categoria 1"
    },
    { 
      id: 2, 
      nombre: 'Jugador 2', 
      descripcion: 'Descripción del Jugador 2',
      habilidades: ["Agilidad", "Destreza"],
      seleccionado: "Seleccionado 2",
      categoria: "Categoria 2"
    }
  ]);

  const [nextId, setNextId] = useState(4); // Variable para el siguiente ID disponible

  const handleAddJugador = (nuevoJugador) => {
    setJugadores([...jugadores, { id: nextId, ...nuevoJugador }]);
    setNextId(nextId + 1);
  };


  const handleDeleteJugador = (id) => {
    const nuevosJugadores = jugadores.filter(jugador => jugador.id !== id);
    setJugadores(nuevosJugadores);
  };

  return (
    <div className="app">
      <h1>Administrador de Jugadores</h1>
      <JugadorForm onSave={handleAddJugador} />
      <JugadoresList jugadores={jugadores} onDeleteJugador={handleDeleteJugador} />
    </div>
  );
};

export default App;