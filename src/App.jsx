import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Works from './pages/Works'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> 
      <Footer />
    </div>
  )
}

export default App
