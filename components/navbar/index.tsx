// @refresh reset
"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import ThemeToggle from "./ThemeToggle"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-navbar dark:bg-navbarDark sticky top-0 z-50 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between text-black">
        <div className=" dark:text-white">
          <Link href="/">
            <Image
              className="rounded-3xl"
              src="/Logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-black	"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-black dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* big screen */}
        <div className="hidden lg:flex lg:space-x-5">
          <Link
            href="/"
            className="py-2 hover:text-blue-400 dark:text-white dark:hover:text-teal-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-2 hover:text-blue-400 dark:text-white  dark:hover:text-teal-400"
          >
            Formenbau
          </Link>
          <Link
            href="/services"
            className="py-2 hover:text-blue-400 dark:text-white  dark:hover:text-teal-400"
          >
            Standorte/Anfahrt
          </Link>
          <Link
            href="/contact"
            className="py-2 hover:text-blue-400 dark:text-white dark:hover:text-teal-400"
          >
            Kontakt
          </Link>
          <div className="py-1">
            <ThemeToggle />
          </div>
        </div>

        {/* small screen*/}
        {isOpen && (
          <div className="absolute left-0 right-0 top-16 bg-blue-500 lg:hidden">
            <Link href="/" className="block py-2 text-white">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-white">
              Formenbau
            </Link>
            <Link href="/services" className="block py-2 text-white">
              Standorte/Anfahrt
            </Link>
            <Link href="/contact" className="block py-2 text-white">
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
