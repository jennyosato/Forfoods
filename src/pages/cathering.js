import React, { useState,useEffect } from 'react'
import dinner from "../../public/images/dine.jpg"
import rice from '../../public/images/rice.jpg'
import suya from '../../public/images/suya.jpg'
import mac from '../../public/images/mac.jpg'
import pancake from '../../public/images/pancake.jpg'
import Image from 'next/image'
import { slideArr, eventArr } from '@/component/data'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const cathering = () => {
  const [indx, setIndx] = useState(0)


  const slider = slideArr.map(item => {
    return (
      <div className='h-96 w-9/12 mx-auto mt-20 relative flex items-center justify-center'>
      <Image src={item.img} alt='dinner' className='w-full h-full' />
      <div className='absolute text-white text-3xl font-bold p-4 bg-black/50 flex justify-between items-center w-full'>
        <button><BsArrowLeft /></button>
          <p className=''>{item.text}</p> 
        <button><BsArrowRight/></button>
      </div>
    </div>
  )
})

  return (
    <>
      {/* <div className='h-96 w-9/12 mx-auto mt-20 relative flex items-center justify-center'>
        <Image src={dinner} alt='dinner' className='w-full h-full' />
        <div className='absolute text-white text-3xl font-bold p-4 bg-black/50 flex justify-between items-center w-full'>
          <button><BsArrowLeft /></button>
          <p className=''>Just some random text</p> 
          <button><BsArrowRight/></button>
        </div>
      </div> */}
      {slider[indx]}
      <div className='mx-auto mt-10 text-center'>
          <h2 className='text-4xl font-semibold py-4'>We cater to all sorts of event</h2>
          <p className='w-1/2 m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Earum, sed voluptas facilis facere eveniet nesciunt.
            Provident explicabo aperiam vero repellendus nam fuga eum possimus accusantium in tempora.
            Porro, consequuntur optio?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            sed voluptas facilis facere eveniet nesciunt.
            Provident explicabo aperiam vero repellendus nam fuga eum possimus accusantium in tempora.
            Porro, consequuntur optio?</p>
        </div>
        <div className='border-2 text-center'>
          <h2 className='text-4xl font-semibold py-4'>Our Menu and Packages</h2>
          <div className='grid md:grid-cols-4 gap-4 w-10/12 h-96 m-auto'>
          <Image src={rice} alt='abc' className='h-60' />
          <Image src={suya} alt='abc' className='h-60' />
          <Image src={pancake} alt='abc' className='h-60 ' />
          <Image src={mac} alt='abc' className='h-60'/>
          </div>
        </div>
      
    
    </>
  )
}

export default cathering