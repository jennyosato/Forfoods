import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import home from '../../public/images/home.jpg'
import cheese from '../../public/images/cheese.jpg'
import food from '../../public/images/food.jpg'
import jollof from '../../public/images/jollof.jpg'
import mac from '../../public/images/mac.jpg'
import rice from '../../public/images/rice.jpg'
import suya from '../../public/images/suya.jpg'
import { FiMessageSquare } from 'react-icons/fi'
import { specialsArr } from '@/component/data'




const inter = Inter({ subsets: ['latin'] })
const specials = specialsArr.map(i => {
  return (
    <div className='flex flex-col hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-in-out shadow-md pb-4'>
              
              <Image src={i.image} alt="food" className='h-48 w-full object-cover ' />
             
              <div className='text-xl text-orange-700 font-semibold px-4 flex justify-between'>
              <p className='text-2xl'>{ i.title}</p>
              <span >#{ i.price}</span>
              </div>
              <p className='px-2 max-w-full '>{ i.description}</p>
              <div className='flex justify-between px-4'>
              <Link href="/" className='flex items-center gap-2'><FiMessageSquare/> Reviews</Link>
                <button className='bg-gradient-to-l from-orange-500 from-50% to-black to-50% hover:bg-left bg-orange-500 px-6 py-2 text-white'>Buy now</button>
              </div>
      </div>
  )
})

export default function Home() {
  return (
    <>
      <div className="h-screen bg-center bg-cover bg-no-repeat bg-[url('/images/home.jpg')] bg-black/60 bg-blend-overlay flex flex-col gap-6 justify-center items-center">
        <h1 className='text-7xl font-bold text-white text-center'>Welcome to our Restaurant</h1>
        <button className='border px-8 py-2 text-xl font-medium bg-orange-600 text-white'>Order Now</button>
      </div>
      <div className="bg-[url('/images/backdrop.jpg')] bg-repeat-y bg-center bg-cover bg-white/80 bg-blend-overlay py-10">
        
        <div className='m-auto bg-white w-full md:w-10/12 px-10 py-10 rounded-lg'>
          <h2 className='bg-orange-600 text-center py-6 text-4xl font-bold text-white mb-6'>Forfoods Specials</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 md:gap-16 w-full'> 
            {specials}
            
          </div>
          
        </div>
          <div className=" h-xlx mt-10 bg-[url('/images/dine.jpg')] bg-cover bg-center  bg-blend-overlay ">
             <div className='bg-gradient-to-r from-black/70 from-50% w-full h-full text-white font-semibold text-2xl flex flex-col justify-center items-start px-28 gap-6'>
            <h2 className='text-4xl text-orange-600'>Dine with Us</h2>
            <h3 className='text-2xl text-white font-semibold'>For sumptions meals that taste like home</h3>
            <p className='text-lg text-white font-normal'>Come in for delicious and freshly made meals</p>
            <Link href='/dinning/#form' className='bg-gradient-to-l from-orange-500 from-50% to-black to-50% hover:bg-left bg-orange-500 px-6 py-2 text-white'>Make a Reservation</Link>
              </div>  
        </div>
        <div className='w-1/2 py-8 text-center m-auto'>
          <h1 className='text-5xl text-orange-700 font-bold'>Your Kitchen outside your Home</h1>
          <p className=' py-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur animi neque deserunt officiis porro? Doloremque repudiandae tempora in nihil.
            Repudiandae debitis, quia dolorum iste ipsa fuga nostrum ipsum consectetur rem dolorem,
            et qui unde optio ratione in error reprehenderit ex sequi dicta molestias praesentium quisquam beatae corporis?
            Voluptatum, labore dolore?
          </p>
          <button className='bg-gradient-to-l from-orange-700 from-50% to-black to-50% hover:bg-left bg-orange-700 px-8 py-3 text-white font-medium mt-4'>Contact Us</button>
        </div>
        {/* Discount section */}
        <div className='bg-orange-800/90 flex justify-center items-center py-24'>
          <div className='bg-orange-900 w-1/2 py-12 px-20 text-center text-white'>
            <h2 className='text-2xl font-semibold py-4'>NEW! HEROS DISCOUNT</h2>
            <h4>15% OFF. DINE IN ONLY WITH VALID ID</h4>
            <button className='bg-gradient-to-l from-orange-600 from-50% to-black to-50% hover:bg-left px-8 py-3 text-white font-medium mt-4 border border-white bg-orange-600'>LEARN MORE</button>
          </div>
        </div>
        {/* Reviews Section */}
        <h2 className='text-center text-6xl py-12 text-orange-700 font-bold'>Write a Review</h2>
        <div className='flex justify-between px-4'>
          
          <div className='w-1/2 text-center flex flex-col justify-center items-center'>
            <h3 className='text-4xl font-bold'>Reviews</h3>
            <div className='bg-white w-96 h-20'>
              reviews
            </div>

          </div>
          <form className='w-1/2 bg-white p-12  flex flex-col gap-6 shadow-md rounded-md '>
            <div>
              <label>Email</label>
            <input type='email' className='w-full border p-2 '/>
            </div>
            <div>
              <label>Which meal did you try</label>
            <input type='text' className='w-full border p-2'/>
            </div>
            <textarea placeholder='Write a review' rows={4} className='w-full border p-2' />
            <button className='w-full py-3 bg-orange-700 rounded-lg text-white font-semibold'>Submit Review</button>
          </form>
        </div>
        {/* Footer Section */}
        

        
      </div>
      
    </>
  )
}
