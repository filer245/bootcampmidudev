import React from 'react';
import ReactDOM from 'react-dom';

const Header = (p) => <h1>{p.course}</h1>

const Part = (p) => <p>{p.pa1} {p.ex1}</p>

const Content = (p) =>{
  return(
    <div>
      <Part pa1={p.parts[0].name} ex1={p.parts[0].exercises}/>
      <Part pa1={p.parts[1].name} ex1={p.parts[1].exercises}/>
      <Part pa1={p.parts[2].name} ex1={p.parts[2].exercises}/>
    </div>
  )
}

const Total = (p) => {
  return(
    <p>Number of exercises {p.parts[0].exercises + p.parts[1].exercises + p.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
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
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
