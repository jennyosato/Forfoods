import React, {useState, useContext, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import menuData from '@/component/data'
import MenuCard from '@/component/menuCard'
import { useRouter } from 'next/router'
import { cartApi } from '@/contextAPI'




const menu = () => {

  const {setCart, cart} = useContext(cartApi)
  const router = useRouter()
  const checkData = router.query.type
 
  
 
  const carts = (food) => {
    const itemInCart = cart.find(meal => meal.title === food.title)
    if (itemInCart) {
      router.push('/cart')
    } else {
      setCart(prev => [...prev, { ...food, qty: 1 }]) 
    }
    
  }

  const filterData = checkData ? menuData.filter(i => i.type === checkData): menuData


  const food = filterData.map(items => {
    return (
      <MenuCard
        key={items.id}
        item={items}
        inCart={cart.some(meal => meal.title === items.title)}
        onAdd={() => carts(items)}
         />
    ) 
  })
 

    return (
      <>
        <div className='bg-[url("/images/menu.jpg")] bg-cover bg-center bg-repeat-y bg-black/80 bg-blend-overlay mt-16'>
        <h1 className='text-7xl font-bold text-white text-center py-8'>Menu</h1>
        <nav className='m-auto w-11/12 bg-orange-600 md:flex justify-center items-center'>
          <ul className='text-white font-bold flex justify-evenly w-full md:w-1/2 text-lg py-3'>
            <li key='all'><Link className='hover:bg-white hover:text-orange-600 p-3 md:px-6' href="/menu" shallow={true}>All</Link></li>
            <li key='breakfast'><Link className='hover:bg-white hover:text-orange-600 p-3 md:px-6' href='/menu?type=breakfast' shallow={true}>Breakfast</Link></li>
            <li key='brunch'><Link className='hover:bg-white hover:text-orange-600 p-3  md:px-6' href='/menu?type=brunch' shallow={true}>Brunch</Link></li>
            <li key='dinner'><Link className='hover:bg-white hover:text-orange-600 p-3 md:px-6' href='/menu?type=dinner' shallow={true}>Dinner</Link></li>
          </ul>
        </nav>
        <div className='m-auto bg-black w-11/12 px-10 py-10 flex flex-wrap gap-10 justify-center' >
            {food}
            
        </div>
        </div>
       
      </>     
  )
}

export default menu