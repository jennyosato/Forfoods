import React, { useContext } from "react";
import Image from "next/image";
import { cartApi } from "@/contextAPI";
import Link from "next/link";
import Head from "next/head";

const cart = () => {
  const { cart, setCart } = useContext(cartApi);

  const add = (food) => {
    setCart((prev) => [...prev], { ...food, qty: (food.qty += 1) });
  };
  const rmvQty = (food) => {
    if (food.qty === 1) {
      setCart(cart.filter((x) => x.id !== food.id));
    } else {
      setCart((prev) => [...prev], { ...food, qty: (food.qty -= 1) });
    }
  };
  const removeItem = (food) => {
    setCart(cart.filter((x) => x.id !== food.id));
  };
  const foodItems = cart.map((i) => {
    return (
      <div
        key={i.id}
        className="h-20 md:h-28 w-full bg-gray-100/50 flex items-center justify-between gap-2 pr-2 border-y-2 "
      >
        <Image src={i.image} alt={i.title} className="h-20 w-28 shrink-0" />
        <div className="flex flex-col md:flex-row justify-evenly flex-grow">
          <h2 className="font-semibold">{i.title}</h2>
          <div className="flex gap-2">
            <button
              className="px-2 border border-green-800"
              onClick={() => add(i)}
            >
              +
            </button>
            <p className="border rounded px-4 font-semibold">{i.qty}</p>
            <button className="px-2 border border-green-800" onClick={() => rmvQty(i)}>
              -
            </button>
          </div>
          <p>#{i.price * i.qty}</p>
        </div>
        <button
          onClick={() => removeItem(i)}
          className="bg-red-800 font-semibold text-white px-2 md:px-6 md:py-2"
        >
          Remove
        </button>
      </div>
    );
  });
  const total = cart.reduce((init, item) => init + item.qty * item.price, 0);
  const delivery = 1500;
  if (cart.length === 0) {
    return (
      <div className="mt-20 flex flex-col items-center justify-center gap-4 w-11/12 m-auto h-screen">
        <h2 className="text-4xl font-bold">Nothing in Cart</h2>
        <p>
          Go to{" "}
          <Link href="/menu" className="text-purple-600">
            Menu
          </Link>{" "}
          to add meals to cart
        </p>
      </div>
    );
  }
  return (
    <>
    <Head>
    <title>Cart</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
    <div className="flex flex-col lg:flex-row md:gap-20 mt-16 py-4 px-4 w-full m-auto h-auto md:px-20">
      <h2 className="absolute text-xl text-orange-600 font-semibold">
        {cart.length} Meal(s) in cart
      </h2>
      <div className="w-full  flex flex-col gap-4 mt-8">{foodItems}</div>

      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h2 className="text-xl font-medium">Sub Total: #{total}</h2>
        <h2 className="text-xl font-medium">Delivery: #{delivery}</h2>
        <h1 className="text-2xl font-bold ">Total: #{total + delivery}</h1>
        <button className="w-full bg-orange-500 text-white font-bold py-2 md:py-4 md:text-xl">
          Check Out
        </button>
      </div>
    </div>
    </>);
};

export default cart;
