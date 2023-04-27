import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas',
    number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const doubleNames = persons.filter(person => person.name === newName);

    if (doubleNames.length > 0) {
      alert(`${newName} is already added!`)
    } else {
      setPersons(persons.concat({
        name: newName,
        number: newNumber
      }));
    }
  }
  
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
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
          <label htmlFor="phoneNumber">Enter phone number:</label>
          <input type="text" id='phoneNumber' value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default App
