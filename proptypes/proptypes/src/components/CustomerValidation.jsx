
import PropTypes from 'prop-types'

const CustomerValidation = (props) => {
  return (
    <div style={{borderRadius: "10px",  width:"auto",  boxShadow:"2px 2px 4px 2px"}}>
      <h2>Our Special customer</h2>
      <p>Name:{props.name}</p>
      <p>Account N0 {props.accno}</p>
      <p>Cards: {props.cardslimit} </p>
      <p>Loans: {props.loansCount}</p>
      <p>Balance:{props.accbalance}</p>
    </div>
  )
}

CustomerValidation.propTypes = {
    name:PropTypes.string.isRequired,
    accno: PropTypes.number.isRequired,
    cardslimit: PropTypes.number.isRequired,
    loansCount: PropTypes.number.isRequired,
    accbalance:PropTypes.number.isRequired
}


export default CustomerValidation;

