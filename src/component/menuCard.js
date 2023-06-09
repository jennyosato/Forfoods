import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {TbCurrencyNaira} from 'react-icons/tb'

const MenuCard = ({ item, onAdd, inCart }) => {
  

  return ( <div key={item.title} className='w-full h-40 md:w-1/2 lg:w-1/3 border-2 border-white flex text-white'>
  <Image src={item.image} alt={item.title} className='h-full w-1/2' />
 <div className='p-2 flex flex-col justify-between'>
   <p className='text-xl font-medium'>{item.title}</p>
   <div className='flex flex-col justify-between '>
        <p className='flex items-center font-bold text-lg px-2 py-2'><TbCurrencyNaira/>{item.price}</p>
        <div>
          {inCart ? <button onClick={()=> onAdd(item)}
            className='bg-white text-orange-600 font-semibold px-2 md:px-6 md:py-2 place-content-center'>Check Cart</button> : 
            <button onClick={()=> onAdd(item)}
            className='bg-orange-500 hover:font-semibold px-2 md:px-6 md:py-2 flex place-content-center'>Add to Cart</button>}
        </div>
     
   </div>
  </div> 
</div>
    
  )
}

export default MenuCard