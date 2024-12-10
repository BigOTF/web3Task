import React, { useEffect } from 'react'
import AOS from 'aos';

const Work = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: false,
        });
    }, []);

  return (
    <div className='px-[30px] lg:px-[100px] w-full py-40'>

        <div className='flex items-center justify-center'>
            <p className='font-inter font-bold text-6xl leading-[70px] lg:text-[64px] lg:leading-[64px] text-[#fff] text-center'>How it <span className='choose-text-gradient'>works!</span></p>
        </div>

        <div className='flex flex-col gap-[80px] lg:gap-[120px]'>

            <div className='flex flex-col items-center'>
                <div data-aos="fade-up">
                    <img src={'/work.png'}/>
                </div>

                <div className='lg:pl-14 lg:pr-4 flex flex-col lg:items-start items-center gap-6'>
                    <div className='flex flex-col lg:items-start items-center gap-5'>
                        <p className='choose-text-gradient font-inter font-bold text-[19px] leading-[33px]'>01.</p>
                        <p className='font-inter lg:text-start text-center font-bold text-[40px] leading-[55px] text-[#fff]'>Setup and connect your wallet.</p>
                    </div>

                    <div className='flex flex-col lg:items-start items-center gap-7'>
                        <p className='font-inter lg:text-start text-center text-xl text-[#B7B4BB]'>Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center'>

                <div data-aos="fade-up" className='lg:hidden'>
                    <img src={'/work2.png'}/>
                </div>

                <div className='lg:pl-14 lg:pr-4 flex flex-col lg:items-start items-center gap-6'>
                    <div className='flex flex-col lg:items-start items-center gap-5'>
                        <p className='choose-text-gradient font-inter font-bold text-[19px] leading-[33px]'>02.</p>
                        <p className='font-inter lg:text-start text-center font-bold text-[40px] leading-[55px] text-[#c9bebe]'>Find a task that matches your skills</p>
                    </div>

                    <div className='flex flex-col lg:items-start items-center gap-7'>
                        <p className='font-inter lg:text-start text-center text-xl text-[#B7B4BB]'>Make your offers and show why you deserve the job.</p>
                        <p className='font-inter lg:text-start text-center text-xl text-[#B7B4BB]'>Golden Tips: Deliver on time, Develop your profile and take care of your portfolio, the App has an on-chain scoring system to score contributions.</p>
                    </div>
                </div>

                <div data-aos="fade-up" className='hidden lg:inline'>
                    <img src={'/work2.png'}/>
                </div>
            </div>

            <div className='flex flex-col items-center'>

                <div data-aos="fade-up">
                    <img src={'/work3.png'}/>
                </div>
            
                <div className='lg:pl-14 lg:pr-4 flex flex-col lg:items-start items-center gap-6'>
                    <div className='flex flex-col lg:items-start items-center gap-5'>
                        <p className='choose-text-gradient font-inter font-bold text-[19px] leading-[33px]'>03.</p>
                        <p className='font-inter lg:text-start text-center font-bold text-[40px] leading-[55px] text-[#fff]'>Complete the task and earn rewards</p>
                    </div>

                    <div className='flex flex-col lg:items-start items-center gap-7'>
                        <p className='font-inter lg:text-start text-center text-xl text-[#B7B4BB]'>Instant payments, fast transactions and proven professional authority building.</p>
                        <p className='font-inter lg:text-start text-center text-xl text-[#B7B4BB]'>NFT to prove the specialties and scores of projects carried out in your profile.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Work