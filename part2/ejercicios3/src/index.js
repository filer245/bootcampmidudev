import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')

const NoFeedbackGiven = () => <div><h4>Sin datos</h4></div>

const Estadísticas = (props) => {
  let mostrar = props.show
  let setMostrar = props.setShow
  let good = props.good;
  let neutral = props.neutral;
  let bad = props.bad;
  let total = (good + neutral + bad);
  let promedio = (((1*good) + (-1*bad))/total)
  let positivos = ((good*100)/total)

  const mostrarEst = () => {
    setMostrar(true)
  } 
  return(
    <div>
      <table>
        <tr>
          <td>Total: {total}</td>
        </tr>
        <tr>
          <td>Promedio(1 b, 0 n, -1 m): {mostrar ? promedio.toFixed(2) : 0}</td>
        </tr>
        <tr>  
          <td>% de positivos: {mostrar ? positivos.toFixed(2) : 0}</td>
        </tr>
        <tr>
          <button onClick={mostrarEst}>Crear estadísticas</button>
        </tr>
      </table>
    </div>
  )

}

const ShowEstadísticas = (props) => {
  let mostrar = props.show
  let setMostrar = props.setShow
  let good = props.good;
  let neutral = props.neutral;
  let bad = props.bad;
  let total = (good + neutral + bad);

  return(
    <div>
      {total === 0 ? (<NoFeedbackGiven/>) : (<Estadísticas good={good} neutral={neutral} bad={bad} show={mostrar} setShow={setMostrar} />)}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [mostrar, setMostrar] = useState(false);

  const clickG = () => {
    setGood(good + 1);
  }

  const clickN = () => {
    setNeutral(neutral + 1);
  }

  const clickB = () => {
    setBad(bad + 1);
  }

  const clickR = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setMostrar(false)
  }


  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={clickG}>Buena</button>
      <button onClick={clickN}>Neutral</button>
      <button onClick={clickB}>Mala</button>
      <h2>Reseñas</h2>
      <table>  
        <tr>
          <td>Buenas: {good}</td>
        </tr>
        <tr>
          <td>Neutrales: {neutral}</td>
        </tr>
        <tr>
          <td>Malas: {bad}</td>
        </tr>
      </table>
      <h3>Stadísticas</h3>
      <ShowEstadísticas good={good} neutral={neutral} bad={bad} show={mostrar} setShow={setMostrar} />
      <p>Resetear: </p>
      <button onClick={clickR}>Reset</button>
    </div>
  )
}

ReactDOM.render(<App />, root)