import React from 'react';
import './goals.css'
import data from '../data/data';
import grafica from '../assets/ODS-grafica-c.png'
import ods from '../assets/ODS-1.png'

const Goals = () => {
  return (
    <div className="main section basic-margin">
      <h2>{data.goals.h2}</h2>
      <section>
        <div className="goals">
          <div className="card">
            <div className="front">
              <img src={ods} alt="" />
            </div>
            <div className="back">
              <div className="info">
              <p>Accede al link para conocer mas</p>
              <a href="#">ODS 1</a></div>


            </div>
          </div>

        </div>
        <img src={grafica} alt="" width={400} />
      </section>

    </div>
  )
}

export default Goals