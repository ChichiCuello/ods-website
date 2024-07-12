import React from 'react'
import './section.css'
import data from '../data/data'
import odsGraficaA from '../assets/ODS-grafica-texto.png';
import odsGraficaB from '../assets/ODS-grafica-texto-b.png';
import { FaRegPlayCircle } from "react-icons/fa";

const Section = () => {
  return (<>
  <div className="main section basic-margin">
    <div className='flex-container'>
      <div className='graphic'>
        <p className='cta-title'>ODS AGENDA 2030 <br />CONOCÉ MÁS ACÁ</p>
        <a href="https://www.youtube.com/watch?v=MCKH5xk8X-g&t=0s" target="_blank">
          <FaRegPlayCircle className='play-btn-a'/>
        </a>
        <img src={odsGraficaA} alt="" width={300}/>
      </div>
      <div className="flex-item">
      <h2>{data.sectionOne.h2}</h2>
      <p>{data.sectionOne.p}</p>
      </div>
    </div>
    <div className='flex-container second'>
    <div  className='graphic' >
    <p className='cta-title'>ENTERATE DE MÁS</p>
      <a href="https://www.youtube.com/watch?v=OK_8zOAJJPE&t=0s" target="_blank">
      <FaRegPlayCircle className='play-btn-b'/></a>
      <img src={odsGraficaB} alt="" width={300}/></div>
      <div className="flex-item">
      <h2>{data.sectionTwo.h2}</h2>
      <p>{data.sectionTwo.p.one}</p>
      <p>{data.sectionTwo.p.two}</p>
      </div>
      </div>
    </div>
    <div className="main section basic-margin">
    <h2>{data.sectionThree.h2}</h2>
    <p>{data.sectionThree.p.one}</p>
    <p>{data.sectionThree.p.two}</p>
    </div>
    </>
  )
}

export default Section