import React, { useState, useEffect } from 'react'
import './navbar.css';
import odslogo from '../assets/ods-logo.png';
import { IconContext } from "react-icons";
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";




export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State to track submenu visibility for "Conoce los ODS"

  const logo = {
    src: odslogo,
    alt: 'ods logo',
    width: '200',
    height: '26'
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen,); // Toggle menu for ods visibility
  };


  return (
    <nav className="navbar">
      <a href="http://"><img {...logo}></img></a>
      <a onClick={toggleMenu} className="menu-toggle">
        <IconContext.Provider value={{ size: 32 }}>
          {isMenuOpen ? (
            <FaTimes /> // X icon for closing the menu
          ) : (
            <FaBars /> // Hamburger icon for opening the menu
          )}
        </IconContext.Provider>
      </a>

      {isMenuOpen? (
          <ul className="popup-menu">
            <li>Home</li>
            <li className="ods-list">
            Conoce los ODS {/* More specific comment */}
            <a onClick={toggleSubmenu}>
              {isSubmenuOpen ? (
                <FaAngleUp/> 
              ) : (
                <FaAngleDown /> 
              )}
            </a>
            </li>
            {/* Submenu for "Conoce los ODS" can be added here conditionally based on isSubmenuOpen */}
            {isSubmenuOpen && (
              <ul className='submenu'>
                  {/* Render 17 list items in columns with automatic wrapping */}
                  {Array.from({ length: 17 }, (_, index) => (
                    <li key={index + 1}>Ods {index + 1}</li>
                  ))}
              </ul>
            )}
            <li>Recursos</li>
          </ul>
      ) : (
      <div className="big-menu">
        <li className="paragraph-2">Home</li>
        <li className="paragraph-2 ods-list">Conoce los ODS 
        <a onClick={toggleSubmenu}>
              {isSubmenuOpen ? (
                <FaAngleUp/> 
              ) : (
                <FaAngleDown /> 
              )}
            </a>
            </li>
            {/* Submenu for "Conoce los ODS" can be added here conditionally based on isSubmenuOpen */}
            {isSubmenuOpen && (
              <>
                <ul className='megamenu'>
                  {/* Render 17 list items in columns with automatic wrapping */}
                  {Array.from({ length: 17 }, (_, index) => (
                    <li key={index + 1}>Ods {index + 1}</li>
                  ))}
              </ul>
              </>
            )}
        <li className="paragraph-2">Recursos</li>
      </div>
      )}
    </nav>
  );
};
