import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const JobCard = (props) => {
  return (
    <div style={{borderRadius: "10px",  padding:"20px", width:"auto",  boxShadow:"2px 2px 4px 2px"}}>
    
      <p>JobTitle:{props.jobTitle}</p>
      <p>JobDescription:{props.description}</p>
      <p> Requirements{props.requirements}</p>
      <p>Qualifications: {props.qualification} </p>
      <p>Salary: {props.salary}</p>
      <p>Location:{props.area}</p>

      <Link to="/services/7894"> Apply</Link>
    </div>
  )
}

JobCard.propTypes ={
    jobTitle: PropTypes.string,
    description: PropTypes.string,
    requirements:PropTypes.array,
    qualification:PropTypes.array,
    salary:PropTypes.number,
    area:PropTypes.string

}

export default JobCard