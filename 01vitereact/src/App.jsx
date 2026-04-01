

import Chai from './chai'



// function App() {
  
// //JSX ka rule he ki ek hi element return krta he
//   return (
//    <Chai/>
//   )
// }


function App() {
  const username = "chai aur code"
  //username yha evaluate hota he  or return me evaluated outcome jata he

//iska solution he ki fragment use krte he
  return (
    <>
   <Chai/>
   <h1>chai aur react{username}</h1>
   <p>test para</p>
   </>
  )
}



export default App
