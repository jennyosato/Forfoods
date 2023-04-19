import React, { useEffect, useState } from "react";
import { slideArr } from "@/component/data";
import Head from "next/head";
import Image from "next/image";
import karaoke from "../../public/images/kara.jpg";
import soul from "../../public/images/soul.jpg";
import bparty from "../../public/images/parties.jpg";
import party from "../../public/images/dj.jpg";
import mic from "../../public/images/mic.jpg";
import dinn from "../../public/images/dine.jpg";



const activities = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < slideArr.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
      }
    }, 7900);
  }, [index]);

  const filteredArr = slideArr.map((i) => {
    return (
      <div
        className="flex items-center w-full h-full"
        style={{
          animationName: "slide",
          animationDuration: "8s",
          animationIterationCount: "infinite",
        }}
      >
        <Image src={i.img} alt="" className="w-full h-full" />
        <h1
          className="text-white absolute top-1/2 left-10 max-w-xs text-xl p-4 bg-black/60 shadow-md"
          style={{
            animationName: "slider",
            animationDuration: "8s",
            animationIterationCount: "infinite",
          }}
        >
          {i.text}
        </h1>
      </div>
    );
  });
  return (
    <>
    <Head>
    <title>Activites</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
   
    <div className="flex flex-col items-center justify-evenly w-full gap-20">
      <div className="w-screen h-xlx mt-20">{filteredArr[index]}</div>
      {/* New Section */}
      <div className="flex flex-col md:flex-row items-center md:h-96 w-11/12 shadow-md border">
        <div className="w-full ">
          <h2 className="text-3xl font-bold text-gray-900 text-center py-4 px-8">
            Karaoke Night
          </h2>
          <p className=" px-2 md:px-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            animi neque deserunt officiis porro? Doloremque repudiandae tempora
            in nihil. Repudiandae debitis, quia dolorum iste ipsa fuga nostrum
            ipsum consectetur rem dolorem, et qui unde optio ratione in error
            reprehenderit ex sequi dicta molestias praesentium quisquam beatae
            corporis? Voluptatum, labore dolore?
          </p>
        </div>
        <Image src={karaoke} alt="Karaoke Night" className="w-full md:w-1/2 h-full" />
      </div>

      {/* New Section */}

      <div className="flex flex-col md:flex-row-reverse items-center md:h-96 w-11/12 shadow-md border ">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center py-4 px-8">
            Themed Saturday Night Dance Hall
          </h2>
          <p className="w-full px-4 md:px-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            animi neque deserunt officiis porro? Doloremque repudiandae tempora
            in nihil. Repudiandae debitis, quia dolorum iste ipsa fuga nostrum
            ipsum consectetur rem dolorem, et qui unde optio ratione in error
            reprehenderit ex sequi dicta molestias praesentium quisquam beatae
            corporis? Voluptatum, labore dolore?
          </p>
        </div>

        <Image src={party} alt="Karaoke Night" className="w-full md:w-1/2 h-full" />
      </div>

      {/* New Section */}

      <div className="flex flex-col md:flex-row items-center md:h-96 w-11/12 shadow-md border">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center py-4 px-8">
            Sunday Soul Night
          </h2>
          <p className="w-full px-4 md:px-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            animi neque deserunt officiis porro? Doloremque repudiandae tempora
            in nihil. Repudiandae debitis, quia dolorum iste ipsa fuga nostrum
            ipsum consectetur rem dolorem, et qui unde optio ratione in error
            reprehenderit ex sequi dicta molestias praesentium quisquam beatae
            corporis? Voluptatum, labore dolore?
          </p>
        </div>

        <Image src={soul} alt="Karaoke Night" className="w-full md:w-1/2 h-full" />
      </div>

      {/* New Section */}

      <div className="flex flex-col px-4 md:px-0 w-11/12">
        <h2 className="text-3xl font-bold text-gray-900 text-center py-4 px-8">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Image src={bparty} alt="Karaoke Night" className="w-full h-48" />
          <Image src={soul} alt="Karaoke Night" className="w-full h-48" />
          <Image src={party} alt="Karaoke Night" className="w-full h-48" />
          <Image src={karaoke} alt="Karaoke Night" className="w-full h-48" />
          <Image src={dinn} alt="Karaoke Night" className="w-full h-48" />
          <Image src={mic} alt="Karaoke Night" className="w-full h-48" />
        </div>
      </div>
    </div>
    </> );
};

export default activities;
