import { useState } from 'react'
import 'aos/dist/aos.css';

import Header from './components/header/Header'
import Hero from './components/hero/Hero'

function App() {

  return (
    <div className='pb-[600px] relative'>
      <Header />
      <Hero />
    </div>
  )
}

export default App
