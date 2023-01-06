import React, { useState } from "react";
import './navbar.css'
import "./NavDark.css";
import { GiHamburgerMenu } from "react-icons/gi";



function NavDark() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [isOpen, setIsOpen] =useState(false)



  return (
    <>
        <nav className="container main-nav">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <a href='/'>
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/find_jobs/logo-white.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669995470971"
              alt=""
              className=""
            />
            </a>
         
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
          <li>
              <a href="/" >Home</a>
            </li>
     
       
            {/* <li>
              <a to="/rewards" >Rewards</a>
            </li> */}
            <li>
              <a href="/nft-market" >NFT marketplace</a>
            </li>
            <li>
              <a href="/job-portal" >Find Job</a>
            </li>
            <li>
              <a href="/academy" >Academy</a>
            </li>
            
            <li>
              <a href="#team" className="explore-btn" >Sign Up</a>
            </li>
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
   
    </>
  );
}

export default NavDark;
