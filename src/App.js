
import { useState } from 'react';
import Card from './Card'
import './App.css'
function App() {
  const [show,setShow] = useState(false)
  return (
    <>
     {show?<Card/>:<button onClick={()=>{setShow(true)}}>Click me</button>}
    </>
  );
}

export default App;
