import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPersons(persons.concat({name: newName}))
  }
  
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="fullName">Enter full name:</label>
          <input type="text" id='fullName' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type='submit' onClick={handleFormSubmit}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </div>
  )
}

export default App
