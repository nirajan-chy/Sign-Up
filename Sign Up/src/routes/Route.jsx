import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'


const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet/>}>
      <Route index element={<Login />} />
      <Route path='signup' element={<Signup/>}/>
      </Route>
    
    </Routes>
  )
}

export default MyRoute
