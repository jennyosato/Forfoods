import React, { createContext, useState, useEffect } from "react";

export const cartApi = createContext()

const CartContext = ({ children}) => {  
    const exist = typeof window !== 'undefined' && localStorage.getItem('cart')

    const [cart, setCart] = useState([])
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))   
    }, [cart])
    useEffect(() => {
     setCart(()=> JSON.parse(exist))  
   },[])
    return (
        <cartApi.Provider value={{ cart, setCart }}>
            {children}
        </cartApi.Provider>
    )
}
export default CartContext
