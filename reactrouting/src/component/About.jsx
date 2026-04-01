import React from 'react'
import { useNavigate } from 'react-router-dom'
const About=()=> {

  
  const navigate = useNavigate();
  function handle(){
    navigate('/dashboard');

  }
  

  return (
   <div>About page
     <button onClick={handle}>move to dashboard page</button>
   </div>
  )
}

export default About
