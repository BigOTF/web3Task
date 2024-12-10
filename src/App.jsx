import { useState } from 'react'
import 'aos/dist/aos.css';

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand';
import Choose from './components/choose/Choose';

function App() {

  return (
    <div className='pb-[600px] relative'>
      <Header />
      <Hero />
      <Brand />
      <Choose />
    </div>
  )
}

export default App
