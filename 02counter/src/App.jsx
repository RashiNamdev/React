import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  //usestate is a hook that change the states
  //let counter = 15;
  const addValue =()=>{
    console.log("clicked", counter);
    //counter = counter + 1
    setCount(counter+1);

  }

  const removeValue =()=>{
    console.log("clicked", counter);
    //counter = counter + 1
    setCount(counter-1);

  }
  return (
    <>
     <h1>chai or react</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>add value{counter}</button><br />
     <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
