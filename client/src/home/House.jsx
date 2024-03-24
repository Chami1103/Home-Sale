import React from 'react'
import { useNavigate } from 'react-router-dom';

import"./Images.css"
import "./House.css"
import "./Footer.css"
import "./Button1.css"
import "./Button2.css"
import "./Bubbles.css"
import "./Button.css"



import facebook_icon from "../Assets/facebook.png";
import whatsapp_icon from "../Assets/whatsapp.png";
import twitter_icon from "../Assets/twitter.png";
import bubble_image from "../Assets/bubble.png";
import house1_image from "../Assets/house1.png";
import house2_image from "../Assets/house2.png";
import house3_image from "../Assets/house3.png";
import house4_image from "../Assets/house4.png";
import house5_image from "../Assets/house5.png";
import house6_image from "../Assets/house6.png";
import house7_image from "../Assets/house7.png";
import house8_image from "../Assets/house8.png";
import house9_image from "../Assets/house9.png";
import house10_image from "../Assets/house10.png";
import house11_image from "../Assets/house11.png";
import house12_image from "../Assets/house12.png";
import house13_image from "../Assets/house13.png";
import logo_icon from "../Assets/logo.png";



const houseDetails = [
 
  {
    image1:house1_image,
    title1: "Nest Nook",
    about1: "Modern loft with open floor plan and stunning city views.",
    price1: "$700,000",
    owner1: "Bob Johnson",
    location1: "Metropolis,  City",
  },
  
  {
    image2:house2_image,
    title2: "Cozy Corners",
    about2: "Modern loft with open floor plan and stunning city views.",
    price2: "$60,000",
    owner2: "Bob Johnson",
    location2: "Metropolis, XYZ City",
  },
  {
    image3:house3_image,
    title3: "Blissful Dwellings",
    about3: "Modern loft with open floor plan and stunning city views.",
    price3: "$100,000",
    owner3: "Bob Johnson",
    location3: "Metropolis, ARC City",
  },
  {
    image4:house4_image,
    title4: "Homely Haven",
    about4: "Modern loft with open floor plan and stunning city views.",
    price4: "$400,000",
    owner4: "Bob Johnson",
    location4: "Metropolis,  TTK City",
  },
  {
    image5:house5_image,
    title5: "Tranquil Retreats",
    about5: "Modern loft with open floor plan and stunning city views.",
    price5: "$2300,000",
    owner5: "Bob Johnson",
    location5: "Metropolis,  City",
  },

  {
    image6:house6_image,
    title6: "Comfort Havens",
    about6: "Modern loft with open floor plan and stunning city views.",
    price6: "$100,000",
    owner6: "Bob Johnson",
    location6: "Metropolis,  City",
  },
  {
    image7:house7_image,
    title7: "Casa Calma",
    about7: "Modern loft with open floor plan and stunning city views.",
    price7: "$170,000",
    owner7: "Bob Johnson",
    location7: "Metropolis,  City",
  },
  {
    image8:house8_image,
    title8: "Hearthstone Residences",
    about8: "Modern loft with open floor plan and stunning city views.",
    price8: "$710,000",
    owner8: "Bob Johnson",
    location8: "Metropolis,  City",
  },
  {
    image9:house9_image,
    title9: "Serenity Springs",
    about9: "Modern loft with open floor plan and stunning city views.",
    price9: "$40,000",
    owner9: "Bob Johnson",
    location9: "Metropolis,  City",
  },


  {
    image10:house10_image,
    title10: "Haven of Comfort",
    about10: "Modern loft with open floor plan and stunning city views.",
    price10: "$400,000",
    owner10: "Bob Johnson",
    location10: "Metropolis,  City",
  },
  {
    image11:house11_image,
    title11: "Casa Delight",
    about11: "Modern loft with open floor plan and stunning city views.",
    price11: "$7200,000",
    owner11: "Bob Johnson",
    location11: "Metropolis, PQR City",
  },

  {
    image12:house12_image,
    title12: "Past Nook",
    about12: "Modern loft with open floor plan and stunning city views.",
    price12: "$210,000",
    owner12: "Bob Johnson",
    location12: "Metropolis, PQR City",
  },

  {
    image13:house13_image,
    title13: "Comfort Cove Living",
    about13: "Modern loft with open floor plan and stunning city views.",
    price13: "$500,000",
    owner13: "Bob Johnson",
    location13: "Metropolis, PQR City",
  },
 
];




  



  
const House = () => {

  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    // Navigate to the Register page
    navigate('/register');
  };

  const handleButtonClick2 = () => {
    // Navigate to the Register page
    navigate('/login');
  };

  const handleButtonClick3 =() =>{
    navigate('/contact');
  };

  const handleButtonClick5 = () => {
    // Navigate to the Register page
    navigate('/view');
  };


  return ( 


    
    <div>
      
      <h1>Home Sale Hub</h1>
      <img src={logo_icon} alt="" className="logo"/>

      
    
     
      <button className="button-first"onClick={handleButtonClick1} >
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>
      <span className="text" >Register</span>
    </button>
    
    
    
    <button className="button-second" onClick={handleButtonClick2}>
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>
      <span className="text">Login</span>
    </button>
  
    
   
    



      <div className='display'>

{houseDetails.map((house, index) => (
  
  <div className="card" key={index}>

{house.image1 && (
      <>
        <img src={house.image1} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title1}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about1}
        </p>
        <p>
          <strong>Price:</strong> {house.price1}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner1}
        </p>
        <p>
          <strong>Location:</strong> {house.location1}
        </p>
            <button className="button1"onClick={handleButtonClick5}>
              <span>View</span>
            </button>
            <button className="button1" onClick={handleButtonClick3} >
              <span>Contact</span>
            </button>


           

          </p>
        </div>
      </>
    )}






{house.image2 && (
      <>
        <img src={house.image2} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title2}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about2}
        </p>
        <p>
          <strong>Price:</strong> {house.price2}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner2}
        </p>
        <p>
          <strong>Location:</strong> {house.location2}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image3 && (
      <>
        <img src={house.image3} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title3}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about3}
        </p>
        <p>
          <strong>Price:</strong> {house.price3}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner3}
        </p>
        <p>
          <strong>Location:</strong> {house.location3}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image4 && (
      <>
        <img src={house.image4} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title4}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about4}
        </p>
        <p>
          <strong>Price:</strong> {house.price4}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner4}
        </p>
        <p>
          <strong>Location:</strong> {house.location4}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image5 && (
      <>
        <img src={house.image5} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title5}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about5}
        </p>
        <p>
          <strong>Price:</strong> {house.price5}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner5}
        </p>
        <p>
          <strong>Location:</strong> {house.location5}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image6 && (
      <>
        <img src={house.image6} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title6}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about6}
        </p>
        <p>
          <strong>Price:</strong> {house.price6}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner6}
        </p>
        <p>
          <strong>Location:</strong> {house.location6}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image7 && (
      <>
        <img src={house.image7} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title7}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about7}
        </p>
        <p>
          <strong>Price:</strong> {house.price7}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner7}
        </p>
        <p>
          <strong>Location:</strong> {house.location7}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image8 && (
      <>
        <img src={house.image8} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title8}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about8}
        </p>
        <p>
          <strong>Price:</strong> {house.price8}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner8}
        </p>
        <p>
          <strong>Location:</strong> {house.location8}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image9 && (
      <>
        <img src={house.image9} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title9}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about9}
        </p>
        <p>
          <strong>Price:</strong> {house.price9}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner9}
        </p>
        <p>
          <strong>Location:</strong> {house.location9}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image10 && (
      <>
        <img src={house.image10} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title10}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about10}
        </p>
        <p>
          <strong>Price:</strong> {house.price10}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner10}
        </p>
        <p>
          <strong>Location:</strong> {house.location10}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

    {house.image11 && (
      <>
        <img src={house.image11} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title11}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about11}
        </p>
        <p>
          <strong>Price:</strong> {house.price11}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner11}
        </p>
        <p>
          <strong>Location:</strong> {house.location11}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

    {house.image12 && (
      <>
        <img src={house.image12} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title12}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about12}
        </p>
        <p>
          <strong>Price:</strong> {house.price12}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner12}
        </p>
        <p>
          <strong>Location:</strong> {house.location12}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}

{house.image13 && (
      <>
        <img src={house.image13} alt="" className="card__image" />
        <svg
          viewBox="0 0 16 16"
          className="bi bi-image-fill"
          fill="currentColor"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
        ></path>
        </svg>
        <div className="card__content">
          <p className="card__title">{house.title13}</p>
          <p className="card__description">
          <p>
          <strong>About:</strong> {house.about13}
        </p>
        <p>
          <strong>Price:</strong> {house.price13}
        </p>
        <p>
          <strong>Owner:</strong> {house.owner13}
        </p>
        <p>
          <strong>Location:</strong> {house.location13}
        </p>
            <button className="button1">
              <span>View</span>
            </button>
            <button className="button1">
              <span>Contact</span>
            </button>
          </p>
        </div>
      </>
    )}
  </div>
))}



    


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
    
    

    </div>

    

   
  )

}







export default House;

/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/