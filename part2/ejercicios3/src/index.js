import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [mostrar, setMostrar] = useState(false)
  let total = (good + neutral + bad);
  let promedio = (((1*good) + (-1*bad))/total)
  let positivos = ((good*100)/total)

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

  const mostrarEst = () => {
    setMostrar(true)
  }

  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={clickG}>Buena</button>
      <button onClick={clickN}>Neutral</button>
      <button onClick={clickB}>Mala</button>
      <h2>Reseñas</h2>
      <p>Buenas: {good}</p>
      <p>Neutrales: {neutral}</p>
      <p>Malas: {bad}</p>
      <h3>Stadísticas</h3>
      <p>Total: {total}</p>
      <p>Promedio(1 b, 0 n, -1 m): {mostrar ? promedio.toFixed(2) : 0}</p>
      <p>% de positivos: {mostrar ? positivos.toFixed(2) : 0}</p>
      <button onClick={mostrarEst}>Crear estadísticas</button>
      <p>Resetear: </p>
      <button onClick={clickR}>Reset</button>
    </div>
  )
}

ReactDOM.render(<App />, root)