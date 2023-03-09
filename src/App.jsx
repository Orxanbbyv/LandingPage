import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import MemberShip from './components/membership/MemberShip'
import "./style/reset.scss"
function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <MemberShip/>
    </div>
  )
}

export default App
