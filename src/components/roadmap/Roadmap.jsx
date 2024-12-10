import React from 'react'

const Roadmap = () => {
  return (
    <div className='px-[30px] lg:px-[100px] w-full py-10'>

        <div className='flex items-center justify-center mb-20'>
            <img src={'/chooseLine.png'}/>
        </div>

        <div className='flex items-center justify-center'>
            <p className='font-inter font-bold text-6xl leading-[70px] lg:text-[64px] lg:leading-[64px] text-[#fff] text-center'>The <span className='choose-text-gradient'>Roadmap</span></p>
        </div>

        <div>
            <img src={'/roadmap.png'} />
        </div>
    </div>
  )
}

export default Roadmap