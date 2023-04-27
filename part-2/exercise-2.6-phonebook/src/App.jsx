import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const doubles = persons.filter(person => person.name === newName);
    if (doubles.length > 0) {
      alert(`${newName} is already added!`)
    } else {
      setPersons(persons.concat({name: newName}));
    }
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
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </div>
  )
}

export default App
