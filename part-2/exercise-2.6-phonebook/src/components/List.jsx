import ListItem from "./ListItem";

const List = ({persons, filter, deleteHandler}) => {
  return (
      filter ? persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase())).map(person => <ListItem key={person.id} person={person} deleteHandler={deleteHandler}/>) : persons.map(person => <ListItem key={person.id} person={person} deleteHandler={deleteHandler} />)
  )
}

export default List;