import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hechizos.css';
import IconoVarita from './IconoVarita';

const Hechizos = () => {
  const [hechizos, setHechizos] = useState([]);
  const [busquedaHechizo, setBusquedaHechizo] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [hechizosPorPagina] = useState(20); 

  useEffect(() => {
    const obtenerHechizos = async () => {
      try {
        const respuesta = await fetch('https://hp-api.onrender.com/api/spells');
        const datos = await respuesta.json();
        setHechizos(datos);
      } catch (error) {
        console.error('Error al obtener los datos de los hechizos', error);
      }
    };

    obtenerHechizos();
  }, []);

  const hechizosFiltrados = hechizos.filter(hechizo =>
    hechizo.name.toLowerCase().includes(busquedaHechizo.toLowerCase())
  );

  const indiceUltimoHechizo = paginaActual * hechizosPorPagina;
  const indicePrimerHechizo = indiceUltimoHechizo - hechizosPorPagina;
  const hechizosActuales = hechizosFiltrados.slice(indicePrimerHechizo, indiceUltimoHechizo);

  const cambiarPagina = numeroPagina => setPaginaActual(numeroPagina);

  return (
    <div>
      <h1 className='lista-hechizos'>Lista de Hechizos</h1>

      <input
        type='text'
        placeholder='Buscar hechizo...'
        value={busquedaHechizo}
        onChange={(e) => setBusquedaHechizo(e.target.value)}
        className='buscar-input'
      />

      <ul className='lista'>
        {hechizosActuales.map(hechizo => (
          <p key={hechizo.name} className='item'>
            <Link to={`/hechizos/${hechizo.name}`} className='hechizo'>
              <IconoVarita />
              {hechizo.name}
            </Link>
          </p>
        ))}
      </ul>

      <div className='pagination'>
        {Array.from({ length: Math.ceil(hechizosFiltrados.length / hechizosPorPagina) }, (_, i) => (
          <button key={i + 1} onClick={() => cambiarPagina(i + 1)} className={paginaActual === i + 1 ? 'activo' : ''}>
            {i + 1}
          </button>
        ))}
      </div>

      <Link to="/" className='volver-inicio'>Volver al Inicio</Link>
    </div>
  );
};

export default Hechizos;
