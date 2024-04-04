import React, { useState } from 'react';
import JugadoresList from './Componentes/JugadoresList';
import Modal from './Componentes/Modal';
import JugadorForm from './Componentes/JugadorForm';
import './App.css';

const App = () => {
  const [jugadores, setJugadores] = useState([]);
  const [editingJugador, setEditingJugador] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('none'); // Ordenar por defecto: ninguno

  const handleAddJugador = (nuevoJugador) => {
    setJugadores([...jugadores, nuevoJugador]);
  };

  const handleEditJugador = (jugador) => {
    console.log("Editando jugador:", jugador);
    setEditingJugador(jugador);
    setModalOpen(true);
  };

  const handleSaveChanges = (jugadorEditado) => {
    const nuevosJugadores = jugadores.map(jugador =>
      jugador.id === jugadorEditado.id ? jugadorEditado : jugador
    );
    setJugadores(nuevosJugadores);
    setModalOpen(false);
    setEditingJugador(null);
  };

  const handleDeleteJugador = (id) => {
    const nuevosJugadores = jugadores.filter(jugador => jugador.id !== id);
    setJugadores(nuevosJugadores);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const compareFunction = (a, b) => {
    if (sortBy === 'A-Z') {
      return a.nombre.localeCompare(b.nombre);
    } else if (sortBy === 'Z-A') {
      return b.nombre.localeCompare(a.nombre);
    }
    // Si no se selecciona ninguna opción de orden, mantener el orden en que se añadieron
    return jugadores.indexOf(a) - jugadores.indexOf(b);
  };

  const filteredJugadores = jugadores.filter(jugador =>
    jugador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedJugadores = filteredJugadores.sort(compareFunction);

  return (
    <div className="app">
      <h1>Administrador de Jugadores</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={sortBy} onChange={handleSortChange}>
        <option value="none">Ordenar por...</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <JugadorForm onSave={handleAddJugador} />
      <JugadoresList jugadores={sortedJugadores} onEditJugador={handleEditJugador} onDeleteJugador={handleDeleteJugador} />
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2>Editar Jugador</h2>
          <JugadorForm jugador={editingJugador} onSave={handleSaveChanges} />
        </Modal>
      )}
    </div>
  );
};

export default App;