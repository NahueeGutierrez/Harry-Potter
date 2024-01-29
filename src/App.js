import React,{useState,useEffect} from 'react';
import ListaPersonajes from './components/ListaPersonajes.js';
import DetallesPersonaje from './components/DetallesPersonaje.js';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'; 
import DetallesHechizo from './components/DetallesHechizo.js';
import Hechizos from './components/Hechizos.js';
import './App.css';
import IconoVarita from './components/IconoVarita.js';

const App=()=>{
  const [characters,setCharacters]= useState([]);
  const [spells,setSpells]=useState([]);

  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const response= await fetch('https://hp-api.onrender.com/api/characters');
        const data = await response.json();
        setCharacters(data);

        const spellResponse= await fetch('https://hp-api.onrender.com/api/spells');
        const spellData= await spellResponse.json();
        setSpells(spellData);

      } catch(error){
        console.error('Error fetching data',error)
;      }
    };
    fetchData();
  },[]);

  return(
    <Router>
      <Routes>
        <Route 
          path='/'
          element={
            <>
              <div>
                <h1 className='titulo-app'>API de Harry Potter</h1>
                <nav>
                  <ul className='lista-app'>
                    <p className='item-app'>
                      <Link className='subtitulo-app' to="/characters">
                        <IconoVarita />
                        Lista de Personajes
                        </Link>
                    </p>
                    <p className='item-app'>
                      <Link className='subtitulo-app' to="/spells">
                        <IconoVarita />
                        Lista de Hechizos
                      </Link>
                    </p>
                  </ul>
                </nav>
              </div>
            </>
          }
        />
        <Route
          path="/characters/:name"
          element=
          {<DetallesPersonaje characters={characters}/>}
        />
        <Route
          path="/characters"
          element=
          {<ListaPersonajes characters={characters}/>}
        />
        <Route
          path="/spells"
          element={
            <>
            <h2>Lista de Hechizos</h2>
            <Hechizos/>
            </>
          }
        />
        <Route
        path="/spells/:spellName"
        element={<DetallesHechizo spells={spells}/>}
      />
      <Route path='*' element={<Pagina404/>}/>
      </Routes>
    </Router>
  );
};

const Pagina404 = () => {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};


export default App;
