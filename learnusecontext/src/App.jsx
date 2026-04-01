import { createContext } from 'react'
import { useState } from 'react'
import './App.css'
import ChildA from './component/ChildA'

//step 1: create a context
//you can wrap all the component that you want to make consumer that consume all the props of the provider component
// const UserContext = createContext();
const ThemeContext = createContext();
//step 2: wrap all the child inside a provider

//step 3: pass the values

//step 4 : consumer ke ander jake consume kr lo
 
function App() {
  // const [user, setUser] = useState({name:'hello'})
  const [theme,setTheme] = useState('light');

  return (
    
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA/>
        </div>
      </ThemeContext.Provider>

    
    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA/>
    //   </UserContext.Provider>

    // </>  
  )
}

export default App
export {ThemeContext}
