import React from 'react'
import One from './compound/one'
import Room from './compound/Room'
import Roombook from './compound/Roombook'
import Meal from './compound/meal'
// import Dashboard from './compound/Dashboard'
import Login from './compound/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Newuser from './compound/Newuser'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './compound/Dashboard'


const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<One/>}/>
          <Route path='/register' element={<Newuser/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Roommanual' element={<Room/>}/>
          <Route path='/Roombook' element={<Roombook/>}/>
          <Route path='/Meal' element={<Meal/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
         </Routes>
      </BrowserRouter>
    </>

  )
}

export default App