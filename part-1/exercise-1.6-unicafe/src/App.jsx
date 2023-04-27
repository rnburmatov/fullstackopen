import { useState } from 'react';

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const StatLine = ({statValue, statText}) => {
  return (
    <tr>
      <td>{statText}</td>
      <td>{statValue}</td>
    </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (!total) {
    return <p>No feedback given</p>
  } else {
    return (
      <>
        <table>
          <tbody>
            <StatLine statValue={good} statText="Good"/>
            <StatLine statValue={neutral} statText="Neutral"/>
            <StatLine statValue={bad} statText="Bad"/>
            <StatLine statValue={total} statText="All"/>
            <StatLine statValue={(good + bad * -1) / total} statText="Average"/>
            <StatLine statValue={total > 0 ? good / total : 0} statText="Positive %"/>
          </tbody>
        </table>
      </>
    )
  }
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
