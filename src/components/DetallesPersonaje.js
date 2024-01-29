import React from 'react';
import { useParams,Link } from 'react-router-dom';
import "./DetallesPersonaje.css";

const DetallesPersonaje=({characters})=>{
    const {name}=useParams();
    const character=characters.find(char=>char.name===name);

    if(!character) {
        return <div>Personaje no encontrado</div>
    }

    return(
        <div className='lista-detalles'>
            <h3 className='nombre-personaje'>{character.name}</h3>
                <p className='subtitulos'>Apodos:</p>
                <p className='detalles'>{character.alternate_names||'Desconocido'}</p>
                <p className='subtitulos'>Especie:</p>
                <p className='detalles'>{character.species}</p>
                <p className='subtitulos'>Género:</p>
                <p className='detalles'>{character.gender}</p>
                <p className='subtitulos'>Casa:</p>
                <p className='detalles'>{character.house||'Desconocida'}</p>
                <p className='subtitulos'>Fécha de nacimiento:</p>
                <p className='detalles'>{character.dateOfBirth||'Desconocida'}</p>
                <p className='subtitulos'>Ancestros:</p>
                <p className='detalles'>{character.ancestry||'Desconocida'}</p>
                <p className='subtitulos'>Varita:</p>
                <p className='detalles'>{character.wand ? `${character.wand.wood}, ${character.wand.core}, ${character.wand.length}` : 'Desconocido'}</p>
                <p className='subtitulos'>Patronus:</p>
                <p className='detalles'>{character.patronus||'Desconocido'}</p>
                <p className='subtitulos'>Actor:</p>
                <p className='detalles'>{character.actor||'Desconocido'}</p>
                {character.image && <img className='imagen' src={character.image} alt={character.name} />}
                <hr/>
                <Link to="/" className='volver-inicio'>Volver al Inicio</Link>
                <hr/>
                <Link to="/characters" className='volver-inicio'>Volver a seleccion de Personaje</Link>
        </div>
    );
};

export default DetallesPersonaje;