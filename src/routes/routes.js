import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from '../Container/Projects'
import Home from '../Container/Home'
import Contact from '../Container/Contacts'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projects />} /> 
        <Route path="/contato" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
