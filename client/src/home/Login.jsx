import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import "./Login.css"
import "./Footer.css"
import"./Btn.css"

import facebook_icon from "../Assets/facebook.png";
import whatsapp_icon from "../Assets/whatsapp.png";
import twitter_icon from "../Assets/twitter.png";
import bubble_image from "../Assets/bubble.png";
import logo_icon from "../Assets/logo.png";
import house1_image from "../Assets/house1.png";


const Login = () => {

  const navigate = useNavigate();

  const handleButtonClick3 = () => {
    // Navigate to the Register page
    navigate('/home');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked');
  };



  return (
    <div >
     
      <h1>Home Sale Hub</h1>
     
      <button className="btn-23" onClick={handleButtonClick3}>
      <span className="text">H O M E</span>
      <span aria-hidden="" className="marquee">Home</span>
    </button>

      <img src={house1_image} alt="" className="house1"/>
      <img src={logo_icon} alt="" className="logo"/>
      
      <div className='login'></div>
      
      <div className="form-container">
         
      <p className="title">Welcome back</p>
      <form className="form">
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button className="form-btn" onClick={handleLogin}>
          Log in
        </button>
      </form>
      <p className="sign-up-label">
        Don't have an account?
        <span className="sign-up-link">Sign up</span>
      </p>
      <div className="buttons-container">
        <div className="apple-login-button">
          {/* Apple Login SVG and text */}
          <span>Log in with Apple</span>
        </div>
        <div className="google-login-button">
          {/* Google Login SVG and text */}
          <span>Log in with Google</span>
        </div>
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

export default Login;
