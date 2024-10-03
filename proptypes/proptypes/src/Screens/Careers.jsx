// eslint-disable-next-line no-unused-vars
import React from 'react'
import JobCard from '../components/JobCard'

const Careers = () => {
  const requirements = ["ReactJS", "Node JS", "Git"]
  return (
    <div>
      <h1>Carrers</h1>
      <JobCard requirements={requirements}/>

    </div>
  )
}

export default Careers
