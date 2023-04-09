import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

let points = [0, 0, 0, 0, 0, 0];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votos, setVotos] = useState([0,0,0,0,0,0])
  let max = props.anecdotes.length;


  const votar = () => {
    setVotos(votos[selected] + 1);
    console.log(votos);

  }

  const generar = () => {
    setSelected(Math.floor(Math.random()*max))
  }

  const reset = () => {
    let posición = 0;
    props.puntos.forEach(element => {
      props.puntos[posición] = 0;
      posición += 1;
    });
    console.log(props.puntos)
  }

  return (
    <div>
      <h1>Anécdotas inglesas</h1>
      <div>
        {props.anecdotes[selected]}
        <h2>Votos: {props.puntos[selected]}</h2>
      </div>
      <button onClick={generar} >Generar una frase</button>
      <button onClick={votar} >Votar</button>

      <button onClick={reset}>Resetear votos</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App anecdotes={anecdotes} puntos={points} />);