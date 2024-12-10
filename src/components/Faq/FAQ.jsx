import React, { useState } from 'react'
import Faq from '../../data/Faq'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
    const [faqData, setFaqData] = useState(Faq);

    const handleShowQuestion = (id) => {
        const faqID = faqData.map((data) => data.id === id ? { ...data, show: !data.show } : data);
        return setFaqData(faqID);
    }

    const DisplayFaq = () => {
        return faqData.map((data) => {
            return (
                <div key={data.id} className=''>

                    <div className='flex flex-col lg:px-1'>

                        <div className='flex items-center justify-between'>
                            <p className='font-inter font-bold text-[21px] text-[#fff]'>{data.question}</p>

                            <div>
                                {
                                    data.show ? <IoIosArrowDown onClick={() => handleShowQuestion(data.id)} className='w-5 h-5 text-[#fff] cursor-pointer'/> : <IoIosArrowUp onClick={() => handleShowQuestion(data.id)} className='w-5 h-5 text-[#fff] cursor-pointer'/>
                                }
                            </div>
                            
                        </div>

                        <div className={data.show ? 'hidden' : 'pr-5 pt-5 pb-[10px]'}>
                            <p className='font-inter text-[19px] leading-[30px] text-[#B7B4BB]'>{data.answer}</p>
                        </div>

                    </div>

                    <div className='border border-[#B7B4BB] mt-5 md:mt-7 lg:mt-4'></div>

                </div>
            )
        })
    }
  return (
    <div className='px-[30px] lg:px-[100px] w-full py-10 flex flex-col items-center justify-center'>

        <div className='flex items-center justify-center mb-20'>
            <img src={'/chooseLine.png'}/>
        </div>

        <div className='flex flex-col items-center gap-16 lg:gap-20'>

            <div className='flex items-center justify-center'>
                <p className='font-inter font-bold text-6xl leading-[70px] lg:text-[64px] lg:leading-[64px] text-[#fff] text-center'>Your questions, <span className='choose-text-gradient'>answered!</span></p>
            </div>

            <div className='px-6 lg:px-12 pt-[30px] pb-[49px] rounded-3xl border stroke-[#FFFFFF] md:w-[600px] lg:w-[688px]'>
                <div className='flex flex-col gap-10'>
                    <DisplayFaq />
                </div>
            </div>

        </div>

       

    </div>
  )
}

export default FAQ