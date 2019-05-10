import React, { useState } from 'react';
import HeroForm from './components/HeroForm'
import HeroTable from './components/HeroTable'
import './App.css';

const heroesAux = [{ id: '1', name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
{ id: '2', name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
{ id: '3', name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
{ id: '4', name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
{ id: '5', name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }]


//console.log(heroesAux);

function App() {
  const [heroes,setHeroes] = useState(heroesAux);
  const [killedHeroId,setkilledHeroId] = useState(null);

  const saveHero= (values)=> {
    const id = (heroes.length + 1).toString();
    const newItem = {...values, id}
    setHeroes([ ...heroes, newItem ]);
  }

  const killHero = (id) => {
    console.log(id);
    setkilledHeroId(id);
    let indice = parseInt(id)-1;

    heroes[indice].status = "dead"
    
    /*
    setHeroes({
        ...heroes,
        [indice]: {

          status: 'dead'
        }
    });
    */

  }


  return (
    <div>
      <h3> This is a Functional Component </h3>
      <HeroForm onSubmit={saveHero} />
      <HeroTable heroes={heroes} onKillHero={killHero}/>
    </div>
  );
};

export default App;
