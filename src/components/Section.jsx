import React from 'react'
import data from '../data/data'

const Section = () => {
  return (
    <div className='Section basic-margin'>
      <h2>{data.sectionOne.h2}</h2>
      <p>{data.sectionOne.p.first}</p>
      <p>{data.sectionOne.p.second}</p>
    </div>
  )
}

export default Section