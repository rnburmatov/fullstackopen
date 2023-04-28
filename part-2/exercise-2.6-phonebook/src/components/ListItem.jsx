const ListItem = ({person, deleteHandler}) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={() => deleteHandler(person.id)}>Delete Item</button>
    </li>
  )
}

export default ListItem;