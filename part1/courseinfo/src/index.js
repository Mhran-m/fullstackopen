import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <h1>

      {props.courseName}

    </h1>
  )
}
const Content = (props) => {
  console.log('received props.name: ' + props.parts);
  return (
    <div>
      <p> {props.parts[0].name}{props.parts[0].exercises}</p>

      <p>{props.parts[1].name}{props.parts[1].exercises}</p>

      <p> {props.parts[2].name}{props.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: "Half Half Stack application development",

    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }



  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))