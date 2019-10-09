

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const [allClicks, setAll] = useState([])

  const HandleGoodClick = () => {
    setAll(allClicks.concat())
    setGood(good + 1)
    setSum(sum + 1)


  }
  const HandleNeutralClick = () => {
    setAll(allClicks.concat())
    setNeutral(neutral + 1)
    setSum(sum + 1)


  }

  const HandleBadClick = () => {
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

        <button onClick={HandleGoodClick}>good</button>

        <button onClick={HandleNeutralClick}>neutral</button>


        <button onClick={HandleBadClick}>bad</button>


      </div>
      <h1>
        statistics
      </h1>
      <p>good {good} </p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p> all {sum}</p>
      <p>average{(good - bad) / sum}</p>
      <p>postive {(good / sum) * 100}</p>
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
export default App;
