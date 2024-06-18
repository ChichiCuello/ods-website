import React from 'react';
import { Link } from "react-router-dom";
import data from '../data/data'

const Cta = () => {
  return (
    <div className="main section basic-margin">
      <h2>{data.cta.h2}</h2>
      <p>{data.cta.p.one}</p>
      <p>{data.cta.p.two}</p>
      <p>{data.cta.p.three}</p>
      <p>{data.cta.p.four}</p>
      <Link to="recursos"><button className='button'>{data.cta.button}</button></Link>
    </div>
  )
}

export default Cta