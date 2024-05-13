import React, { useState } from 'react'
import './navbar.css';
import odslogo from '../assets/ods-logo.png'
import menusvg from '../assets/menu.svg'
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const logo = {
    src: odslogo,
    alt: 'ods logo',
    width: '200'
  }

  const menu = {
    src: menusvg,
    alt: 'menu',
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };


  return (
    <nav className="navbar">
      <a href="http://"><img {...logo}></img></a>
      <a onClick={toggleMenu} className="small-menu"><img {...menu}></img></a>
      {isMenuOpen? (
          <ul className="popup-menu">
            <li className="">Home</li>
            <li className="">Conoce los ODS</li>
            <li className="">Recursos</li>
          </ul>
      ) : (
      <ul className="big-menu">
        <li className="paragraph-2">Home</li>
        <li className="paragraph-2">Conoce los ODS</li>
        <li className="paragraph-2">Recursos</li>
      </ul>
      )}
    </nav>
  );
};
