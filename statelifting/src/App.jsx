import { useState } from 'react'
import Card from './components/Card'
import './App.css'
//App componenet is parent component and Card is child component
function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadungi

  const [name, setName] = useState('');
  return (
    <div>
      <Card title="Card1" name={name} setName={setName}></Card>
      {/* Sibling ne bhi sync kr skte he */}
      <Card title="Card2" name={name} setName={setName}></Card>
      <p>I am inside Parent Component and Value of name is {name} </p>
    </div>
  )
}

export default App
