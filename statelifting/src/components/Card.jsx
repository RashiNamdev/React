import React from 'react'


const Card=(props)=> {
  return (
    <div>
      {/* aap child component ke ander change kr rhe ho vo changes parent me bhi dikhenge */}
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>name state varible ki value inside card: {props.name}</p>
    </div>
  )
}

export default Card
