import logo from './logo.svg';
import './App.css';
import {Form} from './component/Form';
import {FormShow} from "./component/FormShow";
import {useState} from "react"
function App() {
  const [show,setshow]=useState("true")
  return (
    <div className="App">
       <button className="togglebtn" onClick={()=>{
        setshow(!show)
      }}>Toggle</button>

      {show? <Form/>:<FormShow/>}
    </div>
  );
}

export default App;
