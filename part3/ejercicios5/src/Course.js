const Header = (props) => {
    return <h1>{props.name}</h1>
}
  
const Parts = (props) => {
    console.log()
    const { name, exercises } = props;
  
    return (
      <p>{name} {exercises}</p>
    )
}
  
const Content = (props) => {
    const partes = props.parts;
    const ex = [];
    partes.forEach(parte => {
      ex.push(parte.exercises)
    });
    const total = ex.reduce((s, p) => s + p);
    return (
      <div>
        {partes.map(part => (
          <Parts key={part.id} {...part} />
        ))}
        <h2>Total: {total}</h2>
      </div>
    )
}
  
export const Course = ({ course }) => {
    return (
      <div>
        {course.map(curso =>
          <div>
            <Header name={curso.name} />
            <Content parts={curso.parts} />
          </div>
        )}
      </div>
    )
}