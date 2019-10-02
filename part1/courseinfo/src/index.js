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
  console.log('received props.name: ' + props.partsOfContent);
  return (
    <div>
      <p> {props.partsOfContent[0].name}{props.partsOfContent[0].exercises}</p>

      <p>{props.partsOfContent[1].name}{props.partsOfContent[1].exercises}</p>

      <p> {props.partsOfContent[2].name}{props.partsOfContent[2].exercises}</p>
    </div>
  )
}
const Total = (props)=> {
return(
  <p>Number of exercises {props.partsOfTotal[0].exercises + props.partsOfTotal[1].exercises +props.partsOfTotal[2].exercises}</p>

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
      <Content partsOfContent={course.parts} />
      <Total partsOfTotal={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))