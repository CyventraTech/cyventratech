import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CyraChatbot from './CyraChatbot'

export default function Layout() {
  return (
    <div className="min-h-full flex flex-col bg-black overflow-x-hidden">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <CyraChatbot />
    </div>
  )
}
