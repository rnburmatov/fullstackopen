const OneCountry = ({country}) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((value) => <li key={value}>{value}</li>)}
      </ul>
      <img src={country.flags.png} alt="Country flag" />
    </div>
  )
}

export default OneCountry;