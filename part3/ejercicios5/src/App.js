const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Parts = (props) =>{
  console.log()
  const {name, exercises} = props;

  return(
    <p>{name} {exercises}</p>
  )
}

const Content = (props) => {
  const partes = props.parts;

  return(
    <div>
      {partes.map(part => (
        <Parts key={part.id} {...part} />
      ))}
    </div>
  )
}

const Course = ({course}) => {
  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />
}

export default App