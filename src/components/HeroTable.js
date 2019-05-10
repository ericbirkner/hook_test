import React, { useState } from 'react'
import HeroRow from './HeroRow'
import PropTypes from 'prop-types'


const HeroTable = props => {
  
  const { heroes, onKillHero } = props

  // quien decide que debemos despachar el killhero es la tabla y no la row
  // esto desacopla responsabilidades permitiendo que tu row sea reutilizada en otro momento y con otro contexto si asi se deseara
  // por convencion se debe usar on + Algo, por eso onRowClick triggerea onKillHero
  const onRowClick = (id, e) => {
    onKillHero(id, e)
  }

  const renderHeader = ()=>{
    return <tr className="character-row">
    <th>Name</th>
    <th>Race</th>
    <th>Age</th>
    <th>Weapon</th>
    <th></th>
  </tr>
  }

  const renderRow = (hero, index) =>{
    return <HeroRow
    key={index}
    hero={hero}
    onRowClick={onRowClick}
  />
  }

  //Siempre es bueno mantener lo mas simple posible este return
  return <table className="characters-table" border="1" align="center">
      <tbody>
        {renderHeader()}
        {heroes.map(renderRow)}
      </tbody>
    </table>
}

//esto establece los tipos de datos que deben tener las props que son entregadas al componente
HeroTable.propTypes = {
  heroes: PropTypes.array,
  onKillHero: PropTypes.func
}

export default HeroTable