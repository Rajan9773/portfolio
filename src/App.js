import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './route/home'
import About from './route/about'
import Project from './route/project'
import Contact from './route/contact'
import "./style/navbar.css"
function App() {
  return (
    <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
           
            <Route path='/project' element={<Project/>}/>
            </Routes>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    </div>
  )
}

export default App
