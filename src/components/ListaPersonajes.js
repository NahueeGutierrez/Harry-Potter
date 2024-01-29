import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListaPersonajes.css';
import IconoVarita from './IconoVarita';

const ListaPersonajes = ({ characters }) => {
  const [personajeBuscado, setPersonajeBuscado] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [personajesPorPagina] = useState(25); 

  const personajesFiltrados = characters.filter(character =>
    character.name.toLowerCase().includes(personajeBuscado.toLowerCase())
  );

  const indiceUltimoPersonaje = paginaActual * personajesPorPagina;
  const indicePrimerPersonaje = indiceUltimoPersonaje - personajesPorPagina;
  const personajesActuales = personajesFiltrados.slice(indicePrimerPersonaje, indiceUltimoPersonaje);

  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  return (
    <div>
      <h1 className='lista-personajes'>Lista de Personajes</h1>

      <input
        type='text'
        placeholder='Buscar personaje...'
        value={personajeBuscado}
        onChange={(e) => setPersonajeBuscado(e.target.value)}
        className='buscar-input'
      />

      <ul className='lista'>
        {personajesActuales.map((character) => (
          <p key={character.name} className='item'>
            <Link to={`/characters/${character.name}`} className='personajes'>
              <IconoVarita />
              {character.name}
            </Link>
          </p>
        ))}
      </ul>

      <div className='pagination'>
        {Array.from({ length: Math.ceil(personajesFiltrados.length / personajesPorPagina) }, (_, i) => (
          <button key={i + 1} onClick={() => cambiarPagina(i + 1)} className={paginaActual === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
      </div>

      <Link to="/" className='volver-inicio'>Volver al Inicio</Link>
    </div>
  );
};

export default ListaPersonajes;
