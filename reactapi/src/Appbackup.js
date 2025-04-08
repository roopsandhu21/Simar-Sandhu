import Student from "./Student";
import './App.css';
import {useState } from "react";


function App() {
  const [first,setFirst]=useState(20)
  const [second,setSecond]=useState(40)
  const [total,setTotal]=useState(0)
  const [flag,setFlag]=useState(true)

  function showNew()
  {
    setTotal(first+second)
  }

  function toggle()
  {
    setFlag(!flag)
  }
  return (
    <div>
      <h1>hello world</h1>
      <Student />
      <button onClick={()=>showNew()}>Show</button>
      <button onClick={toggle}>change</button>
      <h1>Total sum is{total}</h1>
      {
       flag?"flag is true":"flag is false"
      }
    </div>
  );
}

export default App;
