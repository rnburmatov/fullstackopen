const Added = ({name}) => {
  if (name) {
    return (
      <div className="addedItem">{name} is added...</div>
    )
  }
}

export default Added;