// @refresh reset
"use client"
import Image from "next/image"

import Navbar from "../../components/navbar"
import { useState } from "react"
import Button from '@mui/material/Button';
import Carousel from "../../components/carousel";

export default function Home() {
  const images = [
    "/test.jpg",
    "/test2.jpg",
  ]

  const [test, setTest] = useState()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" container mx-auto grid grid-rows-1 grid-cols-1 gap-10">
      <Carousel images={images} />
    </div>
    <div className="flex ">
    <Button variant="contained">Hello world</Button>
    </div>
  
    </main>
  )
}


