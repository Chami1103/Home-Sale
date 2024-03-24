import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import"./Register.css"
import"./Btn.css"

import logo_icon from "../Assets/logo.png";
import facebook_icon from "../Assets/facebook.png";
import whatsapp_icon from "../Assets/whatsapp.png";
import twitter_icon from "../Assets/twitter.png";
import bubble_image from "../Assets/bubble.png";
import house14_image from "../Assets/house14.png";

 

const Register = () => {

  const navigate = useNavigate();
  
  const handleButtonClick4 = () => {
    // Navigate to the Register page
    navigate('/home');
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleLogin = () => {
    // Your login logic here
}

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration submitted');
  };



  return (
    <div className='register'>

      <h1>Home Sale Hub</h1>

      <button className="btn-23" onClick={handleButtonClick4}>
      <span className="text">H O M E</span>
      <span aria-hidden="" className="marquee">Home</span>
    </button>

      <img src={logo_icon} alt="" className="logo"/>
      <img src={house14_image} alt="" className="house14"/>
      <div className="container">
      
      <div className="title">Registration</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <span className="details">Username</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="bubbles">
      <img src={bubble_image} alt="Bubble 1" />
      <img src={bubble_image} alt="Bubble 2" />
      <img src={bubble_image} alt="Bubble 3" />
      <img src={bubble_image} alt="Bubble 4" />
      <img src={bubble_image}alt="Bubble 5" />
      <img src={bubble_image} alt="Bubble 6" />
      <img src={bubble_image} alt="Bubble 7" />
    </div>



      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://m.facebook.com/story.php?story_fbid=pfbid02MezoBByuKGUE4x817DXpTYQEaQc3CJfLeKFze4u7Fa9MnBhpvtRu1wybYehLnAp1l&id=100072180541535&mibextid=Nif5oz">
          <img src={facebook_icon} alt="Facebook" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
          <img src={twitter_icon} alt="Twitter" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://chat.whatsapp.com/GA7PCWtTAwLIawHa05z5NB">
          <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </li>
        
      </ul>
    
      <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="http://localhost:3000/">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="#">About</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
      </ul>

     
      <p>&copy;2024 Chamika vimukthi | All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default Register;
