import React, { useEffect } from 'react'
import AOS from 'aos';

const Choose = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div className='w-full py-32 flex flex-col items-center justify-center gap-16'>

      <div className='mb-6'>
        <img src={'/chooseLine.png'}/>
      </div>

      <div className='flex flex-col gap-20 px-4'>
        <p className='font-inter font-bold text-6xl lg:text-[64px] lg:leading-[64px] text-[#fff] text-center'>Why <span className='choose-text-gradient'>choose us?</span></p>
      </div>

      <div className='grid gap-7 md:grid-cols-2 md:gap-9 lg:grid-cols-4 lg:gap-[15px]'>

        <div data-aos="fade-up" className='w-[277.5px] px-8 py-12 rounded-3xl border stroke-[#E8E8E8] flex flex-col gap-[34px]'>
          <div className='w-12 h-12'>
            <img src={'/vector1.png'}/>
          </div>

          <div className='flex flex-col gap-6'>
            <p className='font-inter font-bold text-3xl text-[#fff]'>DAOs</p>
            <p className='font-inter text-xl text-[#B7B4BB]'>Tool for organizations.</p>
          </div>
        </div>

        <div data-aos="fade-up"  data-aos-delay="200">
          <div className='w-[277.5px] px-8 py-12 rounded-3xl border stroke-[#E8E8E8] flex flex-col gap-[34px] transform md:translate-y-28'>
            <div className='w-12 h-12'>
              <img src={'/vector4.png'}/>
            </div>

            <div className='flex flex-col gap-6'>
              <p className='font-inter font-bold text-3xl text-[#fff]'>Proof-of-Value</p>
              <p className='font-inter text-xl text-[#B7B4BB]'>Score system for measuring user results.</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"  data-aos-delay="350"  className='w-[277.5px] px-8 py-12 rounded-3xl border stroke-[#E8E8E8] flex flex-col gap-[34px]'>
          <div className='w-12 h-12'>
            <img src={'/vector3.png'}/>
          </div>

          <div className='flex flex-col gap-6'>
            <p className='font-inter font-bold text-3xl text-[#fff]'>NFT</p>
            <p className='font-inter text-xl text-[#B7B4BB]'>Work tokenization and portfolio registration.</p>
          </div>
        </div>

        <div data-aos="fade-up"  data-aos-delay="450" >
          <div className='w-[277.5px] px-8 py-12 rounded-3xl border stroke-[#E8E8E8] flex flex-col gap-[34px] transform md:translate-y-28 lg:translate-y-20'>
            <div className='w-12 h-12'>
              <img src={'/vector2.png'}/>
            </div>

            <div className='flex flex-col gap-6'>
              <p className='font-inter font-bold text-3xl text-[#fff]'>Open Source</p>
              <p className='font-inter text-xl text-[#B7B4BB]'>Networking for users and projects.</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Choose