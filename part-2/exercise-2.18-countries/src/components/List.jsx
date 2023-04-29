const List = ({countries}) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map(country => <li key={country.ccn3}>{country.name.common}</li>)}
      </ul>
    )
  } else if (countries.length === 1) {
    return (
      <div>
        <h2>{countries[0].name.common}</h2>
        <p>Capital: {countries[0].capital}</p>
        <p>Area: {countries[0].area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(countries[0].languages).map((value) => <li key={value}>{value}</li>)}
        </ul>
        <img src={countries[0].flags.png} alt="" />
      </div>
    )
  }
}

export default List;