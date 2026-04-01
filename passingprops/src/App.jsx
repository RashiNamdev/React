import { useState } from 'react'

import './App.css' 
import Button from './compo/Button';

function App() {
  //below is the state- internal data that the component controls
  const [count, setCount] = useState(0);
  
  function handleClick(){
    setCount(count+1);
  }
  return (
    
      <div>

        <Button handleClick={handleClick} text="click me">
          <h1>{count}</h1> </Button>
        {/* <Card name="rashi">
          <h1>best web dev</h1>
          <p>trying to be consistent</p>
          <p>will complete the course soon</p>
        </Card> */}
        {/* <Card children="me hu na">
          <h1>hi app kese ho</h1> */}
          {/* yha h1 tag override kr dega children ko

        </Card> */}
      </div> 
  )
}

export default App
