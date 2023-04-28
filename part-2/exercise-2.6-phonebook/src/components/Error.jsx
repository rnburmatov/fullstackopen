const Error = ({message}) => {
  if (message) {
    return (
      <div className="error">{message}</div>
    )
  }
}

export default Error;