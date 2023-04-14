import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { FaTwitterSquare } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const contact = () => {
  return (
   
    <div className='bg-white px-4 py-8 flex'>
          <div>
          <h2 className='text-lg font-semibold'>Contact us:</h2>
          <p><strong>Email:</strong> st.jennyandy@gmail.com</p>
          <p><strong className='font-medium'>Phone:</strong> +234-70-***-***</p>
          <p className='w-1/2'> <strong className='font-medium'>Address:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quisquam.</p>
          </div>
          <div className=''>
          <h2>Connect with us on social media</h2>
          <div className='flex gap-4  justify-center'>
            <ImFacebook2 className='text-2xl' />
            <FaTwitterSquare className='text-2xl' />
            <BsInstagram className='text-2xl'/>
          </div>
           
          </div>
         
    </div>
   
    
  )
}

export default contact