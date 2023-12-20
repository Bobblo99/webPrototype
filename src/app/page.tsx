// @refresh reset
"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Button from "@mui/material/Button"

import MediaCard from "../../components/card"
import Carousel from "../../components/carousel"
import Header from "../../components/header"
import Navbar from "../../components/navbar"

export default function Home() {
  const images = [ "./test3.jpg","./test.jpg", "./test2.jpg"]

  return (
    <main className="dark:bg-bgDark flex min-h-screen flex-col items-center justify-between bg-white p-16">
      <div className=" container mx-auto grid grid-cols-1 grid-rows-1 gap-10">
        {/* <Header displayText="Startseite" /> */}
        <div>
          <Carousel images={images} />
        </div>
      <div>
              </div>
        <Card
          imageSrc="/test.jpg"
          altText="t"
          title="TestText"
          description="Hier könnte ihre Werbung stehen"
        />
      </div>
      <div className="flex "></div>
    </main>
  )
}

interface CardProps {
  imageSrc: string
  altText: string
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-md  bg-white shadow-lg dark:bg-navbarDark">
      <img className="h-48 w-full object-cover" src={imageSrc} alt={altText} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-teal-500 ">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
