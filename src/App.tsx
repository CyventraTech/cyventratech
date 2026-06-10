import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* redirect old why-cyventra links to about */}
          <Route path="/why-cyventra" element={<Navigate to="/about" replace />} />
          <Route path="/services" element={<Services />} />
          {/* Solutions & Resources hidden — redirect to home */}
          <Route path="/solutions" element={<Navigate to="/" replace />} />
          <Route path="/resources" element={<Navigate to="/" replace />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
