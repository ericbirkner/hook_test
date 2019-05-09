import React, { useState } from 'react';
import HeroRow from './HeroRow'

function HeroTable ({heroes}){
  console.log(heroes);

  return(
    <table className="characters-table" border="1" align="center"> 
      <tbody>
        <tr className="character-row">
          <th>Name</th>
          <th>Race</th>
          <th>Age</th>
          <th>Weapon</th>
          <th></th>
        </tr>

        {heroes.map((hero, index) => (
          <HeroRow
            key={index}
            hero={hero}
          />
        ))}

      </tbody>
    </table>);
}



export default HeroTable
