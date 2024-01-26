// @refresh reset
"use client"

import React, { useState } from "react"
import Image from "next/image"

interface ICarousel {
  images: string[]
}

const Carousel = ({ images }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex">
        {/* {images.map((image: any, index: any) => (
          <div
            key={index}
            className={`lg:h-128 h-64 w-full flex-shrink-0 bg-cover bg-center transition-opacity md:h-96 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "opacity 1s ease-out" }}
          >
            <Image
              className="w-full object-contain" // Füge die Klasse w-full hinzu
              src={image}
              fill
              quality={80}
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))} */}
        {images.map((image: any, index: any) => {
         // console.log(images)
          return(
            <div
              key={index}
              className={`flex  flex-shrink-0 bg-cover transition-opacity md:h-96 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 1s ease-out" }}
            >
          {/* <img className="h-48 w-full object-cover" src={image} alt={"altText"} /> */}
          <Image
                className="w-full object-cover" // Füge die Klasse w-full hinzu
                src={image}
                fill
                quality={80}
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </div>
          )
        })}

        <button
          className="absolute left-60 top-1/2 -translate-y-1/2 transform rounded-3xl bg-black bg-opacity-40 p-2 text-white"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="absolute right-60 top-1/2 -translate-y-1/2 transform rounded-3xl bg-black bg-opacity-30 p-2 text-white"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* <button
          className="absolute left-60 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-30 p-2 text-white"
          onClick={prevSlide}
        >
          &lt;
        </button> */}
        {/* <button
          className="absolute right-60 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-30 p-2 text-white"
          onClick={nextSlide}
        >
          &gt;
        </button> */}
      </div>
      <div className="relative bottom-5 flex justify-center">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 h-4 w-4 cursor-pointer rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
