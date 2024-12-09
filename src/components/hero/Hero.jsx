import React, { useEffect } from 'react'
import AOS from 'aos';

import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: false,
        });
    }, []);

  return (
    <main className='w-full lg:px-[100px] lg:py-[140px] px-[30px] py-[90px] flex flex-col md:flex-row items-center gap-6 lg:gap-4'>
        <div className='flex flex-col items-center lg:items-start gap-8 lg:gap-8'>
            <p className='font-inter font-bold text-[#fff] text-[60px] leading-[70px] lg:text-[72px] lg:pr-16 lg:leading-[85px] text-center lg:text-start'>The on-chain Git Hub is here</p>
            <p className='font-inter text-xl lg:text-2xl lg:leading-9 text-[#B7B4BB] lg:pr-4 text-center lg:text-start'>Spend less money in projects while providing a learning curve for students worldwide.</p>

            <div className='custom-gradient px-10 py-5 w-[219.75px] rounded-[50px] flex items-center justify-center gap-2'>
                <p className='font-inter font-bold text-lg leading-5 text-[#fff]'>Open dAPP</p>
                <GoArrowUpRight className='w-4 h-4 text-[#fff]'/>
            </div>

            <div className='flex items-center gap-5'>
                <img src={'/List.png'} alt='community-members'/>
                
                <div className='flex flex-col'>
                    <p className='font-inter font-bold text-[32px] leading-[32px] text-[#fff]'>5k+</p>
                    <p className='font-inter text-xs leading-5 text-[#B7B4BB]'>Community members</p>
                </div>
            </div>
        </div>

        <div data-aos="fade-up">
            <img src={'/hero.png'} alt='hero-image' />
        </div>
    </main>
  )
}

export default Hero