import React from 'react';
import './recursos.css'
import '../components/navbar.css'
import recursos from '../data/recursos'

const Recursos = () => {
  return (
      <div className='recursos basic-margin'>
        <h2 className='slide-in-left'>Videos Educativos</h2>
        <h2 className='slide-in-right'>Articulos</h2>
        <h2 className='slide-in-left'>Juegos</h2>
        <h2 className='slide-in-right'>Trivia</h2>
        <h2 className='slide-in-left'>Links a páginas oficiales</h2>


        <section>
          <a className = 'link' href={recursos.videos.link} target='_blank'>{recursos.videos.title}</a>
          <p>{recursos.videos.p}</p>
        </section>
      </div>

  )
}

export default Recursos;