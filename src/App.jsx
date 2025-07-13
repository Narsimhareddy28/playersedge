import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BookingFlow from './components/ui/BookingFlow.jsx'
import './App.css'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar setIsBookingOpen={setIsBookingOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isBookingOpen && <BookingFlow onClose={() => setIsBookingOpen(false)} />}
    </div>
  )
}

export default App

