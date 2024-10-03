
import React from 'react';

const Contact = ({email,Mobilenumber}) => {
  return(
    <>
    <h1>Contact Us</h1>
    <label >Email:</label>
    <input type='text' placeholder='Please Enteryour Email' value={email} />
    <label >Phone number:</label>
    <input type='number' placeholder='Please Enteryour Email' value={Mobilenumber} />
    </>


  ) 
};

export default Contact;
