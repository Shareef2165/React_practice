
import { PropTypes } from 'prop-types';
const Prop = (props) => {
  return (
    <>
    <div>
        <p> Account holder name is {props.name}</p>
        <p>Account holders mob is {props.mobile}</p>
    </div>
    </>
  )
 
}
Prop.propTypes={
    name:PropTypes.string.isRequired,
    mobile:PropTypes.number.isRequired
}


export default Prop