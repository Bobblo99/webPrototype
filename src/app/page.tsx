// @refresh reset
"use client"

import React, { useEffect, useState } from "react"

import Card from "../../components/card"
import Carousel from "../../components/carousel"

export default function Home() {
  const images = ["/test3.jpg", "/test.jpg", "/test2.jpg", "/test3.jpg"]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-16 dark:bg-bgDark">
      <div className=" container mx-auto grid grid-cols-1 grid-rows-1 gap-10">
        {/* <Header displayText="Startseite" /> */}
        <div>
          <Carousel images={images} />
        </div>
        <div></div>
        {/* <Card
          imageSrc="/test.jpg"
          altText="t"
          title="TestText"
          description="Hier könnte ihre Werbung stehen"
        /> */}

        <div className="flex flex-wrap">
          {images.map((x: any, index: number) => (
            <div key={index} className="w-full p-2 md:w-1/4">
              <Card imageSrc={`${x}`} altText="" title="" description="sd" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex "></div>
    </main>
  )
}
