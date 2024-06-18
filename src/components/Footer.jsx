import React from 'react';
import { Link } from "react-router-dom";
import './footer.css'


const Footer = () => {
  return (
    <div className='container'>
      <div className='flex'>
      <div className='nav-links'>
      <li className="paragraph-2 "><Link to="/ods-website">Inicio</Link></li>
      <ul className='ods-links'>
        {Array.from({ length: 17 }, (_, index) => (
          <li className="paragraph-2" key={index + 1}><Link to={`ods-website/ods/${index + 1}`}>Ods {index + 1}</Link></li>
          ))}
          </ul>
        <li className="paragraph-2 "><Link to="ods-website/recursos">Recursos</Link></li>
      </div>
      <div className='socials'>
        <ul>
          <li className="paragraph-2 ">Instagram</li>
          <li className="paragraph-2 ">Youtube</li>
          <li className="paragraph-2 ">Instagram</li>
        </ul>
      </div>
    </div>
    <div className='info'>Made by Chichi</div>
    </div>
  )
}

export default Footer