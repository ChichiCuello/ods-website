import React, { useState } from 'react';
import { Link } from "react-router-dom";
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

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false); // Close the menu
  };
  return (
    <nav className="navbar">
      <Link to="/ods-website"><img {...logo}></img></Link>
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
            <li><Link to="/ods-website" onClick={closeMenu}>Inicio</Link></li>
            <li className="ods-list" onClick={toggleSubmenu}><a>Conoce los ODS
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
                    <li key={index + 1}><Link to={`ods-website/ods/${index + 1}`} onClick={closeMenu}>Ods {index + 1}</Link></li>
                  ))}
              </ul>
            )}
            <li><Link to="ods-website/recursos" onClick={closeMenu}>Recursos</Link></li>
          </ul>
      ) : (
      <div className="big-menu">
        <li className="paragraph-2 link-effect"><Link to="/ods-website" onClick={closeSubmenu}>Inicio</Link></li>
        <li className="paragraph-2 ods-list link-effect" onClick={toggleSubmenu}><a>Conoce los ODS 
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
                    <li key={index + 1}><Link to={`ods-website/ods/${index + 1}`} onClick={closeSubmenu}>Ods {index + 1}</Link></li>
                  ))}
              </ul>
              </>
            )}
        <li className="paragraph-2 link-effect"><Link to="ods-website/recursos" onClick={closeSubmenu}>Recursos</Link></li>
      </div>
      )}
    </nav>
  );
};
