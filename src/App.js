// import logo from './logo.svg';
// import './App.css';
import {useState} from "react"
import Card from "./Component/Card/Card";

function App() {  
  const [count, setCount] = useState(0)

  function AddCount(){
    setCount(count+1)
  }
  function RemoveCount(){
    setCount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={AddCount}>Adicionar</button>
      <button onClick={RemoveCount}>Remover</button>
        
    </div>
  );
}

export default App;
