
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import NotFound from './Components/NotFound/NotFound'
import { Children } from 'react'
import Home from './Components/Home/Home'
import Cars from './Components/Cars/Cars'
import CarDetails from './Components/CarDetails/CarDetails'

function App() {
 const routes= createBrowserRouter([{
  path:"/",
  element:<MasterLayout/>,
  errorElement:<NotFound/>,

  children:[
    {index:true,element:<Home/>},
     {path:"home",element:<Home/>},
      {path:"cars",element:<Cars/>},
       {path:"cars/:id",element:<CarDetails/>},
  ],
 },

 ]);

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
 
    </>
  )
}

export default App
