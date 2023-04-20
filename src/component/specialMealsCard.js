import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FiMessageSquare } from "react-icons/fi";

const SpecialsCard = ({meal}) => {
  return (
    <div id={meal.index} className="flex flex-col hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-in-out shadow-md pb-4 border">
        <Image
          src={meal.image}
          alt="food"
          className=" h-40 md:h-48 w-full object-cover "
        />

        <div className="text-xl text-orange-700 font-semibold px-4 flex justify-between">
          <p className="text-2xl">{meal.title}</p>
          <span>#{meal.price}</span>
        </div>
        <p className="px-2 max-w-full text-black/70 ">{meal.description}</p>
        <div className="flex justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <FiMessageSquare /> Reviews
          </Link>
          <button className="bg-gradient-to-l from-orange-500 from-50% to-black to-50% hover:bg-left bg-orange-500 px-6 py-2 text-white">
            Buy now
          </button>
        </div>
      </div>
    );
  }

export default SpecialsCard