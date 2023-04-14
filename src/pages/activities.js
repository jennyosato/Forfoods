import React, {useEffect, useState} from 'react'
import { slideArr } from '@/component/data'
import pancake from '../../public/images/pancake.jpg'



const activities = () => {
  const [index, setIndex] = useState(0)


  useEffect(() => {
    setTimeout(() => {
      if (index < slideArr.length - 1) {
        setIndex(prev => prev + 1)
      } else {
        setIndex(0)
      } 
    }, 7900)
    console.log(index)
  }, [index])
  
  
  const filteredArr = slideArr.map((i) => {
    return <div className='flex items-center bg-center bg-cover bg-no-repeat bg-black/60 bg-blend-overlay absolute left-0 w-full h-1/2 overflow-hidden'
      style={{ backgroundImage: `url(${i.img.src})`,animationName: 'slide', animationDuration: '8s', animationIterationCount: 'infinite', }}>
      <h1 className='text-white absolute top-1/2 left-10 max-w-xs text-xl p-4 bg-white/30 shadow-md'
      style={{ animationName: 'slider', animationDuration: '8s', animationIterationCount: 'infinite', }}
      >{i.text}</h1>
    </div>
    
  })
    return (
     <>
      <div className='w-screen h-96 my-16 '>
        {filteredArr[index]}
      </div> 
      
      </>
   
  )
}

export default activities