import { useState } from 'react'
import 'aos/dist/aos.css';

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand';
import Choose from './components/choose/Choose';
import Achievement from './components/achievement/Achievement';
import Work from './components/work/Work';
import Roadmap from './components/roadmap/Roadmap';

function App() {

  return (
    <div className='relative'>
      <Header />
      <Hero />
      <Brand />
      <Choose />
      <Achievement />
      <Work />
      <Roadmap />
    </div>
  )
}

export default App
