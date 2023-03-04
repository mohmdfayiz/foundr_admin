import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import Articles from '../pages/articles/Articles'
import Article from '../pages/articles/Article'
import Events from '../pages/events/Events'
import Event from '../pages/events/Event'
import Error404 from '../pages/global/Error404'
import Sidebar from '../pages/global/Sidebar'
import Topbar from '../pages/global/Topbar'
import Users from '../pages/users/Users'
import Editor from '../pages/articles/Editor'

export default function AuthorizedRoutes(){
  return (
    <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path='/' exact element={<Navigate to={'/dashboard'}/>} />
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path='/event' element={<Event/>}/>
              <Route path="/articles" element={<Articles/>}/>
              <Route path='/article' element={<Article/>}/>
              <Route path='/editor' element={<Editor/>} />
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </main>
        </div> 
  )
}
