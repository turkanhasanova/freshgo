import React from 'react'
import Card4 from '../Card4'

const Cards3 = () => {
  return (
    <div className='cards4'>
        <div className='container'>
            <div className='bg-img'>
                <h5>Bulletproof list of Best WW2 Movies</h5>
                <button className='btn'>Explore</button>
            </div>
            <div className='films d-flex'>
                <Card4 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/05/end-ww2-poster.jpg"  text="End of WW2" />
                <Card4 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/thin-red-line-poster.jpg"  text="The Bold Red Line"/>
                <Card4 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/fury-poster.jpg"  text="Rage"/>
            </div>
        </div>
    </div>
  )
}

export default Cards3