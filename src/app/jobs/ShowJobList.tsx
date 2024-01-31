"use client"

import React, { useState } from "react"

import Accordion from "../../../components/accordion"

const JobListing: React.FC<JobListProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails((prev) => !prev)
  }

  return (
    <Accordion
      isOpen={showDetails}
      onToggle={toggleDetails}
      title={job.title}
      shortDescription={job.shortDescription}
      details={job.details}
    />
  )
}

interface ITest {
  jobList: Job[]
}

const JobList: React.FC<ITest> = ({ jobList }) => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-thin dark:text-white">offene Stellen</h1>
      {jobList.map((job: any) => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobList
