import { useState } from 'react'

import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Navbar from "./component/Navbar";
import ParamComp from './component/ParamComp';
import Courses from './component/Courses';
import Reports from './component/Reports';
import MockTest from './component/MockTest';
import NotFound from './component/Notfound';

 

//creates routes
const router = createBrowserRouter(
  [
    {
      path:"/", element:
      <div>
        <Navbar/><Home/>
      </div>

    },
    {
      path:"/about", element:
      <div>
        <Navbar/><About/>
      </div>


    },
    {
      path:"/dashboard", element:
      <div>
        <Navbar/><Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>

        },
        {
           path:'report',
          element:<Reports/>

        },
        {
           path:'mock-test',
          element:<MockTest/>

        },
       
      ]


    },

    {
      path:"/student/:id", element:
      <div>
        <Navbar/><ParamComp/>
      </div>


    },
     {
          //this * means anything except the explicit upper path
          path:'*',
          element:<NotFound/>
        }
    
  ]
);

function App() {
  

  return (
   <div>
     <RouterProvider router={router}/>
   </div>
  )
}

export default App
