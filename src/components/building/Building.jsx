import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Building = () => {
  return (
    <div className='w-full pt-40 flex flex-col items-center justify-center'>

        <div className='flex items-center justify-center mb-20'>
            <img src={'/chooseLine.png'}/>
        </div>

        <div className='w-full buildingBuilding py-32 md:py-40 lg:py-48 flex flex-col items-center justify-center gap-9'>
            <p className='font-inter font-bold text-6xl leading-[70px] lg:text-[64px] lg:leading-[64px] text-[#fff] text-center'>Let's start <span className='choose-text-gradient'>building</span></p>

            <div className='custom-gradient px-10 py-5 w-[219.75px] rounded-[50px] flex items-center justify-center gap-2'>
                <p className='font-inter font-bold text-lg leading-5 text-[#fff]'>Open dAPP</p>
                <GoArrowUpRight className='w-4 h-4 text-[#fff]'/>
            </div>
        </div>

    </div>
  )
}

export default Building