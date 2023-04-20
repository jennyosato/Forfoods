import Head from "next/head";
import { useState, useEffect } from "react";
import { specialsArr } from "@/component/data";
import { reviewsArr } from "@/component/data";
import SpecialsCard from "@/component/specialMealsCard";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";



// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [index, setIndex] = useState(0)
  

    
  
  useEffect(()=>{
     setTimeout(() =>{
      if(index < reviewsArr.length - 1){
        setIndex(prev => prev + 1)
      }else{
        setIndex(0)
      }

    }, 8000)
    
  },[index])
  const specials = specialsArr.map((item) => {
    return (<SpecialsCard meal={item} key={item.id}  />);
  });
  const reviews = reviewsArr.map((comment,index) => {
    return(
      <div key={index} className="px-4 py-2 bg-white shadow-md border animate__animated animate__slideInRight">
        <h2 className="text-lg  ">{comment.review}</h2>
        <p className="italic text-right text-blue-700">--{comment.username}--</p>
      </div>
    )
  })


  return (
    <>
     <Head>
              <title>Forfoods</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-center relative bg-cover bg-no-repeat bg-[url('/images/home.jpg')] bg-black/60 bg-blend-overlay flex flex-col gap-6 justify-center items-center">
        <h1 className="text-6xl font-bold text-white text-center">
          Welcome to our Restaurant
        </h1>
        <Link href='/menu' className="border px-8 py-2 text-xl font-medium bg-orange-600 text-white sticky top-0">
          Order Now
        </Link>
      </div>
      {/* forfoods specials Section */}
      <div className="bg-[url('/images/backdrop.jpg')] bg-repeat-y bg-center bg-cover bg-white/80 bg-blend-overlay py-10">
        <div className="m-auto bg-white w-full md:w-10/12 px-10 py-10 rounded-lg">
          <h2 className="bg-orange-600 text-center py-6 text-3xl font-bold text-white mb-6">
            Forfoods Specials
          </h2>
          <div className="grid grid-cols-fluid md:gap-16 gap-8 w-full">
            {specials}
          </div>
        </div>
        <div className=" h-xlx mt-10 bg-[url('/images/dine.jpg')] bg-cover bg-center bg-blend-overlay ">
          <div className="md:bg-gradient-to-r md:from-black/70 md:from-50% bg-black/50 w-full h-full text-white font-semibold flex flex-col justify-center items-center md:items-start px-4 lg:px-28 gap-6">
            <h2 className="text-4xl text-orange-600 ">Dine with Us</h2>
            <h3 className="text-2xl font-semibold text-center">
              For sumptions meals that taste like home
            </h3>
            <p className="text-lg font-normal">
              Come in for delicious and freshly made meals
            </p>
            <button className="bg-gradient-to-l from-orange-500 from-50% to-black to-50% hover:bg-left bg-orange-500 px-6 py-2">
              Make a Reservation
            </button>
          </div>
        </div>
        <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="w-full md:w-1/2 py-8 text-center m-auto px-4">
          <h1 className="text-4xl text-orange-700 font-bold">
            Your Kitchen outside your Home
          </h1>
          <p className=" py-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            animi neque deserunt officiis porro? Doloremque repudiandae tempora
            in nihil. Repudiandae debitis, quia dolorum iste ipsa fuga nostrum
            ipsum consectetur rem dolorem, et qui unde optio ratione in error
            reprehenderit ex sequi dicta molestias praesentium quisquam beatae
            corporis? Voluptatum, labore dolore?
          </p>
          <button className="bg-gradient-to-l from-orange-700 from-50% to-black to-50% hover:bg-left bg-orange-700 px-8 py-3 text-white font-medium mt-4">
            Contact Us
          </button>
        </div>
        </AnimationOnScroll>
        {/* Discount section */}
        
          <div className="bg-orange-800/90 flex justify-center items-center p-8 md:py-24">
            <AnimationOnScroll animateIn="animate__fadeInDown">
            <div className="bg-orange-900 py-8 md:py-12 px-8 md:px-20 text-center text-white">
              <h2 className="text-2xl font-semibold py-4">
                NEW! HEROS DISCOUNT
              </h2>
              <h4>15% OFF. DINE IN ONLY WITH VALID ID</h4>
              <button className="bg-gradient-to-l from-orange-600 from-50% to-black to-50% hover:bg-left px-8 py-3 text-white font-medium mt-4 border border-white bg-orange-600">
                LEARN MORE
              </button>
            </div>
            </AnimationOnScroll>
          </div>
        
        {/* Reviews Section */}
        <h2 className="text-center text-5xl py-4 md:py-12 text-orange-700 font-bold">
          Write a Review
        </h2>
        <div className="flex flex-col md:flex-row gap-4 px-4">
          <div className="w-full text-center flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold">Reviews</h3>
            <div className="bg-white">
             {reviews[index]}
            </div>
          </div>
          <form className="w-full bg-white p-12  flex flex-col gap-6 shadow-md rounded-md ">
            <div>
              <label>Name</label>
              <input type="text" className="w-full border p-2 " onChange={(e) => console.log(e.target.value)} />
            </div>
            <div>
              <label>Which meal did you try</label>
              <input type="text" className="w-full border p-2" />
            </div>
            <textarea
              placeholder="Write a review"
              rows={4}
              className="w-full border p-2"
              onChange={(e) => console.log(e.target.value)}
            />
            <button className="w-full py-3 bg-orange-700 rounded-lg text-white font-semibold">
              Submit Review
            </button>
          </form>
        </div>
        {/* Footer Section */}
      </div>
    </>
  );
}

