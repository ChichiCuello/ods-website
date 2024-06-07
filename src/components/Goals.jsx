import React from 'react';
import './goals.css'
import data from '../data/data';
import grafica from '../assets/ODS-grafica-c.png'

const Goals = () => {
  return (
    <div className="main section basic-margin">
      <h2>{data.goals.h2}</h2>
      <section>
        <img src={grafica} alt="" width={400} />
        <div className="goals">
          images og each goal
        </div>
      </section>

    </div>
  )
}

export default Goals