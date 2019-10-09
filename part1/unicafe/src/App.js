

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';
const Stats = (props) => (

  <div>
    <h1>
      statistics
</h1>

    <p>good {props.good} </p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p> all {props.sum}</p>
    <p>average{(props.good - props.bad) / props.sum}</p>
    <p>postive {(props.good / props.sum) * 100}</p>
    <p>{props.allClicks.join(' ')}</p>
  </div>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat())
    setGood(good + 1)
    setSum(sum + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat())
    setNeutral(neutral + 1)
    setSum(sum + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat())
    setBad(bad + 1)
    setSum(sum + 1)
  }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <Stats good={good} neutral={neutral} bad={bad} sum={sum} allClicks={allClicks}
      />

    </div>
  )
}
export default App;
