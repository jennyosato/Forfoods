import Image from "next/image";
import Head from "next/head";
import React from "react";
import outdoor from "../../public/images/outdoor.jpg";
import indoor from "../../public/images/indoor.jpg";
import group from "../../public/images/group.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Dinning = () => {
  return (
    <>
     <Head>
              <title>Reservation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="h-screen bg-center bg-cover bg-no-repeat bg-[url('/images/din.jpg')] bg-black/60 bg-blend-overlay flex place-content-end">
        <form className="py-8 px-8 flex flex-col gap-6 bg-black/50 animate__animated animate__slideInDown">
        <h1 className='text-3xl font-bold text-orange-600 text-center w-full mt-16'>Make a Reservation</h1>
           <div className="w-full">
             <label htmlFor="table" className="text-lg text-white">
              Table type
             </label>
             <select id="table" className="w-full border py-2">
               <option defaultChecked></option>
             <option>table for 2</option>
              <option>table for 4</option>
               <option>group of 6</option>
              <option>More than 6</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Name on Reservation"
            className="w-full p-3 border"
          />
          <div className="border p-3">
            <label htmlFor="date" className="w-full text-white font-bold">Date</label>
            <input id="data" type="date" />
          </div>
          <div className="max-w-full">
            <fieldset className="border-2 flex gap-4 p-4 max-w-full flex-wrap">
              <legend className="text-white">Available time on </legend>
              <div className="flex items-center gap-2 px-2 bg-gray-100">
                <input type="radio" name="time" id="ist" />
                <label htmlFor="ist">6:00pm</label>
              </div>
              <div className="flex items-center gap-2 px-2 bg-gray-100">
                <input type="radio" name="time" id="snd" />
                <label htmlFor="snd">7:30pm</label>
              </div>
              <div className="flex items-center gap-2 px-2 bg-gray-100">
                <input type="radio" name="time" id="thrd" />
                <label htmlFor="thrd">8:00pm</label>
              </div>
              <div className="flex items-center gap-2 px-2 bg-gray-100">
                <input type="radio" name="time" id="frt" />
                <label htmlFor="frt">9:00pm</label>
              </div>
              <div className="flex items-center gap-2 px-2 bg-gray-100">
                <input type="radio" name="time" id="fift" />
                <label htmlFor="fift">9:30pm</label>
              </div>
            </fieldset>
          </div>
          <button className="bg-gradient-to-l from-orange-500 from-50% to-black to-50% hover:bg-left bg-orange-500 px-6 py-2 text-white">
            Submit
          </button>
        </form>
      </div>
      {/* Menu Section */}
      <AnimationOnScroll animateIn="animate__zoomIn">
      <div>
          <h2 className="text-center py-4 font-bold text-4xl text-orange-500">
            Menu
          </h2>
          <div className="grid md:grid-cols-2 py-4 px-8 gap-4">
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                CALIFORNIA TURKEY (OR BEEF)
              </h2>
              <p className="px-2">
                Roast turkey or beef, green chile, melted pepper jack, the
                works, avocado, toasted sliced sourdough.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                DUTCH PUNCH
              </h2>
              <p className="px-2">
                Smoked turkey, extra bacon, jalapeño havarti, red onion, tomato,
                romaine, avocado, chipotle mayo, Dutch crunch.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                HOT PASTRAMI
              </h2>
              <p className="px-2">
                Lean roast pastrami, melted Swiss, the works, pepperoncini,
                toasted sliced sourdough.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">NEW YORK</h2>
              <p className="px-2">
                Pastrami, melted Swiss, extra meat, extra cheese, mayo, dijon,
                yellow mustard, extra pickle, toasted sliced rye.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                SPRING CLUB
              </h2>
              <p className="px-2">
                Roast turkey, bacon, melted cheddar, ranch, shrettuce, cucumber,
                tomato, mayo, French roll.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                ITALIAN SUB
              </h2>
              <p className="px-2">
                Genoa salami, capicola, dry salami, sharp provolone, the works,
                pepperoncini, oregano, French roll.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                NASHVILLE CLUB
              </h2>
              <p className="px-2">
                Smoked turkey, black forest ham, bacon, smoked gouda, the works,
                BBQ sauce, ranch, jalapeño, toasted sliced sourdough.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                CHIPOTLE BEEF
              </h2>
              <p className="px-2">
                Roast beef, melted pepper jack, tomato, avocado, red onion,
                chipotle mayo, toasted sliced sourdough.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                TURKEY PESTO
              </h2>
              <p className="px-2">
                Roast turkey, melted sharp provolone, homemade basil pesto,
                mayo, tomato, romaine, French roll.
              </p>
            </div>
            <div className="bg-gray-100/50">
              <h2 className="bg-gray-200 py-2 font-semibold px-2">
                HIGHZENBURGER
              </h2>
              <p className="px-2">
                Homemade meatloaf, bacon, melted cheddar, chipotle mayo, BBQ
                sauce, the works, romaine, brioche bun.
              </p>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
        {/* New Section */}
        <div className="flex flex-wrap md:flex-nowrap w-full px-8 gap-8 text-white md:text-black">
        <div className="w-full h-72 flex items-center mt-20 mx-auto relative shadow-lg border bg-gray-100">
            <Image src={outdoor} alt="dine in" className="w-full md:w-1/2 h-full" />          
          <div className="w-full md:w-1/2 text-center absolute md:relative">
            <h1 className="text-3xl font-bold text-center">Outdoor Dinner</h1>
            <p className="m-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              sed voluptas facilis facere eveniet nesciunt. Provident explicabo
              aperiam vero repellendus nam
            </p>
          </div>
        </div>
        <div className="w-full h-72 flex items-center mt-20 mx-auto relative shadow-lg border bg-gray-100">
            <Image src={indoor} alt="dine in" className="w-full md:w-1/2 h-full" />
          <div className="w-full md:w-1/2 text-center absolute md:relative">
            <h1 className="text-3xl font-bold text-center">Indoors Dinner</h1>
            <p className=" m-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              sed eum possimus accusantium in
              tempora. Porro, consequuntur optio?
            </p>
          </div>
        </div>
        </div>
          {/* New Section  */}
          <div className="flex justify-center items-center  w-10/12 mx-auto h-96 my-20 px-4 border relative">
          <div className="w-full h-full">
            <Image src={group} alt="dine in" className="w-full h-full" />
          </div>
          <div className=" w-full md:w-1/3 h-full flex flex-col text-center text-white py-4 bg-black/80 absolute">
            <h1 className="text-3xl font-bold text-center">Group Dinner</h1>
            <p className="w-60 m-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              sed eum possimus accusantium in
              tempora. Porro, consequuntur optio?
            </p>
          </div>

        </div>
      
    </>
  );
};

export default Dinning;
