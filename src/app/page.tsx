// @refresh reset
"use client"

import React, { useEffect, useState } from "react"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"

import Card from "../../components/card"
import Carousel from "../../components/carousel"

async function getData() {
  const res = await fetch("http://localhost:1337/api/reviews")
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return data
}

interface ImagesInterface {
  src: string;
  alt: string;
  link: string;
}
  

export default function Home() {
  const imageData: ImagesInterface[] = [
    {
      src: "/test4.jpg",
      alt: "image4",
      link: "",
    },
    {
      src: "/test.jpg",
      alt: "image2",
      link: "",
    },
    {
      src: "/test2.jpg",
      alt: "image3",
      link: "",
    },
    {
      src: "/maps.jpg",
      alt: "image5",
      link: "/location",
    },
  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-16 dark:bg-bgDark">
      <div className=" container mx-auto grid grid-cols-1 grid-rows-1 gap-10">
        {/* <Header displayText="Startseite" /> */}
        <div>
          <Carousel data={imageData} />
        </div>

        <div className="flex flex-wrap">
          {imageData.map((image: ImagesInterface, index: number) => {
            return (
              <div key={index} className="w-full p-2 md:w-1/4">
                <Card
                  imageSrc={image.src}
                  altText=""
                  title=""
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
                  link={image.link}
                />
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center">
          {/* <iframe
            height="400"
            src="https://maps.google.de/maps?f=q&amp;source=s_q&amp;hl=de&amp;geocode=&amp;q=Wei%C3%9Flensburger+Stra%C3%9Fe+6,+Bitzfeld,+Bretzfeld&amp;aq=t&amp;sll=49.187222,9.443672&amp;sspn=0.002135,0.004624&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Wei%C3%9Flensburger+Stra%C3%9Fe+6,+Bitzfeld+74626+Bretzfeld,+Stuttgart,+Baden-W%C3%BCrttemberg&amp;z=14&amp;ll=49.190184,9.445164&amp;output=embed"
            width="600"
          ></iframe> */}
        </div>
      </div>
      <div className="flex "></div>
    </main>
  )
}
