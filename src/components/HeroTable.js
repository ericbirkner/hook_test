import React, { useState } from 'react'
import HeroRow from './HeroRow'
import PropTypes from "prop-types"


const HeroTable = props => {
  
  const { heroes, killHero } = props

  return <table className="characters-table" border="1" align="center">
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
            killHero={killHero}
          />
        ))}

      </tbody>
    </table>
}

HeroTable.propTypes = {
  heroes: PropTypes.array,
  killHero: PropTypes.shape({
    name: PropTypes.string, 
    race: PropTypes.string, 
    age: PropTypes.string, 
    weapon: PropTypes.string, 
    id: PropTypes.string, 
    status: PropTypes.oneOf(['using-ring', 'dead'])
  })
}

export default HeroTable