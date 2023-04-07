import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');

const Counter = ({number}) =>{
    console.log("Counter render");
    return <h1>{number}</h1>
}

const App = (props) => {
    const [contadorValue, setContador] = useState(0);
    const isEven = contadorValue % 2 === 0;
    const mensaje = isEven ? 'Es par' : 'Es impar';

    /*
    const contador = useState(0)
    const contadorValue = contador[0];   <= Es lo mismo que lo de arriba
    const updateContador = contador[1];
    */

    console.log('render');

    const handleClick = () => {
        //setContador(contadorValue + 1);
        setContador((prevContador) => {
            return prevContador + 1
        })
    }

    const handleClickReset = () => {
        setContador(0)
    }

    return (
        <div>
            <p>El valor del contador es: </p>
            <Counter number={contadorValue}/>
            <p>{mensaje}</p>
            <button onClick={handleClick}>
                Incrementar
            </button>
            <button onClick={handleClickReset}>
                Resetear
            </button>
        </div>
    )
}

ReactDOM.render(<App/>, root);