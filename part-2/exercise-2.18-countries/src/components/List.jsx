import LessTen from "./LessTen";
import OneCountry from './OneCountry';

const List = ({countries}) => {

  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length > 1) {
    return (
      <LessTen countries={countries}/>
    )
  } else if (countries.length === 1) {
    return (
      <OneCountry country={countries[0]}/>
    )
  }
}

export default List;