import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='bg'>
            <div className='text d-flex flex-column justify-content-center align-items-center'>
            <h1>"Yeah, Science!"</h1>
            <p>— BREAKING BOLD —</p>
        </div>
        <div className='pages'>
            <ul type="none">
                <li>Archive</li>
                <li>News&Gossips</li>
                <li>Reviews</li>
                <li>Cooming Soon</li>
            </ul>
        </div>
        </div>
        
        <div className='logos'>
        <i class="fa-brands fa-facebook-f fa-lg"></i>
        <i class="fa-brands fa-twitter fa-lg"></i>
        <i class="fa-brands fa-instagram fa-lg"></i>
        </div>
    </div>
  )
}

export default Footer