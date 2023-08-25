import React from 'react'

const Card3 = ({photo,title,text}) => {
  return (
    <div className='card3 me-3 '>
              <div className='photo'>
            <img src={photo} alt="" width={250}/>
        </div>
        <div className='iconandtext d-flex align-items-center me'>
            <div className='icon me-3'>
            <i class="fa-solid fa-play fa-lg d-flex justify-content-center align-items-center"></i>
            </div>
            <div className='text'>
                <h4>{title}</h4>
                <h6>{text}</h6>
            </div>
        </div>
    </div>
  )
}

export default Card3