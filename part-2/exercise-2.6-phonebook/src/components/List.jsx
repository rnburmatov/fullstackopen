const List = ({persons, filter}) => {
  return (
      filter ? persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase())).map(person => <li key={person.id}>{person.name} {person.number}</li>) : persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)
  )
}

export default List;