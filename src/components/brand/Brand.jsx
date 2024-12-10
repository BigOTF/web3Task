import React, { useState } from 'react'
import image1 from '../../../public/web3dev.png'
import image2 from '../../../public/solana.png'
import image3 from '../../../public/metamask.png'
import image4 from '../../../public/thegraph.png'
import image5 from '../../../public/thinkdev.png'
import image6 from '../../../public/polygon.png'
import image7 from '../../../public/lachain.png'

const Brand = () => {

    const Image = [
        {
            id: 1,
            image: image1
        },
        {
            id: 2,
            image: image2
        },
        {
            id: 3,
            image: image3
        },
        {
            id: 4,
            image: image4
        },
        {
            id: 5,
            image: image5
        },
        {
            id: 6,
            image: image6
        },
        {
            id: 7,
            image: image7
        },
    ]

    const DisplayImage = () => {
        return Image.map((data) => {
            return (
                <div key={data.id}>
                    <img src={data.image} className=''/>
                </div>
            )
        })
    }

  return (
    <div className='w-full px-[30px] flex items-center justify-center'>
    
        <div className='flex flex-wrap justify-center gap-9 items-center'>
            <DisplayImage />
        </div>
        
    </div>
  )
}

export default Brand