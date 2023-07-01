import React, {useState, useContext} from 'react'
import Link from 'next/link'
import { ImFacebook2 } from 'react-icons/im'
import { FaTwitterSquare } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { cartApi } from '@/contextAPI'

import { useRouter } from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Petrona} from 'next/font/google'

const petrona = Petrona({
  subsets: ['latin']
})

const Layout = (props) => {
  const {cart} = useContext(cartApi)
  const router = useRouter()
  
 
  const [toggle, setToggle] = useState(false)
  const handleOrders = () => {
    router.push("/menu")
  }
  const handleCart = () => {
    router.push('/cart')
  }
  const toggleNav = () => {
    setToggle(prev => !prev)
  }
 
   
  return (
      
       <>
     
      <main className={`${petrona.className} flex flex-col bg-white text-black/80`}>
       
        <header className='flex justify-between items-center px-4 py-2 border-2 fixed top-0 bg-white w-screen z-50 '>
          <Link href='/' className=' flex items-center gap-2'>
            <h1 className='p-2 font-semibold text-xl text-black/70 border-4 border-orange-600'>Forfoods</h1>
          </Link>
          <nav className='flex items-center'>
          <button onClick={handleOrders} className='hidden lg:block rounded-sm border-0 px-2 md:px-6 py-2 font-medium bg-orange-600 text-white hover:opacity-50'>Order Now</button>
           
            <ul className={toggle ? 'gap-6 px-4 flex flex-col absolute top-16 right-0 bg-white w-10/12': 'hidden md:flex md:flex-row md:relative md:gap-6 px-4 '}> 
              <li><Link href="/" onClick={() =>setToggle(false)} className='text-lg text-black/700 hover:text-orange-500 font-semibold focus:text-orange-600'>Home</Link></li>
              <li><Link href="/cathering" onClick={() =>setToggle(false)} className='text-lg text-black/700  hover:text-orange-500 font-semibold focus:text-orange-600'>Cathering</Link></li>
              <li><Link href="/dinning" onClick={() =>setToggle(false)} className='text-lg text-black/700  hover:text-orange-500 font-semibold focus:text-orange-600'>Dine in</Link></li>
              <li><Link href="/menu" onClick={() =>setToggle(false)} className='text-lg text-black/700  hover:text-orange-500 font-semibold focus:text-orange-600'>Menu</Link></li>
              <li><Link href="/contact" onClick={() =>setToggle(false)} className='text-lg text-black/700  hover:text-orange-500 font-semibold focus:text-orange-600'>Contact Us</Link></li>
              <li><Link href="activities" onClick={() =>setToggle(false)} className='text-lg text-black/700  hover:text-orange-500 font-semibold focus:text-orange-600'>Activities</Link></li>
            </ul>
            <div className='flex items-center'>
              <button className='md:hidden text-black/70 text-lg font-bold'>
              <RxHamburgerMenu onClick={toggleNav} />
              </button>
            {cart.length > 0 &&  <button
              onClick={handleCart}
              className=' px-2 py-4 font-medium bg-white text-orange-600 hover:opacity-80 flex items-center'>
              <AiOutlineShoppingCart /><sup className='p-2 rounded-full border-2 border-orange-600'>{cart.length}</sup></button> }
           
            </div>
           
          </nav>
        </header>
        <div className='grow'>
        {props.children}
        </div>
        
        <div className='bg-orange-600 px-4 py-8 flex'>
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
      </main>
      </>
  )
}

export default Layout