import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Error404 from '../pages/global/Error404'
import Signin from '../pages/signin/Signin'

function UnauthorizedRoutes() {
  return (
    <div className='content'>
        <Routes>
            <Route path='/' element={<Signin/>}  />
            <Route path="*" element={<Error404/>}/>
        </Routes>
    </div>
  )
}

export default UnauthorizedRoutes