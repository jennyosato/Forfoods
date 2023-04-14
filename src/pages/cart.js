import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { cartApi } from '@/contextAPI'
import Link from 'next/link'

const cart = () => {
  const { cart, setCart } = useContext(cartApi)
  
  const add = (food) => {
    setCart(prev => [...prev], { ...food, qty: food.qty += 1 }) 
  }
  const rmvQty = (food) => {
    if (food.qty === 1) {
      setCart(cart.filter(x => x.id !== food.id))
    } else {
      setCart(prev => [...prev], { ...food, qty: food.qty -= 1 })
    }
    
  }
  const removeItem = (food) => {
    setCart(cart.filter(x => x.id !== food.id))  
  }
  const foodItems = cart.map(i => {
    return (
      <div key={i.id} className='h-20 md:h-28 w-full md:w-1/2 bg-gray-100/50 flex items-center justify-between pr-2'>
        <Image src={i.image} alt={i.title} className='h-full w-20 md:w-28' />
        <h2 className=' w-20'>{i.title}</h2>
        <div className='flex gap-2'>
          <button onClick={() => add(i)}>+</button>
          <p className='border rounded px-2'>{i.qty}</p>
        <button onClick={() => rmvQty(i)}>-</button>
        </div>
        <p>{i.price * i.qty}</p>
      <button onClick={() => removeItem(i)} className='bg-red-800 font-semibold text-white px-2 md:px-6 md:py-2'>Remove</button>  
      </div>)
  }) 
  const total = cart.reduce((init, item) => init + item.qty * item.price, 0)
  const delivery = 1500
  if (cart.length === 0) {
    return <div className='mt-20 flex flex-col items-center justify-center gap-4 w-11/12 m-auto h-screen'>
      <h2>Nothing in Cart</h2>
      <p>Go to <Link href='/menu' className='text-purple-600'>Menu</Link> to add meals to cart</p>
    </div>
  }
  return (
    <div className='flex flex-col mt-20 gap-4 w-full px-4 md:w-10/12 m-auto h-screen'>
      {foodItems}
      <div className=''>
        <h2>Sub Total: #{total}</h2>
        <h2>Delivery: #{delivery}</h2>
        <h1>Total: #{total + delivery}</h1>
        <button className='bg-orange-500 hover:font-semibold px-2 md:px-6 md:py-2'>Check Out</button>
      </div>
    </div>
  )
}

export default cart