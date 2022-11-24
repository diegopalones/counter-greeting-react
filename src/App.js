import './App.css';
import Counter from './Components/Counter/Counter';
import Greeting from './Components/Greeting/Greeting';

const person = {
  name: "Euralio"
}



function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <Greeting person={person}/>
      
    </div>
  );
}

export default App;
