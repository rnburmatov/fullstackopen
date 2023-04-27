const Filter = ({filter, handleFilter}) => {
  return (
    <div>
        <label htmlFor="filterNames">Filter by name: </label>
        <input value={filter} onChange={handleFilter}/>
      </div>
  )
}

export default Filter;