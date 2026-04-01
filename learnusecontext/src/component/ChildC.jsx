import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'

const ChildC=()=> {
    const {theme,setTheme} = useContext(ThemeContext);
//   const user = useContext(UserContext);


function handle(){
    if(theme=='light')
        setTheme('dark')
    else
        setTheme('light')

}


  return (
    
      <div>
        <button onClick={handle}>change theme</button>
      </div>
    
  )
}

export default ChildC
