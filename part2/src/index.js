import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const App = (props) => {
    const [contadorValue, setContador] = useState(0);


    /*
    const contador = useState(0)
    const contadorValue = contador[0];   <= Es lo mismo que lo de arriba
    const updateContador = contador[1];
    */
    

    console.log('render');

    const handleClick = () => {
        
    }

    const handleClickReset = () => {
        setContador(0)
    }

    const isEven = contadorValue % 2 === 0;
    const mensaje = isEven ? 'Es par' : 'Es impar'

    return (
        <div>
            <p>El valor del contador es: </p>
            <h1>{contadorValue}</h1>
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


ReactDOM.render(
        <App/>, 
        root
    );

