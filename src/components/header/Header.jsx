import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const [showNav, setShowNav] = useState(true);
    const handleShowNav = () => {
        return setShowNav((prev) => !prev);
    }
  return (
    <div className='pr-[30px] pl-[20px] py-2 lg:pr-[100px] lg:pl-[80px]'>
        <header className='flex items-center justify-between w-full'>
            <div className=''>
                <img src={'/web3task-logo.png'} alt='brand-logo' className='h-[70px] w-[210px] lg:hidden'/>
                <img src={'/web3task-logo.png'} alt='brand-logo' className='hidden lg:inline'/>
            </div>

            <div className='hidden lg:inline'>
                <ul className='flex items-center justify-between gap-8'>
                    <p className='font-inter font-bold text-lg leading-5 text-[#fff] hover:text-gray-200 transition-all duration-300 cursor-pointer'>Home</p>
                    <p className='font-inter font-bold text-lg leading-5 text-[#fff] hover:text-gray-200 transition-all duration-300 cursor-pointer'>How it works</p>
                    <p className='font-inter font-bold text-lg leading-5 text-[#fff] hover:text-gray-200 transition-all duration-300 cursor-pointer'>Roadmap</p>
                    <p className='font-inter font-bold text-lg leading-5 text-[#fff] hover:text-gray-200 transition-all duration-300 cursor-pointer'>FAQ</p>
                </ul>
            </div>

            <div className='px-10 py-5 rounded-[50px] custom-gradient cursor-pointer hidden lg:flex items-center justify-center'>
                <button className='font-inter font-bold text-lg leading-[21.6px] text-[#fff]'>Open dAPP</button>
            </div>

        </header>
    </div>
  )
}

export default Header