import React from 'react';

import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
const Main = () => {
  return (
    <div className='icons'>
     <img  className='icon' src={email} alt={email}/>
     <img className='icon' src={location} alt={location}/>
     <img className='icon' src={phone} alt={phone}/>


    </div>
  );
}

export default Main;
