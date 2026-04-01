import { useState } from 'react'
import './App.css'

function App() {
   
function handle(){
  alert("i am clicked")

}

function handleInputChange(e){
  console.log("value till now",e.target.value);
}

function handleSubmit(e){
  e.preventDefault(); //we dont want to page to reload
  //i am writing my custom behaviour down
  alert("form submit krdu kya");
}
  return (
    <div>
      <button onClick={handle}>click me</button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
      <br />
      {/* <button onClick={alert("Button click hua he")}>click me</button> */}
      {/* this is called direct invocation */}

      <button onClick={()=>alert("Button click hua he")}>click me</button>

    </div>
    
  )
}

export default App
