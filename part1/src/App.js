import './App.css';
import Mensaje from './Mensaje';


const Description = () => {
  return <p>Esta es la app del curso </p>
}

const App = () => {

  return(
    <div className="App">
      <Mensaje color="red" msg="Estamos trabajando" />
      <Mensaje color="blue" msg="Estamos estudiando" />
      <Mensaje/>
      <Description/>
    </div>
  );
}

export default App;
