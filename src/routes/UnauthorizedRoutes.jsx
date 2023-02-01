import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signin from '../pages/signin/Signin'

function UnauthorizedRoutes() {
  return (
    <div className='content'>
        <Routes>

            <Route path='/' element={<Signin/>}  />
        </Routes>
    </div>
  )
}

export default UnauthorizedRoutes