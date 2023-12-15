"use client"

// @refresh reset
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by Youte
        </p>
      </div>
    </footer>
  )
}

export default Footer
