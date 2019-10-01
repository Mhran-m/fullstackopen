import React from 'react'
import ReactDOM from 'react-dom'
const course ="Half Half Stack application development"
const Header = (props) => {
  return (
    <h1>
    {props.courseName}
      
    </h1>
  )
}
const Content = (props) => {
  return (
    <p>
      {props.part1Name}{props.exercises1Nuber}
      {props.part2Name}{props.exercises2Nuber}
      {props.part3Name}{props.exercises3Nuber}
      
    </p>

  )
}
const Total = (props) => {
  return (
    <p>
      {props.NumberOfExercises}{props.SumNumberofexercises}

    </p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const sum = 'number of exerciseses'
  const SumNumberofexercises = 31

  return (
    <div>
      < Header courseName={course} />

      < Content part1Name={part1} />< Content exercises1Nuber={exercises1} />
      < Content part2Name={part2} />< Content exercises2Nuber={exercises2} />
      < Content part3Name={part3} />< Content exercises3Nuber={exercises3} />
      < Total NumberOfExercises={sum} />< Total SumNumberofexercises={exercises1 + exercises2 + exercises3} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))