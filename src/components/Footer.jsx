import React from 'react';
import { Link } from "react-router-dom";
import './footer.css'


const Footer = () => {
  return (
    <div className='container'>
      <div className='nav-links'>
      <li className="paragraph-2"><Link to="/ods-website">Inicio</Link></li>
      <ul className='ods-links'>
      {Array.from({ length: 17 }, (_, index) => (
                    <li key={index + 1}><Link to={`ods/${index + 1}`}>Ods {index + 1}</Link></li>
                  ))}
          </ul>
        <li className="paragraph-2 "><Link to="ods-website/recursos">Recursos</Link></li>
      </div>
    <div className='info'>Made by Chichi</div>
    </div>
  )
}

export default Footer