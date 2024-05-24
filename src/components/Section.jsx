import React from 'react'
import './section.css'
import data from '../data/data'
import odsGrafica from '../assets/ODS-grafica-1.png'

const Section = () => {
  return (<>
  <div className="main section basic-margin">
    <div className='flex-container'>
      <div><a href="https://www.youtube.com/watch?v=MCKH5xk8X-g&t=5s "><img src={odsGrafica} alt="" width={300}/></a></div>
      <div className="flex-item">      
      <h2>{data.sectionOne.h2}</h2>
      <p>{data.sectionOne.p}</p>
      </div>
    </div>
    <div className='flex-container second'>
    <div><a href="https://www.youtube.com/watch?v=MCKH5xk8X-g&t=5s "><img src={odsGrafica} alt="" width={300}/></a></div>
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