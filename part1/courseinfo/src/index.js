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
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name: 'State of a component',
  exercises: 14
}
const Part = (props) => {
  console.log('received props.name: ' + props.name);
  return (
      <p>
          {props.name} {props.exercises}
      </p>
  );

}


const App = () => {

  const exercises1 = 10

  const exercises2 = 7
  
  const exercises3 = 14
  return (
    <div>
      <Header courseName={course}/>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))