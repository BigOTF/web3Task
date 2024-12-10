import React from 'react'
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='w-full px-[30px] lg:px-[100px] flex flex-col'>

        <div className='flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center lg:gap-0'>

            <div className='px-4 pb-[50px] lg:w-[410px] flex flex-col gap-4'>
                <div>
                    <img src={'/brand.png'} />
                </div>

                <div className='flex flex-col gap-5'>

                    <p className='font-inter text-lg text-[#B7B4BB]'>Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.</p>

                    <div className='flex items-center gap-4'>
                        <FaXTwitter  className='w-[30px] h-6 text-[#fff]'/>
                        <FaDiscord className='w-[30px] h-6 text-[#fff]'/>
                    </div>
                    
                </div>
                
               
            </div>

            <div className='flex gap-7'>

                <div className='px-4 pb-[52px] flex flex-col gap-5'>
                    <p className='font-inter font-bold text-[22px] leading-[26px] text-[#fff]'>Quick Link</p>
                    <ul className='flex flex-col gap-[14px]'>
                        <li className='font-inter text-lg text-[#B7B4BB]'>About</li>
                        <li className='font-inter text-lg text-[#B7B4BB]'>How it works</li>
                        <li className='font-inter text-lg text-[#B7B4BB]'>Roadmap</li>
                        <li className='font-inter text-lg text-[#B7B4BB]'>FAq</li>
                    </ul>
                </div>

                <div className='px-4 pb-[52px] flex flex-col gap-5'>
                    <p className='font-inter font-bold text-[22px] leading-[26px] text-[#fff]'>Community</p>
                    <ul className='flex flex-col gap-[14px]'>
                        <li className='font-inter text-lg text-[#B7B4BB]'>Documentation</li>
                        <li className='font-inter text-lg text-[#B7B4BB]'>Web3Dev</li>
                        <li className='font-inter text-lg text-[#B7B4BB]'>LinkTree</li>
                    </ul>
                </div>

            </div>

        </div>

        <div className='flex flex-col lg:flex-row items-center justify-between lg:px-4 gap-4'>
            <p className='font-inter text-[15px] leading-[27px] text-[#B7B4BB]'>Copyright © 2023 Web3Task</p>

            <ul className='flex items-center gap-10'>
                <li className='font-inter text-[15px] leading-[27px] text-[#B7B4BB]'>Privacy policy</li>
                <li className='font-inter text-[15px] leading-[27px] text-[#B7B4BB]'>Terms of Use</li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer