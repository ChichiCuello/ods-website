import React from 'react';
import './inicio.css'
import { Link } from "react-router-dom";

import Section from '../components/Section';
import Goals from '../components/Goals';
import wheel from '../assets/ruleta-colores-ods.png'
import data from '../data/data'
import Cta from '../components/Cta';
import Frase from '../components/Frase'
import Footer from '../components/Footer';

export const Inicio = () => {
  return (<>
      <div className='hero-section'>
        <div className='hero-text basic-margin'>
        <h4>{data.hero.topHeader}</h4>
          <h1>{data.hero.h1}</h1>
          <p>{data.hero.p}</p>
          <Link to="recursos"><button className='button'>{data.hero.button}</button></Link>
        </div>
        <div className='hero-image-container'>
          <img src={wheel} alt='ícono de la ruleta de colores que representa los 17 objetivos de desarrollo sostenible propuestos por las Naciones Unidas' className='hero-image' />
        </div>
      </div>
      <Section />
      <Goals />
      <Cta />
      <Frase />
      <Footer />
  </>
  )
}
