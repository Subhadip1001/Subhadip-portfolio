import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Education from './Components/Education'
import Project from './Components/Project'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Education />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App