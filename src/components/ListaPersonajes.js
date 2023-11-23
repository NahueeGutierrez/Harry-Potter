import React from 'react';
import {Link} from 'react-router-dom';
import './ListaPersonajes.css';
import IconoVarita from './IconoVarita';

const ListaPersonajes=({characters})=>{
    return(
        <div>
            <h1 className='lista-personajes'>Lista de Personajes</h1>
            <ul className='lista'>
                {characters.map(character=>(
                    <p key={character.name} className='item'>
                        <Link to={`/characters/${character.name}`} className='personajes'>
                            <IconoVarita />
                            {character.name}
                        </Link>
                    </p>
                ))}

                <Link to="/" className='volver-inicio'>Volver al Inicio</Link>
            </ul>
        </div>
    );
};

export default ListaPersonajes;