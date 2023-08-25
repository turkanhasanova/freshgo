import React from 'react'

const Card4 = ({photo,text}) => {
  return (
    <div className='card4 me-3'>    
        <div className='photo'><img src={photo} alt="" /></div>
    <div className='text'><h6>{text}</h6></div>
    </div>

  )
}

export default Card4