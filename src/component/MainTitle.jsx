import React from 'react'

export default function MainTitle({title}) {
  return (
    <div className='mainTitle'>
      <span className='shapes'></span>
      <h3>{title}</h3>
      <span className='shapes'></span>
    </div>
  )
}
