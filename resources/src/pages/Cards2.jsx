import React from 'react'
import Card2 from '../Card2'
import Card3 from '../Card3'

const Cards2 = () => {
  return (
    <div className='allcards'>  
    <div className='container'>
    <div className='title d-flex align-items-center mb-3'>
        <h5>Cooming Soon</h5>
        <button className='btn'>View More</button>
      </div>
            <div className='cards2'>
            <Card2 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/02/ready-player-one-640x360.jpg" title="Fire Neophyte One" text="Adventure · Cooming soon"/>
            <Card2 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/the-mummy-640x360.jpg" title="The Egyptian Trailer" text="comming soon · movies"/>
            <Card2 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2017/01/superhero-embarrassment-640x360.jpg"  title="Tribe Leauge" text="cooming soon · tv"/>
            </div>
            <div className='cards3'>
            <Card3 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/spiderman-640x360.jpg" title="New Librarian" text="cooming soon · movies"/>
            <Card3 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/winchester-640x360.jpg" title="Wichester" text="cooming soon · movies"/>
            <Card3 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/runaways-640x360.jpg" title="Refugess" text="cooming soon ·tv"/>
            <Card3 photo="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/02/mindhunters-640x360.jpg" title="Brainhunter" text="cooming soon · tv"/>
            </div>
            
        
    </div>
    </div>

  )
}

export default Cards2