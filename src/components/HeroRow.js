import React, { useState } from 'react';

function HeroRow (props) {
  const { killHero } = props
  const { name, race, age, weapon, id, status } = props.hero

  const isDead = status === 'dead'

  let toReturn

  if (status === 'using-ring') {
    toReturn = null
  } else {
    toReturn = (
      <tr className={`${isDead ? 'dead' : ''}`}>
        <td>{name}</td>
        <td>{race}</td>
        <td>{age}</td>
        <td>{weapon}</td>
        <td>
          <div className="controls">
            <div onClick={(e) => killHero(id, e)} >☠ Kill</div>
            <div>💍 Use Ring</div>
          </div>
        </td>
      </tr>
    )
  }

  return toReturn
}

export default HeroRow
