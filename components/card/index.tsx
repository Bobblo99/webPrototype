"use client"
import Image from "next/image"
import Link from "next/link"

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
    <div className="mx-auto max-w-md overflow-hidden bg-white shadow-md  dark:bg-navbarDark">
      <Link href={"/about"}>
        <Image
          src={imageSrc}
          alt=""
          width={500}
          height={500}
          className="h-48 w-full object-cover duration-500 hover:scale-105 hover:cursor-pointer hover:opacity-60"
        />
      </Link>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-teal-500 ">
          {title}
        </h2>
        <p className="mt-2 text-black-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
export default Card
