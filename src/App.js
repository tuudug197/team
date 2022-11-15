import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import  { Navbar, Footer}  from './components'
import { Blogpage, Contactpage, Homepage} from './pages'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={ <Homepage />}/>
        <Route path= "/Contact" element={ <Contactpage />}/>
        <Route path= "/Blogs" element={ <Blogpage />}/>
      </Routes>
      < Footer/>
    </Router>
  )
}

export default App