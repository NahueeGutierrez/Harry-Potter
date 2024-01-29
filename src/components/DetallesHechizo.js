import React from 'react';
import { useParams,Link } from 'react-router-dom';
import './DetallesHechizo.css'
const DetallesHechizo = ({ spells }) => {
  const { spellName } = useParams();
  const spell = spells.find(spell => spell.name === spellName);

  if (!spell) {
    return <div>Hechizo no encontrado</div>;
  }

  return (
    <div className='fondo-hechizos'>
      <h3 className='nombre-hechizo'>{spell.name}</h3>
      <p className='subtitulos'>Descripción:</p>
      <p className='detalles'>{spell.description}</p>
      <hr/>
      <Link to="/spells" className='volver-inicio'>Volver a Hechizos</Link>
      <hr/>
      <Link to="/" className='volver-inicio'>Volver al Inicio</Link>
    </div>
  );
};

export default DetallesHechizo;
