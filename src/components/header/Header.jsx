import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const [showNav, setShowNav] = useState(true);
    const handleShowNav = () => {
        return setShowNav((prev) => !prev);
    }
  return (
    <div className='pr-[30px] pl-[20px] py-2 lg:pr-[100px] lg:pl-[80px] sticky top-[20px] lg:top-[50px] right-0 left-0 z-10'>
        <header className='flex items-center justify-between w-full bg-[#1B1B1BCC] rounded-[136px] px-3 py-2 lg:px-16'>
            <div className=''>
                <img src={'/brand.png'} alt='brand-logo' className='h-[70px] w-[210px] lg:hidden'/>
                <img src={'/brand.png'} alt='brand-logo' className='hidden lg:inline border-none'/>
            </div>

            <div className='hidden lg:flex gap-7'>
                <ul className='flex items-center justify-between gap-8'>
                    <p className='font-inter font-bold text-lg leading-5 text-[#fff] hover:text-[#B7B4BB] transition-all duration-300 cursor-pointer'>How it works</p>
                    <p className='font-inter font-bold text-lg leading-5 text-[#fff] hover:text-[#B7B4BB] transition-all duration-300 cursor-pointer'>Roadmap</p>
                    <p className='font-inter font-bold text-lg leading-5 text-[#fff] hover:text-[#B7B4BB] transition-all duration-300 cursor-pointer'>FAQ</p>
                </ul>

                <div className='px-10 py-5 rounded-[50px] custom-gradient cursor-pointer hidden lg:flex items-center justify-center'>
                    <button className='font-inter font-bold text-lg leading-[21.6px] text-[#fff]'>Open dAPP</button>
                </div>
            </div>

        </header>
    </div>
  )
}

export default Header