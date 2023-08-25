import React from 'react'

const Card = ({photo,genre,title}) => {
  return (
    <div className="card me-3">
  <img src={photo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{genre}</p>
    <h5 className='card-text'>{title}</h5>
  </div>
</div>
  )
}

export default Card