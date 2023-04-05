import React from 'react';
import ReactDOM from 'react-dom';

const Headers = (p) => <h1>{p.course}</h1>

const Part = (p) => <p>{p.pa1} {p.ex1}</p>

const Content = (p) =>{
  return(
    <div>
      <Part pa1={p.pa1} ex1={p.ex1}/>
      <Part pa1={p.pa2} ex1={p.ex2}/>
      <Part pa1={p.pa3} ex1={p.ex3}/>
    </div>
  )
}

const Total = (p) => {
  return(
    <p>Number of exercises {p.ex1 + p.ex2 + p.ex3}</p>
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

  return (
    <div>
      <Headers course={course}/>
      <Content pa1={part1} ex1={exercises1} pa2={part2} ex2={exercises2} pa3={part3} ex3={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
