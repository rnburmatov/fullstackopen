import { useState } from "react";

import OneCountry from "./OneCountry";

const LessTen = ({countries}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [manyCountries, setManyCountries] = useState(countries);

  const handleBtn = (id) => {
    setShowInfo(!showInfo);
    const countriesArr = countries.filter(c => c.ccn3 === id);
    setManyCountries(countriesArr);
  }

  if (showInfo) {
    return (
      <OneCountry country={manyCountries[0]}/>
    )
  } else {
    return (
      <ul>
          {countries.map(country => <li key={country.ccn3}>
            <p>{country.name.common}</p>
            <button onClick={() => handleBtn(country.ccn3)}>Show Info</button>
          </li>)}
        </ul>
    )
  }
}

export default LessTen;