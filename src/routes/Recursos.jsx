import React from 'react';
import './recursos.css'
import '../components/navbar.css'
import recursos from '../data/recursos'

const Recursos = () => {
  return (
      <div className='recursos basic-margin'>
        <h1>Recursero</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore ipsum error in, nulla iure vitae nihil deserunt, est sunt, repellat doloribus quia animi necessitatibus vero dicta fugiat quo! Assumenda.</p>
        <h2 className='slide-in-left'>Videos Educativos</h2>
        <h2 className='slide-in-right'>Páginas Oficiales</h2>
        <h2 className='slide-in-left'>Artículos</h2>
        <h2 className='slide-in-right'>Juegos y trivias</h2>

        <section>
          <a className = 'link' href={recursos.videos.link} target='_blank'>{recursos.videos.title}</a>
          <p>{recursos.videos.p}</p>
        </section>
      </div>

  )
}

export default Recursos;