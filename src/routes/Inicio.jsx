import React from 'react';
import './inicio.css'
import wheel from '../assets/wheel.png'

export const Inicio = () => {
  return (<>
      <div className='hero-section'>
        <div className='hero-text'>
          <h1>This is a heading</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis magnam molestiae sequi maxime quo modi ipsa, id omnis aut illum voluptatibus iure assumenda sint doloribus soluta obcaecati. Modi, quasi veniam?</p>
          <button className='button'>Know more</button>
        </div>
        <div className='hero-image-container'><img src={wheel} alt='Half Rotating Image' className='hero-image' /></div>
      </div>
  </>
  )
}
