import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Articles from '../pages/articles/Articles'
import Events from '../pages/events/Events'
import Error404 from '../pages/global/Error404'
import Sidebar from '../pages/global/Sidebar'
import Topbar from '../pages/global/Topbar'
import Users from '../pages/users/Users'
import Editor from '../pages/articles/Editor'
import Calendar from '../pages/calendar/Calendar'

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
              <Route path='/editor' element={<Editor/>} />
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </main>
        </div> 
  )
}
