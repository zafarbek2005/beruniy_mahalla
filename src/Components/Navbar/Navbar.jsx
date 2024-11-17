import React from 'react'
import './Navbar.scss'
import { FiExternalLink } from "react-icons/fi";    
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHeadset } from "react-icons/fa6";
import { GiMicrophone } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";

const Navbar = () => {
  return (
  <>
  <div className="rigth_nav ">
    <div className="micrafon container">
    <Link to={"https://karaokelife.uz/uz/home/"} target="_blank">
              <button>
                <GiMicrophone />
              </button>
            </Link>
            <Link to={"https://mutolaa.uz/"} target="_blank">
              <button>
                <GiOpenBook />
              </button>
            </Link>
    </div>
       <div className=" right_itms container">
       
        <Link to={"https://t.me/uzmahallalari"} target='_blank'>  
            <button > <FiExternalLink /> PRESS KLUB </button>
            </Link>
            <Link to={'https://uzmahalla.uz/'}>
            <button  > <FiExternalLink /> MAHALLA GAZETASI  </button>
            </Link>
            <Link>
              <button id='nav_hidden1'> <FaHeadset /> 55 516 70 70</button>
            </Link>
          
            <button id='nav_hidden1'> <FaTelegramPlane /></button>
            <button id='nav_hidden1'> <FaFacebook /></button>
            <button id='nav_hidden1'> <FaInstagram /></button>
            <button id='nav_hidden1'> <FaYoutube /></button>
       </div>
  </div>
  
  
  
  
  </>
  )
}

export default Navbar