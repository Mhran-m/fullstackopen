import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';


const Button =(props) =>{
  return(
  
       <div>
          <button onClick={props.clickHandler1}>{props.text}</button>
       </div>
       
  )
}
  
const NoHistory = (props) => {
  if (props.sum === 0) 
   return (
   <p>No feedback given</p>)
   return null  
} 

const App = (props) => {
  
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
 
  const Statistics = (props) => {
  if (props.sum === 0) return (null)
  return (
    <table>
      <tr>
      <td>good {props.good} </td>
      </tr>
      <tr>
      <td>neutral {props.neutdal}</td>
      </tr>
      <tr>
      <td>bad {props.bad}</td>
      </tr>
      <tr>
      <td> all {props.sum}</td>
      </tr>
      <tr>
      <td>average{(props.good - props.bad) / props.sum}</td>
      </tr>
      <tr>
      <td>postive {(props.good / props.sum) * 100}</td>
      </tr>
    </table>
  )
}

  return (
  <div>
      <h1>
        give feedback
      </h1>
      
      <table>
      <tr>
        <td>
        <Button clickHandler1={handleGoodClick} text={'good'}/>
        </td>
        
        
        <td>
        <Button clickHandler1={handleNeutralClick} text={'neutral'}/>
        </td>
        
        
          <td>
          <Button clickHandler1={handleBadClick} text={'bad'}/>
          </td>
          
        </tr>
 
    
      </table>
        <div>
        <h1>
        statistics
      </h1>
        
        <p>{allClicks.join(' ')}</p>

        </div>

    <NoHistory sum={sum}/> 
    <Statistics good={good} bad={bad} neutral={neutral} sum={sum}/>
      
  
    </div>
  )
}
export default App;