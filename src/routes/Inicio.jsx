import React from 'react';
import wheel from '../assets/wheel.png'
import './inicio.css'

export const Inicio = () => {
  return (<>
<div className='bkg-img'></div>
  <main>
    <section className='section'>
      <div>
      <h1>This is a heading</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis magnam molestiae sequi maxime quo modi ipsa, id omnis aut illum voluptatibus iure assumenda sint doloribus soluta obcaecati. Modi, quasi veniam?</p>
      <button className='button'>Know more</button>
      </div>
      {/* <img src={wheel} alt="logo ruede de colores de los ods" width={315} height={315}/> */}
    </section>
  </main>
  </>
  )
}
