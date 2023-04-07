import { useState } from "react";
import ReactDOM from "react-dom";
const root = document.getElementById('root');

const WarningNoUsed = () => {
    return <h1>Todavía no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
    console.log({clicks});
    return <p>{clicks.join(', ')}</p>
}

const App = () => {
    //const [left, setLeft] = useState(0);
    //const [right, setRight] = useState(0);

    const [clicks, setClicks] = useState([])
    
    const handleClickLeft = () =>{
        setClicks(prevClicks => ([...prevClicks,'L']))
    }

    const handleClickRight = () =>{
        setClicks(prevClicks => ([...prevClicks,'R']))
    }

    const handleReset = () => {
        setClicks([]);
    }

    const left = clicks.filter(click => click === 'L');
    const right = clicks.filter(click => click === 'R');

    return(
        <div>
            {left.length}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {right.length}
            <p>
                <button onClick={handleReset}>Reset</button>
            </p>
            <p>Clicks totales: {clicks.length}</p>
            {clicks.length === 0 ? (<WarningNoUsed/>) : (<ListOfClicks clicks={clicks}/>)}
        </div>
    )
}

ReactDOM.render(<App/>, root);