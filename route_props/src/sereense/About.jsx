
import React from 'react';
import PropTypes from 'prop-types';

const About = ({ name, age }) => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};


About.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default About;
