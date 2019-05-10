import React, { useState } from 'react'
import PropTypes from 'prop-types'

const HeroRow = props => {
  const { onRowClick, hero } = props
  const { name, race, age, weapon, id, status } = hero

  const isDead = status === 'dead'

  if (status === 'using-ring') {
    return null
  }

  return  <tr className={`${isDead ? 'dead' : ''}`}>
        <td>{name}</td>
        <td>{race}</td>
        <td>{age}</td>
        <td>{weapon}</td>
        <td>
          <div className="controls">
            <div onClick={(e) => onRowClick(id, e)} >☠ Kill</div>
            <div>💍 Use Ring</div>
          </div>
        </td>
      </tr>
}

HeroRow.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string, 
    race: PropTypes.string, 
    age: PropTypes.string, 
    weapon: PropTypes.string,  
    id: PropTypes.string, 
    status: PropTypes.oneOf(['using-ring','dead']), 
  }),
  onRowClick: PropTypes.func
}

export default HeroRow
