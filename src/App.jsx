import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import FocusAreas from './components/FocusAreas'
import Events from './components/Events'
import WhyJoin from './components/WhyJoin'
import Membership from './components/Membership'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <FocusAreas />
        <Events />
        <WhyJoin />
        <Membership />
      </main>
      <Footer />
    </div>
  )
}
