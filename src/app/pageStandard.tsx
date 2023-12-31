// @refresh reset
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">
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
                className="h-6 w-6"
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
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className={`lg:flex lg:items-center space-x-5 transition-all duration-500 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="text-white duration-200 hover:text-blue-400"
          >
            Home
          </Link>
          <div className="relative group">
            <button
              onClick={toggleMenu}
              className="text-white duration-200 hover:text-blue-400 focus:outline-none"
            >
              Formenbau
            </button>
            {isOpen && (
              <ul className="absolute bg-gray-800 p-2 space-y-2">
                <Link href="/about">
                  <li className="text-white hover:text-blue-400">Option 1</li>
                </Link>
                <Link href="/services">
                  <li className="text-white hover:text-blue-400">Option 2</li>
                </Link>
              </ul>
            )}
          </div>
          <Link
            href="/services"
            className="text-white duration-200 hover:text-blue-400"
          >
            Standorte/Anfahrt
          </Link>
          <Link
            href="/contact"
            className="text-white duration-200 hover:text-blue-400"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
