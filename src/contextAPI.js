import React, { createContext, useState, useEffect } from "react";

export const cartApi = createContext();

const CartContext = ({ children }) => {
  const exist = typeof window !== "undefined" && sessionStorage.getItem("cart");

  const [cart, setCart] = useState([]);
  // console.log(cart)
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    setCart(exist ? () => JSON.parse(exist) : []);
  }, []);
  return (
    <cartApi.Provider value={{ cart, setCart }}>{children}</cartApi.Provider>
  );
};
export default CartContext;
