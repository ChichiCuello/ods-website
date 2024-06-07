import React from 'react';
import './inicio.css'
import Section from '../components/Section';
import Goals from '../components/Goals';
import wheel from '../assets/wheel.png'
import data from '../data/data'

export const Inicio = () => {
  return (<>
      <div className='hero-section'>
        <div className='hero-text basic-margin'>
        <h4>{data.hero.topHeader}</h4>
          <h1>{data.hero.h1}</h1>
          <p>{data.hero.p}</p>
          <button className='button'>{data.hero.button}</button>
        </div>
        <div className='hero-image-container'><img src={wheel} alt='Half Rotating Image' className='hero-image' /></div>
      </div>
      <Section />
      <Goals />
  </>
  )
}
