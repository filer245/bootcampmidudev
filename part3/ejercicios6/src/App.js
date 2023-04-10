import React, { useState } from "react";
import { Persons } from "./Persons";

const App = () => {
  const [ persons, setPersons ] = useState([{id: 1, name: 'Antonio'}]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const addNewPerson = {
      id: persons.length + 1,
      name: newName,
    }
    setPersons([...persons, addNewPerson])
    setNewName('')  
    
  }

  return (
    <div>
      <h2>Lista de contactos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Nombre: <input type="text" onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button>Añadir</button>
        </div>
      </form>
      <h2>Números</h2>
      {persons.map(person => (<Persons key={person.id} {...person}/>))}
    </div>
  )
}

export default App;
