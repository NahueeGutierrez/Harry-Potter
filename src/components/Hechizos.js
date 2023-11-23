import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hechizos.css'
import IconoVarita from './IconoVarita';

const Hechizos = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/spells');
        const data = await response.json();
        setSpells(data);
      } catch (error) {
        console.error('Error fetching spells data', error);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div>
      <h1 className='lista-hechizos'>Lista de Hechizos</h1>
      <ul className='lista'>
        {spells.map(spell => (
          <p key={spell.name} className='item'>
            <Link to={`/spells/${spell.name}`} className='hechizo'>
              <IconoVarita />
              {spell.name}
            </Link>
          </p>
        ))}

        <Link to="/" className='volver-inicio'>Volver al Inicio</Link>
      </ul>
    </div>
  );
};

export default Hechizos;
