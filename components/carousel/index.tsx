// @refresh reset
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ICarousel {
  images: string[];
}

const Carousel = ({ images }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
    <div className="relative w-full overflow-hidden">
      <div className="flex ">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className={`lg:h-128 h-64 w-full flex-shrink-0 bg-cover bg-center transition-opacity md:h-96 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "opacity 1s ease-out" }}
          >
            <Image
            className=" object-contain"
              src={image}
              layout="fill"
            objectFit="contain"
            quality={100}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-30 p-2 text-white"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-30 p-2 text-white"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
    <div className="flex justify-center relative bottom-5">
        {images.map((_, index) =>{
            console.log("mooin",_, index, currentIndex)
            return (
                <span
                  key={index}
                  className={`mx-1 h-2 w-2 rounded-full ${
                    index == currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              )
        })}
      </div>

    </>
  );
};

export default Carousel;
