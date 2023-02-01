import React from 'react'
import { Calendar } from '@fullcalendar/core'
import { Dashboard } from '@mui/icons-material'
import { Route, Routes } from 'react-router-dom'
import Articles from '../pages/articles/Articles'
import Events from '../pages/events/Events'
import Error404 from '../pages/global/Error404'
import Sidebar from '../pages/global/Sidebar'
import Topbar from '../pages/global/Topbar'
import Users from '../pages/users/Users'

export default function AuthorizedRoutes(){
  return (
    <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/articles" element={<Articles/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </main>
        </div> 
  )
}
