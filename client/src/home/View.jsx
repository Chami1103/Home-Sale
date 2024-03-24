import React from 'react'
import { useNavigate } from 'react-router-dom';

import logo_icon from "../Assets/logo.png";
import"./View.css"

const View = () => {

    const navigate = useNavigate();

    const handleButtonClick3 = () => {
        // Navigate to the Register page
        navigate('/home');
      };

  return (
    <div>
        <h1>Home Sale Hub</h1>
        <img src={logo_icon} alt="" className="logo"/>

        <button className="btn-23" onClick={handleButtonClick3}>
      <span className="text">H O M E</span>
      <span aria-hidden="" className="marquee">Home</span>
    </button>

      <div>

      </div>
    </div>
  )
}

export default View
