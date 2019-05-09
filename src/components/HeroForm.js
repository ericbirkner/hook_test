import React, { useState } from 'react';

function HeroForm(props) {

  const heroObject = {
    name: '',
    race: '',
    age: '',
    weapon: ''
  }

  const [values, setValues] = useState('')

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    console.log(event.target.name);
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' value={values.name} placeholder='name' onChange={handleChange}/>
      <input type="text" name='race' value={values.race} placeholder='race' onChange={handleChange}/>
      <input type="text" name='age' value={values.age} placeholder='age' onChange={handleChange}/>
      <input type="text" name='weapon' value={values.weapon} placeholder='weapon' onChange={handleChange}/>
      <button type='submit'>Guardar Heroe</button>
    </form>
  );
};

export default HeroForm
