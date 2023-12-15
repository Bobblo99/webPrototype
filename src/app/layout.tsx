import type { Metadata } from "next"
import { Inter } from "next/font/google"

// @refresh reset
// These styles apply to every route in the application
import "./globals.css"

import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import React, { createContext } from 'react';

export const metadata: Metadata = {
  title: "Modell- und Formenbau Walter",
  description: "",
}

const inter = Inter({ subsets: ["latin"] })


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
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
  );
}