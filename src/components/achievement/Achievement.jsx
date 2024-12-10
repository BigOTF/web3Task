import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Achievement = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

  return (
    <div ref={ref} className='flex flex-col items-center justify-center py-40 gap-28 lg:gap-32'>

        <div>
            <img src={'/chooseLine.png'}/>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='px-8 pb-[0.59px] flex flex-col items-center gap-3 lg:gap-[22px]'>
                {inView && (
                    <p className='font-inter font-bold text-[60px] lg:text-[71px] lg:leading-[72px] text-[#fff]'>
                    <CountUp 
                        start={0} 
                        end={4}
                        duration={2.5} 
                        suffix="k"
                    />
                 </p>
                )}
                <p className='font-inter text-lg text-[#B7B4BB] text-center'>Community Members</p>
            </div>

            <div className='px-8 pb-[0.59px] flex flex-col items-center gap-3 lg:gap-[22px] lg:border-l border-[#B7B4BB]'>
                {inView && (
                    <p className='font-inter font-bold text-[60px] lg:text-[71px] lg:leading-[72px] text-[#fff]'>
                    <CountUp 
                        start={0} 
                        end={200} 
                        duration={2.5} 
                    />
                 </p>
                )}
               
                <p className='font-inter text-lg text-[#B7B4BB] text-center'>Active Users</p>
            </div>

            <div className='px-8 pb-[0.59px] flex flex-col items-center gap-3 lg:gap-[22px] lg:border-l border-[#B7B4BB]'>
                <p className='font-inter font-bold text-[60px] lg:text-[71px] lg:leading-[72px] text-[#fff]'>4h</p>
                <p className='font-inter text-lg text-[#B7B4BB] text-center'>Average Task Due Date</p>
            </div>

            <div className='px-8 pb-[0.59px] flex flex-col items-center gap-3 lg:gap-[22px] lg:border-l border-[#B7B4BB]'>
                <p className='font-inter font-bold text-[60px] lg:text-[71px] lg:leading-[72px] text-[#fff]'>$15</p>
                <p className='font-inter text-lg text-[#B7B4BB] text-center'>Average Reward per Task</p>
            </div>
        </div>
    </div>
  )
}

export default Achievement