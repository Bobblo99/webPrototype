"use client"

import { useEffect, useState } from "react"
import Header from "../../../components/header"
import JobList from "./ShowJobList"
// @refresh reset


export default function JobPage() {

    const jobs: Job[] = [
        {
          id: 1,
          title: "Frontend-Entwickler",
          shortDescription:
            "Spannende Gelegenheit für einen erfahrenen Frontend-Entwickler.",
          details:
            "Vollzeitstelle, Erfahrung mit React und TypeScript erforderlich.",
        },
        {
          id: 2,
          title: "Backend-Entwickler",
          shortDescription: "Treten Sie unserem Backend-Entwicklungsteam bei!",
          details:
            "Auf der Suche nach jemandem mit Erfahrung in Node.js und Datenbanken.",
        },
      ]

      
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-white p-16 dark:bg-bgDark">
        <div className=" container mx-auto grid grid-cols-1 grid-rows-1 gap-10">
          <Header displayText="Stellenanzeige" />   
         <JobList jobList={jobs} />
        </div>
      </main>
    </>
  )
}
