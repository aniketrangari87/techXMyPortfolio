import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Certification from './pages/Certification'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto  min-h-screen'>
    <Navbar/>
    <Footer/>
    </div>
  )
}

export default App
