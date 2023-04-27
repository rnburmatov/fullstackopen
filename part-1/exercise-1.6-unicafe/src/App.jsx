import { useState } from 'react';

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  return (
    <>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {(good + bad * -1) / total}</p>
      {
        total > 0 ? good / total : 'Try add feedback'
      }
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handler={handleGoodClick} text="Good"/>
      <Button handler={handleNeutralClick} text="Neutral"/>
      <Button handler={handleBadClick} text="Bad"/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
