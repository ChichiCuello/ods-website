import React from 'react';
import { Link } from "react-router-dom";
import './goals.css'
import data from '../data/data';
import grafica from '../assets/ODS-grafica-c.png'
const Goals = () => {

  const goals = Array.from({ length: 17 }, (_, i) => i + 1);

  return (
    <div className="main section basic-margin">
      <h2>{data.goals.h2}</h2>
      <section className='section-goals'>
        <div className="goals">
        {goals.map(goal => {
                // Dynamically import the image based on the goal number
                const odsImage = require(`../assets/ODS/ODS-${goal}.png`);
                return (
                  <div className="card" key={goal}>
                    <div className="front">
                    <Link to={`ods/${goal}`}><img src={odsImage} alt={`ODS ${goal}`} /></Link>
                    </div>
                    <div className="back">
                      <div className="info">
                        <p>Accede al link para conocer más</p>
                        <Link to={`ods/${goal}`}>ODS {goal}</Link>
                      </div>
                    </div>
                  </div>
                );
              })}

        </div>
        <img className="girl-img" src={grafica} alt="" width={400} />
      </section>
    </div>
  )
}

export default Goals