import type { Metadata } from "next"
import { Roboto} from "next/font/google"

// @refresh reset
// These styles apply to every route in the application
import "./globals.css"

import React, { createContext } from "react"

import Footer from "../../components/footer"
import Navbar from "../../components/navbar"

export const metadata: Metadata = {
  title: "Modell- und Formenbau Walter",
  description: "",
}

const inter = Roboto({
  subsets: ["latin"],
  weight: "400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
