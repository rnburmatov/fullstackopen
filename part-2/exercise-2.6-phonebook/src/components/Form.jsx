const Form = ({handleFormSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="fullName">Full name: </label>
          <input type="text" id='fullName' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone number: </label>
          <input type="text" id='phoneNumber' value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
  )
}

export default Form;