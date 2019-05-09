import React, { useState } from 'react';
import HeroForm from './components/HeroForm'
import './App.css';

const heroesAux = [{ id: '1', name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
{ id: '2', name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
{ id: '3', name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
{ id: '4', name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
{ id: '5', name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }]


//console.log(heroesAux);

function App() {
  const [heroes,setHeroes] = useState(heroesAux);
  console.log(heroes);

  const saveHero= (values)=> {
    console.log(values);
     setHeroes({
        ...heroes,
          ...values
      });
  }

  return (
    <div>
      <h3> This is a Functional Component </h3>
      <HeroForm onSubmit={saveHero}/>
    </div>
  );
};

export default App;
