import React, { useState } from 'react';

const JugadorForm = ({ jugador, onSave }) => {
  const [nombre, setNombre] = useState(jugador ? jugador.nombre : '');
  const [descripcion, setDescripcion] = useState(jugador ? jugador.descripcion : '');
  const [habilidades, setHabilidades] = useState(jugador ? jugador.habilidades : []);
  const [seleccionado, setSeleccionado] = useState(jugador ? jugador.seleccionado : '');
  const [categoria, setCategoria] = useState(jugador ? jugador.categoria : '');
  const [imageUrl, setImageUrl] = useState(jugador ? jugador.imageUrl : '');

  const handleSaveJugador = () => {
    if (!nombre || !descripcion || habilidades.length === 0 || !seleccionado || !categoria || !imageUrl) {
      alert("Por favor, complete todos los campos antes de guardar.");
      return;
    }
    const nuevoJugador = {
      id: jugador ? jugador.id : Date.now(), // Genera un ID si es un nuevo jugador
      nombre,
      descripcion,
      habilidades,
      seleccionado,
      categoria,
      imageUrl
    };
    onSave(nuevoJugador);
    // Limpiar los campos después de guardar
    setNombre('');
    setDescripcion('');
    setHabilidades([]);
    setSeleccionado('');
    setCategoria('');
    setImageUrl('');
  };

  return (
    <div className="jugador-form">
      <h2>{jugador ? 'Editar Jugador' : 'Agregar Jugador'}</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label htmlFor="descripcion">Descripción:</label>
      <textarea
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>
      <label>Habilidades:</label>
      <div>
        <label>
          <input
            type="checkbox"
            value="Velocidad"
            checked={habilidades.includes('Velocidad')}
            onChange={(e) =>
              habilidades.includes('Velocidad')
                ? setHabilidades(habilidades.filter(hab => hab !== 'Velocidad'))
                : setHabilidades([...habilidades, 'Velocidad'])
            }
          />
          Velocidad
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Fuerza"
            checked={habilidades.includes('Fuerza')}
            onChange={(e) =>
              habilidades.includes('Fuerza')
                ? setHabilidades(habilidades.filter(hab => hab !== 'Fuerza'))
                : setHabilidades([...habilidades, 'Fuerza'])
            }
          />
          Fuerza
        </label>
      </div>
      <label>Patrocinador:</label>
      <div>
        <label>
          <input
            type="radio"
            value="Nike"
            checked={seleccionado === 'Nike'}
            onChange={(e) => setSeleccionado(e.target.value)}
          />
          Nike
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Adidas"
            checked={seleccionado === 'Adidas'}
            onChange={(e) => setSeleccionado(e.target.value)}
          />
          Adidas
        </label>
      </div>
      <label>Equipo:</label>
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Selecciona un Equipo</option>
        <option value="Solteros FC">Solteros FC</option>
        <option value="Casi Algo FC">Casi Algo FC</option>
      </select>
      <label>URL de la Imagen:</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="buttons">
        <button onClick={handleSaveJugador}>{jugador ? 'Guardar' : 'Agregar'}</button>
      </div>
    </div>
  );
};

export default JugadorForm;