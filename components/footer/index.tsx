"use client"

// @refresh reset
import React from "react"
import Link from "next/link"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-navbar p-4 px-4 shadow-2xl  dark:bg-gray-800 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black dark:text-gray-400 sm:text-center">
          &copy; {new Date().getFullYear()} Platzhalter
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-md font-medium text-black dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Über uns
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Datenschutzrichtlinien
            </a>
          </li>
          <li>
            <a href="impressum" className="me-4 hover:underline md:me-6">
              Impressum
            </a>
          </li>
          <li>
            <a href="contact" className="hover:underline">
              Kontakt
            </a>
          </li>
        </ul>
        <div className="flex justify-end space-x-2">
          <Link href={"/"}>
            <FacebookIcon className="hover:fill-facebook fill-grad h-8 w-8 hover:cursor-pointer" />
          </Link>
          <Link href={"/"}>
            <InstagramIcon className="hover:fill-instagram h-8 w-8 hover:cursor-pointer" />
          </Link>
          <Link href={"/"}>
            <TwitterIcon className="hover:fill-twitter h-8 w-8 hover:cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
