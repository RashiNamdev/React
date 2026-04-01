import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { use } from 'react'
function App() {

  const[count,setCount]=useState(0);
  const[total,setTotal]=useState(1);

//first -> side-effect function
//second ->clean-up function (ek particular component ke event ko clean krna chahte he)
//third -> comma separated dep list (in component ke updation pr useefect call hoga hr baar )


//this snippet of useeffect
//   useEffect(()=>{
// first


//     return()=>{
// second
//     }
//   },[third])


//there is multiple variation of using useeffect
//variation 1-> runs on every render
// useEffect(()=>{
//   alert("i will run on every render")

// })


//variation 2 -> that runs on only first render
// useEffect(()=>{
//   alert("i will run on every render")

// },[])


// //variation 3 ->run on every time when count is updated 
// useEffect(()=>{
//   alert("i will run on every time when count is updated")

// },[count])


//variation 4 ->run on multiple dependencies
// useEffect(()=>{
//   alert("i will run on every time when count and total both is updated")

// },[count,total])


// variation 5 ->this time add clean up function
useEffect(()=>{
  alert("count is updated")
  return()=>{
    alert("count is unmounted from UI");

  }
},[count])






function handle(){
  setCount(count+1);
  setTotal(total+1);
}

  return (
   <div>
    <button onClick={handle}>clickme</button>
    <br />
    count is:{count}

     <button onClick={handle}>total button</button>
    <br />
    count is:{total}
    
   </div>
  )
}

export default App
