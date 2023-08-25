import React from 'react'

const Card5 = ({photo,genre,title,rate}) => {
  return (
    
        <div className='col sm-12 md-4'>
            <div class="card5">
  <img src={photo} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{genre}</h5>
    <p class="card-text">{title}</p>
    <h6 class="card-title">IMDB:{rate}</h6>
  </div>
</div>
        </div>

  )
}

export default Card5