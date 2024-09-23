import React, { useState } from 'react';

export default function Input() {
  const [name, setName] = useState("John");
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("gh@123");
  const [dob, setDob] = useState("2024-09-20");
  const [mobnum, setMobNum] = useState("999999999");
  const [gender, setGender] = useState("Male");
  const [role, setRole] = useState("DEV");
  const [pincode, setPincode] = useState("524302");
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    
  };


  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:"violet"}}>
    
      <label className='name'>Name:</label>
      <input type="text" name="name" id="username" value={name} onChange={(e) => setName(e.target.value)} required pattern="[A-Za-z ]{1,15}" />
      <p>{name ? name : "Please enter your name"}</p>

      <label className='email'>Email:</label>
      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}" />
      <p>{email ? email : "Please enter your email"}</p>

      <label className='password'>Password:</label>
      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required pattern="^[A-Za-z0-9]{8}$" />
      <p>{password ? password : "Please enter your password"}</p>

      <label className='dob'>DOB:</label>
      <input type="date" name="date" id="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
      <p>{dob ? dob : "Please enter your date of birth"}</p>

      <label className='mob'>Mobile Number:</label>
      <input type="text" name="number" id="number" value={mobnum} onChange={(e) => setMobNum(e.target.value)} required pattern="[0-9]{10}" />
      <p>{mobnum ? mobnum : "Please enter your mobile number"}</p>

      <label className='gender'>Select Gender:</label>
      <p>Male<input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} required /></p>
      <p>Female<input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} required /></p>
      <p>{gender ? gender : "Please select your gender"}</p>

      <label className='role'>Enter Your Role:</label>
      <input type="text" name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} required />
      <p>{role ? role : "Please enter your Role"}</p>

      <label className='pincode'>Enter Your Pincode:</label>
      <input type="text" name="pincode" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required pattern="[0-9]{6}" />
      <p>{pincode ? pincode : "Please enter your pin code"}</p>

      <button type="submit">Submit</button>
    </form>
    
  );
}

